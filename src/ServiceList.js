import React from 'react';

const ServiceList = ({ services, updateService, deleteService }) => {
  return (
    <ul>
      {services.map(service => (
        <li key={service.id}>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
          <button onClick={() => updateService({ ...service, price: service.price + 1 })}>Update Price</button>
          <button onClick={() => deleteService(service.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
