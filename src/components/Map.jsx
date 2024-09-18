import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const mapboxRef = useRef(null);

  // Latitude e longitude corretas da Tata Consultancy Services
  const novaLatitude = -23.5658791;
  const novaLongitude = -46.652091;

  const markers = [
    {
      coordinates: [novaLongitude, novaLatitude],
      title: "Tata Consultancy Services",
    },
  ];

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      if (mapboxRef.current) {
        mapboxRef.current.resize();
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!mapboxRef.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/leonardo-summer/cluiqvezh002801pbhypi1jnj",
        zoom: screenWidth < 1024 ? 18 : 18,
        center: [novaLongitude, novaLatitude],
      });

      map.on("move", () => {
        const { lng, lat } = map.getCenter();
        const zoom = map.getZoom();
        const pitch = map.getPitch();
        const bearing = map.getBearing();

        console.log(
          `Latitude: ${lat}, Longitude: ${lng}, Zoom: ${zoom}, Pitch: ${pitch}, Bearing: ${bearing}`
        );
      });

      map.scrollZoom.disable();
      map.dragPan.disable();

      markers.forEach((marker) => {
        const el = document.createElement("div");
        el.className = "marker";
        el.setAttribute("aria-label", "Marcador Personalizado");
        el.setAttribute("role", "img");

        let enderecoAtual = marker.title;

        new mapboxgl.Marker(el)
          .setLngLat(marker.coordinates)
          .addTo(map)
          .getElement()
          .addEventListener("click", () => console.log(enderecoAtual));
      });

      mapboxRef.current = map;
    }
  }, [markers, screenWidth]);

  return (
    <section id="address" className="relative">
      <div className="flex relative">
        <div
          id="map"
          className="relative"
          style={{
            width: "100%",
            height: "700px",
            overflow: "hidden",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Map;
