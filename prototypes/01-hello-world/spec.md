# Prototype 01: Hello World - The Adventurer

Your first game prototype! Get a character moving on screen with keyboard controls.

## Overview

**Goal**: Create a simple game where you can move a character around the screen using arrow keys or WASD keys.

**Duration Estimate**: 1 session (~45-60 minutes of coding)

**Prerequisite Prototypes**: None (this is the first one!)

**Why This First**: Movement is the foundation of almost every game. Master this, and everything else builds on it.

---

## Success Criteria

Check these off as you complete them:

- [ ] **Game window appears** when you run `npm run dev:01`
- [ ] **Character is visible** in the center of the screen
- [ ] **Arrow keys make character move** (Up, Down, Left, Right)
- [ ] **WASD keys also work** (W=up, A=left, S=down, D=right)
- [ ] **Character stays inside the screen** (doesn't disappear off edges)
- [ ] **Movement feels smooth** (not janky or stuttering)
- [ ] **You can change the speed** by editing one number in the code
- [ ] **Browser updates instantly** when you save changes (<1 second hot reload)

**Definition of Done**: Both parent and son can control the character, understand what the code does, and feel excited to add more!

---

## What You'll Learn

### For Son (Age 8)

**Technical Concepts**:
- **Coordinates**: X and Y numbers tell where things are
  - X axis: 0 (left edge) to 800 (right edge)
  - Y axis: 0 (top edge) to 600 (bottom edge)
- **Game loop**: The game updates 60 times every second
- **Variables**: Changing a number changes how the game behaves
- **Conditionals**: IF key is pressed THEN move character

**Game Design Concepts**:
- **Player control**: The most important thing is making the character respond to your input
- **Feedback**: Seeing your actions immediately is what makes games fun

**Soft Skills**:
- **Planning helps**: We wrote this spec before coding
- **Start simple**: A colored square is fine - we can make it fancy later

### For Parent

**Technical**:
- Phaser 3 basic setup (preload, create, update)
- Physics system (velocity-based movement)
- Input handling (keyboard)
- JavaScript syntax if coming from Python

**Teaching**:
- How to explain game loops and coordinates to an 8-year-old
- When to let him experiment vs. when to guide

---

## Mechanics Used

### New Mechanics (Implementing for First Time)

1. **8-Directional Movement**
   - What it does: Player can move in 8 directions (up, down, left, right, and diagonals)
   - Uses: Keyboard input + velocity-based movement
   - Will document in `specs/MECHANICS_LIBRARY.md` after implementing

2. **Boundary Checking**
   - What it does: Keeps character inside the game window
   - Prevents: Character moving off-screen where you can't see it

---

## Assets Needed

### Graphics

| Asset | Description | Size | Source | Status |
|-------|-------------|------|--------|--------|
| Player | Red square | 32x32px | Draw with code | ✓ Ready |
| Background | Sky blue | 800x600px | Code (fill) | ✓ Ready |

**No sprites needed!** We're starting with simple shapes. This removes complexity and lets us focus on movement.

### Sounds

None for this prototype. We'll add sounds in a future prototype.

---

## Step-by-Step Implementation Guide

When you're ready to code, follow this plan with your son:

### Phase 1: Create Project Files (10 minutes)

**1. Create the HTML file**

Create `prototypes/01-hello-world/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prototype 01: Hello World</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            background-color: #2c3e50;
            font-family: Arial, sans-serif;
            color: white;
        }
        h1 {
            text-align: center;
        }
        #game-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .instructions {
            max-width: 800px;
            margin: 20px auto;
            padding: 15px;
            background-color: #34495e;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>🎮 Prototype 01: The Adventurer</h1>

    <div class="instructions">
        <h2>How to Play</h2>
        <ul>
            <li><strong>Arrow Keys</strong> or <strong>WASD</strong>: Move the character</li>
            <li>Try moving in all directions!</li>
            <li>Can you make the character move faster? (Hint: Look in game.js for MOVEMENT_SPEED)</li>
        </ul>
    </div>

    <div id="game-container"></div>

    <script type="module" src="./game.js"></script>
</body>
</html>
```

**2. Create the game file**

Create `prototypes/01-hello-world/game.js`:

```javascript
import Phaser from 'phaser';

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#87CEEB', // Sky blue
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // No gravity (top-down view)
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Create the game
const game = new Phaser.Game(config);

// Global variables
let player;
let cursors;
let wasd;
const MOVEMENT_SPEED = 200; // Try changing this number!

// Preload: Load assets (none needed for this prototype)
function preload() {
    // Nothing to load - we're drawing shapes!
}

// Create: Set up the game world
function create() {
    // Create the player (a red square for now)
    player = this.add.rectangle(400, 300, 32, 32, 0xff0000);

    // Give the player physics so it can move
    this.physics.add.existing(player);

    // Don't let physics move the player automatically
    player.body.setCollideWorldBounds(true);

    // Set up keyboard controls
    // Arrow keys
    cursors = this.input.keyboard.createCursorKeys();

    // WASD keys
    wasd = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
    });

    // Welcome message
    this.add.text(400, 50, 'Move with Arrow Keys or WASD!', {
        fontSize: '24px',
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4
    }).setOrigin(0.5);
}

// Update: Runs 60 times per second
function update() {
    // Reset velocity every frame
    player.body.setVelocity(0);

    // Check which keys are pressed and move accordingly
    // Left and Right
    if (cursors.left.isDown || wasd.left.isDown) {
        player.body.setVelocityX(-MOVEMENT_SPEED);
    }
    else if (cursors.right.isDown || wasd.right.isDown) {
        player.body.setVelocityX(MOVEMENT_SPEED);
    }

    // Up and Down
    if (cursors.up.isDown || wasd.up.isDown) {
        player.body.setVelocityY(-MOVEMENT_SPEED);
    }
    else if (cursors.down.isDown || wasd.down.isDown) {
        player.body.setVelocityY(MOVEMENT_SPEED);
    }
}
```

**3. Test it!**

```bash
npm run dev:01
```

Browser should open automatically. You should see:
- Sky blue game window
- Red square in the center
- Square moves when you press arrow keys or WASD

**If it doesn't work**, check `docs/SETUP.md` troubleshooting section.

### Phase 2: Experiment and Learn (20-30 minutes)

**Now that it works, try these experiments:**

**Experiment 1: Change the speed**
- Find `MOVEMENT_SPEED = 200` in game.js
- Change it to `500`
- Save (Cmd+S)
- Watch the character speed up automatically!
- Try `50` - now it's really slow!
- What speed feels best?

**Experiment 2: Change the color**
- Find `0xff0000` (that's red in hexadecimal)
- Try `0x00ff00` (green)
- Try `0x0000ff` (blue)
- Try `0xffff00` (yellow)
- Pick your favorite color!

**Experiment 3: Change the size**
- Find `32, 32` (that's width and height)
- Try `64, 64` (bigger square)
- Try `16, 16` (tiny square)
- Try `64, 16` (rectangle!)

**Experiment 4: Change the starting position**
- Find `400, 300` (that's X, Y coordinates)
- Try `100, 100` (top-left corner)
- Try `700, 500` (bottom-right corner)
- Notice: X goes left-right, Y goes up-down

### Phase 3: Understand the Code (15-20 minutes)

**Go through the code together and explain each part:**

1. **Config object**: Sets up the game window
   - Width: 800 pixels
   - Height: 600 pixels
   - Background: Sky blue

2. **Three main functions**:
   - `preload()`: Load images/sounds (empty for now)
   - `create()`: Set up game world (runs once at start)
   - `update()`: Runs 60 times per second (game loop!)

3. **Movement logic**:
   ```javascript
   if (cursors.left.isDown) {
       player.body.setVelocityX(-MOVEMENT_SPEED);
   }
   ```
   - IF left key is pressed
   - THEN move left at MOVEMENT_SPEED
   - Negative velocity = move left
   - Positive velocity = move right

4. **World bounds**:
   ```javascript
   player.body.setCollideWorldBounds(true);
   ```
   - This keeps the character inside the window
   - Try setting it to `false` - character can escape!

---

## Common Issues and Solutions

### Problem: Character moves too fast diagonally

**Why**: When moving diagonally (e.g., up+right), both X and Y velocities are applied, making the character move √2 faster.

**Solution (for future prototype)**: Normalize the velocity vector.

**For now**: Don't worry about it - we'll fix this later!

### Problem: Character stutters or lags

**Causes**:
- Computer is slow
- Too many browser tabs open
- Debugger slowing things down

**Solution**:
- Close other apps
- Close extra browser tabs
- Set `debug: false` in physics config (already done)

### Problem: Keys don't work

**Solution**:
- Click on the game canvas to give it focus
- Check browser console (F12) for errors

---

## Questions to Discuss

Use these as teaching moments:

1. **"Why does the game update 60 times per second?"**
   - So movement looks smooth
   - Movies are 24 frames per second - games need to be faster to feel responsive

2. **"What happens if MOVEMENT_SPEED is 0?"**
   - Character won't move at all!
   - Try it and see

3. **"Why start with a square instead of a cool character sprite?"**
   - Keep it simple first
   - Once movement works, we can make it look better
   - Gameplay before graphics!

4. **"Could we make it move with mouse clicks?"**
   - Yes! We'll learn that in a future prototype
   - For now, keyboard is simpler

---

## Next Steps

### After You Finish This Prototype

1. **Play with it**: Change numbers, break things, fix them
2. **Show someone**: Grandparents, friends, mom - share what you made!
3. **Fill out retrospective**: `prototypes/01-hello-world/README.md`
4. **Update mechanics library**: Document the movement mechanic
5. **Update learning log**: What did you learn today?

### Ideas for Future Prototypes

Things you might want to add (save for later prototypes):
- Walls that block movement (Prototype 02)
- A larger world with camera following (Prototype 03)
- Items to collect (Prototype 04)
- Enemies to avoid (Prototype 05)
- Character sprites instead of squares
- Sounds when moving
- Particle effects

**Don't add them yet!** Finish this prototype first. One thing at a time.

---

## Reference Materials

### Phaser 3 Docs

- **Rectangle**: https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Rectangle.html
- **Physics Body**: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html
- **Keyboard Input**: https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.html

### Tutorials

- **Making Your First Game**: https://phaser.io/tutorials/making-your-first-phaser-3-game

---

## Celebration Checklist

When you finish, celebrate these achievements:

- [ ] **You made your first video game!**
- [ ] **You can control a character with keyboard**
- [ ] **You understand coordinates (X, Y)**
- [ ] **You know what a game loop is**
- [ ] **You can change variables and see results**
- [ ] **You're ready for Prototype 02!**

---

**Ready to code?** Read this spec together, make sure you both understand the plan, then follow Phase 1 step-by-step. Have fun! 🎮
