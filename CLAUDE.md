# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This is a collaborative game development project between a parent and their 8-year-old son. The goals are:

1. **Educational Experience**: Teach game development concepts in an age-appropriate way
2. **LLM Collaboration**: Demonstrate how to work with AI tools to build real projects
3. **Planning & Execution**: Show the process of going from complex idea → concrete plan → achievable tasks

## Communication Style for This Project

**When interacting:**
- Use clear, simple language that an 8-year-old can understand
- Break down complex concepts into digestible pieces
- Celebrate small wins and progress
- Make the process fun and engaging
- Ask for input and ideas from both collaborators
- Explain technical decisions in accessible terms

**When explaining code:**
- Use analogies and real-world comparisons
- Show visual or interactive examples when possible
- Explain WHY things work, not just WHAT they do
- Encourage questions and experimentation

## Project Workflow

### From Idea to Implementation

This project emphasizes the software development lifecycle:

1. **Idea Phase**: Capture the creative vision
   - What kind of game do we want to make?
   - What will make it fun?
   - What do players do?

2. **Planning Phase**: Break down into concrete steps
   - What are the main features?
   - What do we build first?
   - What can we add later?

3. **Task Phase**: Create achievable, small tasks
   - Each task should feel accomplishable
   - Tasks should build on each other
   - Success should be visible

4. **Implementation**: Write the code together
   - Explain what you're doing as you go
   - Test frequently
   - Show progress often

### Making Changes

- **Always explain the plan before coding**: Help both collaborators understand what will happen
- **Use the TodoWrite tool**: Make the task list visible so everyone can see progress
- **Test immediately**: Show results right away so the impact is clear
- **Iterate based on feedback**: This is a learning process, not a race

## Technical Considerations

### Technology Choices

When suggesting technology, prioritize:
- **Immediate feedback loops**: Choose tools that show results quickly
- **Visual output**: Games should be visible and interactive
- **Simple setup**: Minimize installation and configuration friction
- **Age-appropriate complexity**: Start simple, add complexity gradually

### Recommended Stack (when needed)

- **Web-based games**: HTML5 Canvas, JavaScript - runs in browser, no install
- **Python games**: Pygame - simple, visual, great for learning
- **Scratch-style**: Consider visual programming concepts for early stages

### Code Structure

- **Start with one file**: Don't over-architect early
- **Extract when needed**: Refactor only when the current approach becomes limiting
- **Comment generously**: Explain the "why" behind game logic
- **Use descriptive names**: Variable and function names should be self-documenting

## Game Development Patterns

### Start Simple, Then Enhance

A good progression for game development with young learners:

1. **Static screen**: Just draw something
2. **Add movement**: Make one thing move
3. **Add control**: Respond to keyboard/mouse
4. **Add objective**: Give the player something to do
5. **Add challenge**: Make it interesting
6. **Polish**: Make it feel good to play

### Show Progress Frequently

- Commit after each visible improvement
- Use conventional commits but keep descriptions simple
- Each commit should represent a working state
- Test changes before committing

## Educational Moments

When opportunities arise, teach:

- **Coordinates and math**: Game positioning teaches real math concepts
- **Logic and conditionals**: Game rules are if/then statements
- **Variables and state**: Scores and lives demonstrate data management
- **Functions and reuse**: Repeated game actions become functions
- **Debugging**: Problems are puzzles to solve together

## Collaboration Tips

- **Involve the young developer**: Ask "What should happen next?" frequently
- **Offer choices**: Present 2-3 options rather than just implementing
- **Encourage experimentation**: "What if we changed this number?"
- **Make it playable early**: A simple, playable game beats a complex, broken one
- **Balance teaching and doing**: Sometimes explain, sometimes just show

## Project Evolution

As the project grows:
- Update this file with learnings
- Document patterns that work well
- Note what the young developer enjoyed most
- Track skill progression
- Celebrate milestones

---

## Technical Decisions Made

### Technology Stack

**Decision**: Phaser 3 + JavaScript (NOT Python)

**Date**: 2025-12-02

**Rationale**:
- **Fast feedback loops**: <1 second hot reload vs 3-10 seconds for PyScript
  - Critical for keeping 8-year-old engaged
  - Instant visual feedback reinforces learning
- **Built for games**: Phaser is THE web game framework
  - Arcade physics, tilemaps, animations out of the box
  - Perfect for top-down adventure games
