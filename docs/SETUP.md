# Setup Guide

Complete setup instructions for getting started with game development.

## Prerequisites

### 1. Node.js and npm

**Check if already installed**:
```bash
node --version  # Should show v18.0.0 or higher
npm --version   # Should show v9.0.0 or higher
```

**If not installed**:
1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer
4. Restart your terminal
5. Verify installation with commands above

### 2. VS Code

**Check if already installed**:
- Look for VS Code in your Applications folder (macOS)
- Or search for "Visual Studio Code" in your system

**If not installed**:
1. Visit https://code.visualstudio.com/
2. Download for your operating system
3. Install the application
4. Open VS Code

**Recommended VS Code Extensions**:
- JavaScript (ES6) code snippets
- Live Server (for quick previews)
- Path Intellisense (file path autocomplete)

### 3. Web Browser

Any modern browser works:
- Chrome (recommended for game dev tools)
- Firefox
- Safari
- Edge

## Initial Setup

### Step 1: Clone or Download the Project

```bash
# If using git
cd ~/Projects
git clone [repository-url]
cd vibe-the-game

# Or download ZIP and extract to ~/Projects/vibe-the-game
```

### Step 2: Install Dependencies

```bash
# In the project root directory
npm install
```

This will:
- Download Phaser 3 (the game framework)
- Download Vite (the dev server)
- Create a `node_modules/` folder (ignored by git)

**Expected output**:
```
added 45 packages in 3s
```

### Step 3: Verify Setup

```bash
# Run the first prototype
npm run dev:01
```

**What should happen**:
1. Terminal shows "Local: `http://localhost:3000/`"
2. Browser opens automatically
3. You see the game page

**If something went wrong**, see Troubleshooting section below.

### Step 4: Test Hot Reload

With the dev server running:
1. Open `prototypes/01-hello-world/game.js` in VS Code (when you create it)
2. Change a number (like movement speed)
3. Save the file (Cmd+S or Ctrl+S)
4. Browser updates automatically in <1 second

This instant feedback is critical for learning!

## Project Structure Walkthrough

After setup, your project looks like this:

```
vibe-the-game/
├── node_modules/           # Dependencies (don't edit, git-ignored)
├── prototypes/             # Your game prototypes go here
│   ├── 01-hello-world/     # First prototype (movement)
│   ├── 02-obstacles/       # Second prototype (collision)
│   └── 03-world-exploration/ # Third prototype (world)
├── specs/                  # Design documents
├── docs/                   # Learning documentation (you are here!)
├── shared/                 # Reusable code (empty for now)
├── assets-library/         # Reusable game assets (sprites, sounds)
├── plan/                   # Technical planning documents
├── package.json            # Project configuration
├── vite.config.js          # Dev server configuration
└── README.md               # Project overview
```

## Understanding package.json Scripts

The `package.json` file defines commands you can run:

```json
"scripts": {
  "dev:01": "vite prototypes/01-hello-world --open",
  "dev:02": "vite prototypes/02-obstacles --open",
  ...
}
```

**What this means**:
- `npm run dev:01` → Runs Vite dev server for prototype 01
- `--open` → Automatically opens browser
- Each prototype has its own dev server

**Why separate commands?**
- Work on one prototype at a time
- Each is self-contained
- Easy to switch between experiments

## First-Time Workflow

### When Starting a New Session

```bash
# 1. Navigate to project
cd ~/Projects/vibe-the-game

# 2. (Optional) Pull latest changes if using git
git pull

# 3. Run the prototype you're working on
npm run dev:01

# 4. Open project in VS Code
code .
```

### During Development

1. **Make changes in VS Code**
2. **Save file** (Cmd+S / Ctrl+S)
3. **See instant update in browser** (<1 second)
4. **Experiment and iterate**

### When Ending a Session

1. **Stop dev server**: Press `Ctrl+C` in terminal
2. **Fill out retrospective**: Document what you learned
3. **Commit changes** (if appropriate):
   ```bash
   git add .
   git commit -m "feat(proto01): [what you did]"
   ```

## Troubleshooting

### Problem: "command not found: npm"

**Cause**: Node.js not installed or not in PATH

**Solution**:
1. Install Node.js from https://nodejs.org/
2. Restart terminal
3. Verify: `node --version`

### Problem: "Cannot find module 'phaser'"

