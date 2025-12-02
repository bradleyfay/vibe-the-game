# Mechanics Library

A catalog of all game mechanics we've implemented. This is a living document that grows as we build prototypes.

## What is a Game Mechanic?

A **mechanic** is a specific way the game works. Examples:
- How the player moves
- How collision works
- How scoring works
- How enemies behave

This library helps us:
- **Remember** what we've built
- **Reuse** mechanics in new prototypes
- **Teach** concepts by documenting them
- **Reference** code locations quickly

---

## How to Use This Library

### When Adding a Mechanic

After implementing a mechanic in a prototype:
1. Copy the template below
2. Fill in all sections
3. Link to code location
4. Update status to "Implemented"

### When Reusing a Mechanic

1. Search this document for similar mechanics
2. Copy code from referenced location
3. Adapt to new prototype
4. Update dependencies if needed

---

## Mechanic Template

```markdown
## [Mechanic Name]

**Status**: [Planned / In Progress / Implemented]
**First Used**: [Prototype XX]
**Implemented**: [YYYY-MM-DD]

### What It Does (Plain English)
[Describe what this mechanic does in simple terms an 8-year-old would understand]

### Why It's Fun
[What makes this mechanic enjoyable or interesting for the player?]

### How It Works (Technical)
[Explain the implementation details - code concepts, algorithms, Phaser features used]

### Code Location
- **File**: [e.g., `prototypes/01-hello-world/game.js`]
- **Lines**: [e.g., Lines 45-67]
- **Functions/Classes**: [e.g., `update()`, `movePlayer()`]

### Dependencies
**Requires**:
- [e.g., Phaser Arcade Physics]
- [e.g., Keyboard input setup]

**Works With**:
- [e.g., Boundary Checking mechanic]
- [e.g., Collision Detection mechanic]

### Configuration
**Tunable Parameters**:
- [e.g., `MOVEMENT_SPEED = 5` - pixels per frame]
- [e.g., `ACCELERATION = 0.5` - how quickly player speeds up]

### Variations
[Different ways this mechanic could work]
- [e.g., "Smooth acceleration instead of instant movement"]
- [e.g., "Diagonal movement at same speed as cardinal directions"]

### Learning Notes
**Concepts Taught**:
- [e.g., "Coordinates (X, Y)"]
- [e.g., "Game loop (update 60x per second)"]
- [e.g., "Variables affect behavior"]

**Common Mistakes**:
- [e.g., "Forgetting to check boundaries → player moves off screen"]
- [e.g., "Speed too high → character moves too fast to control"]
```

---

## Implemented Mechanics

### Example: 8-Directional Movement

**Status**: Implemented
**First Used**: Prototype 01
**Implemented**: [To be filled in after building]

#### What It Does (Plain English)
The player can move their character in 8 directions using keyboard keys (arrow keys or WASD). Press Up to move up, Down to move down, Left to move left, Right to move right. You can press two keys at once to move diagonally (like Up+Right to move up-right).

#### Why It's Fun
Moving around freely feels responsive and gives the player control. You can explore the world, dodge obstacles, and position yourself strategically.

#### How It Works (Technical)
- Creates keyboard cursor object using `this.input.keyboard.createCursorKeys()`
- Adds WASD keys as alternative controls
- In `update()` loop (runs 60x per second):
  - Checks which keys are pressed using `.isDown`
  - Updates player velocity using `this.player.setVelocity(x, y)`
  - Velocity is calculated: `x = MOVEMENT_SPEED * direction` where direction is -1, 0, or 1

#### Code Location
- **File**: `prototypes/01-hello-world/game.js`
- **Lines**: [To be filled in]
- **Functions**: `update()` method in game scene

#### Dependencies
**Requires**:
- Phaser Arcade Physics enabled
- Keyboard input plugin (built into Phaser)
- Player object with physics body

#### Configuration
**Tunable Parameters**:
- `MOVEMENT_SPEED = 200` - pixels per second (not per frame!)

#### Variations
- **With acceleration**: Player speeds up gradually (more realistic)
- **8-way normalized**: Diagonal movement same speed as cardinal (prevents faster diagonal)
- **Tank controls**: Rotate then move forward (different control scheme)
- **Mouse/touch**: Click/tap to move to position

