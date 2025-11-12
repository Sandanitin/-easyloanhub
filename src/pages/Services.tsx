import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  HomeIcon,
  TruckIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ArrowsRightLeftIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline';

interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'home-loan',
      title: 'Home Loan',
      icon: HomeIcon,
      description: 'Affordable home loans with competitive interest rates and flexible tenures.',
      features: [
        'Up to 90% of property value',
        'Interest rates from 8.5% p.a.',
        'Repayment up to 30 years',
        'Special rates for women'
      ]
    },
    {
      id: 'car-loan',
      title: 'Car Loan',
      icon: TruckIcon,
      description: 'Drive home your dream car with our quick-approval auto loans.',
      features: [
        '100% on-road funding',
        'Rates from 7.5% p.a.',
        'Tenure up to 7 years',
        'Quick processing'
      ]
    },
    {
      id: 'personal-loan',
      title: 'Personal Loan',
      icon: CreditCardIcon,
      description: 'Meet your personal needs with our hassle-free loan options.',
      features: [
        'Loan up to ₹40 lakhs',
        'No collateral required',
        'Fast approval',
        'Flexible repayment'
      ]
    },
    {
      id: 'credit-card',
      title: 'Credit Cards',
      icon: CreditCardIcon,
      description: 'Access to a wide range of credit cards with exclusive benefits and rewards.',
      features: [
        'Instant approval',
        'Attractive reward points',
        'Travel benefits',
        'Shopping discounts'
      ]
    },
    {
      id: 'overdraft',
      title: 'Over Draft',
      icon: ArrowTrendingUpIcon,
      description: 'Flexible overdraft facility to meet your short-term financial requirements.',
      features: [
        'Instant access to funds',
        'Pay only for what you use',
        'Competitive interest rates',
        'Easy repayment options'
      ]
    },
    {
      id: 'bt-loan',
      title: 'Balance Transfer',
      icon: ArrowsRightLeftIcon,
      description: 'Transfer your existing loans at lower interest rates to save money.',
      features: [
        'Lower interest rates',
        'Reduced EMIs',
        'Faster loan processing',
        'Top-up facility available'
      ]
    },
    {
      id: 'multiple-loans',
      title: 'Multiple Loans Take Over',
      icon: CurrencyDollarIcon,
      description: 'Consolidate all your existing loans into a single loan with better terms.',
      features: [
        'Single monthly payment',
        'Lower overall interest rate',
        'Simplified repayment',
        'Reduced financial stress'
      ]
    },
    {
      id: 'app-loans',
      title: 'App Loans',
      icon: DevicePhoneMobileIcon,
      description: 'Quick and convenient loan applications through our mobile app with instant approvals.',
      features: [
        'Paperless process',
        'Instant approval',
        'Digital document submission',
        '24/7 availability'
      ]
    },
    {
      id: 'debt-consolidation',
      title: 'Debt Consolidation',
      icon: BuildingLibraryIcon,
      description: 'Combine multiple debts into a single, manageable payment with a lower interest rate.',
      features: [
        'Single monthly payment',
        'Lower interest rates',
        'Simplified finances',
        'Faster debt repayment'
      ]
    },
    {
      id: 'self-employed',
      title: 'Self Employed Loans',
      icon: BuildingOfficeIcon,
      description: 'Specialized loan products designed for self-employed individuals and business owners.',
      features: [
        'Flexible eligibility criteria',
        'Customized repayment options',
        'Minimal documentation',
        'Quick disbursal'
      ]
    },
    {
      id: 'education-loan',
      title: 'Education Loan',
      icon: AcademicCapIcon,
      description: 'Invest in your future with our education loan solutions.',
      features: [
        'Domestic & abroad studies',
        'Loan up to ₹1.5 crore',
        'Moratorium period available',
        'Tax benefits'
      ]
    },
    {
      id: 'business-loan',
      title: 'Business Loan',
      icon: BuildingOfficeIcon,
      description: 'Fuel your business growth with our customized loan products.',
      features: [
        'Up to ₹50 lakhs',
        'Minimal documentation',
        'Quick disbursal',
        'No collateral needed'
      ]
    },
    {
      id: 'loan-against-property',
      title: 'Loan Against Property',
      icon: HomeIcon,
      description: 'Unlock the value of your property for your financial needs.',
      features: [
        'Up to 60% of property value',
        'Long repayment tenure',
        'Low interest rates',
        'Multipurpose usage'
      ]
    },
    {
      id: 'hdfc-life-insurance',
      title: 'HDFC Life Insurance',
      icon: ShieldCheckIcon,
      description: 'Comprehensive life insurance solutions from HDFC Life for your family\'s financial security.',
      features: [
        'Term insurance plans',
        'Investment options',
        'Child plans',
        'Retirement solutions'
      ]
    },
    {
      id: 'kotak-life-insurance',
      title: 'Kotak Life Insurance',
      icon: ShieldCheckIcon,
      description: 'Secure your family\'s future with Kotak Life Insurance products.',
      features: [
        'Protection plans',
        'Savings plans',
        'Unit-linked plans',
        'Pension plans'
      ]
    },
    {
      id: 'star-health-insurance',
      title: 'Star Health Insurance',
      icon: ShieldCheckIcon,
      description: 'Comprehensive health insurance coverage for you and your family.',
      features: [
        'Cashless hospitalization',
        'Wide network of hospitals',
        'Family floater plans',
        'Critical illness coverage'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Our Services | EasyLoanHub</title>
        <meta name="description" content="Explore our range of loan services and financial solutions" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Our Financial Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Comprehensive financial solutions tailored to meet your diverse needs with competitive rates and quick approvals.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  
                  <h4 className="mt-4 font-medium text-gray-900">Key Features:</h4>
                  <ul className="mt-2 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Get Started
                      <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-12 sm:px-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Need help choosing the right financial solution?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our financial experts are here to help you find the perfect solution for your needs.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;