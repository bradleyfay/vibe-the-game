# Learning Resources

Curated tutorials, documentation, and assets for game development with Phaser 3.

## Table of Contents

- [Phaser 3 Learning](#phaser-3-learning)
- [JavaScript for Python Developers](#javascript-for-python-developers)
- [Game Assets (Free)](#game-assets-free)
- [Game Design for Kids](#game-design-for-kids)
- [Tools](#tools)
- [Community & Help](#community--help)

---

## Phaser 3 Learning

### Official Documentation

**Phaser 3 Homepage**: https://phaser.io/
- Main documentation site
- API reference
- Examples browser

**Getting Started**: https://phaser.io/tutorials/getting-started-phaser3
- Official tutorial for complete beginners
- Covers setup, first game, and basic concepts
- Perfect starting point

**Making Your First Game**: https://phaser.io/tutorials/making-your-first-phaser-3-game
- Step-by-step tutorial series
- Builds a simple platformer
- Covers sprites, physics, collectibles

**API Documentation**: https://photonstorm.github.io/phaser3-docs/
- Complete API reference
- Search for any Phaser function or class
- Essential when you need details

### Video Tutorials (Kid-Friendly)

**Ourcade (YouTube)**: https://www.youtube.com/@ourcadehq
- Phaser 3 tutorials for all levels
- Clear explanations
- Many top-down game examples

**Game Dev Academy**: https://gamedevacademy.org/category/tutorials/phaser-tutorials/
- Written tutorials with code
- Beginner to advanced
- Good for top-down games

### Interactive Learning

**Phaser 3 Examples**: https://labs.phaser.io/
- 2000+ code examples
- Try them in browser
- See code side-by-side with result
- Great for "how do I do X?"

**CodePen Phaser Examples**: https://codepen.io/topic/phaser/picks
- Community-created games
- View source code
- Remix and experiment

---

## JavaScript for Python Developers

### Quick Comparison

**Variables**:
```python
# Python
x = 10
name = "player"
```

```javascript
// JavaScript
let x = 10;
const name = "player";
```

**Functions**:
```python
# Python
def move_player(speed):
    x = x + speed
    return x
```

```javascript
// JavaScript
function movePlayer(speed) {
    let x = x + speed;
    return x;
}
```

**Conditionals**:
```python
# Python
if x > 100:
    print("Fast!")
elif x > 50:
    print("Medium")
else:
    print("Slow")
```

```javascript
// JavaScript
if (x > 100) {
    console.log("Fast!");
} else if (x > 50) {
    console.log("Medium");
} else {
    console.log("Slow");
}
```

**Loops**:
```python
# Python
for i in range(10):
    print(i)
```

```javascript
// JavaScript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

### Key Differences

| Python | JavaScript | Notes |
|--------|------------|-------|
| Indentation matters | `{}` for blocks | JS uses braces |
| `def function():` | `function name()` | Different syntax |
| `print()` | `console.log()` | Different output |
| `True/False` | `true/false` | Lowercase in JS |
| `and/or/not` | `&&/\|\|/!` | Different operators |
| Lists: `[]` | Arrays: `[]` | Same syntax! |
| Dicts: `{}` | Objects: `{}` | Similar syntax |

### Online Resources

**JavaScript.info**: https://javascript.info/
- Modern JavaScript tutorial
- Beginner-friendly
- Focused on ES6+ (modern syntax)

**MDN JavaScript Guide**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- Mozilla's official JavaScript docs
- Comprehensive reference
- Good for looking up specific features

---

## Game Assets (Free)

### Sprite Assets

**Kenney.nl**: https://kenney.nl/assets
- **FREE (CC0 license)** - no attribution required
- Thousands of sprites, sounds, fonts
- Consistent art style
- Perfect for prototyping
- Recommended packs:
  - "Topdown Shooter" (characters, tiles)
  - "Platformer" (if you make a platformer)
  - "UI Pack" (buttons, health bars)

**OpenGameArt.org**: https://opengameart.org/
- Community-contributed assets
- **Check licenses** (varies by asset)
- Good variety
- Search for "top-down" or "tileset"

**Itch.io Free Assets**: https://itch.io/game-assets/free
- Indie developer marketplace
- Many free asset packs
- Check licenses (often CC-BY, requiring attribution)

### Sound Effects

**Freesound**: https://freesound.org/
- Free sound effects
- Check licenses (mostly CC)
- Great for:
  - Jump sounds
  - Collect item sounds
  - Background ambiance

**Kenney.nl Sounds**: https://kenney.nl/assets?s=audio
- Same as sprite assets
- CC0 license
- Consistent audio quality

### Music

**Incompetech**: https://incompetech.com/music/
- Royalty-free music
- Filter by mood/genre
- Good for background music
- Credit required but free

---

## Game Design for Kids

### Teaching Game Design Concepts

**Extra Credits (YouTube)**: https://www.youtube.com/@ExtraCredits
- "Game Design" series
- Explains why games are fun
- Kid-friendly explanations
- Watch together and discuss

**Game Maker's Toolkit**: https://www.youtube.com/@GMTK
- Analyzes game design
- "What makes a good tutorial?"
- "What makes a good boss fight?"
- Helps think critically about games

### Design Thinking for Games

**Questions to Ask**:
- What is fun about this?
- What does the player DO?
- What is the challenge?
- What is the reward?
- How do you teach the player?

**Core Gameplay Loop**:
1. Player takes action
2. Game responds
3. Player sees result
4. Player wants to do it again

**Example**: Mario
1. Player jumps (action)
2. Mario jumps, lands on enemy (response)
3. Enemy defeated, coin appears (result)
4. Want to jump on more enemies (repeat)

---

## Tools

### Game Development

**Tiled Map Editor**: https://www.mapeditor.org/
- **FREE** tilemap editor
- Creates levels/worlds
- Exports to Phaser-compatible format
- Essential for world-building (Prototype 03+)

**Aseprite**: https://www.aseprite.org/ ($20)
- Pixel art editor
- Create custom sprites
- Animation support
- Industry standard for indie games
- Or use free alternative: LibreSprite

### Graphics Tools

**Piskel (Free)**: https://www.piskelapp.com/
- Browser-based pixel art
- Completely free
- Good for simple sprites
- Export to PNG

**Photopea (Free)**: https://www.photopea.com/
- Free Photoshop alternative
- In browser
- Edit PNG/JPG images
- Resize, adjust colors

### Code Tools

**VS Code Extensions** (recommended):
- **Live Server**: Quick HTML preview
- **JavaScript (ES6) snippets**: Code shortcuts
- **Path Intellisense**: File path autocomplete
- **Prettier**: Code formatter
- **Bracket Pair Colorizer**: See matching `{}`

---

## Community & Help

### Official Phaser Community

**Phaser Discord**: https://discord.gg/phaser
- Active community
- Helpful developers
- Share your work
- Get quick answers

**Phaser Forum**: https://phaser.discourse.group/
- Official community forum
- Searchable history
- More in-depth discussions

### General Game Dev

**r/gamedev (Reddit)**: https://www.reddit.com/r/gamedev/
- Game development community
- "Screenshot Saturday" to share progress
- Lots of learning resources

**r/learnprogramming**: https://www.reddit.com/r/learnprogramming/
- Programming help
- Beginner-friendly
- JavaScript questions welcome

### Code Examples

**CodePen Phaser Tag**: https://codepen.io/topic/phaser
- Working examples
- View full source code
- Remix and experiment

**GitHub Phaser Examples**: https://github.com/topics/phaser-examples
- Open source games
- Learn from real projects
- See how others structure code

---

## Learning Path

### Session 1-2: Basics
- **Tutorial**: "Making Your First Phaser 3 Game" (official)
- **Concept**: Game loop, coordinates, input
- **Practice**: Character movement (Prototype 01)

### Session 3-5: Physics and Collision
- **Tutorial**: Phaser 3 Arcade Physics
- **Concept**: Collision detection, physics bodies
- **Practice**: Obstacles and walls (Prototype 02)

### Session 6-10: World Building
- **Tool**: Learn Tiled Map Editor
- **Tutorial**: "Top-Down Games with Tiled" (GameDev Academy)
- **Concept**: Tilemaps, camera, larger worlds
- **Practice**: World exploration (Prototype 03)

### Session 11-15: Game States
- **Tutorial**: Phaser Scenes documentation
- **Concept**: Multiple screens, game over, menus
- **Practice**: Collectibles and enemies (Prototypes 04-05)

### Session 16+: Polish and Abilities
- **Tutorial**: Phaser Animations
- **Concept**: Sprite animations, particle effects, abilities
- **Practice**: Player abilities (Prototype 06)

---

## Tips for Learning

### For Parent

1. **Don't try to learn everything**: Just-in-time learning as you need it
2. **Use the Examples browser**: Search "how to [X] in Phaser"
3. **Read error messages**: They're usually helpful
4. **Copy-paste-modify**: Start with working code, modify it
5. **It's okay to not know**: Learn alongside your son

### For Son (8 years old)

1. **Make changes and see what happens**: Experiment!
2. **Break things on purpose**: Learn by exploring
3. **Ask "what if?"**: What if speed was 1000? What if we had 100 enemies?
4. **Show your work**: Pride in creation motivates learning
5. **Bugs are puzzles**: Not failures, but mysteries to solve

### Together

1. **Read code out loud**: "IF player x is less than 0 THEN set x to 0"
2. **Draw concepts**: Coordinates on graph paper, game loop as cycle
3. **Play games critically**: "How do you think they made that work?"
4. **Celebrate small wins**: Every working feature is an achievement
5. **Have fun**: If it stops being fun, take a break

---

## Bookmarks

Quick links to keep handy:

- **Phaser 3 API Docs**: https://photonstorm.github.io/phaser3-docs/
- **Phaser Examples Browser**: https://labs.phaser.io/
- **Kenney.nl Assets**: https://kenney.nl/assets
- **Tiled Download**: https://www.mapeditor.org/
- **VS Code Download**: https://code.visualstudio.com/
- **MDN JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

**Remember**: You don't need to read everything at once. Bookmark this file and come back as you need specific resources!