**Cause**: Dependencies not installed

**Solution**:
```bash
npm install
```

### Problem: Browser doesn't open automatically

**Cause**: Vite can't detect default browser

**Solution**:
1. Note the URL in terminal (usually `http://localhost:3000/`)
2. Manually open browser and navigate to that URL
3. Or remove `--open` from script in `package.json`

### Problem: Port 3000 already in use

**Cause**: Another dev server running on port 3000

**Solution Option 1** (stop other server):
```bash
# Find what's using port 3000
lsof -ti:3000
# Kill that process
kill -9 [PID from above]
```

**Solution Option 2** (use different port):
- Edit `vite.config.js`, change `port: 3000` to `port: 3001`

### Problem: Blank screen in browser

**Causes**: Several possible issues

**Debug steps**:
1. Open browser console (F12 or Cmd+Option+I)
2. Look for error messages in red
3. Common issues:
   - File path wrong (check index.html)
   - JavaScript error (check game.js syntax)
   - Phaser not loaded (check dependencies)

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: Changes not appearing in browser

**Cause**: Cache or dev server not watching

**Solutions**:
1. **Hard refresh**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. **Check file saved**: Look for dot next to filename in VS Code
3. **Restart dev server**: Ctrl+C, then `npm run dev:01` again
4. **Clear browser cache**: Settings → Clear browsing data

### Problem: "Error: EACCES: permission denied"

**Cause**: Permission issue with npm global packages

**Solution**:
```bash
# Fix npm permissions (macOS/Linux)
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### Problem: Game runs but keyboard doesn't work

**Causes**: Keyboard focus issue

**Solutions**:
1. **Click on game canvas** to give it focus
2. **Check browser console** for errors
3. **Verify keyboard object** created correctly in code

### Problem: Parent stuck on JavaScript (coming from Python)

**Not really a problem!** JavaScript and Python are similar:

**Python → JavaScript Quick Reference**:
```python
# Python                  # JavaScript
def move():               function move() {
    x = 10                  let x = 10
    if x > 5:               if (x > 5) {
        print(x)                console.log(x)
                            }
                          }
```

**Key differences**:
- JavaScript uses `{}` for blocks (not indentation)
- JavaScript uses `let`/`const` (not just variable names)
- JavaScript uses `console.log()` (not `print()`)
- Functions use `function` keyword (Python uses `def`)

**Don't worry**: You'll pick it up quickly! Start by reading working code.

### Problem: Son losing interest during session

**Causes**: Session too long, frustration, or not enough control

**Solutions**:
- **Keep sessions 30-45 minutes max** (8-year-old attention span)
- **End on a win** (even if small progress)
- **Let him make decisions** (colors, speed, story)
- **Celebrate bugs** ("Interesting! What happened?")
- **Show visual progress** (commit after each feature works)

## Performance Tips

### Dev Server Performance

**Fast hot reload** (should be <1 second):
- This is normal and expected with Vite
- If slower, check for:
  - Large image files (optimize/compress)
  - Too many console.log() statements
  - Antivirus scanning node_modules

### Game Performance

**Targeting 60 FPS** (frames per second):
- Start simple, optimize later
- Use browser dev tools Performance tab
- Common issues:
  - Too many sprites on screen
  - Large unoptimized images
  - Physics calculations on too many objects

## Getting Help

**If you're stuck**:
1. Check this troubleshooting guide
2. Check `docs/RESOURCES.md` for tutorials
3. Read error messages carefully (they're helpful!)
4. Search Phaser documentation: https://phaser.io/docs
5. Ask Claude Code for help

**Remember**: Getting stuck is part of learning. Debug together, teach the debugging process!

## Next Steps

Once setup is complete:
1. Read `specs/GAME_VISION.md` (fill it out with your son)
2. Read `prototypes/01-hello-world/spec.md` (understand the plan)
3. Start implementing Prototype 01 together
4. Have fun!

## Quick Command Reference

```bash
# Development
npm run dev:01         # Run prototype 01
npm run dev:02         # Run prototype 02
npm run dev:03         # Run prototype 03

# Stop dev server
Ctrl+C

# Install dependencies
npm install

# Update dependencies (later)
npm update

# Check for outdated packages
npm outdated
```

---

**Setup complete?** Head to `prototypes/01-hello-world/spec.md` to start building! 🎮