- **Mature ecosystem**: 10+ years production-ready
  - Tons of tutorials specifically for kids
  - Large community for help
- **JavaScript is learnable**: Parent can pick up basics in a weekend
  - Syntax similar enough to Python
  - Worth the learning curve for vastly better game dev experience

**Trade-off Acknowledged**: Parent learns new language, but payoff justifies the cost.

### Development Environment

- **Runtime**: Web browser (Vite dev server)
- **Dev Server**: Vite (instant hot reload, zero config)
- **Package Manager**: npm
- **Editor**: VS Code
- **Testing**: Manual playtesting

### Project Structure: Prototype-Centric

**Decision**: Use prototype-centric structure instead of traditional src/

**Structure**:
```
prototypes/
  01-hello-world/      # Self-contained experiment
  02-obstacles/        # Each builds on learnings
  03-world-exploration/
```

**Why**:
- Each prototype is self-contained experiment
- Failed experiments are learning moments, not failures
- Son can see progression: "Look how far from 01-hello-world!"
- Easy to start fresh without fear of "breaking" things
- Can always reference previous prototypes

### Spec-Driven Development Workflow

**Four Document Types**:

1. **Game Vision** (`specs/GAME_VISION.md`)
   - The big dream (3D like Fortnite!)
   - Updated after playtests
   - Keeps ultimate goal visible

2. **Mechanics Library** (`specs/MECHANICS_LIBRARY.md`)
   - Catalog of implemented mechanics
   - Documents what works
   - Teaches pattern recognition

3. **Feature Specs** (per-prototype `spec.md`)
   - Written BEFORE coding
   - Clear success criteria
   - Step-by-step implementation plan

4. **Retrospectives** (per-prototype `README.md`)
   - Written AFTER completion
   - Captures learnings
   - Celebrates progress

**Session Flow**:
Vision → Spec → Implement → Test → Update Library → Retrospective → Commit

### Prototype Roadmap

**01 - Hello World** (Session 1):
- Character movement with keyboard
- Learning: Coordinates, game loop, variables

**02 - Obstacles** (Sessions 2-3):
- Collision detection
- Learning: Physics, collision

**03 - World Exploration** (Sessions 4-6):
- Tilemap world, camera following
- Learning: Tilemaps, camera system

**04 - Collectibles** (Sessions 7-8):
- Items, score tracking
- Learning: State management, UI

**05 - Enemy** (Sessions 9-11):
- Moving obstacle, game over
- Learning: Game states, AI basics

**06 - Abilities** (Sessions 12-15):
- Attack/dash, animations
- Learning: Abilities, timers

### Path to 3D (Future)

**Timeline**: Not before 6-12 months of 2D

**Why Wait**:
- 3D math significantly harder
- Longer feedback loops (kills engagement)
- Asset creation more complex
- Master 2D deeply first

**Progressive Path**:
1. Add 3D backgrounds to 2D game
2. Hybrid 2D gameplay in 3D world
3. Full 3D with Three.js/Babylon.js

### Commit Message Convention

Always use conventional commits:

```
feat(proto01): implement character movement

- Add WASD and arrow key controls
- Implement boundary checking
- Include MOVEMENT_SPEED experimentation variable

This is the first working prototype! Son can now move a character
around the screen and experiment with changing the speed.

🤖 Generated with Claude Code (https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Format**: `type(scope): description`

**Types**: feat, fix, docs, refactor, test, chore

**Scopes**: proto01, proto02, docs, setup, config, etc.

---

## Key Files Reference

### For Development

- `package.json`: Dependencies and npm scripts
- `vite.config.js`: Dev server configuration
- `prototypes/[XX-name]/spec.md`: Feature specification (plan before code)
- `prototypes/[XX-name]/README.md`: Retrospective (document after code)

### For Planning

- `specs/GAME_VISION.md`: Ultimate dream game
- `specs/MECHANICS_LIBRARY.md`: Catalog of mechanics
- `specs/templates/`: Reusable templates
- `plan/`: Technical planning documents

### For Learning

- `docs/SETUP.md`: Detailed setup instructions
- `docs/LEARNING_LOG.md`: Session-by-session journal
- `docs/RESOURCES.md`: Curated tutorials and resources

---

**Remember**: The code quality matters less than the learning experience and sense of accomplishment. Build something that works, that's fun, and that teaches. Optimize for joy and understanding.
