import { ChevronLeft, RotateCcw } from "lucide-react";

interface AvatarData {
  skinTone: string;
  hairStyle: string;
  hairColor: string;
  clothingStyle: string;
  clothingColor: string;
  faceShape: string;
  eyeColor: string;
}

interface AvatarCreationPageProps {
  avatarData: AvatarData;
  setAvatarData: (data: AvatarData) => void;
  onConfirm: () => void;
  onBack: () => void;
}

export default function AvatarCreationPage({
  avatarData,
  setAvatarData,
  onConfirm,
  onBack,
}: AvatarCreationPageProps) {
  const defaultAvatarData: AvatarData = {
    skinTone: "#f5d1a0",
    hairStyle: "short",
    hairColor: "#3d2314",
    clothingStyle: "casual",
    clothingColor: "#4a90e2",
    faceShape: "oval",
    eyeColor: "#3d2314",
  };

  const skinTones = [
    { name: "Light", value: "#f5d1a0" },
    { name: "Medium", value: "#d4a574" },
    { name: "Tan", value: "#c48e6a" },
    { name: "Deep", value: "#8d5524" },
    { name: "Dark", value: "#5c3317" },
  ];

  const hairColors = [
    { name: "Black", value: "#1a1a1a" },
    { name: "Brown", value: "#3d2314" },
    { name: "Blonde", value: "#f4e7c3" },
    { name: "Red", value: "#a0522d" },
    { name: "Gray", value: "#9e9e9e" },
  ];

  const clothingColors = [
    { name: "Blue", value: "#4a90e2", bg: "bg-[#4a90e2]" },
    { name: "Pink", value: "#FF1493", bg: "bg-[var(--accent-bright-pink)]" },
    { name: "Purple", value: "#6A0DAD", bg: "bg-[var(--accent-deep-purple)]" },
    { name: "Orange", value: "#CC5500", bg: "bg-[var(--accent-burnt-orange)]" },
    { name: "Green", value: "#90EE90", bg: "bg-[var(--accent-light-green)]" },
    { name: "Cyan", value: "#00CED1", bg: "bg-[var(--accent-cyan)]" },
  ];

  const handleReset = () => {
    setAvatarData(defaultAvatarData);
  };

  return (
    <div className="min-h-screen py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Story
        </button>

        <div className="mb-12 text-center">
          <h1 className="mb-4">Create Your Avatar</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Customize your 3D avatar to bring your story character to life. Adjust features to match your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Preview Section */}
          <div>
            <div className="sticky top-8">
              <h3 className="mb-4">Preview</h3>
              <div
                className="aspect-square border border-black/10 bg-secondary flex items-center justify-center overflow-hidden"
                style={{ borderRadius: "var(--radius)" }}
              >
                {/* 3D Avatar Preview - Simplified visual representation */}
                <div className="relative w-48 h-48">
                  {/* Head */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-40 transition-all"
                    style={{
                      backgroundColor: avatarData.skinTone,
                      borderRadius: avatarData.faceShape === "round" ? "50%" : avatarData.faceShape === "square" ? "10%" : "50% 50% 45% 45%",
                    }}
                  >
                    {/* Eyes */}
                    <div className="absolute top-14 left-6 w-6 h-6 rounded-full bg-white">
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                        style={{ backgroundColor: avatarData.eyeColor }}
                      />
                    </div>
                    <div className="absolute top-14 right-6 w-6 h-6 rounded-full bg-white">
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                        style={{ backgroundColor: avatarData.eyeColor }}
                      />
                    </div>
                    
                    {/* Nose */}
                    <div
                      className="absolute top-20 left-1/2 -translate-x-1/2 w-3 h-4"
                      style={{ backgroundColor: avatarData.skinTone, filter: "brightness(0.9)" }}
                    />
                    
                    {/* Mouth */}
                    <div
                      className="absolute top-28 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full"
                      style={{ backgroundColor: avatarData.skinTone, filter: "brightness(0.7)" }}
                    />
                  </div>

                  {/* Hair */}
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-36 transition-all"
                    style={{
                      backgroundColor: avatarData.hairColor,
                      height: avatarData.hairStyle === "long" ? "60px" : avatarData.hairStyle === "short" ? "30px" : "45px",
                      borderRadius: avatarData.hairStyle === "long" ? "50% 50% 0 0" : "50%",
                    }}
                  />

                  {/* Clothing */}
                  <div
                    className="absolute top-36 left-1/2 -translate-x-1/2 w-40 h-32 transition-all"
                    style={{
                      backgroundColor: avatarData.clothingColor,
                      borderRadius: avatarData.clothingStyle === "formal" ? "0" : "10% 10% 40% 40%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h3>Customization</h3>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 border border-black/10 hover:border-black/30 transition-colors"
                style={{ borderRadius: "var(--radius)" }}
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>

            {/* Skin Tone */}
            <div>
              <label className="block mb-3">Skin Tone</label>
              <div className="flex gap-3 flex-wrap">
                {skinTones.map((tone) => (
                  <button
                    key={tone.value}
                    onClick={() => setAvatarData({ ...avatarData, skinTone: tone.value })}
                    className="group relative"
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        avatarData.skinTone === tone.value ? "border-black scale-110" : "border-black/10"
                      }`}
                      style={{ backgroundColor: tone.value }}
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
                      {tone.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hair Style */}
            <div className="pt-4">
              <label className="block mb-3">Hair Style</label>
              <div className="flex gap-3">
                {["short", "medium", "long"].map((style) => (
                  <button
                    key={style}
                    onClick={() => setAvatarData({ ...avatarData, hairStyle: style })}
                    className={`px-6 py-3 border transition-all capitalize ${
                      avatarData.hairStyle === style
                        ? "border-black bg-secondary"
                        : "border-black/10 hover:border-black/30"
                    }`}
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Hair Color */}
            <div>
              <label className="block mb-3">Hair Color</label>
              <div className="flex gap-3 flex-wrap">
                {hairColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setAvatarData({ ...avatarData, hairColor: color.value })}
                    className="group relative"
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        avatarData.hairColor === color.value ? "border-black scale-110" : "border-black/10"
                      }`}
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Clothing Style */}
            <div className="pt-4">
              <label className="block mb-3">Clothing Style</label>
              <div className="flex gap-3">
                {["casual", "formal", "sporty"].map((style) => (
                  <button
                    key={style}
                    onClick={() => setAvatarData({ ...avatarData, clothingStyle: style })}
                    className={`px-6 py-3 border transition-all capitalize ${
                      avatarData.clothingStyle === style
                        ? "border-black bg-secondary"
                        : "border-black/10 hover:border-black/30"
                    }`}
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Clothing Color */}
            <div>
              <label className="block mb-3">Clothing Color</label>
              <div className="flex gap-3 flex-wrap">
                {clothingColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setAvatarData({ ...avatarData, clothingColor: color.value })}
                    className="group relative"
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        avatarData.clothingColor === color.value ? "border-black scale-110" : "border-black/10"
                      }`}
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Face Shape */}
            <div className="pt-4">
              <label className="block mb-3">Face Shape</label>
              <div className="flex gap-3">
                {["oval", "round", "square"].map((shape) => (
                  <button
                    key={shape}
                    onClick={() => setAvatarData({ ...avatarData, faceShape: shape })}
                    className={`px-6 py-3 border transition-all capitalize ${
                      avatarData.faceShape === shape
                        ? "border-black bg-secondary"
                        : "border-black/10 hover:border-black/30"
                    }`}
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    {shape}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-8">
              <button
                onClick={onBack}
                className="flex-1 py-3 border border-black/10 hover:border-black/30 transition-colors"
                style={{ borderRadius: "var(--radius)" }}
              >
                Back
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 py-3 bg-black text-white hover:bg-black/90 transition-colors"
                style={{ borderRadius: "var(--radius)" }}
              >
                Confirm Avatar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
