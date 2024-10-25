import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Sustainable Farming Practices',
    category: 'Farming Guide',
    description: 'Learn about sustainable farming methods and their benefits.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Market Price Analysis',
    category: 'Market Insights',
    description: 'Understanding agricultural market trends and pricing strategies.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80'
  }
];

const Resources = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Resources</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

const ResourceCard = ({ resource }: { resource: Resource }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img
      src={resource.image}
      alt={resource.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <div className="flex items-center mb-2">
        <BookOpen className="h-4 w-4 text-green-600 mr-2" />
        <span className="text-sm text-green-600">{resource.category}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
      <p className="text-gray-600 mb-4">{resource.description}</p>
      <button className="flex items-center text-green-600 hover:text-green-700">
        <span>Read More</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  </div>
);

export default Resources;