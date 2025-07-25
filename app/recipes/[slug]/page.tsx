'use client';

import { useState } from 'react';
import { Clock, Heart, Share2, ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface RecipePageProps {
  params: {
    slug: string;
  };
}

export default function RecipePage({ params }: RecipePageProps) {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [saved, setSaved] = useState(false);

  // Sample recipe data - in a real app, this would come from a database
  const recipe = {
    title: 'Coconut Chickpea Curry',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    time: '25 mins',
    story: "This curry was born on a rainy Tuesday when I needed something warm and comforting. The coconut milk makes everything creamy and dreamy, while the chickpeas add that perfect hearty texture. It's like a gentle hug for your soul.",
    ingredients: {
      metric: [
        '400ml coconut milk',
        '240g cooked chickpeas',
        '200g diced tomatoes',
        '150g spinach',
        '1 onion, diced',
        '3 cloves garlic',
        '1 tbsp curry powder',
        '1 tsp turmeric',
        '1 tsp ginger, grated',
        'Salt to taste'
      ],
      imperial: [
        '1⅔ cups coconut milk',
        '1½ cups cooked chickpeas',
        '1 cup diced tomatoes',
        '5 oz spinach',
        '1 onion, diced',
        '3 cloves garlic',
        '1 tbsp curry powder',
        '1 tsp turmeric',
        '1 tsp ginger, grated',
        'Salt to taste'
      ]
    },
    steps: [
      'Heat a large pan over medium heat. Add a splash of oil.',
      'Sauté the diced onion until soft and translucent, about 5 minutes.',
      'Add garlic, ginger, curry powder, and turmeric. Cook for 1 minute until fragrant.',
      'Pour in the diced tomatoes and let them break down for 3-4 minutes.',
      'Add the coconut milk and chickpeas. Bring to a gentle simmer.',
      'Let it bubble away for 10 minutes, stirring occasionally.',
      'Fold in the spinach and cook until wilted, about 2 minutes.',
      'Season with salt and serve over rice or with warm bread.'
    ],
    hapiAdvice: "Eat this when you're feeling scattered or need some grounding. The warm spices and creamy texture work like magic for foggy afternoons. 🌫️"
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
              <Link href="/recipes" className="text-green-900 font-bold">Recipes</Link>
              <Link href="#" className="text-green-700 hover:text-green-900 font-medium">Journal</Link>
              <Link href="/community" className="text-green-700 hover:text-green-900 font-medium">Community</Link>
              <Link href="/shop" className="text-green-700 hover:text-green-900 font-medium">Shop</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <Link 
          href="/recipes"
          className="inline-flex items-center space-x-2 text-green-700 hover:text-green-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Recipes</span>
        </Link>
      </div>

      {/* Recipe Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        {/* Hero Image */}
        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-8">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Recipe Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-green-600">
                <Clock className="w-5 h-5" />
                <span>{recipe.time}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setSaved(!saved)}
                className={`p-2 rounded-full transition-colors ${
                  saved ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600 hover:bg-green-200'
                }`}
              >
                <Heart className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-green-800 mb-4">{recipe.title}</h1>
          
          {/* Story */}
          <div className="bg-white/50 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-green-800 mb-3">Where this dish came from</h2>
            <p className="text-green-700 leading-relaxed">{recipe.story}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-green-800">Ingredients</h2>
                <div className="flex bg-green-100 rounded-full p-1">
                  <button
                    onClick={() => setUnit('metric')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      unit === 'metric' ? 'bg-green-600 text-white' : 'text-green-700'
                    }`}
                  >
                    Metric
                  </button>
                  <button
                    onClick={() => setUnit('imperial')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      unit === 'imperial' ? 'bg-green-600 text-white' : 'text-green-700'
                    }`}
                  >
                    Cups
                  </button>
                </div>
              </div>
              <ul className="space-y-2">
                {recipe.ingredients[unit].map((ingredient, index) => (
                  <li key={index} className="text-green-700 flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-green-800 mb-6">Calm Steps</h2>
            <div className="space-y-4">
              {recipe.steps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-green-700 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hapi's Advice */}
            <div className="bg-green-100 rounded-xl p-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🦫</div>
                <div>
                  <h3 className="font-bold text-green-800 mb-2">Hapi's Advice</h3>
                  <p className="text-green-700">{recipe.hapiAdvice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}