import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-serif font-semibold">
                Wisdom & Eloquence for Parents
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              A practical guide to classical Christian education that empowers parents 
              to cultivate wisdom, virtue, and eloquence in their children.
            </p>
          </div>

          {/* Authors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Authors</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Robert Littlejohn</li>
              <li>Charles T. Evans</li>
              <li>
                <a 
                  href="https://www.livesturdy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  Keith A. McCurdy
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://classicalacademicpress.com/products/wisdom-and-eloquence-for-parents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  Classical Academic Press
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://goodteacherbook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  Good Teacher Book
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.livesturdy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  Live Sturdy
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Wisdom & Eloquence for Parents. Published by Classical Academic Press.
          </p>
        </div>
      </div>
    </footer>
  );
}