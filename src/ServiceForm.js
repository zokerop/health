import React, { useState } from 'react';

const ServiceForm = ({ addService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      alert('Please fill in all fields');
      return;
    }

    const newService = {
      id: Date.now(),
      name,
      description,
      price: parseFloat(price),
    };
    addService(newService);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Service Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        required 
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default ServiceForm;
