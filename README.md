# RA2 Tesla Lock Sound

⚡ **Supercharged by Stalin, not Elon** ⚡

A web app that lets Tesla users download Red Alert 2 sound effects to use as car lock sounds. Built with Remix, featuring authentic RA2 theming and 96 iconic sound effects.

## Features

- 🎮 **96 RA2 Sound Effects** - All iconic sounds from Red Alert 2
- 🔍 **Smart Search & Filter** - Find sounds by name or category
- ⚡ **Tesla Collection** - Curated electric-themed sounds
- 🌏 **Bilingual Support** - EN/CN language toggle
- 🎨 **Authentic RA2 Theme** - Red Alert 2 visual style with animations
- 📱 **Mobile Responsive** - Works on all devices
- 🔊 **Instant Preview** - Play sounds before downloading
- ⬇️ **One-Click Download** - Direct download to use in your Tesla

## Tech Stack

- **Remix** - Full-stack React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom RA2 theme
- **Cloudflare Pages** - Fast, global deployment
- **Cloudflare R2** - Sound file hosting

## Development

### Prerequisites

- Node.js 18+ or pnpm
- Git

### Setup

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Test deployment locally
pnpm start
```

The app will be available at `http://localhost:5173/`

## Deployment

### Cloudflare Pages

1. Install wrangler CLI:
```bash
pnpm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
pnpm deploy
```

4. Configure custom domain `ra2.maliang.app` in Cloudflare Pages dashboard

## Sound Categories

Sounds are organized into multiple categories:

**Special Collections:**
- ⚡ Tesla Collection - All electric-themed sounds
- ⭐ Iconic Sounds - Most memorable RA2 moments
- 😂 Meme-Worthy - Internet famous sounds
- 🎮 Multiplayer Gems - Perfect for trolling friends

**Factions:**
- 🇺🇸 Allied Forces
- ⚒️ Soviet Forces
- 🧠 Yuri Faction

**Unit Types:** Infantry, Vehicles, Aircraft, Naval, Structures, Heroes

**Actions:** Acknowledgment, Movement, Combat, Readiness, Alert, Humor

**Moods:** Confident, Panicked, Professional, Quirky

## Project Structure

```
ra2-tesla/
├── app/
│   ├── components/         # React components
│   │   ├── layout/         # Header, Footer, etc.
│   │   ├── sound/          # Sound display components
│   │   ├── animations/     # Canvas animations
│   │   └── ui/             # UI components
│   ├── data/              # Sound database, categories, i18n
│   ├── hooks/             # React hooks
│   ├── routes/            # Remix routes
│   ├── styles/            # CSS files
│   ├── types/             # TypeScript types
│   └── utils/             # Helper functions
├── public/                # Static assets
│   └── ra2-assets/        # RA2 game assets (buttons, cursors, icons)
├── sound-list.txt         # Original sound list
├── ra2mix.txt            # RA2 unused graphics documentation
└── wrangler.toml         # Cloudflare deployment config
```

## Sound Data

All sounds are hosted on Cloudflare R2:
`https://pub-fcee4408db324fbf8b62b0e61eb85856.r2.dev/22412-red-alert-2-soundboard/`

Sound metadata includes:
- Display name (human-readable)
- Multiple categories per sound
- Faction affiliation
- Unit type
- R2 CDN URL

## Future Enhancements

- [ ] RA2 authentic assets (buttons, cursors, icons from ra2cd.mix)
- [ ] Canvas animations (Tesla coils, electricity effects, radar sweep)
- [ ] Easter eggs (Konami code, Yuri mind control mode, dolphin cheer)
- [ ] Favorites system (localStorage)
- [ ] Sound combinations/mixing
- [ ] Community voting
- [ ] Soundboard mode with keyboard shortcuts

## Credits

- **Sound Effects**: Command & Conquer: Red Alert 2 by Westwood Studios / EA Games
- **Inspiration**: Tesla owners who want cooler lock sounds
- **Assets**: RA2 official resources from ra2web community

## License

ISC

---

**Made with ⚡ for Tesla owners**

*Supercharged by Stalin, not Elon*
