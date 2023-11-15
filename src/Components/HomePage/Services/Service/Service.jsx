import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, description, img } = service;

  return (
    <div className="md:w-1/4 p-4">
      <div className="shadow-lg h-auto bg-white rounded-lg">
        <img
          src={img}
          alt={name}
          className="w-full h-52 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-700 mt-2">
            {description.slice(0, 100)}
          </p>
          <Link to={`/services/${id}`}>
            <button className="bg-blue-500 text-white font-semibold w-full rounded mt-4 py-2">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
