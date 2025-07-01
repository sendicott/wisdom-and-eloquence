import React from 'react';
import { BookOpen, Users, Lightbulb, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: "Classical Foundation",
      description: "Rooted in time-tested educational principles that have shaped great minds for centuries."
    },
    {
      icon: Users,
      title: "Practical Parenting",
      description: "Real-world strategies for implementing classical education in your family's daily life."
    },
    {
      icon: Lightbulb,
      title: "Wisdom & Character",
      description: "Focus on developing both intellectual excellence and moral virtue in children."
    },
    {
      icon: Heart,
      title: "Christian Worldview",
      description: "Integrating faith and learning to nurture the whole child in truth and love."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            About the Book
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive guide that bridges the gap between classical educational theory 
            and practical parenting, offering parents the tools they need to raise children 
            who think clearly, speak eloquently, and live virtuously.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-slate-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6">
                Why This Book Matters
              </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  In an age of educational confusion and cultural upheaval, parents need clear guidance 
                  on how to educate their children well. <em>Wisdom & Eloquence for Parents</em> provides 
                  that guidance by returning to the proven methods of classical education.
                </p>
                <p>
                  This book doesn't just explain what classical education is—it shows parents how to 
                  implement it practically in their homes, regardless of their children's schooling situation. 
                  Whether you're homeschooling, considering classical schools, or simply want to supplement 
                  your child's education, this book offers invaluable insights.
                </p>
                <p>
                  The authors combine decades of experience in classical education with deep understanding 
                  of child development and family dynamics, creating a resource that is both scholarly 
                  and eminently practical.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/wisdom-eloquence.jpg" 
                alt="Original Wisdom and Eloquence book"
                className="w-64 h-auto rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}