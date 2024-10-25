import React from 'react';
import { Filter, MapPin } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  farm: string;
  price: number;
  image: string;
  location: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Organic Tomatoes',
    farm: 'Green Valley Farm',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80',
    location: 'Nairobi, Kenya'
  },
  {
    id: '2',
    name: 'Free Range Eggs',
    farm: 'Sunrise Poultry',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80',
    location: 'Nakuru, Kenya'
  },
  {
    id: '3',
    name: 'Organic Honey',
    farm: 'Sweet Meadows Apiary',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80',
    location: 'Mombasa, Kenya'
  }
];

const Marketplace = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
      <p className="text-green-600 font-medium">${product.price.toFixed(2)}</p>
      <p className="text-gray-600 mt-1">{product.farm}</p>
      <div className="flex items-center mt-2 text-gray-500">
        <MapPin className="h-4 w-4 mr-1" />
        <span className="text-sm">{product.location}</span>
      </div>
    </div>
  </div>
);

export default Marketplace;