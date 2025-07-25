'use client';

import { useState } from 'react';
import { Search, Heart, MessageCircle, Share2, Mic, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'journal' | 'stories'>('journal');
  const [savedPosts, setSavedPosts] = useState<string[]>([]);

  const toggleSave = (postId: string) => {
    setSavedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const journalPosts = [
    {
      id: 'capybara-love',
      title: 'Why I Romanticize Capybaras',
      image: 'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=400',
      excerpt: 'These gentle giants teach us about calm living and finding peace in simplicity...',
      readTime: '5 min read',
      author: 'Hapi Team'
    },
    {
      id: 'night-ritual',
      title: 'How I Built a 5-Minute Night Ritual',
      image: 'https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=400',
      excerpt: 'Small evening habits that transformed my sleep and morning energy...',
      readTime: '4 min read',
      author: 'Sarah M.'
    },
    {
      id: 'vegan-parenting',
      title: 'Vegan Parenting in a Non-Vegan World',
      image: 'https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=400',
      excerpt: 'Gentle approaches to raising plant-based kids with confidence and kindness...',
      readTime: '7 min read',
      author: 'Maya L.'
    },
    {
      id: 'slow-mornings',
      title: 'The Art of Slow Mornings',
      image: 'https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=400',
      excerpt: 'How rushing less in the morning changed everything about my day...',
      readTime: '6 min read',
      author: 'Alex K.'
    }
  ];

  const communityStories = [
    {
      id: 'burnout-meals',
      title: 'How Hapibara helped me quit burnout meals',
      author: 'Jessica R.',
      story: 'I used to survive on takeout and energy drinks. Hapibara\'s gentle recipes taught me that nourishing myself could be simple and joyful.',
      image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=300',
      tags: ['Recovery', 'Self-Care']
    },
    {
      id: 'slow-mornings-marriage',
      title: 'Slow mornings saved my marriage',
      author: 'David & Emma',
      story: 'We started waking up 30 minutes earlier to have tea together. No phones, just us and our morning ritual. It changed everything.',
      image: 'https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=300',
      tags: ['Relationships', 'Rituals']
    },
    {
      id: 'plant-based-journey',
      title: 'My gentle transition to plant-based living',
      author: 'Marcus T.',
      story: 'Hapibara showed me that going plant-based doesn\'t have to be all-or-nothing. Small, kind choices led to big changes.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
      tags: ['Plant-Based', 'Journey']
    }
  ];

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
              <Link href="/community" className="text-green-900 font-bold border-b-2 border-green-600">Community</Link>
              <Link href="/shop" className="text-green-700 hover:text-green-900 font-medium">Shop</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Chill Journal & Humans of Hapibara</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Stories, wisdom, and gentle inspiration from our community of calm living enthusiasts.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 border border-green-200">
            <button
              onClick={() => setActiveTab('journal')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'journal' 
                  ? 'bg-green-600 text-white' 
                  : 'text-green-700 hover:text-green-900'
              }`}
            >
              Chill Journal
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'stories' 
                  ? 'bg-green-600 text-white' 
                  : 'text-green-700 hover:text-green-900'
              }`}
            >
              Community Stories
            </button>
          </div>
        </div>

        {/* Chill Journal Tab */}
        {activeTab === 'journal' && (
          <div className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              {journalPosts.map(post => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-green-600">{post.readTime}</span>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => toggleSave(post.id)}
                          className={`p-1 rounded-full transition-colors ${
                            savedPosts.includes(post.id) 
                              ? 'text-red-600' 
                              : 'text-green-600 hover:text-green-800'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${savedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                        </button>
                        <button className="p-1 text-green-600 hover:text-green-800">
                          <MessageCircle className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-green-600 hover:text-green-800">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">{post.title}</h3>
                    <p className="text-green-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-500">by {post.author}</span>
                      <button className="text-green-700 hover:text-green-900 text-sm font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Community Stories Tab */}
        {activeTab === 'stories' && (
          <div className="mb-12">
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
              {communityStories.map(story => (
                <div key={story.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-32 md:h-24 object-cover rounded-xl"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-green-800 mb-2">{story.title}</h3>
                      <p className="text-green-700 mb-3 leading-relaxed">{story.story}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-green-600">— {story.author}</span>
                          <div className="flex space-x-2">
                            {story.tags.map(tag => (
                              <span key={tag} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-green-600 hover:text-green-800">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-green-600 hover:text-green-800">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Your Story Section */}
            <div className="bg-green-100 rounded-2xl p-8 text-center mb-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Share Your Hapibara Story</h2>
              <p className="text-green-700 mb-6">
                How has gentle living changed your life? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <Mic className="w-4 h-4" />
                  <span>Voice Story</span>
                </button>
                <button className="border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition-colors">
                  Write Story
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Join the Chill Club Section */}
        <div className="bg-white/50 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="text-4xl">🦫</div>
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to chill with us?</h2>
          <p className="text-green-700 mb-6">
            Join the Chill Club for weekly stories, gentle reminders, and community love.
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