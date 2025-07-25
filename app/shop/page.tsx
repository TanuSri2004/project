'use client';

import { useState } from 'react';
import { Search, Star, Heart, ShoppingCart, Package, Leaf, Shield, Award } from 'lucide-react';
import Link from 'next/link';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [savedItems, setSavedItems] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: 'All Products', icon: '🌿' },
    { id: 'calm-kits', label: 'Calm Kits', icon: '🥣' },
    { id: 'wellness', label: 'Wellness Add-ons', icon: '🧴' },
    { id: 'merch', label: 'Merch', icon: '🧦' },
    { id: 'digital', label: 'Digital', icon: '📥' }
  ];

  const products = [
    {
      id: 'coconut-chickpea-kit',
      name: 'Coconut Chickpea Stew Kit',
      category: 'calm-kits',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$24.99',
      rating: 4.8,
      label: 'Cozy',
      description: 'Everything you need for a warm, comforting meal'
    },
    {
      id: 'morning-ritual-kit',
      name: 'Morning Ritual Kit',
      category: 'calm-kits',
      image: 'https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$32.99',
      rating: 4.9,
      label: 'Energy',
      description: 'Start your day with intention and calm'
    },
    {
      id: 'chamomile-tea-blend',
      name: 'Chamomile Calm Tea',
      category: 'wellness',
      image: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$18.99',
      rating: 4.7,
      label: 'Calm',
      description: 'Soothing blend for peaceful evenings'
    },
    {
      id: 'adaptogen-powder',
      name: 'Stress-Relief Adaptogen Mix',
      category: 'wellness',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$29.99',
      rating: 4.6,
      label: 'Energy',
      description: 'Natural stress support for busy days'
    },
    {
      id: 'hapi-plush',
      name: 'Hapi Capybara Plush',
      category: 'merch',
      image: 'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$34.99',
      rating: 5.0,
      label: "Hapi's Pick",
      description: 'Soft cuddle buddy for ultimate comfort'
    },
    {
      id: 'gentle-living-tee',
      name: 'Gentle Living T-Shirt',
      category: 'merch',
      image: 'https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$28.99',
      rating: 4.5,
      label: 'Cozy',
      description: 'Soft organic cotton with calming message'
    },
    {
      id: 'recipe-ebook',
      name: 'Calm Bowl Recipe Collection',
      category: 'digital',
      image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$12.99',
      rating: 4.8,
      label: 'Energy',
      description: '50+ plant-based recipes for gentle living'
    },
    {
      id: 'mindful-journal',
      name: 'Daily Mindfulness Journal',
      category: 'digital',
      image: 'https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$9.99',
      rating: 4.9,
      label: 'Calm',
      description: 'Digital templates for peaceful reflection'
    }
  ];

  const toggleSave = (productId: string) => {
    setSavedItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const getLabelColor = (label: string) => {
    switch (label) {
      case 'Cozy': return 'bg-amber-200 text-amber-800';
      case 'Energy': return 'bg-green-200 text-green-800';
      case 'Calm': return 'bg-blue-200 text-blue-800';
      case "Hapi's Pick": return 'bg-purple-200 text-purple-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-green-100">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🦫</span>
              </div>
              <span className="text-xl font-bold text-green-800">Hapibara</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/recipes" className="text-green-700 hover:text-green-900 font-medium">Recipes</Link>
              <Link href="#" className="text-green-700 hover:text-green-900 font-medium">Journal</Link>
              <Link href="/community" className="text-green-700 hover:text-green-900 font-medium">Community</Link>
              <Link href="/shop" className="text-green-900 font-bold border-b-2 border-green-600">Shop</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Buy Soft. Live Soft.</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Ritual kits, wellness essentials, and mindful products — all rooted in conscious living.
          </p>
        </div>

        {/* Ethical Values Bar */}
        <div className="bg-white/50 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-700 font-medium">Recyclable</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-700 font-medium">No Chemicals</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-700 font-medium">Cruelty-Free</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-700 font-medium">Made with Kindness</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full border transition-colors flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white border-green-600'
                  : 'bg-white text-green-700 border-green-200 hover:border-green-400'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => toggleSave(product.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                    savedItems.includes(product.id) 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-white/80 text-green-600 hover:bg-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${savedItems.includes(product.id) ? 'fill-current' : ''}`} />
                </button>
                <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${getLabelColor(product.label)}`}>
                  {product.label}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-green-600 ml-1">({product.rating})</span>
                  </div>
                  <span className="text-lg font-bold text-green-800">{product.price}</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{product.name}</h3>
                <p className="text-green-600 text-sm mb-4">{product.description}</p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white/50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-green-800 mb-2">Is everything vegan?</h3>
              <p className="text-green-700 text-sm">Yes! All our products are 100% plant-based and cruelty-free. We believe in gentle living for all beings.</p>
            </div>
            <div>
              <h3 className="font-bold text-green-800 mb-2">How fast do you ship?</h3>
              <p className="text-green-700 text-sm">We ship within 2-3 business days. Most orders arrive within 5-7 days with our standard shipping.</p>
            </div>
            <div>
              <h3 className="font-bold text-green-800 mb-2">Can I subscribe and save?</h3>
              <p className="text-green-700 text-sm">Absolutely! Subscribe to any product and save 15% on every delivery. Cancel anytime, no stress.</p>
            </div>
            <div>
              <h3 className="font-bold text-green-800 mb-2">What if I don't love it?</h3>
              <p className="text-green-700 text-sm">We offer a 30-day happiness guarantee. If you're not completely satisfied, we'll make it right.</p>
            </div>
          </div>
        </div>

        {/* Join the Chill Club Section */}
        <div className="bg-white/50 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="text-4xl">🦫</div>
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to shop soft?</h2>
          <p className="text-green-700 mb-6">
            Join the Chill Club for exclusive discounts, early access to new products, and gentle reminders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
              Join the Club
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}