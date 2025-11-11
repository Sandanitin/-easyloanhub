import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  TruckIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ArrowsRightLeftIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  LightBulbIcon,
  HandThumbUpIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

// Define TypeScript interfaces
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const businessHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' }
];

const services: Service[] = [
  {
    icon: HomeIcon,
    title: 'Home Loans',
    description: 'Make your dream home a reality with our flexible home loan options and competitive interest rates.'
  },
  {
    icon: TruckIcon,
    title: 'Car Loans',
    description: 'Drive away in your dream car with our easy car financing solutions and quick approval process.'
  },
  {
    icon: CreditCardIcon,
    title: 'Personal Loans',
    description: 'Meet your personal financial needs with our hassle-free personal loan services.'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'App Loans',
    description: 'Quick and convenient loan applications through our mobile app with instant approvals.'
  },
  {
    icon: ArrowsRightLeftIcon,
    title: 'Balance Transfer',
    description: 'Transfer your existing loans to us and enjoy lower interest rates and better terms.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Insurance Services',
    description: 'Comprehensive insurance solutions including HDFC Life Insurance, Star Health Insurance, and Kotak Life.'
  }
];

const Home: React.FC = () => {
  
  // Stats data
  const stats: Stat[] = [
    { value: '15+', label: 'Years of Experience' },
    { value: '10,000+', label: 'Happy Customers' },
    { value: '₹500+ Cr', label: 'Loans Disbursed' },
    { value: '98%', label: 'Customer Satisfaction' }
  ];

  // Features
  const features: Feature[] = [
    {
      icon: CheckCircleIcon,
      title: 'Quick Approval',
      description: 'Get loan approval within 24-48 hours with minimal documentation.'
    },
    {
      icon: ChartBarIcon,
      title: 'Low Interest Rates',
      description: 'Enjoy some of the most competitive interest rates in the market.'
    },
    {
      icon: UserGroupIcon,
      title: 'Dedicated Support',
      description: 'Personalized assistance from our financial experts at every step.'
    },
    {
      icon: ShieldCheckIcon,
      title: '100% Secure',
      description: 'Your data is protected with bank-level security measures.'
    }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      quote: "EasyLoanHub made my home loan process incredibly smooth. Their team was professional and guided me at every step.",
      author: "Rahul Sharma",
      role: "Homeowner"
    },
    {
      quote: "I got my car loan approved within 24 hours! The interest rates were better than what other banks offered.",
      author: "Priya Patel",
      role: "Car Owner"
    },
    {
      quote: "The balance transfer service saved me thousands in interest. Highly recommend their services!",
      author: "Amit Kumar",
      role: "Satisfied Customer"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Easy Loan Hub - Fast & Easy Loan Solutions in Hyderabad</title>
        <meta 
          name="description" 
          content="Your trusted financial partner for all loan and insurance needs. We provide personalized solutions with competitive rates." 
        />
        <meta name="keywords" content="personal loans, home loans, car loans, insurance services, loan balance transfer, easy loan hub" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
          <div className="absolute inset-0 bg-[url('/images/digital1.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              Trusted by 10,000+ customers
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Your Journey to</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Financial Freedom</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
              Fast, transparent loan solutions with rates starting at 8.5% and approvals in as little as 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
              >
                Apply Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg"
              >
                Our Services
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose EasyLoanHub?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making your financial journey smooth and successful
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Financial Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of financial products to meet your diverse needs
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <div className="text-center">
                  <Link 
                    to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn more
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-lg font-medium text-blue-600 hover:text-blue-800"
            >
              View all services
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our valued customers
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve Your Financial Goals?</h2>
            <p className="text-xl mb-8">
              Get started with EasyLoanHub today and experience the difference of working with a trusted financial partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="tel:9059719519" 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                9059719519
              </Link>
            </div>
          </div>
        </div>
      </section>
 
    </>
  );
};

export default Home;
