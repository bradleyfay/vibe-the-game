# Vibe the Game

A parent-child game development project to learn building top-down adventure games together using Phaser 3 and JavaScript.

## Project Goals

1. **Educational Experience**: Teach game development concepts in an age-appropriate way
2. **LLM Collaboration**: Demonstrate how to work with AI tools to build real projects
3. **Planning & Execution**: Show the process from complex idea → concrete plan → achievable tasks
4. **Having Fun Together**: Build something cool while learning

## Quick Start

### Prerequisites

- **Node.js** (v18+): [Download here](https://nodejs.org/)
- **npm** (v9+): Comes with Node.js
- **VS Code**: [Download here](https://code.visualstudio.com/)
- **Modern web browser**: Chrome, Firefox, Safari, or Edge

### Installation

```bash
# Install dependencies
npm install

# Run the first prototype
npm run dev:01
```

The browser will open automatically and you'll see your game!

### Available Commands

```bash
# Development (opens browser automatically)
npm run dev:01    # Run Prototype 01 (Character Movement)
npm run dev:02    # Run Prototype 02 (Obstacles and Collision)
npm run dev:03    # Run Prototype 03 (World Exploration)

# Production builds
npm run build:01  # Build Prototype 01 for deployment
npm run build:02  # Build Prototype 02 for deployment
npm run build:03  # Build Prototype 03 for deployment
```

## Project Structure

```
vibe-the-game/
├── prototypes/              # Self-contained game experiments
│   ├── 01-hello-world/      # Character movement basics
│   ├── 02-obstacles/        # Collision detection
│   └── 03-world-exploration/ # Top-down tilemap world
│
├── specs/                   # Design documents
│   ├── GAME_VISION.md       # The big dream
│   ├── MECHANICS_LIBRARY.md # Catalog of mechanics
│   └── templates/           # Reusable spec templates
│
├── docs/                    # Learning journey documentation
│   ├── SETUP.md             # Detailed setup guide
│   ├── LEARNING_LOG.md      # Session-by-session journal
│   └── RESOURCES.md         # Curated tutorials and resources
│
├── shared/                  # Reusable code (extracted when needed)
├── assets-library/          # Polished, reusable game assets
└── plan/                    # Technical planning documents
```

## Why This Structure?

**Prototype-centric approach**:
- Each prototype is a self-contained experiment
- Failed experiments are learning moments, not failures
- Clear progression visible (01 → 02 → 03)
- Easy to start fresh without fear of "breaking" things

**Specs as first-class citizens**:
- Design thinking is equal to coding
- Plan before implementing (feature specs)
- Reflect after completing (retrospectives)
- Document learnings (mechanics library)

## Technology Stack

- **Language**: JavaScript (ES6+)
- **Game Framework**: Phaser 3
- **Dev Server**: Vite (instant hot reload)
- **Runtime**: Web browser
- **Editor**: VS Code

### Why JavaScript instead of Python?

Even though Dad knows Python, we chose JavaScript + Phaser because:
- **Fast feedback**: <1 second hot reload (critical for keeping an 8-year-old engaged)
- **Built for games**: Phaser has physics, tilemaps, animations out of the box
- **Perfect for top-down adventures**: Exactly the right tool for the job
- **Path to 3D**: Can integrate Three.js later for 3D experiments

## Prototype Roadmap

### 01 - Hello World: The Adventurer (Session 1)
**Goal**: Get a character moving on screen with keyboard controls
**Learning**: Coordinates, game loop, variables
**Status**: Ready to implement

### 02 - Obstacles and Collision (Sessions 2-3)
**Goal**: Static walls that block movement
**Learning**: Collision detection, physics bodies
**Status**: Planned

### 03 - World Exploration (Sessions 4-6)
**Goal**: Larger tilemap world with camera following player
**Learning**: Tilemaps, camera system, world-building
**Status**: Planned

### 04 - Collectibles and Score (Sessions 7-8)
**Goal**: Items to collect, score tracking
**Learning**: State management, UI, object groups
**Status**: Planned

### 05 - Simple Enemy (Sessions 9-11)
**Goal**: Moving obstacle to avoid, game over state
**Learning**: Game states, basic enemy AI
**Status**: Planned

### 06 - Player Abilities (Sessions 12-15)
**Goal**: Attack or dash mechanic with animations
**Learning**: Abilities, animation states, cooldown timers
**Status**: Planned

## Spec-Driven Development Workflow

### Typical Session Flow

1. **Check Vision** → Pick next prototype
2. **Write Feature Spec** → Plan before coding
3. **Implement Together** → Parent + child pair programming
4. **Playtest** → Test against success criteria
5. **Update Mechanics Library** → Document new patterns
6. **Write Retrospective** → Capture learnings
7. **Commit** → Save progress with clear message

### Four Types of Documents

1. **Game Vision** (`specs/GAME_VISION.md`): The big dream
2. **Mechanics Library** (`specs/MECHANICS_LIBRARY.md`): Catalog of implemented mechanics
3. **Feature Specs** (per-prototype `spec.md`): Plan written BEFORE coding
4. **Retrospectives** (per-prototype `README.md`): Learnings captured AFTER

## Getting Help

- **Detailed setup guide**: See `docs/SETUP.md`
- **Learning resources**: See `docs/RESOURCES.md`
- **Phaser documentation**: https://phaser.io/learn
- **Troubleshooting**: Check `docs/SETUP.md` troubleshooting section

## Success Metrics

### First Session
- [ ] Son understands what a game loop is (simplified)
- [ ] Son changes `MOVEMENT_SPEED` variable and sees result
- [ ] Both excited for next session

### First Month
- [ ] Completed Prototypes 01-02
- [ ] Son explains coordinates (X/Y grid)
- [ ] Mechanics Library has 2-3 documented mechanics
- [ ] Learning Log has 4-5 session entries

### Most Important
- **Are we having fun and learning together?**

## License

MIT - This is a learning project, feel free to use and adapt!

## Acknowledgments

- **Phaser 3**: Amazing web game framework
- **Kenney.nl**: Free game assets for prototyping
- **Claude Code**: AI pair programming assistance
