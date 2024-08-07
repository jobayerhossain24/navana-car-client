import { useEffect, useState } from "react";
// import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";
const Services = () => {
  // const services = useServices();
  const [services, setServices] = useState([]);

  useEffect(() => {
    // fetch("https://navana-car-server.vercel.app/services")
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-4 ">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600"> Services</h3>
        <h2 className="text-5xl mb-6">Our Services Area</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