#### Learning Notes
**Concepts Taught**:
- **Game loop**: Code runs 60 times per second
- **Velocity**: Speed in X and Y directions
- **Conditionals**: IF key pressed THEN move
- **Coordinates**: X (left-right), Y (up-down)

**Common Mistakes**:
- Setting position instead of velocity (janky movement)
- Speed too high (uncontrollable character)
- Not normalizing diagonal movement (moves √2 faster diagonally)

---

## Planned Mechanics

These are mechanics we want to implement in future prototypes:

### Collision Detection

**Status**: Planned
**Target**: Prototype 02

**What It Does**:
Objects can't pass through each other. Player bumps into walls, enemies, etc.

**Why It's Fun**:
Creates physical boundaries and obstacles. Makes the world feel solid and real.

**How It Might Work**:
- Use Phaser Arcade Physics colliders
- `this.physics.add.collider(player, walls)`
- Physics engine automatically handles overlap detection

---

### Collectible Items

**Status**: Planned
**Target**: Prototype 04

**What It Does**:
Player walks over items to collect them. Items disappear and score/inventory updates.

**Why It's Fun**:
Rewards exploration. Satisfying to collect things. Adds goal to gameplay.

**How It Might Work**:
- Use Phaser Groups for items
- `this.physics.add.overlap(player, items, collectItem)`
- Callback function destroys item and updates state

---

### Simple Enemy AI

**Status**: Planned
**Target**: Prototype 05

**What It Does**:
Enemy character moves on its own. Simple behavior like patrol or chase player.

**Why It's Fun**:
Creates challenge and danger. Makes world feel alive.

**How It Might Work**:
- State machine: PATROL / CHASE / ATTACK
- Pathfinding or simple direction calculation
- Update enemy position in update() loop

---

### Camera Following Player

**Status**: Planned
**Target**: Prototype 03

**What It Does**:
When player moves, camera follows them. Allows world larger than screen.

**Why It's Fun**:
Makes world feel big and explorable. Player is always centered on screen.

**How It Might Work**:
- Set camera bounds to world size
- `this.cameras.main.startFollow(player)`
- Phaser handles smoothly following player

---

## Mechanics by Category

### Movement & Control

- [✓] 8-Directional Movement (Implemented)
- [ ] Dash/Sprint Ability (Planned)
- [ ] Jump (Planned - if adding platforms)

### Physics & Collision

- [ ] Collision Detection (Planned)
- [ ] Boundary Checking (Implemented)
- [ ] Pushable Objects (Planned)

### Combat & Interaction

- [ ] Simple Attack (Planned)
- [ ] Take Damage (Planned)
- [ ] Item Collection (Planned)

### World & Environment

- [ ] Camera Following (Planned)
- [ ] Tilemap World (Planned)
- [ ] Multiple Rooms/Screens (Planned)

### Game State

- [ ] Score Tracking (Planned)
- [ ] Health System (Planned)
- [ ] Game Over State (Planned)
- [ ] Restart Game (Planned)

---

## Mechanics by Complexity

### Beginner (Prototype 01-02)
- 8-Directional Movement
- Boundary Checking
- Basic Collision Detection

### Intermediate (Prototype 03-04)
- Camera Following Player
- Tilemap Worlds
- Collectible Items
- Score System

### Advanced (Prototype 05-06)
- Enemy AI
- Combat System
- Animation States
- Multiple Game States

---

## Cross-Reference: Prototype → Mechanics

### Prototype 01: Hello World
- 8-Directional Movement
- Boundary Checking

### Prototype 02: Obstacles
- Basic Collision Detection
- Static Obstacles

### Prototype 03: World Exploration
- Camera Following Player
- Tilemap World
- World Boundaries

### Prototype 04: Collectibles
- Item Collection
- Score Tracking
- Object Groups

### Prototype 05: Simple Enemy
- Enemy AI (Patrol)
- Game Over State
- Restart Game

### Prototype 06: Player Abilities
- Attack Mechanic
- Animation States
- Cooldown Timer

---

## Notes

- **Keep this updated**: After each prototype, document new mechanics
- **Be specific**: Link to exact code locations
- **Explain simply**: 8-year-old should understand "What It Does"
- **Document learnings**: What concepts does this teach?
- **Track evolution**: How did mechanics improve from prototype to prototype?

**This library grows with your project!** Start small, add more as you learn.
