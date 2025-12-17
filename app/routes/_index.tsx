import type { MetaFunction } from "@remix-run/cloudflare";
import { useState } from "react";
import { useLanguage } from "~/hooks/useLanguage";
import { useAudioPlayer } from "~/hooks/useAudioPlayer";
import { sounds } from "~/data/sounds";
import { categoryDefinitions } from "~/data/categories";
import type { Sound } from "~/types/sound";
import type { CategoryId } from "~/types/category";
import clsx from "clsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const meta: MetaFunction = () => {
  return [
    { title: "RA2 Tesla Lock Sound - Download Red Alert 2 Sound Effects for Your Tesla" },
    { name: "description", content: "Browse 96 iconic Red Alert 2 sound effects. Download for free and make your Tesla lock with style!" },
  ];
};

export default function Index() {
  const { language, setLanguage, t } = useLanguage();
  const { currentSound, isPlaying, play, stop } = useAudioPlayer();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<CategoryId[]>([]);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Handle file download
  const handleDownload = async (sound: Sound) => {
    try {
      setDownloadingId(sound.id);
      const response = await fetch(sound.r2Url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = sound.filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setDownloadingId(null);
    }
  };

  // Filter sounds
  const filteredSounds = sounds.filter(sound => {
    const matchesSearch = sound.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sound.filename.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategories.length === 0 ||
      selectedCategories.some(cat => sound.categories.includes(cat));

    return matchesSearch && matchesCategory;
  });

  // Toggle category filter
  const toggleCategory = (categoryId: CategoryId) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="min-h-screen bg-ra2-black">
      {/* Header */}
      <header className="bg-ra2-black-light border-b-2 border-ra2-red sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-ra2-red animate-electric-pulse">
                {t.hero.title}
              </h1>
              <p className="text-ra2-metal text-sm">{t.hero.subtitle}</p>
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'cn' : 'en')}
              className="px-4 py-2 bg-ra2-red hover:bg-ra2-red-dark transition-colors rounded font-bold"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-ra2-black-light to-ra2-black py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <DotLottieReact
              src="/Tesla Glow.lottie"
              loop
              autoplay
              style={{ width: '200px', height: '200px' }}
            />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-ra2-tesla-blue">
            ⚡ {t.site.tagline} ⚡
          </h2>
          <p className="text-lg text-ra2-metal mb-6">{t.hero.description}</p>

          {/* Tesla Glow Animation */}

          {/* Search */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.search.placeholder}
            className="w-full max-w-2xl px-4 py-3 bg-ra2-black-lighter border-2 border-ra2-metal text-white rounded-lg focus:border-ra2-red focus:outline-none"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Categories */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-ra2-black-light p-4 rounded-lg border-2 border-ra2-metal sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-ra2-red">{t.filter.categories}</h3>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {categoryDefinitions.map(category => {
                  const categoryName = language === 'en' ? category.name.en : category.name.cn;
                  const isSelected = selectedCategories.includes(category.id);

                  return (
                    <button
                      key={category.id}
                      onClick={() => toggleCategory(category.id)}
                      className={clsx(
                        "w-full text-left px-3 py-2 rounded transition-colors text-sm",
                        isSelected
                          ? "bg-ra2-red text-white font-bold"
                          : "bg-ra2-black-lighter hover:bg-ra2-metal-dark text-ra2-metal-light"
                      )}
                      style={isSelected ? { backgroundColor: category.color } : undefined}
                    >
                      {categoryName}
                    </button>
                  );
                })}
              </div>
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="w-full mt-4 px-3 py-2 bg-ra2-black-lighter hover:bg-ra2-metal-dark text-ra2-red rounded text-sm"
                >
                  {t.filter.clearAll}
                </button>
              )}
            </div>
          </aside>

          {/* Main Content - Sound Grid */}
          <main className="flex-1">
            <div className="mb-4 text-ra2-metal">
              {t.search.showingResults.replace('{count}', filteredSounds.length.toString())}
            </div>

            {filteredSounds.length === 0 ? (
              <div className="text-center py-12 text-ra2-metal">
                <p className="text-xl">{t.search.noResults}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSounds.map(sound => {
                  const isCurrentlyPlaying = currentSound?.id === sound.id && isPlaying;

                  return (
                    <div key={sound.id} className="relative group">
                      <button
                        onClick={() => isCurrentlyPlaying ? stop() : play(sound)}
                        className={clsx(
                          "w-full bg-ra2-black-light p-4 rounded-lg border-2 transition-all cursor-pointer text-left",
                          isCurrentlyPlaying
                            ? "border-ra2-tesla-blue shadow-tesla-glow"
                            : "border-ra2-metal hover:border-ra2-red"
                        )}
                      >
                        <h4 className="font-bold mb-2 text-white">{sound.displayName}</h4>

                        {/* Category badges */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {sound.categories.slice(0, 3).map(catId => {
                            const cat = categoryDefinitions.find(c => c.id === catId);
                            if (!cat) return null;
                            const catName = language === 'en' ? cat.name.en : cat.name.cn;
                            return (
                              <span
                                key={catId}
                                className="text-xs px-2 py-1 rounded"
                                style={{ backgroundColor: cat.color + '40', color: cat.color }}
                              >
                                {catName}
                              </span>
                            );
                          })}
                        </div>

                        {/* Play/Stop indicator */}
                        <div className="mt-2 text-sm font-bold">
                          {isCurrentlyPlaying ? (
                            <span className="text-ra2-tesla-blue">{t.actions.stop}</span>
                          ) : (
                            <span className="text-ra2-red">{t.actions.play}</span>
                          )}
                        </div>
                      </button>

                      {/* Download button - appears on hover */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(sound);
                        }}
                        disabled={downloadingId === sound.id}
                        className="absolute top-2 right-2 px-3 py-2 bg-ra2-metal hover:bg-ra2-metal-light text-white rounded font-bold transition-all opacity-0 group-hover:opacity-100 z-10 disabled:opacity-50 disabled:cursor-wait"
                        title={downloadingId === sound.id ? "Downloading..." : "Download"}
                      >
                        {downloadingId === sound.id ? "⏳" : "⬇️"}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ra2-black-light border-t-2 border-ra2-red py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-ra2-metal font-bold text-lg">{t.site.footer}</p>
          <p className="text-ra2-metal-dark text-sm mt-2">
            {sounds.length} sounds • Made with ⚡ for Tesla owners
          </p>
        </div>
      </footer>
    </div>
  );
}
