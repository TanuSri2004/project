'use client';

import { useState } from 'react';
import { Menu, X, Leaf, Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-green-100">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-green-800">Hapibara</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/recipes" className="text-green-700 hover:text-green-900 font-medium">Recipes</Link>
              <Link href="/community" className="text-green-700 hover:text-green-900 font-medium">Journal</Link>
              <Link href="/community" className="text-green-700 hover:text-green-900 font-medium">Community</Link>
              <Link href="/shop" className="text-green-700 hover:text-green-900 font-medium">Shop</Link>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <Link href="/recipes" className="block text-green-700 hover:text-green-900 font-medium py-2">Recipes</Link>
              <Link href="/community" className="block text-green-700 hover:text-green-900 font-medium py-2">Journal</Link>
              <Link href="/community" className="block text-green-700 hover:text-green-900 font-medium py-2">Community</Link>
              <Link href="/shop" className="block text-green-700 hover:text-green-900 font-medium py-2">Shop</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              The Hapibara Way
            </h1>
            <p className="text-lg text-green-700 mb-8 leading-relaxed">
              Hapibara is a lifestyle brand for gentle living — plant-based food, cozy rituals, and mindful moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/recipes" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors text-center">
                Explore Recipes
              </Link>
              <Link href="/community" className="border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition-colors text-center">
                Read Our Journal
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-green-200 rounded-full flex items-center justify-center">
                <div className="text-6xl">🦫</div>
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-green-300 rounded-full flex items-center justify-center">
                <div className="text-2xl">☕</div>
              </div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                <div className="text-xl">🌿</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hapibara Way Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-16">The Hapibara Way</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-2xl font-bold text-green-800 mb-2">I</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Plant-Based Eating</h3>
              <p className="text-green-700">Comfort food made kind.</p>
            </div>
            
            <div className="text-center p-6 border-x border-green-200">
              <div className="text-2xl font-bold text-green-800 mb-2">II</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Soft Living</h3>
              <p className="text-green-700">Daily rituals, slow mornings, chill evenings.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-2xl font-bold text-green-800 mb-2">III</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Eco-Conscious Choices</h3>
              <p className="text-green-700">Minimal packaging. Local ingredients. Thoughtful products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crafted for Calm Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-16">Crafted for Calm</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-amber-100 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-4xl">🥥</div>
              </div>
              <div className="inline-block bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded-full mb-3">
                COZY
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Coconut Chickpea Stew Kit</h3>
              <p className="text-green-600 text-sm mb-4">Astich from-regan, cats</p>
              <button className="w-full bg-green-100 text-green-700 py-2 rounded-full hover:bg-green-200 transition-colors">
                Add To Gurn
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-green-100 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-4xl">📦</div>
              </div>
              <div className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full mb-3">
                ENERGY
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">What it Means to Eat Soft</h3>
              <p className="text-green-600 text-sm mb-4">Add in meats 3f lmohs</p>
              <button className="w-full bg-green-100 text-green-700 py-2 rounded-full hover:bg-green-200 transition-colors">
                Add a Snade
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-blue-100 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-4xl">🌿</div>
              </div>
              <div className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                CALM
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Hapi Calm Box</h3>
              <p className="text-green-600 text-sm mb-4">Hanvade with pots Or some hing begs</p>
              <button className="w-full bg-green-100 text-green-700 py-2 rounded-full hover:bg-green-200 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Hapi Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-green-200 rounded-full flex items-center justify-center">
                <div className="text-8xl">🦫</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
                <p className="text-sm text-green-700">
                  "Hi, I'm Hapi. I like naps, snacks and long planty baths."
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Meet Hapi</h2>
            <p className="text-lg text-green-700 mb-6">
              I like naps, snacks and long planty baths.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-green-600" />
                <span className="text-green-700">Loves cozy mornings</span>
              </div>
              <div className="flex items-center space-x-3">
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="text-green-700">Plant-based lifestyle advocate</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-green-600">☕</div>
                <span className="text-green-700">Tea ceremony enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Join the Chill Club</h2>
          <p className="text-lg text-green-700 mb-8">
            Get weekly recipes, mindful moments, and gentle reminders delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
              Join Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-green-800" />
                </div>
                <span className="text-xl font-bold">Hapibara</span>
              </div>
              <p className="text-green-200">
                Built by Hapi. Approved by plants.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Explore</h3>
              <ul className="space-y-2 text-green-200">
                <li><Link href="/recipes" className="hover:text-white">Recipes</Link></li>
                <li><Link href="/community" className="hover:text-white">Journal</Link></li>
                <li><Link href="/community" className="hover:text-white">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-green-200">
                <li><Link href="/shop" className="hover:text-white">Calm Kits</Link></li>
                <li><Link href="/shop" className="hover:text-white">Wellness</Link></li>
                <li><Link href="/shop" className="hover:text-white">Merch</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><Link href="/community" className="hover:text-white">Newsletter</Link></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-200 text-sm">
              © 2024 Hapibara. All rights reserved. Made with 🌱 and lots of tea.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}