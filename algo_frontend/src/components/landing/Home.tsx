import { Button } from "@nextui-org/react"
import { Zap, BarChart2, MousePointer } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Algorithmic Trading <br /> Made Simple
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Leverage advanced trading algorithms and copy successful strategies with our automated trading platform.
            Start maximizing your returns today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-gray-800 text-white">Start Copy Trading</Button>
            <Button variant="bordered">Browse Strategies</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold">$2.5B+</h2>
            <p className="text-gray-500">Trading Volume</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-gray-500">Active Traders</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">99.9%</h2>
            <p className="text-gray-500">Uptime</p>
          </div>
        </div>
      </section>

      {/* Trading Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Our Trading Solutions</h2>
          <p className="text-gray-600 text-center mb-12">
            Choose from our range of professional trading tools and services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TradingView Integration */}
            <div className="border rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">TradingView Integration</h3>
              <p className="text-sm text-gray-600 mb-4">
                Seamlessly connect your TradingView charts and execute trades directly from the platform.
              </p>
              <div className="text-2xl font-bold mb-4">
                $49 <span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Real-time data sync
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom indicators
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Automated trading
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  24/7 support
                </li>
              </ul>
              <Button className="w-full bg-black hover:bg-gray-800 text-white">Get Started</Button>
            </div>

            {/* Pine Script Strategies */}
            <div className="border rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Pine Script Strategies</h3>
              <p className="text-sm text-gray-600 mb-4">
                Create a library of custom trading strategies or create your own using Pine Script.
              </p>
              <div className="text-2xl font-bold mb-4">
                $79 <span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Strategy library
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Backtesting tools
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom script editor
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Strategy optimization
                </li>
              </ul>
              <Button className="w-full bg-black hover:bg-gray-800 text-white">Get Started</Button>
            </div>

            {/* MQL Solutions */}
            <div className="border rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">MQL Solutions</h3>
              <p className="text-sm text-gray-600 mb-4">
                Professional MetaTrader integration with custom MQL4/5 expert advisors and indicators.
              </p>
              <div className="text-2xl font-bold mb-4">
                $99 <span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  MT4/MT5 Integration
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom EA development
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Indicator library
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority support
                </li>
              </ul>
              <Button className="w-full bg-black hover:bg-gray-800 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Powerful Trading Features</h2>
          <p className="text-gray-600 text-center mb-12">
            Experience the next generation of algorithmic trading with our cutting-edge features
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-white inline-block">
                  <MousePointer className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">One-Click Trading</h3>
              <p className="text-gray-600">
                Execute trades instantly with our streamlined one-click trading interface. No more complex order forms.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-white inline-block">
                  <BarChart2 className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Metrics</h3>
              <p className="text-gray-600">
                Monitor your trading performance with live updates on key metrics, P&L, and portfolio analytics.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-white inline-block">
                  <Zap className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast Execution</h3>
              <p className="text-gray-600">
                Experience ultra-low latency trade execution with our optimized trading infrastructure.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-black hover:bg-gray-800 text-white">Explore All Features</Button>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Trusted by Traders Worldwide</h2>
          <p className="text-gray-600 text-center mb-12">Join thousands of successful traders using AlgoZ</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold">$2.5B+</h3>
              <p className="text-gray-500">Total Trading Volume</p>
              <p className="text-xs text-gray-400">Processed in 2023</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">50,000+</h3>
              <p className="text-gray-500">Active Traders</p>
              <p className="text-xs text-gray-400">Worldwide</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">94%</h3>
              <p className="text-gray-500">Success Rate</p>
              <p className="text-xs text-gray-400">Profitable strategies</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-500 font-bold">SC</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Chen</h4>
                  <p className="text-sm text-gray-500">Portfolio Manager at Quantum Capital</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">
                AlgoZ has transformed our trading strategy. The automation tools are incredibly powerful and reliable.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-500 font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-bold">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-500">Independent Trader & Self-employed</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">
                The platform's ease of use and advanced features make it my go-to choice for algorithmic trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500">© 2025 AlgoZ Trading Platform. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

