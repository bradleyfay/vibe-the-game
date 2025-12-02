# Implementation Plan: Vibe the Game - Parent-Child Game Development Project

## Executive Summary

Transform an empty repository into a **spec-driven game development environment** optimized for teaching an 8-year-old while building top-down adventure games. The project will use **Phaser 3 + JavaScript** (not Python) with a **prototype-centric structure** where design documents live alongside code.

## Key Technical Decisions

### 1. Technology Stack: Phaser 3 + JavaScript

**Decision**: Use Phaser 3 with JavaScript, NOT Python (despite parent's 15 years Python experience)

**Rationale**:
- **Fast feedback loops**: <1 second hot reload vs 3-10 seconds for PyScript (critical for 8-year-old engagement)
- **Built for games**: Phaser is THE web game framework - arcade physics, tilemaps, animations out of the box
- **Top-down adventure perfect fit**: Phaser specializes in exactly this type of game
- **Mature ecosystem**: 10+ years production-ready, tons of tutorials for kids
- **JavaScript is learnable**: Parent can pick up basics in a weekend, syntax similar to Python

**Trade-off**: Parent learns new language, but payoff is vastly superior game development experience

### 2. Development Environment

- **Runtime**: Web browser (Vite dev server with hot reload)
- **Editor**: VS Code (already chosen)
- **Package Manager**: npm (standard for JavaScript)
- **Dev Server**: Vite (instant hot reload, zero config)

### 3. Project Structure Philosophy

**Prototype-centric** (not traditional src/) because:
- Each prototype is self-contained experiment
- Failed experiments are learning moments, not failures
- Son can see progression: "Look how far from 01-hello-world!"
- Easy to start fresh without deleting history
- Reduces fear of "breaking" things

**Specs as first-class citizens**:
- Design thinking equal to coding
- Templates create consistent documentation habits
- Living documents that evolve with the game
- Teaches planning before implementation

## Project Structure

```
vibe-the-game/
├── prototypes/                    # Self-contained experiments
│   ├── 01-hello-world/            # Character movement basics
│   │   ├── spec.md                # Feature spec (written BEFORE coding)
│   │   ├── index.html             # Entry point
│   │   ├── game.js                # Game code (heavily commented)
│   │   ├── assets/                # Prototype-specific assets
│   │   └── README.md              # Retrospective (written AFTER)
│   ├── 02-obstacles/              # Collision detection
│   ├── 03-world-exploration/      # Tilemap world
│   └── [future prototypes...]
│
├── specs/                         # Design documents (root level!)
│   ├── GAME_VISION.md             # The big dream
│   ├── MECHANICS_LIBRARY.md       # Catalog of implemented mechanics
│   └── templates/                 # Reusable spec templates
│       ├── feature-spec.md
│       └── retrospective.md
│
├── docs/                          # Learning journey
│   ├── SETUP.md                   # Detailed setup guide
│   ├── LEARNING_LOG.md            # Session-by-session journal
│   └── RESOURCES.md               # Curated tutorials
│
├── shared/                        # Reusable code (extract later)
│   ├── utils/
│   └── components/
│
├── assets-library/                # Polished, reusable assets
│   ├── sprites/
│   ├── sounds/
│   └── tilesets/
│
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Dev server config
├── README.md                      # Project overview
├── CLAUDE.md                      # Already exists
└── .gitignore                     # Already exists
```

## Spec-Driven Development Workflow

### Four Types of Living Documents

#### 1. Game Vision Document (`specs/GAME_VISION.md`)
**Purpose**: Capture the big dream without constraints

**Contains**:
- Ultimate vision ("3D like Fortnite!")
- Core experience (feelings we want players to have)
- Inspiration (games/movies that inspire)
- Next achievable milestone
- Design pillars (most important aspects)

**Updated**: After playtests, when son has new ideas

#### 2. Mechanics Library (`specs/MECHANICS_LIBRARY.md`)
**Purpose**: Catalog of implemented game mechanics

**Structure per mechanic**:
- What it does (plain English)
- Why it's fun
- How it works (technical)
- Code location
- Status (planned/in-progress/implemented)
- Dependencies

**Example**: "8-Directional Movement" with velocity patterns, code location

#### 3. Feature Specs (`prototypes/XX-name/spec.md`)
**Purpose**: Concrete plan for one prototype iteration (written BEFORE coding)

**Template sections**:
- Goal (what we're learning)
- Success criteria (checkboxes!)
- Mechanics used (links to Mechanics Library)
- Assets needed (with specifications)
- Step-by-step code plan
- Questions to answer
- Learning goals (separate for son and parent)

#### 4. Retrospectives (`prototypes/XX-name/README.md`)
**Purpose**: Capture learnings after completing prototype (written AFTER)

**Structure**:
- What we built (with screenshots)
- What worked / didn't work
- What son learned (specific concepts)
- What parent learned (technical + teaching)
- Next steps

### Typical Session Flow

1. **Check Vision** → Pick next prototype
2. **Write Feature Spec** (plan before code)
3. **Implement together** (parent + son pair programming)
4. **Playtest** against success criteria
5. **Update Mechanics Library** with new patterns
6. **Write Retrospective** (capture learnings)
7. **Commit** with conventional commit message

## Implementation Steps

### Phase 1: Project Setup (15-20 minutes)

1. **Create package.json**
   - Define dependencies: `phaser`, `vite`
   - Define scripts: `dev:01`, `dev:02`, etc. for running prototypes
   - Location: `/Users/bradleyfay/Projects/vibe-the-game/package.json`

2. **Create Vite config**
   - Configure dev server for multiple prototypes
   - Location: `/Users/bradleyfay/Projects/vibe-the-game/vite.config.js`

3. **Create folder structure**
   - `mkdir -p prototypes/01-hello-world/assets`
   - `mkdir -p specs/templates`
   - `mkdir -p docs`
   - `mkdir -p shared/utils shared/components`
   - `mkdir -p assets-library/{sprites,sounds,tilesets}`

4. **Install dependencies**
   - Run: `npm install`

### Phase 2: Documentation (20-30 minutes)

5. **Create main README.md**
   - Project overview
   - Quick start guide
   - How to run prototypes
   - Learning resources
   - Location: `/Users/bradleyfay/Projects/vibe-the-game/README.md`

6. **Create SETUP.md**
   - Detailed first-time setup instructions
   - Prerequisites (Node.js, VS Code)
   - Troubleshooting guide
   - Location: `/Users/bradleyfay/Projects/vibe-the-game/docs/SETUP.md`

7. **Create LEARNING_LOG.md**
   - Session journal template
   - Date, what we built, what we learned
   - Location: `/Users/bradleyfay/Projects/vibe-the-game/docs/LEARNING_LOG.md`

8. **Create RESOURCES.md**
   - Curated Phaser tutorials for kids
   - Game design resources
   - Asset sources (Kenney.nl, OpenGameArt)
   - Location: `/Users/bradleyfay/Projects/vibe-the-game/docs/RESOURCES.md`

### Phase 3: Spec Templates (15 minutes)

9. **Create GAME_VISION.md**
   - Template with sections for vision, inspiration, milestones
   - Fill in initial vision from parent + son
   - Location: `/Users/bradleyfay/Projects/vibe-the-game/specs/GAME_VISION.md`

10. **Create MECHANICS_LIBRARY.md**
    - Empty catalog ready to document first mechanic (movement)
    - Template structure for each mechanic
    - Location: `/Users/bradleyfay/Projects/vibe-the-game/specs/MECHANICS_LIBRARY.md`

11. **Create spec templates**
    - `specs/templates/feature-spec.md` - Template for prototype specs
    - `specs/templates/retrospective.md` - Template for post-prototype reflection

### Phase 4: First Prototype - "Hello World: The Adventurer" (30-45 minutes)

12. **Create spec.md for Prototype 01**
    - Goal: Get character moving on screen with keyboard
    - Success criteria: Character visible, arrow keys work, stays in bounds
    - Learning goals: Coordinates, game loop, variables
    - Location: `/Users/bradleyfay/Projects/vibe-the-game/prototypes/01-hello-world/spec.md`

13. **Create index.html**
    - Entry point that loads Phaser and game.js
    - Instructions for how to play
    - Location: `/Users/bradleyfay/Projects/vibe-the-game/prototypes/01-hello-world/index.html`

14. **Create game.js**
    - 120 lines of heavily commented educational JavaScript
    - Red square player in center
    - WASD + arrow key controls
    - Boundary checking
    - Welcome text overlay
    - Location: `/Users/bradleyfay/Projects/vibe-the-game/prototypes/01-hello-world/game.js`

15. **Create README.md template**
    - Retrospective template ready to fill after completing prototype
    - Location: `/Users/bradleyfay/Projects/vibe-the-game/prototypes/01-hello-world/README.md`

16. **Test first run**
    - `npm run dev:01`
    - Browser should open automatically
    - Verify character moves with arrow keys
    - Test hot reload (change speed, save, see instant update)

### Phase 5: Documentation of Decisions (10 minutes)

17. **Update CLAUDE.md**
    - Document technology choice (Phaser 3 + JavaScript) and rationale
    - Explain spec-driven workflow
    - Reference key files and structure
    - Location: `/Users/bradleyfay/Projects/vibe-the-game/CLAUDE.md` (append to existing)

18. **Create .cursorrules (optional)**
    - If they want IDE-specific guidance for this project
    - Not required but can be helpful
    - Location: `/Users/bradleyfay/Projects/vibe-the-game/.cursorrules`

### Phase 6: Commit and Celebrate

19. **Git commit**
    - `git add .`
    - Conventional commit: `feat(setup): initialize Phaser 3 project with spec-driven structure`
    - Body explaining key decisions

## Critical Files Reference

### Most Important Files (Priority Order)

1. **package.json** - Enables `npm install` and prototype running
2. **prototypes/01-hello-world/game.js** - First working game code
3. **prototypes/01-hello-world/index.html** - Entry point
4. **prototypes/01-hello-world/spec.md** - Design document guiding implementation
5. **README.md** - Project overview and quick start
6. **specs/GAME_VISION.md** - The big dream documented
7. **docs/SETUP.md** - Detailed setup instructions
8. **specs/MECHANICS_LIBRARY.md** - Mechanics catalog

## Prototype Roadmap (Post-Implementation)

### 01 - Hello World: The Adventurer (Session 1)
- Character movement with keyboard
- Boundary checking
- Experimentation with speed variable
- **Learning**: Coordinates, game loop, variables

### 02 - Obstacles and Collision (Sessions 2-3)
- Static walls that block movement
- Phaser arcade physics
- Different obstacle behaviors
- **Learning**: Collision detection, physics bodies

### 03 - World Exploration (Sessions 4-6)
- Tilemap editor (Tiled)
- Camera following player
- Larger world than screen
- **Learning**: Tilemaps, camera system, world-building

### 04 - Collectibles and Score (Sessions 7-8)
- Items to collect
- Score tracking and display
- Object groups
- **Learning**: State management, UI, groups

### 05 - Simple Enemy (Sessions 9-11)
- Moving obstacle to avoid
- Game over state
- Restart functionality
- **Learning**: Game states, enemy AI basics

### 06 - Player Abilities (Sessions 12-15)
- Attack or dash mechanic
- Animation states
- Cooldown timers
- **Learning**: Abilities, animations, timers

## Success Criteria

### Immediate (End of implementation)
- [ ] `npm install` completes successfully
- [ ] `npm run dev:01` opens browser with working game
- [ ] Character moves with arrow keys
- [ ] Hot reload works (change code, save, see instant update)
- [ ] All documentation files exist and are clear
- [ ] Project structure matches plan
- [ ] Committed with conventional commit message

### First Session (Parent + Son)
- [ ] Son understands what a game loop is (simplified)
- [ ] Son changes `MOVEMENT_SPEED` variable and sees result
- [ ] Both excited for next session
- [ ] Completed retrospective for Prototype 01

### First Month
- [ ] Completed Prototypes 01-02
- [ ] Son explains coordinates (X/Y grid)
- [ ] Mechanics Library has 2-3 documented mechanics
- [ ] Learning Log has 4-5 session entries

### 3 Months
- [ ] Completed Prototypes 01-05
- [ ] Top-down world exploration working
- [ ] Son writes simple if-statements
- [ ] Created first "real" game with goal and challenge

## Migration Path: 2D → 3D (Future)

**Timeline**: Not before 6-12 months of 2D development

**Why wait?**
- 3D math significantly harder (vectors, matrices)
- Debugging more complex
- Longer feedback loops (kills 8-year-old engagement)
- Asset creation harder (3D modeling vs pixel art)

**Progressive path when ready**:
1. Add 3D background objects to 2D game (Three.js)
2. Hybrid 2D gameplay in 3D world (old Pokemon style)
3. Full 3D with Three.js or Babylon.js

**Philosophy**: Master 2D deeply, then 3D concepts make sense.

## Asset Strategy

### Phase 1 (Prototypes 1-3): Programmer Art
- Colored rectangles (Phaser shapes)
- Free asset packs (Kenney.nl, OpenGameArt)
- **Goal**: Visual distinction, not beauty

### Phase 2 (Prototypes 4-6): Cohesive Placeholders
- Single consistent asset pack (Kenney.nl recommended)
- Basic animations (4-8 frames)
- Start caring about visual consistency

### Phase 3 (Full Game): Custom Assets
- Commission artist on Fiverr
- Learn pixel art together (Aseprite)
- AI-generated base assets

**Always track licenses** in `assets-library/README.md`

## Teaching Strategies

### For 8-Year-Old Learning

**Power of choice**: "Should player be red or blue?"
**Visible progress**: Commit after features, see history
**Celebrate bugs**: "Interesting! Why did that happen?"
**Immediate success**: Every session ends with working game
**Creative control**: Son decides theme, story, characters

### Learning Progression

- **Sessions 1-2**: Visual cause and effect (change numbers → see results)
- **Sessions 3-4**: Coordinates and position (draw grid on paper)
- **Sessions 5-6**: Conditionals (game rules are if/then statements)
- **Sessions 7-8**: Variables and state (score changes over time)
- **Sessions 9-10**: Functions (do one job well)
- **Sessions 11+**: Game design thinking (what makes games fun?)

## Troubleshooting Guide

### Blank screen in browser
1. Check browser console (F12) for errors
2. Verify `index.html` loads `phaser` and `game.js`
3. Check file paths are correct

### Changes not appearing
1. Hard refresh browser (Cmd+Shift+R)
2. Check file is saved
3. Verify Vite dev server is running

### "Module not found" errors
1. Run `npm install` to install dependencies
2. Check import paths are correct
3. Restart Vite dev server

### Player won't move
1. Check browser console for errors
2. Verify keyboard input is focused (click game canvas)
3. Check `cursors` object is created correctly

### Parent stuck on JavaScript
- JavaScript for Python developers guide in `docs/RESOURCES.md`
- Focus on similarities (functions, variables, conditionals)
- Learn by doing - modify working code first

### Son losing interest
- Shorten sessions (30-45 minutes max)
- End on success, not frustration
- Let son make creative decisions
- Build something silly or fun, not "correct"

## Additional Notes

### Why This Structure Works

**Spec-driven for games is different** than spec-driven for web apps:
- Game specs focus on experience, not requirements
- Mechanics are reusable patterns, not user stories
- Retrospectives capture learning, not just completion
- Vision document dreams big, specs stay achievable

**Prototype-centric reduces fear**:
- "Let's try this in a new prototype" is less scary than "Let's change our game"
- Can always go back to previous working version
- Failed experiments are learning, not failure

**Documentation as teaching tool**:
- Writing specs teaches planning before coding
- Retrospectives teach reflection and learning
- Mechanics Library teaches pattern recognition
- Learning Log shows progress over time

### Commit Message Examples

```
feat(setup): initialize Phaser 3 project with spec-driven structure

- Add package.json with Phaser and Vite dependencies
- Create prototype-centric folder structure
- Implement Prototype 01: Character movement
- Add comprehensive documentation (SETUP, LEARNING_LOG, RESOURCES)
- Define spec-driven workflow with templates

This establishes a learning-first game development environment
optimized for teaching an 8-year-old while building top-down
adventure games. All specs live alongside code for easy reference.

feat(proto01): implement character movement with keyboard controls

- Add WASD and arrow key controls
- Implement boundary checking (stay on screen)
- Add welcome text overlay
- Include experimentation variable (MOVEMENT_SPEED)

This is the first working prototype! Son can now move a character
around the screen and experiment with changing the speed.

docs(vision): document top-down adventure game vision

- Capture ultimate vision (3D like Fortnite)
- Define core experience (exploration and adventure)
- List inspiration games (Zelda, Minecraft)
- Set next milestone (working top-down 2D world)
```

---

## Summary

This plan transforms the empty repository into a **complete spec-driven game development environment** with:

1. **Phaser 3 + JavaScript** (optimal for web games despite Python background)
2. **Prototype-centric structure** (reduces fear, shows progression)
3. **Spec-driven workflow** (vision, mechanics library, feature specs, retrospectives)
4. **First working prototype** (character movement, 30-45 minute implementation)
5. **Comprehensive documentation** (setup, learning log, resources)
6. **Clear learning progression** (6 prototypes outlined)

**Next step after implementation**: Run `npm run dev:01`, see the character move, change the speed, and celebrate the first win together!

**Time estimate**: 90-120 minutes to implement full setup + Prototype 01
