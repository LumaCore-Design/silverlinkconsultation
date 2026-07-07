'use client';

import { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import parishData from '@/lib/louisiana_parishes.json';

// List of serviced parish names (matching the GeoJSON NAME property)
const servicedParishes = [
  "Winn",
  "Jackson",
  "La Salle",
  "Grant",
  "Natchitoches",
  "Bienville",
  "Caldwell"
];

interface StaticParishMapProps {
  serviceType?: string;
}

export default function StaticParishMap({ serviceType }: StaticParishMapProps) {
  const router = useRouter();
  const [hoveredParish, setHoveredParish] = useState<{ name: string, x: number, y: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Bounding box for Louisiana (slightly adjusted for better centering)
  const bounds = {
    minLon: -94.2,
    maxLon: -88.7,
    minLat: 28.8,
    maxLat: 33.1
  };

  const width = 800;
  const height = 600;

  // Mobile breakpoint detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simple linear projection to map lat/lon to SVG coordinates
  const project = (lon: number, lat: number) => {
    const x = ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * width;
    const y = height - ((lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * height;
    return { x, y };
  };

  // Process GeoJSON features into SVG paths and calculate serviced bounds
  const { parishPaths, servicedBounds } = useMemo(() => {
    let minX = width, minY = height, maxX = 0, maxY = 0;

    const paths = (parishData.features as any[]).map((feature: any) => {
      const name = feature.properties.NAME;
      const isServiced = servicedParishes.includes(name);
      
      // Handle Polygon and MultiPolygon
      let pathData = '';
      let centerX = 0;
      let centerY = 0;
      let pointsCount = 0;

      const processRing = (ring: any[]) => {
        return ring.map((coord: any, i: number) => {
          const { x, y } = project(coord[0], coord[1]);
          
          // Accumulate center
          centerX += x;
          centerY += y;
          pointsCount++;

          // Update bounds if this parish is serviced
          if (isServiced) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }

          return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
        }).join(' ') + ' Z ';
      };
      
      if (feature.geometry.type === 'Polygon') {
        feature.geometry.coordinates.forEach((ring: any[]) => {
          pathData += processRing(ring);
        });
      } else if (feature.geometry.type === 'MultiPolygon') {
        feature.geometry.coordinates.forEach((polygon: any[]) => {
          polygon.forEach((ring: any[]) => {
            pathData += processRing(ring);
          });
        });
      }

      return {
        id: feature.id || name,
        name,
        path: pathData,
        isServiced,
        center: { x: centerX / pointsCount, y: centerY / pointsCount }
      };
    });

    // Add padding to bounds
    const padding = 120; // Increased padding to zoom out on mobile
    const mobileBounds = {
      x: minX - padding,
      y: minY - padding,
      width: (maxX - minX) + (padding * 2),
      height: (maxY - minY) + (padding * 2)
    };

    return { parishPaths: paths, servicedBounds: mobileBounds };
  }, []);

  // Sort paths to ensure correct rendering order ONCE:
  // Non-serviced parishes in the back, serviced parishes in the front.
  const staticSortedPaths = useMemo(() => {
    return [...parishPaths].sort((a, b) => {
        if (a.isServiced && !b.isServiced) return 1;
        if (!a.isServiced && b.isServiced) return -1;
        return 0;
    });
  }, [parishPaths]);

  const handleParishClick = (parishName: string) => {
    let slug = `${parishName.toLowerCase()}-parish`;
    if (parishName === "La Salle") {
      slug = "la-salle-parish";
    }
    const url = `/location/${slug}`;

    // On mobile, tap to select/show tooltip, tap again to navigate
    if (isMobile) {
        if (hoveredParish?.name === parishName) {
            router.push(url);
        } else {
            const parish = parishPaths.find(p => p.name === parishName);
            if (parish) {
                setHoveredParish({ name: parishName, x: parish.center.x, y: parish.center.y });
            }
        }
    } else {
        router.push(url);
    }
  };

  // Calculate viewBox based on device
  const currentViewBox = isMobile 
    ? `${servicedBounds.x} ${servicedBounds.y} ${servicedBounds.width} ${servicedBounds.height}`
    : `0 0 ${width} ${height}`;

  return (
    <div 
      className="w-full h-full flex items-center justify-center bg-slate-50/50 overflow-hidden relative"
      onClick={() => isMobile && setHoveredParish(null)}
    >
      <svg 
        viewBox={currentViewBox} 
        className="w-full h-full drop-shadow-xl"
        style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}
        onClick={(e) => e.stopPropagation()}
        preserveAspectRatio="xMidYMid meet"
      >
        {staticSortedPaths.map((parish) => (
          <path
            key={parish.id}
            d={parish.path}
            className={`transition-colors duration-150 ease-out ${
              parish.isServiced 
                ? 'cursor-pointer fill-primary-500 stroke-white stroke-2 hover:fill-primary-600 hover:stroke-primary-900 hover:stroke-[3px]' 
                : 'fill-white stroke-slate-300 stroke-1'
            }`}
            onClick={() => parish.isServiced && handleParishClick(parish.name)}
            onMouseEnter={(e) => {
              if (!isMobile && parish.isServiced) {
                setHoveredParish({ name: parish.name, x: parish.center.x, y: parish.center.y });
                // Hack to bring hovered path to front in SVG
                e.currentTarget.parentNode?.appendChild(e.currentTarget);
              }
            }}
            onMouseLeave={() => !isMobile && setHoveredParish(null)}
          />
        ))}
      </svg>

      <AnimatePresence>
        {hoveredParish && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute pointer-events-none bg-slate-900 text-white px-4 py-2 shadow-lg text-sm font-bold z-10 flex items-center justify-center gap-3 max-w-[90%]"
            style={{
              bottom: '20px',
              right: '20px', // Anchor to right
              left: 'auto',  // Reset left
              transform: 'none', // Reset transform
              whiteSpace: 'nowrap'
            }}
          >
             <span className="truncate uppercase tracking-widest">{hoveredParish.name} Parish</span>
             {isMobile && <span className="bg-white/20 px-2 py-0.5 rounded-none text-[10px] uppercase tracking-widest shrink-0">View</span>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
