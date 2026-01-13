import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

type AvatarConfig = {
  skinTone: string;
  hairStyle: string;
  hairColor: string;
  clothingStyle: string;
  clothingColor: string;
  faceShape: string;
  facialFeature: string;
};

export default function AvatarCreationPage() {
  const navigate = useNavigate();
  const [avatarConfig, setAvatarConfig] = useState<AvatarConfig>({
    skinTone: 'light',
    hairStyle: 'short',
    hairColor: 'brown',
    clothingStyle: 'casual',
    clothingColor: 'blue',
    faceShape: 'round',
    facialFeature: 'default',
  });

  const skinTones = [
    { name: 'Light', value: 'light', color: '#FFE0BD' },
    { name: 'Medium', value: 'medium', color: '#E0AC69' },
    { name: 'Tan', value: 'tan', color: '#C68642' },
    { name: 'Dark', value: 'dark', color: '#8D5524' },
    { name: 'Deep', value: 'deep', color: '#4A2E1A' },
  ];

  const hairStyles = [
    { name: 'Short', value: 'short' },
    { name: 'Medium', value: 'medium' },
    { name: 'Long', value: 'long' },
    { name: 'Curly', value: 'curly' },
    { name: 'Wavy', value: 'wavy' },
    { name: 'Straight', value: 'straight' },
  ];

  const hairColors = [
    { name: 'Black', value: 'black', color: '#000000' },
    { name: 'Brown', value: 'brown', color: '#4A2E1A' },
    { name: 'Blonde', value: 'blonde', color: '#F4D03F' },
    { name: 'Red', value: 'red', color: '#E74C3C' },
    { name: 'Gray', value: 'gray', color: '#95A5A6' },
  ];

  const clothingStyles = [
    { name: 'Casual', value: 'casual' },
    { name: 'Formal', value: 'formal' },
    { name: 'Sport', value: 'sport' },
    { name: 'Dress', value: 'dress' },
  ];

  const clothingColors = [
    { name: 'Blue', value: 'blue', color: 'var(--sky-blue)' },
    { name: 'Red', value: 'red', color: 'var(--soft-red)' },
    { name: 'Green', value: 'green', color: 'var(--light-green)' },
    { name: 'Purple', value: 'purple', color: 'var(--deep-purple)' },
    { name: 'Orange', value: 'orange', color: 'var(--yellow-orange)' },
    { name: 'Pink', value: 'pink', color: 'var(--bright-pink)' },
  ];

  const faceShapes = [
    { name: 'Round', value: 'round' },
    { name: 'Oval', value: 'oval' },
    { name: 'Square', value: 'square' },
    { name: 'Heart', value: 'heart' },
  ];

  const facialFeatures = [
    { name: 'Default', value: 'default' },
    { name: 'Glasses', value: 'glasses' },
    { name: 'Freckles', value: 'freckles' },
    { name: 'Dimples', value: 'dimples' },
  ];

  const resetAvatar = () => {
    setAvatarConfig({
      skinTone: 'light',
      hairStyle: 'short',
      hairColor: 'brown',
      clothingStyle: 'casual',
      clothingColor: 'blue',
      faceShape: 'round',
      facialFeature: 'default',
    });
  };

  const handleConfirm = () => {
    sessionStorage.setItem('avatarConfig', JSON.stringify(avatarConfig));
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--light-pink)] bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" style={{ color: 'var(--deep-purple)' }} />
              <span className="text-sm" style={{ color: 'var(--deep-purple)' }}>Step 2 of 3</span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-4">
              Create Your <span style={{ color: 'var(--deep-purple)' }}>Avatar</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Design a unique 3D avatar that will become the hero of your story. Customize every detail to match your vision perfectly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Avatar Preview */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-black/5 p-12 text-center">
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-[var(--light-pink)] to-[var(--sky-blue)] bg-opacity-10 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    {/* Simple Avatar Representation */}
                    <div className="relative">
                      {/* Head */}
                      <div 
                        className="w-40 h-40 rounded-full mx-auto mb-4"
                        style={{ 
                          backgroundColor: skinTones.find(t => t.value === avatarConfig.skinTone)?.color 
                        }}
                      >
                        {/* Eyes */}
                        <div className="flex gap-8 justify-center pt-16">
                          <div className="w-3 h-3 rounded-full bg-black" />
                          <div className="w-3 h-3 rounded-full bg-black" />
                        </div>
                        {/* Mouth */}
                        <div className="w-8 h-2 rounded-full bg-black mx-auto mt-6" />
                      </div>
                      
                      {/* Hair */}
                      <div 
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-44 h-20 rounded-t-full"
                        style={{ 
                          backgroundColor: hairColors.find(c => c.value === avatarConfig.hairColor)?.color 
                        }}
                      />
                      
                      {/* Body/Clothing */}
                      <div 
                        className="w-48 h-32 rounded-2xl mx-auto"
                        style={{ 
                          backgroundColor: clothingColors.find(c => c.value === avatarConfig.clothingColor)?.color 
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button
                      onClick={resetAvatar}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-all"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset Avatar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Customization Controls */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Skin Tone */}
              <div>
                <label className="block mb-4 text-lg">Skin Tone</label>
                <div className="grid grid-cols-5 gap-3">
                  {skinTones.map((tone) => (
                    <button
                      key={tone.value}
                      onClick={() => setAvatarConfig({ ...avatarConfig, skinTone: tone.value })}
                      className={`aspect-square rounded-2xl border-4 transition-all ${
                        avatarConfig.skinTone === tone.value 
                          ? 'border-[var(--deep-purple)] scale-110' 
                          : 'border-transparent hover:border-gray-200'
                      }`}
                      style={{ backgroundColor: tone.color }}
                      title={tone.name}
                    />
                  ))}
                </div>
              </div>

              {/* Hair Style */}
              <div>
                <label className="block mb-4 text-lg">Hair Style</label>
                <div className="grid grid-cols-3 gap-3">
                  {hairStyles.map((style) => (
                    <button
                      key={style.value}
                      onClick={() => setAvatarConfig({ ...avatarConfig, hairStyle: style.value })}
                      className={`px-4 py-3 rounded-xl border-2 transition-all ${
                        avatarConfig.hairStyle === style.value
                          ? 'border-[var(--deep-purple)] bg-[var(--deep-purple)] text-white'
                          : 'border-gray-200 hover:border-[var(--deep-purple)]'
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Color */}
              <div>
                <label className="block mb-4 text-lg">Hair Color</label>
                <div className="grid grid-cols-5 gap-3">
                  {hairColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setAvatarConfig({ ...avatarConfig, hairColor: color.value })}
                      className={`aspect-square rounded-2xl border-4 transition-all ${
                        avatarConfig.hairColor === color.value
                          ? 'border-[var(--deep-purple)] scale-110'
                          : 'border-transparent hover:border-gray-200'
                      }`}
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Clothing Style */}
              <div>
                <label className="block mb-4 text-lg">Clothing Style</label>
                <div className="grid grid-cols-2 gap-3">
                  {clothingStyles.map((style) => (
                    <button
                      key={style.value}
                      onClick={() => setAvatarConfig({ ...avatarConfig, clothingStyle: style.value })}
                      className={`px-4 py-3 rounded-xl border-2 transition-all ${
                        avatarConfig.clothingStyle === style.value
                          ? 'border-[var(--deep-purple)] bg-[var(--deep-purple)] text-white'
                          : 'border-gray-200 hover:border-[var(--deep-purple)]'
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clothing Color */}
              <div>
                <label className="block mb-4 text-lg">Clothing Color</label>
                <div className="grid grid-cols-6 gap-3">
                  {clothingColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setAvatarConfig({ ...avatarConfig, clothingColor: color.value })}
                      className={`aspect-square rounded-2xl border-4 transition-all ${
                        avatarConfig.clothingColor === color.value
                          ? 'border-[var(--deep-purple)] scale-110'
                          : 'border-transparent hover:border-gray-200'
                      }`}
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Face Shape */}
              <div>
                <label className="block mb-4 text-lg">Face Shape</label>
                <div className="grid grid-cols-2 gap-3">
                  {faceShapes.map((shape) => (
                    <button
                      key={shape.value}
                      onClick={() => setAvatarConfig({ ...avatarConfig, faceShape: shape.value })}
                      className={`px-4 py-3 rounded-xl border-2 transition-all ${
                        avatarConfig.faceShape === shape.value
                          ? 'border-[var(--deep-purple)] bg-[var(--deep-purple)] text-white'
                          : 'border-gray-200 hover:border-[var(--deep-purple)]'
                      }`}
                    >
                      {shape.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Facial Features */}
              <div>
                <label className="block mb-4 text-lg">Facial Features</label>
                <div className="grid grid-cols-2 gap-3">
                  {facialFeatures.map((feature) => (
                    <button
                      key={feature.value}
                      onClick={() => setAvatarConfig({ ...avatarConfig, facialFeature: feature.value })}
                      className={`px-4 py-3 rounded-xl border-2 transition-all ${
                        avatarConfig.facialFeature === feature.value
                          ? 'border-[var(--deep-purple)] bg-[var(--deep-purple)] text-white'
                          : 'border-gray-200 hover:border-[var(--deep-purple)]'
                      }`}
                    >
                      {feature.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm Button */}
              <div className="pt-4">
                <button
                  onClick={handleConfirm}
                  className="w-full inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-4 rounded-full hover:bg-[var(--deep-purple)] transition-all transform hover:scale-105"
                >
                  Confirm Avatar
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12">
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-2 rounded-full" style={{ backgroundColor: 'var(--deep-purple)' }} />
              <div className="w-12 h-2 rounded-full" style={{ backgroundColor: 'var(--deep-purple)' }} />
              <div className="w-12 h-2 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
