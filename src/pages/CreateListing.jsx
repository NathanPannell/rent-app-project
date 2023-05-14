import React, { useState } from "react";
import axios from "axios";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    propertyType: "",
    squareFootage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/create-listing", formData);
      alert(response.data.msg);
    } catch (error) {
      console.log(error);
      alert("Error creating listing");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-6 text-center">Create Listing</h1>
      <form
        className="flex flex-col self-center max-w-sm m-auto"
        onSubmit={handleSubmit}
      >
        {/* Name of listing */}
        <input
          className="border-b-2 pb-2 pt-4 !outline-none"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Listing Name"
        />

        {/* Price */}
        <input
          className="border-b-2 pb-2 pt-4 !outline-none"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />

        {/* Location */}
        <input
          className="border-b-2 pb-2 pt-4 !outline-none"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
        />

        {/* Number of bedrooms */}
        <input
          className="border-b-2 pb-2 pt-4 !outline-none"
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          placeholder="Bedrooms"
        />

        {/* Number of bathrooms */}
        <input
          className="border-b-2 pb-2 pt-4 !outline-none"
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          placeholder="Bathrooms"
        />

        {/* Brief text description */}
        <textarea
          className="border-b-2 pb-2 pt-4 !outline-none"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        {/* Property type */}
        <input
          className="border-b-2 pb-2 pt-4 !outline-none"
          type="text"
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          placeholder="Property Type (e.g., Condo, House, Townhouse)"
        />

        {/* Square footage */}
        <input
          className="border-b-2 pb-2 pt-4 !outline-none"
          type="number"
          name="squareFootage"
          value={formData.squareFootage}
          onChange={handleChange}
          placeholder="Square Footage"
        />

        <button
          type="submit"
          className="rounded-full border-2 transition-all border-black bg-black text-white mt-8 p-2 hover:bg-transparent hover:text-black"
        >
          Create Listing
        </button>
      </form>
    </div>
  );
};

export default CreateListing;
