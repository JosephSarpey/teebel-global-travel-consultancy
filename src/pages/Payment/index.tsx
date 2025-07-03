import { usePaystackPayment } from 'react-paystack';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaCcVisa, FaCcMastercard, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

interface PaystackSuccessResponse {
  message: string;
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
}

const PaymentPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const amount = 10000; // Amount in cedis (₵100.00)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const onSuccess = (reference: PaystackSuccessResponse) => {
    console.log('Payment successful:', reference);
    setIsProcessing(false);
    // Redirect to form page after successful payment
    navigate('/document-form');
  };

  const onClose = () => {
    console.log('Payment closed');
    setIsProcessing(false);
  };

  const initializePayment = usePaystackPayment({
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: amount,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone
        }
      ]
    },
    currency: 'GHS',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && phone) {
      setIsProcessing(true);
      initializePayment({
        onSuccess: (reference) => onSuccess(reference as PaystackSuccessResponse),
        onClose: onClose,
      });
    }
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition"
                  placeholder="your@email.com"
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition"
                  placeholder="0244 123 4567"
                  required
                />
              </div>

              {/* Payment Methods with Icons */}
              <div className="pt-2">
                <p className="text-sm font-medium text-gray-700 mb-3">We Accept:</p>
                <div className="flex flex-wrap justify-center items-start gap-8">
                  <div className="flex flex-col items-center">
                    <FaCcVisa className="w-12 h-8 text-[#1A1F71] mb-1" title="Visa" />
                    <span className="text-xs text-gray-600">Visa</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaCcMastercard className="w-12 h-8 text-[#EB001B] mb-1" title="Mastercard" />
                    <span className="text-xs text-gray-600">Mastercard</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaMobileAlt className="w-8 h-8 text-brand mb-1" title="Mobile Money" />
                    <span className="text-xs text-gray-600">Mobile Money</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all mt-4 ${
                  isProcessing ? 'bg-gray-400' : 'bg-brand hover:bg-opacity-90'
                }`}
              >
                {isProcessing ? 'Processing...' : `Pay ₵${(amount / 100).toFixed(2)}`}
              </button>
              
              <div className="flex items-center justify-center gap-2 pt-4">
                <span className="text-xs text-gray-500">Secured by</span>
                <FaShieldAlt className="h-5 w-5 text-brand" title="Secure Payment" />
                <span className="text-xs font-medium text-brand">Paystack</span>
              </div>
            </form>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-xs text-center text-gray-500">
              Your payment is securely processed by Paystack. We don't store your payment details.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
