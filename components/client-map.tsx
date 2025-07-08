"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

// Import dinámico del componente de mapa para renderizado solo en cliente
const MapComponent = dynamic(() => import("./map-component"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full">
      <Skeleton className="h-full w-full rounded-lg" />
    </div>
  ),
});

interface ClientMapProps {
  position?: [number, number];
  zoom?: number;
  height?: string;
  className?: string;
}

export default function ClientMap({
  position = [24.801030189647506, -107.39833926604639],
  zoom = 15,
  height = "400px",
  className = "",
}: ClientMapProps) {
  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <MapComponent position={position} zoom={zoom} scrollWheelZoom={false} />
    </div>
  );
}
