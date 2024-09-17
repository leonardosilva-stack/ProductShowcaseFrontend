import React, { useEffect, useState } from "react";
import { getConfig } from "../services/api";
import parse from "html-react-parser";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await getConfig();
        console.log(response);
        setAboutData(response.data);
      } catch (error) {
        console.error("Error searching for settings: ", error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return <p>Loading...</p>;
  }

  return (
    <section className="container my-10 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="max-w-[600px] order-2 lg:order-1">
          <h1 className="text-3xl text-[#FFB400] font-bold">Sobre</h1>
          <p className="mt-4">{parse(aboutData.aboutText)}</p>
        </div>
        <img
          className="max-w-[600px] h-[360px] mb-10 lg:mb-0 order-1 lg:order-2 object-contain lg:object-cover"
          src={`http://127.0.0.1:8000/storage/${aboutData.image}`}
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
