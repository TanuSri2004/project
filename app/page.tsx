'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Leaf, Clock, Heart, Users, ShoppingCart, Star, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="bg-gradient-to-b from-secondary-50 to-white">

      {/* 1️⃣ Hero Banner */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-5xl mb-4">👋</div>
          <h1 className="text-4xl font-bold mb-4">Hi, I’m Hapi – your Capybara buddy for a joyful plant-based life.</h1>
          <p className="text-neutral-600 mb-6">
            Explore recipes that love you back, shop kind stuff, and meet plant-powered people just like you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild><Link href="/recipes">🍽️ Let’s Cook</Link></Button>
            <Button size="lg" asChild><Link href="/shop">🛒 Shop Kind</Link></Button>
            <Button size="lg" variant="outline" asChild><Link href="/community">💬 Join the Fam</Link></Button>
          </div>
        </div>
      </section>

      {/* 2️⃣ Why HapiBara */}
      <section className="py-20 bg-secondary-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">One-Stop Platform for Plant-Based, Purposeful Living 🌱</h2>
          <p className="text-neutral-600 mb-6">
            Whether you're plant-curious or fully vegan, HapiBara is your happy place. From guilt-free recipes and conscious shopping to fun meetups and dating for veggie hearts — we’ve got it all.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
            <span>🧑‍🍳 Eat Good</span>
            <span>🛍️ Shop Kind</span>
            <span>💬 Connect Freely</span>
            <span>🐄 Track Your Kind Impact</span>
          </div>
          <div className="mt-8 text-xl font-semibold">
            🐮 31,942 Animals | 💧 12M Litres Water | 🌳 5,670 Trees
          </div>
        </div>
      </section>

      {/* 3️⃣ Explore HapiBara */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore HapiBara</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              emoji: '🍜', title: 'Recipes & Groceries', desc: 'Cook plant-based meals, watch 15-sec videos, and shop the ingredients in one tap.', href: '/recipes'
            }, {
              emoji: '🧑‍🤝‍🧑', title: 'HapiHive', desc: 'Community events, plant-based friendships, even dating...', href: '/community'
            }, {
              emoji: '🛍️', title: 'Conscious Store', desc: 'Everything you love – just kinder. Skincare, snacks, fashion & more.', href: '/shop'
            }, {
              emoji: '📈', title: 'Your Kindness Meter', desc: 'Track how your lifestyle saves animals, water, and the planet.', href: '/impact'
            }].map((item, idx) => (
              <Card key={idx} className="h-full">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-neutral-600">
                  <p className="mb-4">{item.desc}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={item.href}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ What’s Hot in the Garden */}
      <section className="py-4 bg-primary-100">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-scroll px-4 text-sm font-medium text-primary-800">
            🎥 Viral Recipe: “Spicy Vegan Maggi in 2 mins!” | 🛒 Deal: 20% off oat milk kits! | 🎫 Mumbai Vegan Potluck this Sunday! | 🐾 HapiTip: Almond milk uses 10x less water than dairy!
          </div>
        </div>
      </section>

      {/* 5️⃣ Meet Hapi */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-6xl mb-4">🐾</div>
          <h2 className="text-3xl font-bold mb-4">Meet Hapi – The CapyBara Mascot</h2>
          <p className="text-neutral-600 mb-6">
            I’m not just cute. I’m your accountability buddy, recipe reminder, and mood-booster. I pop up when you need me with tips, jokes, or hugs (digital only 🐾).
          </p>
          <blockquote className="italic">"Save animals. Eat well. Flirt with tofu lovers." 😎</blockquote>
        </div>
      </section>

      {/* 6️⃣ Testimonials */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Users Say 💚</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              quote: "I finally got my meat-loving boyfriend hooked on HapiBara’s Chik'n Shawarma!",
              name: '@PlantKween'
            }, {
              quote: "This is the only platform where I found vegan friends and shampoo in one place.",
              name: 'Ankur S.'
            }, {
              quote: "Love the shopping feature. I build my week’s meals in 5 mins flat.",
              name: 'Neha P.'
            }].map((t, i) => (
              <Card key={i} className="p-6 text-left">
                <p className="italic text-neutral-600 mb-4">“{t.quote}”</p>
                <p className="text-sm font-medium text-neutral-800">– {t.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ Join HapiFam */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join the HapiFam – You In?</h2>
          <p className="mb-6">Start your plant-based journey with us – free, fun, and full of flavor.</p>
          <ul className="mb-6 space-y-2 text-sm">
            <li>✅ Save favorite recipes</li>
            <li>✅ Track your eco impact</li>
            <li>✅ Join events & groups</li>
            <li>✅ Access PlantMatch (beta)</li>
          </ul>
          <Button variant="secondary" size="lg">🟢 Let’s Get Hapi</Button>
        </div>
      </section>

      {/* 8️⃣ Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-inner py-2 flex justify-around border-t z-50">
        <Link href="/" className="text-sm flex items-center gap-1"><Home className="w-4 h-4" />Home</Link>
        <Link href="/recipes" className="text-sm flex items-center gap-1"><Leaf className="w-4 h-4" />Recipes</Link>
        <Link href="/shop" className="text-sm flex items-center gap-1"><ShoppingCart className="w-4 h-4" />Shop</Link>
        <Link href="/community" className="text-sm flex items-center gap-1"><Users className="w-4 h-4" />Community</Link>
        <Link href="/myspace" className="text-sm flex items-center gap-1"><Heart className="w-4 h-4" />My Space</Link>
      </footer>

    </div>
  )
}
