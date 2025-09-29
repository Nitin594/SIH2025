import { useState } from 'react';
import { Heart, GraduationCap, Users, Building, Award, ChevronRight } from 'lucide-react';

export default function AlumniDonationPage() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    graduationYear: '',
    message: ''
  });

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const causes = [
    {
      icon: GraduationCap,
      title: 'Scholarships',
      description: 'Support deserving students with financial aid',
      color: 'bg-blue-500'
    },
    {
      icon: Building,
      title: 'Infrastructure',
      description: 'Enhance campus facilities and learning spaces',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Student Programs',
      description: 'Fund extracurricular activities and events',
      color: 'bg-purple-500'
    },
    {
      icon: Award,
      title: 'Research',
      description: 'Advance innovation and academic research',
      color: 'bg-orange-500'
    }
  ];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount && formData.firstName && formData.lastName && formData.email) {
      alert(`Thank you for your ${donationType} donation of $${amount}!`);
    } else {
      alert('Please fill in all required fields and select an amount.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl font-bold mb-4">Give Back, Make an Impact</h1>
          <p className="text-xl opacity-90">
            Your generosity helps shape the future of our institution and empowers the next generation of leaders.
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-6xl mx-auto px-4 -mt-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$2.5M+</div>
            <div className="text-gray-600">Raised This Year</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">1,200+</div>
            <div className="text-gray-600">Alumni Donors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">450</div>
            <div className="text-gray-600">Scholarships Awarded</div>
          </div>
        </div>
      </div>

      {/* Where Your Donation Goes */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Where Your Donation Makes a Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {causes.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${cause.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{cause.title}</h3>
                <p className="text-gray-600">{cause.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Donation Form */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Make Your Donation</h2>
          
          <div>
            {/* Donation Type */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-4 text-gray-700">Donation Type</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setDonationType('one-time')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                    donationType === 'one-time'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  One-Time
                </button>
                <button
                  type="button"
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                    donationType === 'monthly'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-4 text-gray-700">Select Amount</label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountClick(amount)}
                    className={`py-4 px-6 rounded-lg font-semibold transition-all ${
                      selectedAmount === amount
                        ? 'bg-purple-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-lg"
                />
              </div>
            </div>

            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Your Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none mb-4"
              />
              <input
                type="text"
                name="graduationYear"
                placeholder="Graduation Year (Optional)"
                value={formData.graduationYear}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Optional Message */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-4 text-gray-700">
                Message (Optional)
              </label>
              <textarea
                name="message"
                placeholder="Share why you're giving back..."
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Complete Donation
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Your donation is tax-deductible. You will receive a receipt via email.
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
              JD
            </div>
          </div>
          <blockquote className="text-xl text-gray-700 italic mb-4">
            "Giving back to my alma mater has been one of the most fulfilling experiences. Knowing that my contribution helps students achieve their dreams makes every dollar worth it."
          </blockquote>
          <p className="text-gray-600 font-semibold">- Jane Doe, Class of 2015</p>
        </div>
      </div>
    </div>
  );
}