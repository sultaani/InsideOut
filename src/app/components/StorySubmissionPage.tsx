import { ChevronLeft } from "lucide-react";

interface StorySubmissionPageProps {
  storyData: { title: string; text: string; notes: string };
  setStoryData: (data: { title: string; text: string; notes: string }) => void;
  onContinue: () => void;
  onBack: () => void;
}

export default function StorySubmissionPage({
  storyData,
  setStoryData,
  onContinue,
  onBack,
}: StorySubmissionPageProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (storyData.title && storyData.text) {
      onContinue();
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Home
        </button>

        <div className="mb-12 text-center">
          <h1 className="mb-4">Share Your Story</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us about your story. We'll use this to create a beautifully personalized storybook just for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="title" className="block mb-3">
              Story Title<span className="text-[var(--accent-soft-red)] ml-1">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={storyData.title}
              onChange={(e) => setStoryData({ ...storyData, title: e.target.value })}
              required
              placeholder="Enter your story title"
              className="w-full px-4 py-3 border border-black/10 bg-input-background focus:outline-none focus:border-black/30 transition-colors"
              style={{ borderRadius: "var(--radius)" }}
            />
          </div>

          <div>
            <label htmlFor="text" className="block mb-3">
              Your Story<span className="text-[var(--accent-soft-red)] ml-1">*</span>
            </label>
            <textarea
              id="text"
              value={storyData.text}
              onChange={(e) => setStoryData({ ...storyData, text: e.target.value })}
              required
              rows={12}
              placeholder="Write or paste your story here..."
              className="w-full px-4 py-3 border border-black/10 bg-input-background focus:outline-none focus:border-black/30 transition-colors resize-none"
              style={{ borderRadius: "var(--radius)" }}
            />
          </div>

          <div>
            <label htmlFor="notes" className="block mb-3">
              Additional Notes or Instructions <span className="text-muted-foreground">(Optional)</span>
            </label>
            <textarea
              id="notes"
              value={storyData.notes}
              onChange={(e) => setStoryData({ ...storyData, notes: e.target.value })}
              rows={4}
              placeholder="Any special requests or details we should know?"
              className="w-full px-4 py-3 border border-black/10 bg-input-background focus:outline-none focus:border-black/30 transition-colors resize-none"
              style={{ borderRadius: "var(--radius)" }}
            />
          </div>

          <div className="p-6 bg-secondary border border-black/10" style={{ borderRadius: "var(--radius)" }}>
            <h3 className="mb-2">How We Handle Your Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your story will be professionally formatted and illustrated by our team. We'll create a custom layout that brings your narrative to life with beautiful typography and design. The process typically takes 7 days.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 py-3 border border-black/10 hover:border-black/30 transition-colors"
              style={{ borderRadius: "var(--radius)" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-black text-white hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ borderRadius: "var(--radius)" }}
              disabled={!storyData.title || !storyData.text}
            >
              Continue to Avatar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
