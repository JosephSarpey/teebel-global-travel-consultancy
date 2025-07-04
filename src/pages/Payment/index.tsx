import { useState } from 'react';
import Paystack from '@paystack/inline-js';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaCcVisa, FaCcMastercard, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

// Add Paystack response type
interface PaystackResponse {
  message: string;
  reference: string;
  trans: string;
  status: string;
  transaction: string;
  trxref: string;
}

const PaymentPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const amount = 10000; // 100 GHS in kobo

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaystackPayment = () => {
    const paystack = new Paystack();
    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      amount: amount,
      currency: 'GHS',
      reference: `TEEBEL-${Date.now()}`,  
      firstName: formData.name.split(' ')[0],
      lastName: formData.name.split(' ')[1] || '',
      metadata: {
        custom_fields: [
          {
            display_name: "Mobile Number",
            variable_name: "mobile_number",
            value: formData.phone
          }
        ]
      },
      onSuccess: (response: PaystackResponse) => {
        console.log('Payment successful', response);
        navigate('/document-form');
      },
      onCancel: () => {
        console.log('Payment modal closed');
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    handlePaystackPayment();
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-brand p-6 text-center">
            <h1 className="text-2xl font-bold text-white">Pay A Mandatory GHS100 To Access Application Forms</h1>
            <p className="text-white/90 mt-1">Secure payment powered by Paystack</p>
          </div>
          
          <div className="p-6">
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-center text-blue-800 font-medium">
                Amount to Pay: <span className="text-2xl font-bold">₵{(amount / 100).toFixed(2)}</span>
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand hover:bg-brand/90 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  {loading ? 'Processing...' : 'Pay GHS 100.00'}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-4">
                <FaCcVisa className="w-10 h-6 text-gray-600" />
                <FaCcMastercard className="w-10 h-6 text-gray-600" />
                <FaMobileAlt className="w-6 h-6 text-gray-600" />
              </div>

              <div className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                <FaShieldAlt className="text-brand" />
                Your payment is securely processed by Paystack. We don't store your payment details.
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
