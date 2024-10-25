import React from 'react';
import { Search, Star, Users, ShoppingBag } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-green-600 to-green-400">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
            alt="Farm landscape"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Connect with Local Farmers
          </h1>
          <p className="text-xl text-white mb-8">
            Discover fresh, locally grown produce directly from farmers in your area
          </p>
          
          <div className="bg-white rounded-lg shadow-xl p-2 max-w-2xl mx-auto">
            <div className="flex items-center">
              <Search className="h-6 w-6 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Search for farms or products near you..."
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Star className="h-8 w-8 text-green-600" />}
              title="Top-Rated Farms"
              description="Discover the highest-rated local farms with quality produce and excellent service."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-green-600" />}
              title="Direct Connection"
              description="Connect directly with farmers and build lasting relationships with local producers."
            />
            <FeatureCard
              icon={<ShoppingBag className="h-8 w-8 text-green-600" />}
              title="Fresh Products"
              description="Access fresh, seasonal produce directly from farms to your table."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
    <div className="inline-block p-3 bg-green-50 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;