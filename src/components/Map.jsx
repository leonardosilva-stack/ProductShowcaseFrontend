import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const mapboxRef = useRef(null);

  const novaLatitude = -23.4952108;
  const novaLongitude = -47.4620969;

  let markers = [
    {
      coordinates: [-47.4620969, -23.4952108],
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
      mapboxgl.accessToken =
        "pk.eyJ1IjoibGVvbmFyZG8tc3VtbWVyIiwiYSI6ImNsbzM1OHFwZzBkODgybnA5YTMxbHpudGgifQ.A-8na_KKERKhvCVemm_mug";

      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/leonardo-summer/cluiqvezh002801pbhypi1jnj",
        zoom: screenWidth < 1024 ? 16 : 16,
        center: [
          screenWidth < 1024 ? -47.4620969 : novaLongitude,
          screenWidth < 1024 ? -23.4952108 : novaLatitude,
        ],
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
          .addEventListener("click", () => setEndereco(enderecoAtual));
      });

      mapboxRef.current = map;
    }
  }, [novaLatitude, novaLongitude, markers, screenWidth]);

  return (
    <section className="relative">
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
