# Prototypes Overview

Each prototype is a self-contained game experiment that teaches specific concepts. They build on each other, but each one stands alone.

## Philosophy

**Prototype-centric development** means:
- Each prototype is a complete, working game
- Failed experiments are learning moments, not failures
- Can always start fresh without fear
- Clear progression visible: "Look how far from 01!"

## Prototype Roadmap

### 01 - Hello World: The Adventurer
**Status**: 📝 Ready to Code
**Time**: 1 session (~45-60 min)
**Goal**: Character movement with keyboard controls

**What You'll Learn**:
- Coordinates (X, Y)
- Game loop (60 updates/second)
- Variables affect behavior
- Keyboard input

**Success**: Red square moves with arrow keys, stays on screen

[View Specification →](/prototypes/01-hello-world/spec)

---

### 02 - Obstacles and Collision
**Status**: 📋 Planned
**Time**: 2 sessions (~90-120 min)
**Goal**: Static walls that block movement

**What You'll Learn**:
- Collision detection
- Physics bodies
- Phaser arcade physics

**Success**: Character can't walk through walls

---

### 03 - World Exploration
**Status**: 📋 Planned
**Time**: 3-4 sessions (~150-180 min)
**Goal**: Larger tilemap world with camera following player

**What You'll Learn**:
- Tilemap editor (Tiled)
- Camera system
- World-building
- Multiple screens

**Success**: Explore a world larger than the screen

---

### 04 - Collectibles and Score
**Status**: 📋 Planned
**Time**: 2 sessions (~90 min)
**Goal**: Items to collect, score tracking

**What You'll Learn**:
- State management
- UI and text display
- Object groups
- Overlap detection

**Success**: Collect items, see score increase

---

### 05 - Simple Enemy
**Status**: 📋 Planned
**Time**: 3 sessions (~120-150 min)
**Goal**: Moving obstacle to avoid, game over state

**What You'll Learn**:
- Enemy AI (basic patrol)
- Game states (play, game over)
- Restart functionality

**Success**: Avoid enemy or game over

---

### 06 - Player Abilities
**Status**: 📋 Planned
**Time**: 3-4 sessions (~150-180 min)
**Goal**: Attack or dash mechanic with animations

**What You'll Learn**:
- Player abilities
- Animation states
- Cooldown timers
- Input combos

**Success**: Press button to attack/dash

---

## After Prototype 06

Once you've completed all 6 prototypes, you'll have:
- ✅ Solid understanding of game development
- ✅ Working knowledge of Phaser 3
- ✅ JavaScript skills
- ✅ Collection of reusable mechanics
- ✅ Confidence to build your own games

**Next**: Combine all learnings into your first complete game!

## Progression Pattern

Each prototype follows this pattern:

### Before Coding
1. **Write spec together** (`spec.md`)
2. **Set clear success criteria**
3. **Understand what you'll learn**

### During Coding
1. **Follow step-by-step plan**
2. **Test frequently** (every 5-10 minutes)
3. **Experiment with values**
4. **Celebrate bugs as puzzles**

### After Coding
1. **Play the game together**
2. **Fill out retrospective** (`README.md`)
3. **Update mechanics library**
4. **Update learning log**
5. **Commit with clear message**
6. **Show someone!**

## Tips for Success

### Keep Sessions Short
- **30-45 minutes** is ideal for 8-year-old
- **60 minutes maximum**
- End on a win, not frustration

### Celebrate Small Wins
- Character moved? Celebrate!
- Changed a number? Celebrate!
- Fixed a bug? Celebrate!

### Let Him Drive
- He types when possible
- He makes decisions (colors, speed, etc.)
- He explains what's happening

### Break When Stuck
- 10 minutes stuck? Take a break
- Walk away, come back fresh
- It's okay to not know - learn together

## Common Questions

### "Should we skip a prototype?"
No! Each builds essential skills. Even if a prototype seems simple, it teaches concepts needed for later ones.

### "Can we add more features to a prototype?"
After completing the spec? Sure! But finish the planned features first. Then experiment.

### "What if we get stuck?"
- Check `docs/SETUP.md` troubleshooting
- Search Phaser docs: https://phaser.io/docs
- Ask Claude Code for help
- Remember: Being stuck is part of learning!

### "How long will this take?"
- Prototype 01: 1 session
- All 6 prototypes: 15-20 sessions
- 3-4 months at 1 session/week
- But it's not a race! Go at your own pace.

---

**Ready to start?** Head to [Prototype 01 Specification →](/prototypes/01-hello-world/spec)
