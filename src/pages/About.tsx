import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us - Easy Loan Hub</title>
        <meta name="description" content="Learn more about Easy Loan Hub and our mission to provide the best loan solutions" />
      </Helmet>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Easy Loan Hub</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Easy Loan Hub, we are committed to providing accessible and transparent loan solutions to help you achieve your financial goals. 
              Our mission is to simplify the loan application process and offer competitive rates tailored to your needs.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Fast and easy loan application process</li>
              <li>Competitive interest rates</li>
              <li>Flexible repayment options</li>
              <li>Dedicated customer support</li>
              <li>Secure and confidential service</li>
            </ul>
            
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Get in Touch</h3>
              <p className="mt-2 text-gray-600">
                Have questions? Our team is here to help you with any inquiries about our services.
              </p>
              <Link to="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;