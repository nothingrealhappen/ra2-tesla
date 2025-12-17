export type Language = 'en' | 'cn';

export interface Translation {
  site: {
    title: string;
    subtitle: string;
    tagline: string;
    footer: string;
  };
  search: {
    placeholder: string;
    noResults: string;
    showingResults: string;
  };
  actions: {
    play: string;
    download: string;
    share: string;
    favorite: string;
    stop: string;
  };
  filter: {
    title: string;
    clearAll: string;
    showAll: string;
    categories: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    site: {
      title: 'RA2 Tesla Lock Sound',
      subtitle: 'Download Red Alert 2 Sound Effects for Your Tesla',
      tagline: 'Unlock the Power of Red Alert 2',
      footer: 'Supercharged by Stalin, not Elon',
    },
    search: {
      placeholder: 'Search sounds...',
      noResults: 'No sounds found. Try a different search.',
      showingResults: 'Showing {count} sounds',
    },
    actions: {
      play: 'Play',
      download: 'Download',
      share: 'Share',
      favorite: 'Favorite',
      stop: 'Stop',
    },
    filter: {
      title: 'Filter by Category',
      clearAll: 'Clear All',
      showAll: 'Show All',
      categories: 'Categories',
    },
    hero: {
      title: 'Tesla Lock Sounds',
      subtitle: 'Red Alert 2 Edition',
      description: 'Browse 404 iconic RA2 sound effects. Download for free and make your Tesla lock with style!',
    },
  },
  cn: {
    site: {
      title: 'RA2 特斯拉锁车音效',
      subtitle: '为你的特斯拉下载红色警戒2音效',
      tagline: '释放红色警戒2的力量',
      footer: '由斯大林而非马斯克提供动力',
    },
    search: {
      placeholder: '搜索音效...',
      noResults: '未找到音效。请尝试其他搜索。',
      showingResults: '显示 {count} 个音效',
    },
    actions: {
      play: '播放',
      download: '下载',
      share: '分享',
      favorite: '收藏',
      stop: '停止',
    },
    filter: {
      title: '按类别筛选',
      clearAll: '清除所有',
      showAll: '显示全部',
      categories: '类别',
    },
    hero: {
      title: '特斯拉锁车音效',
      subtitle: '红色警戒2版本',
      description: '浏览404个经典RA2音效。免费下载，让你的特斯拉锁车更有范儿！',
    },
  },
};
