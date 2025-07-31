"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import "../app/dia-chi-cua-hang/storeAddress.css";

interface StoreMapProps {
  storeName: string;
  address: string;
  latitude?: number;
  longitude?: number;
}

export default function StoreMap({
  address,
  storeName,
  latitude = 10.8231,
  longitude = 106.6297,
}: StoreMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps) {
        initializeMap();
      }

      const script = document.createElement("script");
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      const mapOptions: google.maps.MapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      };

      const map = new window.google.maps.Map(mapRef.current, mapOptions);
      mapInstanceRef.current = map;

      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: storeName,
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#EA4335"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(50, 50),
          anchor: new window.google.maps.Point(12, 24),
        },
      });
      markerRef.current = marker;

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div>
            <h3 style="margin: 0 0 5px 0; font-weight: bold; color: #000000;">${address} - ${storeName}</h3>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    };

    loadGoogleMapsScript();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [address, storeName, latitude, longitude]);

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden"
      style={{
        width: "760px",
        height: "100%",
      }}
    >
      <div
        ref={mapRef}
        className="w-full h-full"
        style={{
          minHeight: "400px",
          maxHeight: "400px",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 max-w-xs">
        <div className="place-card flex items-start space-x-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 truncate">
              {storeName} - {address}
            </h3>
            <p className="text-xs text-gray-600 mt-1">{address}</p>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <span className="text-sm font-bold text-gray-600 ml-1">
                  4.7
                </span>
                <span className="text-yellow-400">★★★★☆</span>
              </div>
              <span className="text-xs ml-2 text-[#1a73e8] hover:underline">
                256 bài viết
              </span>
            </div>
          </div>
          <div className="flex-shrink-0 navigate">
            <div className="w-12 h-12 flex items-center justify-center">
              <Link
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  address
                )}`}
                target="_blank"
                className="navigate-link"
              >
                <div className="icon navigate-icon"></div>
                <div className="navigate-text">Chỉ đường</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    google: typeof google;
  }
}
