import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function StorySubmissionPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    story: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in session storage for later use
    sessionStorage.setItem('storyData', JSON.stringify(formData));
    navigate('/avatar-creation');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--light-pink)] bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" style={{ color: 'var(--deep-purple)' }} />
              <span className="text-sm" style={{ color: 'var(--deep-purple)' }}>Step 1 of 3</span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-4">
              Tell Your <span style={{ color: 'var(--deep-purple)' }}>Story</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Share your story with us, and we'll help bring it to life with a beautiful custom book 
              featuring personalized 3D avatars.
            </p>
          </div>

          {/* Guidance Message */}
          <div className="bg-gradient-to-r from-[var(--light-pink)] to-[var(--sky-blue)] bg-opacity-10 rounded-2xl p-6 mb-8 border border-black/5">
            <h3 className="text-xl mb-2" style={{ color: 'var(--deep-purple)' }}>How It Works</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2.5" style={{ backgroundColor: 'var(--deep-purple)' }} />
                <span>Write or paste your story below (don't worry about perfection - we'll help you polish it)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2.5" style={{ backgroundColor: 'var(--teal)' }} />
                <span>Next, you'll create a custom 3D avatar for your story's main character</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2.5" style={{ backgroundColor: 'var(--bright-pink)' }} />
                <span>Your personalized story book will be ready in 7 business days!</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-black/5 p-8 space-y-8">
            {/* Story Title */}
            <div>
              <label className="block mb-3 text-gray-700">
                Story Title <span className="text-red-500">*</span>
              </label>
              <input 
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--deep-purple)] focus:ring-2 focus:ring-[var(--deep-purple)] focus:ring-opacity-20 transition-all"
                placeholder="e.g., The Adventures of Little Emma"
              />
            </div>

            {/* Story Text */}
            <div>
              <label className="block mb-3 text-gray-700">
                Your Story <span className="text-red-500">*</span>
              </label>
              <textarea 
                required
                value={formData.story}
                onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                rows={12}
                className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--deep-purple)] focus:ring-2 focus:ring-[var(--deep-purple)] focus:ring-opacity-20 transition-all resize-none"
                placeholder="Once upon a time..."
              />
              <p className="text-sm text-gray-500 mt-2">
                Tell us your story in your own words. We recommend 500-2000 words for a perfect story book.
              </p>
            </div>

            {/* Optional Notes */}
            <div>
              <label className="block mb-3 text-gray-700">
                Additional Notes or Instructions <span className="text-gray-400">(Optional)</span>
              </label>
              <textarea 
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--deep-purple)] focus:ring-2 focus:ring-[var(--deep-purple)] focus:ring-opacity-20 transition-all resize-none"
                placeholder="Any special requests or details we should know about?"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button 
                type="submit"
                className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full hover:bg-[var(--deep-purple)] transition-all transform hover:scale-105"
              >
                Continue to Avatar Creation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Progress Indicator */}
          <div className="mt-12">
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-2 rounded-full" style={{ backgroundColor: 'var(--deep-purple)' }} />
              <div className="w-12 h-2 rounded-full bg-gray-200" />
              <div className="w-12 h-2 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
