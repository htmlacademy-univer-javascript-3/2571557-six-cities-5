import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import { ICity } from '../model';

export const useMap = (mapRef: React.MutableRefObject<null>, city: ICity) => {
  const isRenderedRef = useRef(false);
  const [map, setMap] = useState<null | leaflet.Map>(null);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    } else if (isRenderedRef.current) {
      map?.panTo(new leaflet.LatLng(city.location.latitude, city.location.longitude));
    }
  }, [mapRef, city, map]);

  return map;
};
