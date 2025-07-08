"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  position: [number, number];
  zoom: number;
}

export default function MapComponent({ position, zoom }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      mapRef.current &&
      !mapInstanceRef.current
    ) {
      // Import dinámico de Leaflet solo en el cliente
      import("leaflet").then((L: any) => {
        // Fix para los iconos
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });

        // Crear el mapa
        const map = L.map(mapRef.current!).setView(position, zoom);

        // Agregar capa de tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Agregar marcador
        L.marker(position)
          .addTo(map)
          .bindPopup(
            "Samuel Campos y Asociados<br />Juan José Ríos 378 Pte. Culiacán, Sinaloa."
          )
          .openPopup();

        mapInstanceRef.current = map;
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [position, zoom]);

  return (
    <a href="https://maps.app.goo.gl/f2LbL1yxB5xmeFzp9" target="_blank">
      <div
        ref={mapRef}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg"
      />
    </a>
  );
}
