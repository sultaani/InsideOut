import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { CheckCircle2, Home, PlusCircle, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ConfirmationPage() {
  const [avatarConfig, setAvatarConfig] = useState<any>(null);

  useEffect(() => {
    const config = sessionStorage.getItem('avatarConfig');
    if (config) {
      setAvatarConfig(JSON.parse(config));
    }
  }, []);

  const skinTones = [
    { name: 'Light', value: 'light', color: '#FFE0BD' },
    { name: 'Medium', value: 'medium', color: '#E0AC69' },
    { name: 'Tan', value: 'tan', color: '#C68642' },
    { name: 'Dark', value: 'dark', color: '#8D5524' },
    { name: 'Deep', value: 'deep', color: '#4A2E1A' },
  ];

  const hairColors = [
    { name: 'Black', value: 'black', color: '#000000' },
    { name: 'Brown', value: 'brown', color: '#4A2E1A' },
    { name: 'Blonde', value: 'blonde', color: '#F4D03F' },
    { name: 'Red', value: 'red', color: '#E74C3C' },
    { name: 'Gray', value: 'gray', color: '#95A5A6' },
  ];

  const clothingColors = [
    { name: 'Blue', value: 'blue', color: 'var(--sky-blue)' },
    { name: 'Red', value: 'red', color: 'var(--soft-red)' },
    { name: 'Green', value: 'green', color: 'var(--light-green)' },
    { name: 'Purple', value: 'purple', color: 'var(--deep-purple)' },
    { name: 'Orange', value: 'orange', color: 'var(--yellow-orange)' },
    { name: 'Pink', value: 'pink', color: 'var(--bright-pink)' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[var(--light-green)] to-[var(--teal)] mb-6 animate-[bounce_1s_ease-in-out]">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <div className="inline-flex items-center gap-2 bg-[var(--light-pink)] bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" style={{ color: 'var(--deep-purple)' }} />
              <span className="text-sm" style={{ color: 'var(--deep-purple)' }}>Step 3 of 3 - Complete!</span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-4">
              <span style={{ color: 'var(--deep-purple)' }}>Congratulations!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Your custom story book order has been submitted successfully
            </p>
          </div>

          {/* Avatar Display */}
          {avatarConfig && (
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-black/5 p-12 mb-8">
              <h2 className="text-2xl text-center mb-8">Your Custom Avatar</h2>
              <div className="aspect-square max-w-xs mx-auto bg-gradient-to-br from-[var(--light-pink)] to-[var(--sky-blue)] bg-opacity-10 rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Simple Avatar Representation */}
                <div className="relative">
                  {/* Head */}
                  <div 
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                    style={{ 
                      backgroundColor: skinTones.find(t => t.value === avatarConfig.skinTone)?.color 
                    }}
                  >
                    {/* Eyes */}
                    <div className="flex gap-6 justify-center pt-12">
                      <div className="w-2.5 h-2.5 rounded-full bg-black" />
                      <div className="w-2.5 h-2.5 rounded-full bg-black" />
                    </div>
                    {/* Mouth */}
                    <div className="w-6 h-1.5 rounded-full bg-black mx-auto mt-4" />
                  </div>
                  
                  {/* Hair */}
                  <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-16 rounded-t-full"
                    style={{ 
                      backgroundColor: hairColors.find(c => c.value === avatarConfig.hairColor)?.color 
                    }}
                  />
                  
                  {/* Body/Clothing */}
                  <div 
                    className="w-40 h-28 rounded-2xl mx-auto"
                    style={{ 
                      backgroundColor: clothingColors.find(c => c.value === avatarConfig.clothingColor)?.color 
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Confirmation Message */}
          <div className="bg-gradient-to-r from-[var(--light-pink)] to-[var(--light-green)] bg-opacity-10 rounded-2xl p-8 mb-8 border border-black/5 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--deep-purple)' }} />
              <h3 className="text-2xl" style={{ color: 'var(--deep-purple)' }}>Production Timeline</h3>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--deep-purple)' }} />
            </div>
            <p className="text-3xl mb-2">
              We will have your story book ready in <span style={{ color: 'var(--deep-purple)' }}>7 business days</span>
            </p>
            <p className="text-gray-600 mt-4">
              You'll receive an email confirmation shortly with your order details and tracking information.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl border border-black/5 p-8 mb-8">
            <h3 className="text-xl mb-6 text-center">What Happens Next?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--bright-pink)' }}>
                  <span className="text-white text-sm">1</span>
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Order Confirmation</p>
                  <p className="text-gray-600 text-sm">You'll receive an email with your order details and receipt</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--teal)' }}>
                  <span className="text-white text-sm">2</span>
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Production Begins</p>
                  <p className="text-gray-600 text-sm">Our team will start crafting your custom story book</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--yellow-orange)' }}>
                  <span className="text-white text-sm">3</span>
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Quality Check</p>
                  <p className="text-gray-600 text-sm">We'll review every detail to ensure perfection</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--deep-purple)' }}>
                  <span className="text-white text-sm">4</span>
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Shipping & Delivery</p>
                  <p className="text-gray-600 text-sm">Your story book will be carefully packaged and shipped to you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all"
            >
              <Home className="w-5 h-5" />
              Return to Home
            </Link>
            <Link
              to="/story-submission"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-[var(--deep-purple)] transition-all transform hover:scale-105"
            >
              <PlusCircle className="w-5 h-5" />
              Start a New Story
            </Link>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12">
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-2 rounded-full" style={{ backgroundColor: 'var(--deep-purple)' }} />
              <div className="w-12 h-2 rounded-full" style={{ backgroundColor: 'var(--deep-purple)' }} />
              <div className="w-12 h-2 rounded-full" style={{ backgroundColor: 'var(--deep-purple)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Confetti Effect (Optional decorative elements) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: 'var(--bright-pink)', animationDelay: '0s' }} />
        <div className="absolute top-32 right-16 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'var(--teal)', animationDelay: '0.2s' }} />
        <div className="absolute top-40 left-1/4 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'var(--yellow-orange)', animationDelay: '0.4s' }} />
        <div className="absolute top-52 right-1/3 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'var(--deep-purple)', animationDelay: '0.6s' }} />
        <div className="absolute top-28 right-1/4 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'var(--light-green)', animationDelay: '0.8s' }} />
      </div>
    </div>
  );
}
