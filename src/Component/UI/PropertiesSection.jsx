import { useState } from "react";
export default function PropertiesSection() {
  const [category, setCategory] = useState("All");
  const properties = [
    { type: "House", name: "Modern Family House", price: "$1,250,000", location: "Beverly Hills, CA", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { type: "Apartment", name: "Luxury Apartment", price: "$850,000", location: "New York, NY", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
    { type: "Villa", name: "Beautiful Villa", price: "$2,500,000", location: "Miami, FL", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811" },
    { type: "Commercial", name: "Office Building", price: "$1,800,000", location: "Chicago, IL", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2" },
    { type: "Land", name: "Premium Land", price: "$500,000", location: "Texas, USA", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
    { type: "House", name: "Luxury House", price: "$1,600,000", location: "Los Angeles, CA", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" }
  ];
  const filteredProperties = category === "All" ? properties : properties.filter((item) => item.type === category);
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center">
        <p className="text-blue-600 font-semibold">Premium Properties</p>
        <h2 className="text-4xl font-bold mt-2">For A Better Lifestyle</h2>
      </div>
      <div className="flex justify-center gap-3 sm:gap-6 mt-10 flex-wrap">
        {["All", "House", "Apartment", "Villa", "Commercial", "Land"].map((item) => (
          <button key={item} onClick={() => setCategory(item)} className={`px-5 py-2 rounded-full cursor-pointer ${category === item ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}>
            {item}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredProperties.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
            <div className="p-5">
              <p className="text-blue-600 text-sm">{item.type}</p>
              <h3 className="text-xl font-bold mt-1">{item.name}</h3>
              <p className="text-gray-500 mt-2">{item.location}</p>
              <p className="text-xl font-bold mt-4">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}