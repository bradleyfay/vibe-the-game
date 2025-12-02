# Technical Research & Decision Log

**Date**: 2025-12-02
**Project**: Vibe the Game (Parent-Child Game Development)

## Research Questions

### 1. Language & Framework Selection

**Question**: Should we use Python (leveraging parent's 15 years experience) or JavaScript for web-based game development?

**Options Evaluated**:
- **Python + PyScript/Brython** (Python in browser)
- **Python + Pygame** (Desktop-only, not web)
- **JavaScript + Phaser 3** (Web game framework)
- **TypeScript + PixiJS** (Lower-level, more complex)
- **Three.js / Babylon.js** (3D, too complex for starting)

**Research Findings**:

**PyScript (Python in Browser)**:
- Status in 2025: Still maturing, pygame-ce integration is recent
- Load times: 3-10 seconds per page refresh
- Performance: Slower than native JavaScript
- Documentation: Limited game-specific examples
- Best for: General Python apps, not real-time games

**Pygame Desktop**:
- Pros: Excellent Python game library, great learning resources
- Cons: Desktop-only (user explicitly requested web browser)
- Eliminated due to requirement conflict

**Phaser 3 (JavaScript)**:
- Status: 10+ years production-ready, v3 released 2018
- Load times: <1 second hot reload with Vite
- Performance: Native browser performance, optimized for games
- Documentation: Extensive tutorials specifically for kids
- Built-in features perfect for top-down adventures:
  - Arcade physics system
  - Tilemap support (Tiled integration)
  - Animation system
  - Camera system (following player)
  - Asset loading and management
  - Input handling (keyboard, mouse, touch)

**Decision**: **Phaser 3 + JavaScript**

**Rationale**:
1. **8-year-old engagement is paramount**: <1 second feedback vs 3-10 seconds is critical
2. **Built specifically for games**: Physics, tilemaps, animations out of the box
3. **JavaScript learning curve acceptable**: Parent can learn basics in a weekend
4. **Top-down adventure is Phaser's specialty**: Exactly the right tool for the job
5. **Path to 3D exists**: Can later integrate Three.js for 3D experiments

**Trade-off Acknowledged**: Parent learns new language, but superior development experience justifies the cost.

---

### 2. Project Structure Philosophy

**Question**: Traditional `src/` structure or alternative organization for learning-focused game development?

**Options Evaluated**:
- **Traditional src/ structure** (src/, dist/, tests/)
- **Game engine structure** (scenes/, prefabs/, assets/)
- **Prototype-centric structure** (numbered prototypes, specs alongside code)
- **Monorepo structure** (multiple games in one repo)

**Research Findings**:

**Traditional src/ structure**:
- Pro: Familiar to experienced developers
- Con: Intimidating for 8-year-old ("What if I break the main game?")
- Con: Doesn't emphasize learning progression
- Con: Failed experiments feel like failure

**Game engine structure**:
- Pro: Mirrors Unity/Unreal patterns
- Con: Over-architected for learning phase
- Con: Assumes final game structure from day 1
- Not appropriate for iterative exploration

**Prototype-centric structure**:
- Pro: Each prototype is self-contained
- Pro: Clear progression visible (01 → 02 → 03)
- Pro: Failed experiments are learning moments
- Pro: Easy to start fresh without fear
- Pro: Son can see journey: "Look how far from 01!"
- Con: Potential code duplication (mitigated by shared/ folder)

**Decision**: **Prototype-centric structure**

**Structure**:
```
prototypes/
  01-hello-world/      # Self-contained experiment
  02-obstacles/        # Each builds on learnings
  03-world-exploration/
```

**Key Benefits**:
- Reduces fear of "breaking" things
- Makes learning progression visible
- Failed experiments become artifacts of learning
- Easy to reference "how we did X in prototype 02"

---

### 3. Spec-Driven Workflow for Games

**Question**: How should spec-driven development work for games vs traditional web apps?

**Research Findings**:

**Traditional Software Specs** (User stories, requirements, acceptance criteria):
- Focus: Functional requirements
- Format: Given/When/Then, Acceptance criteria
- Not optimal for games where "fun" is subjective

**Game Design Document (GDD)** approaches:
- Industry standard for professional game development
- Often 50-100+ pages for commercial games
- Too heavy for learning-focused 8-year-old project

**Hybrid Approach Designed**:

**Four Document Types**:

1. **Game Vision Document** (`specs/GAME_VISION.md`)
   - Purpose: Dream big without constraints
   - Contains: Ultimate vision, inspiration, milestones
   - Updated: When son has new ideas, after playtests
   - Captures "3D like Fortnite" dream while staying grounded

2. **Mechanics Library** (`specs/MECHANICS_LIBRARY.md`)
   - Purpose: Catalog of implemented mechanics
   - Structure: What it does, why it's fun, how it works, code location
   - Example: "8-Directional Movement" with technical implementation
   - Teaches pattern recognition

3. **Feature Specs** (per-prototype `spec.md`)
   - Purpose: Plan written BEFORE coding
   - Contains: Goal, success criteria, learning objectives
   - Written together (parent + son)
   - Teaches planning before implementation

4. **Retrospectives** (per-prototype `README.md`)
   - Purpose: Learnings captured AFTER completion
   - Contains: What we built, what worked/didn't, what we learned
   - Teaches reflection and documentation

**Workflow Designed**:
```
Check Vision → Write Feature Spec → Implement Together →
Playtest → Update Mechanics Library → Write Retrospective → Commit
```

---

### 4. Development Environment Setup

**Question**: What tools minimize setup friction while providing fast feedback?

**Requirements**:
- Web browser runtime (per user requirement)
- Hot reload (<1 second)
- Zero config if possible
- VS Code integration
- Simple npm scripts

**Options Evaluated**:
- **Webpack**: Complex config, slower builds
- **Parcel**: Zero config but less control
- **Vite**: Zero config + fast + modern + perfect for prototypes
- **Create React App**: Overkill, React not needed

**Decision**: **Vite**

**Configuration**:
```json
"scripts": {
  "dev:01": "vite prototypes/01-hello-world",
  "dev:02": "vite prototypes/02-obstacles",
  ...
}
```

**Benefits**:
- Run `npm run dev:01` → browser opens automatically
- Change code, save → <1 second update in browser
- Zero configuration needed
- Each prototype has own dev server

---

### 5. First Prototype Design

**Question**: What should the first prototype be to maximize learning and engagement?

**Options Evaluated**:
- "Hello World" (static text)
- Pong clone
- Character movement
- Collect-the-items game
- Top-down world exploration

**Decision**: **Character Movement** ("Hello World: The Adventurer")

**Scope**:
- Red square player in center
- WASD + Arrow key controls
- Boundary checking (stays on screen)
- Welcome text overlay
- `MOVEMENT_SPEED` variable to experiment with

**Why This is Perfect**:
1. **30-45 minute implementation** - completable in one session
2. **Immediate visual feedback** - see character move instantly
3. **Experimentation built-in** - change speed variable, see results
4. **Foundation for everything** - movement is core of adventure games
5. **Teaching moments embedded**:
   - Coordinates (X/Y grid system)
   - Game loop (update 60 times per second)
   - Variables (change number → see different behavior)
   - Conditionals (IF key pressed THEN move)
   - Boundary checking (IF x < 0 THEN x = 0)

**Success Criteria**:
- [ ] Character visible in center
- [ ] Arrow keys make it move
- [ ] Stays inside window
- [ ] Son can change speed by editing one number
- [ ] Both excited for next session

---

### 6. Prototype Roadmap

**Question**: What's the learning progression from "Hello World" to full game?

**Designed Progression** (6 prototypes, ~15-20 sessions):

**01 - Hello World (Session 1)**:
- Character movement
- Learning: Coordinates, game loop, variables

**02 - Obstacles (Sessions 2-3)**:
- Static walls that block movement
- Learning: Collision detection, physics

**03 - World Exploration (Sessions 4-6)**:
- Tilemap world, camera follows player
- Learning: Tilemaps, camera system

**04 - Collectibles (Sessions 7-8)**:
- Items to collect, score display
- Learning: State management, UI

**05 - Enemy (Sessions 9-11)**:
- Moving obstacle, game over, restart
- Learning: Game states, basic AI

**06 - Player Abilities (Sessions 12-15)**:
- Attack/dash, animations, cooldowns
- Learning: Abilities, animations, timers

**After Prototype 06**: Combine learnings into first "real" game

**Path to 3D** (6-12 months later):
1. Add 3D background to 2D game (Three.js)
2. Hybrid 2D gameplay in 3D world
3. Full 3D game

---

### 7. Asset Strategy

**Question**: Where do we get game art without a budget?

**Phased Approach**:

**Phase 1 (Prototypes 1-3)**: Programmer Art
- Colored rectangles (Phaser shapes)
- Free asset packs (Kenney.nl, OpenGameArt.org)
- Goal: Visual distinction, not beauty

**Phase 2 (Prototypes 4-6)**: Cohesive Placeholders
- Single consistent asset pack (Kenney.nl Top-Down Shooter pack recommended)
- Basic animations (4-8 frames)
- Start caring about visual consistency

**Phase 3 (Full Game)**: Custom Assets
- Commission artist on Fiverr ($50-200 for full sprite set)
- Learn pixel art together (Aseprite)
- AI-generated base assets (Midjourney/DALL-E → edit in Aseprite)

**Key Resources**:
- **Kenney.nl**: Free CC0 game assets, perfect for prototypes
- **OpenGameArt.org**: Community-contributed assets, check licenses
- **Aseprite**: $20, industry-standard pixel art tool
- **Tiled**: Free tilemap editor, integrates with Phaser

---

## Key Research Sources

### Phaser 3 Framework
- Official Phaser 3 Getting Started Tutorial
- "Making your first Phaser 3 game" tutorial series
- Phaser.js Game Development for Beginners (2025)
- GitHub: phaserjs/phaser (40k+ stars, active development)

### Top-Down Game Development
- "HTML5 Phaser Tutorial - Top-Down Games With Tiled" (GameDev Academy)
- "Building Your First HTML5 Adventure Game" (DEV Community)

### PyScript Assessment
- PyScript Official Docs: Pygame-CE integration (released 2024)
- "Python Games in the Browser with pygame-ce, PyScript, and itch.io" (Medium)
- Performance benchmarks: 3-10 second load times typical

### Game Project Structure
- "Gamedev File Structure" (Johan Steen blog)
- "Folder structure of a video game development project" (Dante's Lab)
- "Folder/Structure/Lessons for games" (Game Developer magazine)

### Game Design Documentation
- "Game Design Document Template and Examples" (Nuclino)
- "A GDD Template for the Indie Developer" (Game Developer)
- "Free Game Design Document Template" (ClickUp)

---

## Risks & Mitigations

### Risk 1: Parent struggles with JavaScript
**Likelihood**: Medium
**Impact**: Medium
**Mitigation**:
- Create `docs/RESOURCES.md` with "JavaScript for Python Developers"
- Focus on similarities (functions, variables, conditionals nearly identical)
- Strategy: Learn by modifying working code, not from scratch

### Risk 2: Son loses interest
**Likelihood**: Medium
**Impact**: High
**Mitigation**:
- Keep sessions 30-45 minutes (short attention span)
- End on success, not frustration
- Let son make creative decisions (colors, story, characters)
- Build something silly/fun over "correct"

### Risk 3: Over-engineering too early
**Likelihood**: High (parent is experienced engineer)
**Impact**: Medium
**Mitigation**:
- Prototype-centric structure discourages premature abstraction
- Resist creating `shared/` folder until pattern appears 3+ times
- Focus on working game over "clean" code

### Risk 4: 3D aspirations derail 2D learning
**Likelihood**: Medium
**Impact**: High
**Mitigation**:
- Explicit roadmap shows 6-12 months of 2D first
- Document "why wait" reasoning in plan
- Progressive path (3D backgrounds → hybrid → full 3D)

---

## Success Metrics

### Immediate (End of Setup)
- ✓ Project structure created
- ✓ Documentation in place
- ✓ First prototype running
- ✓ Hot reload working

### Week 1
- Son completes Prototype 01
- Son explains what a game loop is
- Son changes variables independently
- Both excited for Session 2

### Month 1
- Prototypes 01-02 complete
- Mechanics Library has 2-3 entries
- Learning Log has 4-5 sessions documented
- Son explains coordinates to a family member

### Month 3
- Prototypes 01-05 complete
- Working top-down world with collectibles
- Son writes simple if-statements
- Son designs a game mechanic

### Most Important Metric
- **Are we having fun and learning together?**

---

## Decision Documentation Date
**Finalized**: 2025-12-02
**Documented By**: Claude Code (with user input)
**Ready for Implementation**: Yes
**Estimated Implementation Time**: 90-120 minutes
