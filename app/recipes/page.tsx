'use client';

import { useState } from 'react';
import { Search, Clock, Heart, Mic } from 'lucide-react';
import Link from 'next/link';

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filters = [
    { id: 'quick', label: '<15 mins' },
    { id: 'simple', label: '5 Ingredients' },
    { id: 'cozy', label: 'Cozy' },
    { id: 'energy', label: 'Energy Boost' }
  ];

  const recipes = [
    {
      id: 'coconut-chickpea-curry',
      title: 'Coconut Chickpea Curry',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
      time: '25 mins',
      tags: ['cozy'],
      description: 'Warm, creamy comfort in a bowl'
    },
    {
      id: 'green-smoothie-bowl',
      title: 'Green Smoothie Bowl',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      time: '10 mins',
      tags: ['quick', 'energy'],
      description: 'Fresh energy for gentle mornings'
    },
    {
      id: 'overnight-oats',
      title: 'Vanilla Overnight Oats',
      image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=400',
      time: '5 mins',
      tags: ['quick', 'simple'],
      description: 'Prep tonight, enjoy tomorrow'
    },
    {
      id: 'mushroom-risotto',
      title: 'Creamy Mushroom Risotto',
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400',
      time: '35 mins',
      tags: ['cozy'],
      description: 'Slow-stirred comfort food'
    },
    {
      id: 'energy-balls',
      title: 'Chocolate Energy Balls',
      image: 'https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=400',
      time: '15 mins',
      tags: ['quick', 'simple', 'energy'],
      description: 'Sweet little pick-me-ups'
    },
    {
      id: 'golden-latte',
      title: 'Golden Turmeric Latte',
      image: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=400',
      time: '8 mins',
      tags: ['quick', 'simple', 'cozy'],
      description: 'Warm golden hug in a mug'
    }
  ];

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilters = activeFilters.length === 0 || 
      activeFilters.some(filter => recipe.tags.includes(filter));
    return matchesSearch && matchesFilters;
  });

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
              <Link href="/recipes" className="text-green-900 font-bold border-b-2 border-green-600">Recipes</Link>
              <Link href="#" className="text-green-700 hover:text-green-900 font-medium">Journal</Link>
              <Link href="/community" className="text-green-700 hover:text-green-900 font-medium">Community</Link>
              <Link href="/shop" className="text-green-700 hover:text-green-900 font-medium">Shop</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Comfort in a Bowl</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Minimalist, joyful recipes for gentle living. No stress, no perfection — just calm cooking.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="flex items-center bg-white rounded-full border border-green-200 p-2 max-w-md mx-auto">
              <Search className="w-5 h-5 text-green-600 ml-3" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-green-800"
              />
              <button className="p-2 text-green-600 hover:text-green-800">
                <Mic className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  activeFilters.includes(filter.id)
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-green-700 border-green-200 hover:border-green-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRecipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-green-600" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{recipe.title}</h3>
                <p className="text-green-600 text-sm mb-4">{recipe.description}</p>
                <Link 
                  href={`/recipes/${recipe.id}`}
                  className="w-full bg-green-100 text-green-700 py-2 px-4 rounded-full hover:bg-green-200 transition-colors text-center block"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Suggest Recipe Section */}
        <div className="bg-white/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Have a Calm Bowl Idea?</h2>
          <p className="text-green-700 mb-6">
            Share your favorite comfort recipe with the Hapibara community
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
            Submit Your Recipe
          </button>
        </div>
      </div>
    </div>
  );
}