import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useState, useEffect } from "react";
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
    { name: "description", content: "Browse 404 iconic Red Alert 2 sound effects. Download for free and make your Tesla lock with style!" },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  try {
    // Check if Cloudflare context is available (it won't be in dev mode with vite:dev)
    if (!context?.cloudflare?.env?.SOUND_RANKINGS) {
      console.warn("KV namespace not available - running without vote data");
      return json({ votesMap: {} });
    }

    const kv = context.cloudflare.env.SOUND_RANKINGS;

    // Fetch votes for all sounds
    const votesPromises = sounds.map(async (sound) => {
      const key = `vote:${sound.id}`;
      const votes = await kv.get(key);
      return {
        soundId: sound.id,
        votes: votes ? parseInt(votes, 10) : 0,
      };
    });

    const allVotes = await Promise.all(votesPromises);

    // Create a map for easier lookup
    const votesMap: Record<number, number> = {};
    allVotes.forEach(({ soundId, votes }) => {
      votesMap[soundId] = votes;
    });

    return json({ votesMap });
  } catch (error) {
    console.error("Loader error:", error);
    return json({ votesMap: {} });
  }
}

export default function Index() {
  const { votesMap } = useLoaderData<typeof loader>();
  const { language, setLanguage, t } = useLanguage();
  const { currentSound, isPlaying, play, stop } = useAudioPlayer();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const voteFetcher = useFetcher();

  // Local state for optimistic updates
  const [localVotes, setLocalVotes] = useState<Record<number, number>>(votesMap);

  // Update local votes when loader data changes
  useEffect(() => {
    setLocalVotes(votesMap);
  }, [votesMap]);

  // Handle vote with optimistic update
  const handleVote = async (soundId: number) => {
    // Optimistic update
    setLocalVotes(prev => ({
      ...prev,
      [soundId]: (prev[soundId] || 0) + 1,
    }));

    // Submit vote to backend
    const formData = new FormData();
    formData.append("soundId", soundId.toString());
    voteFetcher.submit(formData, { method: "POST", action: "/api/vote" });
  };

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

    const matchesCategory = selectedCategory === null ||
      sound.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  // Calculate top 20 sounds by votes
  const topRankedSounds = [...sounds]
    .map(sound => ({
      ...sound,
      votes: localVotes[sound.id] || 0,
    }))
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 20);

  // Toggle category filter (single selection)
  const toggleCategory = (categoryId: CategoryId) => {
    setSelectedCategory(prev => prev === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-ra2-black">
      {/* Header */}
      <header className="bg-ra2-black-light border-b-2 border-ra2-red sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-ra2-red animate-electric-pulse truncate">
                {t.hero.title}
              </h1>
              <p className="text-ra2-metal text-xs sm:text-sm truncate">{t.hero.subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden px-3 py-2 bg-ra2-metal hover:bg-ra2-metal-light transition-colors rounded font-bold text-sm"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </button>
              <button
                onClick={() => setLanguage(language === 'en' ? 'cn' : 'en')}
                className="px-3 sm:px-4 py-2 bg-ra2-red hover:bg-ra2-red-dark transition-colors rounded font-bold text-sm whitespace-nowrap"
              >
                {language === 'en' ? '中文' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-ra2-black-light to-ra2-black py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <DotLottieReact
              src="/Tesla Glow.lottie"
              loop
              autoplay
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-ra2-tesla-blue px-2">
            ⚡ {t.site.tagline} ⚡
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-ra2-metal mb-4 md:mb-6 px-2">{t.hero.description}</p>

          {/* Search */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.search.placeholder}
            className="w-full max-w-2xl px-3 sm:px-4 py-2 sm:py-3 bg-ra2-black-lighter border-2 border-ra2-metal text-white rounded-lg focus:border-ra2-red focus:outline-none text-sm sm:text-base"
          />
        </div>
      </section>

      {/* Rankings Section */}
      <section className="bg-ra2-black-light border-y-2 border-ra2-metal py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-ra2-tesla-blue">
              🏆 {t.ranking.title}
            </h2>
            <p className="text-ra2-metal text-sm md:text-base">{t.ranking.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {topRankedSounds.map((sound, index) => {
              const isCurrentlyPlaying = currentSound?.id === sound.id && isPlaying;

              return (
                <div
                  key={sound.id}
                  className={clsx(
                    "bg-ra2-black p-3 rounded border-2 transition-all",
                    index < 3 ? "border-ra2-tesla-blue" : "border-ra2-metal"
                  )}
                >
                  <div className="flex items-start gap-2">
                    <div className={clsx(
                      "text-xl font-bold flex-shrink-0",
                      index === 0 ? "text-yellow-400" : index === 1 ? "text-gray-300" : index === 2 ? "text-orange-400" : "text-ra2-metal"
                    )}>
                      #{index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <button
                        onClick={() => isCurrentlyPlaying ? stop() : play(sound)}
                        className="text-left w-full"
                      >
                        <h4 className="font-bold text-white text-sm truncate hover:text-ra2-red transition-colors">
                          {sound.displayName}
                        </h4>
                      </button>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-ra2-tesla-blue text-sm font-bold">
                          ⚡ {sound.votes} {t.ranking.votes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        {/* Mobile Category Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="fixed left-0 top-0 bottom-0 w-64 bg-ra2-black-light border-r-2 border-ra2-red overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-ra2-red">{t.filter.categories}</h3>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-2 py-1 text-ra2-metal hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-2">
                  {categoryDefinitions.map(category => {
                    const categoryName = language === 'en' ? category.name.en : category.name.cn;
                    const isSelected = selectedCategory === category.id;

                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          toggleCategory(category.id);
                          setIsMobileMenuOpen(false);
                        }}
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
                {selectedCategory !== null && (
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full mt-4 px-3 py-2 bg-ra2-black-lighter hover:bg-ra2-metal-dark text-ra2-red rounded text-sm"
                  >
                    {t.filter.clearAll}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4 lg:gap-8">
          {/* Sidebar - Categories (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-ra2-black-light p-4 rounded-lg border-2 border-ra2-metal sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-ra2-red">{t.filter.categories}</h3>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {categoryDefinitions.map(category => {
                  const categoryName = language === 'en' ? category.name.en : category.name.cn;
                  const isSelected = selectedCategory === category.id;

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
              {selectedCategory !== null && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="w-full mt-4 px-3 py-2 bg-ra2-black-lighter hover:bg-ra2-metal-dark text-ra2-red rounded text-sm"
                >
                  {t.filter.clearAll}
                </button>
              )}
            </div>
          </aside>

          {/* Main Content - Sound Grid */}
          <main className="flex-1 min-w-0">
            <div className="mb-3 md:mb-4 text-ra2-metal text-sm md:text-base px-2">
              {t.search.showingResults.replace('{count}', filteredSounds.length.toString())}
            </div>

            {filteredSounds.length === 0 ? (
              <div className="text-center py-8 md:py-12 text-ra2-metal px-4">
                <p className="text-lg md:text-xl">{t.search.noResults}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
                {filteredSounds.map(sound => {
                  const isCurrentlyPlaying = currentSound?.id === sound.id && isPlaying;

                  return (
                    <div key={sound.id} className="relative group">
                      <button
                        onClick={() => isCurrentlyPlaying ? stop() : play(sound)}
                        className={clsx(
                          "w-full bg-ra2-black-light p-3 sm:p-4 rounded-lg border-2 transition-all cursor-pointer text-left min-h-[120px] sm:min-h-[130px]",
                          isCurrentlyPlaying
                            ? "border-ra2-tesla-blue shadow-tesla-glow"
                            : "border-ra2-metal hover:border-ra2-red active:border-ra2-red-dark"
                        )}
                      >
                        <h4 className="font-bold mb-2 text-white text-sm sm:text-base pr-10">{sound.displayName}</h4>

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

                      {/* Action buttons container */}
                      <div className="absolute top-2 right-2 flex gap-2 z-10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                        {/* Upvote button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVote(sound.id);
                          }}
                          className="px-2 sm:px-3 py-2 bg-ra2-tesla-blue hover:bg-ra2-red active:bg-ra2-red-dark text-white rounded font-bold transition-all min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center gap-1"
                          title="Upvote"
                          aria-label="Upvote sound"
                        >
                          <span>👍</span>
                          <span className="text-xs">{localVotes[sound.id] || 0}</span>
                        </button>

                        {/* Download button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(sound);
                          }}
                          disabled={downloadingId === sound.id}
                          className="px-2 sm:px-3 py-2 bg-ra2-metal hover:bg-ra2-metal-light active:bg-ra2-metal-dark text-white rounded font-bold transition-all disabled:opacity-50 disabled:cursor-wait min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
                          title={downloadingId === sound.id ? "Downloading..." : "Download"}
                          aria-label="Download sound"
                        >
                          {downloadingId === sound.id ? "⏳" : "⬇️"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ra2-black-light border-t-2 border-ra2-red py-4 md:py-6 mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-ra2-metal font-bold text-base md:text-lg">{t.site.footer}</p>
          <p className="text-ra2-metal-dark text-xs md:text-sm mt-2">
            {sounds.length} sounds • Made with ⚡ for Tesla owners
          </p>
        </div>
      </footer>
    </div>
  );
}
