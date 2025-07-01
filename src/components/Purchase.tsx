import { ExternalLink, Star, BookOpen, Gift } from 'lucide-react';

export default function Purchase() {
  return (
    <section id="purchase" className="py-20 bg-gradient-to-br from-slate-800 to-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Get Your Copy Today
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Start your journey toward implementing classical education principles in your family. 
            Available now from Classical Academic Press.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Book Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-amber-400 mr-3" />
              <h3 className="text-2xl font-serif font-bold text-white">Book Details</h3>
            </div>
            
            <div className="space-y-4 text-slate-300">
              <div className="flex justify-between">
                <span className="font-semibold">Publisher:</span>
                <span>Classical Academic Press</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Authors:</span>
                <span>Littlejohn, Evans & McCurdy</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Format:</span>
                <span>Paperback & Digital</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Focus:</span>
                <span>Classical Christian Education</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-500/20 rounded-lg border border-amber-400/30">
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-amber-200 font-semibold">Perfect For:</span>
              </div>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>• Parents seeking classical education guidance</li>
                <li>• Homeschooling families</li>
                <li>• Educators and school leaders</li>
                <li>• Anyone interested in virtue-based learning</li>
              </ul>
            </div>
          </div>

          {/* Purchase Options */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Official Publisher</h3>
                <p className="text-slate-600">Get it directly from Classical Academic Press</p>
              </div>
              
              <a 
                href="https://classicalacademicpress.com/products/wisdom-and-eloquence-for-parents"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Order from Classical Academic Press
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Gift className="h-6 w-6 text-amber-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Also Available At:</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-slate-300">
                  <p className="font-semibold text-amber-200">Online Retailers:</p>
                  <ul className="space-y-1 mt-2">
                    <li>• Amazon</li>
                    <li>• Barnes & Noble</li>
                    <li>• Christian Book</li>
                  </ul>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold text-amber-200">Local Stores:</p>
                  <ul className="space-y-1 mt-2">
                    <li>• Christian bookstores</li>
                    <li>• Educational suppliers</li>
                    <li>• Classical schools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500/20 to-slate-500/20 rounded-2xl p-8 border border-amber-400/30">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Transform Your Family's Educational Journey
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join thousands of parents who are discovering the joy and effectiveness of classical education. 
              Start building wisdom and eloquence in your children today.
            </p>
            <a 
              href="https://classicalacademicpress.com/products/wisdom-and-eloquence-for-parents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
              <ExternalLink className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}