import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
 

const Contact: React.FC = () => {
  type ContactFormInputs = {
    name: string;
    email: string;
    phone: string;
    loanType: string;
    loanAmount: string;
    message: string;
  };

  const loanTypes = [
    'Home Loan',
    'Car Loan',
    'Personal Loan',
    'Business Loan',
    'Education Loan',
    'Loan Against Property',
    'Balance Transfer',
    'Other'
  ];

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    const to = 'easyloanhub99@gmail.com';
    const subject = encodeURIComponent(`[Loan Enquiry] ${data.loanType} - ${data.name}`);
    const body = encodeURIComponent(
      `Loan Enquiry Details:\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Loan Type: ${data.loanType}\n` +
      `Loan Amount: ${data.loanAmount || 'Not specified'}\n\n` +
      `Message:\n${data.message}`
    );
    const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Our Office',
      details: ['Balnagar, Kukatpally', 'Hyderabad, Telangana 500072']
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: ['+91 90597 19519', 'Mon-Sat: 9:00 AM - 7:00 PM']
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: ['✉ easyloanhub99@gmail.com', 'response within 24 hours']
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Monday to Friday: 9:00 AM to 7:00 PM', 'Saturday: 11:00 AM to 6:00 PM', 'Sunday: 11:00 AM to 3:00 PM']
    }
  ];

  // Thank-you screen removed; email client will handle sending

  return (
    <div>
      <Helmet>
        <title>Contact Us - Get in Touch | EasyLoanHub</title>
        <meta 
          name="description"
          content="Contact our loan experts for personalized financial solutions. Quick response guaranteed." 
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Need a Loan?</span>
              <span className="block text-blue-100 text-2xl sm:text-3xl mt-4">We're Here to Help</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Get in touch with our loan experts today. Quick approvals, competitive rates, and personalized service.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Quick Loan Enquiry</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get a Call Back from Our Loan Experts
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Fill out the form below and our financial advisor will contact you within 30 minutes.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600 mr-2" />
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Lowest Interest Rates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Quick Loan Approval</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Flexible Repayment Options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Minimal Documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Expert Financial Guidance</span>
                    </li>
                  </ul>
                </div>

                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <info.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="mt-1 text-base text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Google Maps Embed */}
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <h3 className="text-lg font-medium text-gray-900 p-4 border-b border-gray-200">Our Location</h3>
                  <div className="p-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.274160928943!2d78.3914453752023!3d17.44754008342103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91622e4aa38b%3A0x7d851232ca913f3d!2sBalnagar%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Easy Loan Hub Location"
                    ></iframe>
                    <div className="p-3 text-center">
                      <a 
                        href="https://maps.app.goo.gl/VXFUzmDUK4QaZBfN9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <MapPinIcon className="h-5 w-5 mr-1" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10 border border-gray-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            id="name"
                            type="text"
                            className={`focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            placeholder="John Doe"
                            {...register('name', { required: 'Name is required' })}
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            id="email"
                            type="email"
                            className={`focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            placeholder="you@example.com"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                              },
                            })}
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            id="phone"
                            type="tel"
                            className={`focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            placeholder="+91 98765 43210"
                            {...register('phone', {
                              required: 'Phone number is required',
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Please enter a valid 10-digit phone number',
                              },
                            })}
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="loanType" className="block text-sm font-medium text-gray-700">
                          Loan Type <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <select
                            id="loanType"
                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md"
                            {...register('loanType', { required: 'Please select a loan type' })}
                          >
                            <option value="">Select Loan Type</option>
                            {loanTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          {errors.loanType && (
                            <p className="mt-1 text-sm text-red-600">{errors.loanType.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
                        Required Loan Amount (₹)
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">₹</span>
                        </div>
                        <input
                          type="text"
                          id="loanAmount"
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="5,00,000"
                          {...register('loanAmount')}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="currency" className="sr-only">Currency</label>
                          <span className="h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md">
                            INR
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Tell us about your requirements <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          rows={4}
                          className={`shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                          placeholder="Please provide details about your loan requirements, including purpose, employment details, and any other relevant information."
                          {...register('message', { required: 'Please provide details about your requirements' })}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        Get Free Consultation
                        <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
                      </button>
                      <p className="mt-2 text-center text-xs text-gray-500">
                        We respect your privacy. Your information will not be shared with third parties.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some common questions we receive. Don't see your question? Contact us directly!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How quickly can you start a project?',
                answer: 'We can typically begin new projects within 1-2 weeks of contract signing, depending on project complexity and our current workload.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable to meet your needs and budget.'
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We have experience across multiple industries including IT, finance, healthcare, retail, education, and government sectors.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer comprehensive support and maintenance services for all our solutions to ensure long-term success and optimal performance.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;