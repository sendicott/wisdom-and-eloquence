import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Classical Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.60), rgba(15, 23, 42, 0.45)), url('/library.jpg')`
        }}
      ></div>
      
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="order-2 lg:order-2 w-full flex flex-col items-end">
            <div className="mb-6 w-full flex">
              <span className="inline-block px-4 py-2 bg-amber-100/10 border border-amber-200/20 rounded-full text-amber-200 text-sm font-medium tracking-wide uppercase backdrop-blur-sm">
                Classical Christian Education
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-8 leading-tight w-full">
              <span className="block w-full">Wisdom</span>
              <span className="block w-full text-amber-300">&amp; Eloquence</span>
              <span className="block w-full text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-300 font-normal mt-2">
                for Parents
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl ml-auto font-light">
              A timeless guide to classical Christian education that empowers parents to cultivate 
              wisdom, virtue, and eloquence in their children through proven principles and thoughtful practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full">
              <a 
                href="https://classicalacademicpress.com/products/wisdom-and-eloquence-for-parents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-amber-500"
              >
                Order from Classical Academic Press
              </a>
              <button 
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-slate-300 text-slate-200 hover:bg-slate-200 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                Discover More
              </button>
            </div>

            <div className="text-slate-300 text-sm space-y-1 w-full">
              <p className="font-medium">Robert Littlejohn • Charles T. Evans • Keith A. McCurdy</p>
              <p className="text-slate-400">Published by Classical Academic Press</p>
            </div>
          </div>

          <div className="hidden"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-amber-300 hover:text-amber-200 transition-colors p-2"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}