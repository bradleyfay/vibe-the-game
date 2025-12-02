# Parent Facilitation Guide

A practical guide for facilitating learning so you and your son discover together, rather than you just teaching.

## Core Philosophy: Learning Together

This isn't "Dad teaches son to code." This is **"We learn together."**

**Why this matters**:
- Your son learns that adults don't know everything
- You model curiosity and problem-solving
- Mistakes become shared discoveries
- The experience bonds you through collaboration

**Your role**: Guide, not lecturer. Explorer, not expert.

---

## Before Your First Session

### Mental Preparation

**Set realistic expectations**:
- ✅ He'll understand 60-70% of concepts the first time
- ✅ You'll spend more time debugging than coding
- ✅ Sessions will go off-script (that's good!)
- ✅ The best learning happens through experimentation
- ❌ Don't expect him to become a programmer overnight
- ❌ Don't worry about "perfect" code

**Your mindset**:
- "Let's figure this out together"
- "I wonder what happens if..."
- "That's interesting! Why did that happen?"
- "I don't know - let's look it up"

### Practical Preparation

**Environment setup** (do this before he sits down):
```bash
# Test that everything works
npm run dev:01

# Have docs open in browser
npm run docs:dev

# Have spec ready
code prototypes/01-hello-world/spec.md
```

**Have ready**:
- Scratch paper and pencil (for drawing coordinates, game loops)
- Snacks and water
- Timer (to keep sessions under 60 min)

---

## Session Structure

### The 45-Minute Flow

Perfect session structure for an 8-year-old:

**5 minutes - Check In & Setup**
- "What are we building today?"
- Review spec together (quickly)
- Get computer set up, open files

**10 minutes - Plan Together**
- "What do we need to make this work?"
- Draw concepts on paper (coordinates, game loop)
- Let him predict what will happen

**25 minutes - Code & Experiment**
- Follow the spec step-by-step
- **He types when possible** (even if slow)
- Test every 5-10 minutes
- Celebrate each small win

**5 minutes - Wrap Up**
- Play the game together
- "What was the coolest part?"
- Quick photo/video to show mom later
- Save and commit if complete

**Total**: 45 minutes (not 60+!)

### When to Take Breaks

Watch for these signs:
- Fidgeting or losing focus (break now!)
- Frustrated by same bug for 10+ minutes (walk away)
- Yawning or tired (session over)
- Getting silly/goofy (5-minute break)

**Break activities**:
- Get a snack
- Play the game we just made
- Show mom/sibling what we built
- Discuss what we'll add next time

---

## Facilitation Techniques

### 1. The Socratic Method (Questions > Answers)

**Instead of telling, ask**:

❌ "We need to set the velocity to 200"
✅ "How fast should the character move? Want to try different numbers?"

❌ "This is the game loop, it runs 60 times per second"
✅ "Why do you think the character keeps moving smoothly?"

❌ "The coordinates are X and Y"
✅ "If X is 400 and Y is 300, where would that be? Point to the spot"

**When to tell vs. ask**:
- **Ask** when he can figure it out or make a choice
- **Tell** when it's pure syntax or something he can't discover

### 2. Let Him Drive (Literally)

**Keyboard control**:
- **Age 8**: He types when possible, you guide
- **When stuck**: "Want me to type this tricky part?"
- **Share keyboard**: You type complex syntax, he types values/names

**Decision-making**:
- "What color should the character be?"
- "How fast is too fast? Let's try 500"
- "Should we make it bigger or smaller?"

**Every choice he makes increases investment**

### 3. Think-Aloud Protocol

**Model your thinking process**:

```
"Hmm, the character isn't moving. Let me think...
Is the keyboard set up? Let me check... yes, it's there.
Is the velocity being set? Let me add a console.log to see...
Oh! The velocity is 0. I bet we forgot to check if the key is pressed.
Let's look at that part of the code."
```

**Why this works**:
- Shows debugging is normal
- Teaches problem-solving process
- Reveals that you don't always know the answer

### 4. The "What If" Game

**Encourage experimentation**:

"What if we changed MOVEMENT_SPEED from 200 to..."
- 500? (too fast!)
- 50? (too slow!)
- 1000? (WOAH!)
- 0? (doesn't move at all!)

"What if the character was..."
- Huge? (change 32, 32 to 128, 128)
- Tiny? (change to 8, 8)
- A rectangle? (change 32, 64)

"What if we removed this line?"
- What breaks?
- Why do we need it?

**Safe experimentation builds confidence**

### 5. Celebrate Bugs as Puzzles

**When something breaks**:

❌ "Oh no, we messed up"
✅ "Interesting! Let's figure out what's happening"

❌ "That's wrong"
✅ "That's not what we expected - let's investigate!"

**Bug = Learning opportunity**:
1. "What did we expect to happen?"
2. "What actually happened?"
3. "Why might that be?"
4. "How can we test our theory?"

**Famous bugs you can share**:
- "When Mario was being created, the character would fall through the floor at first"
- "Minecraft's Creepers were actually a bug - a pig model glitched"
- "Bugs are how we discover how things really work!"

---

## Teaching Specific Concepts

### Coordinates (X, Y)

**Don't start with code - draw it**:

```
1. Draw a grid on paper (8x8 boxes)
2. Mark (0,0) in top-left corner
3. "Point to (3, 2)" - he finds it
4. Put a sticker there
5. "Now in the game, (400, 300) is the center"
6. Show in game - change position values
```

**When to introduce**:
- Prototype 01, before writing any code
- 5-10 minutes with paper
- Then reference in code: "Remember our grid?"

### Game Loop

**The toughest concept for young kids**:

**Bad explanation**: "The update function runs 60 times per second"
**Good explanation**:
1. "Let's add console.log('update!') in the update function"
2. "Watch the browser console - see it printing over and over?"
3. "That's the game loop - checking for keys, moving things, over and over"
4. "Like a flipbook - each page is one update"

**Physical analogy**:
- Make a flipbook together (10 pages, stick figure moves)
- "Games are flipbooks at 60 pages per second!"

### Variables

**Easiest concept - leverage it**:

```javascript
const MOVEMENT_SPEED = 200; // Try changing this!
```

**Do this together**:
1. Set to 200, run game
2. "Want it faster? What number should we try?"
3. He picks a number
4. Change it, save, watch instant update
5. "Too fast? Too slow? Just right?"

**This teaches**: Code changes behavior, experimentation is good, cause and effect

### Conditionals (if/then)

**Start with real life**:

"IF it's raining THEN bring an umbrella"
"IF you're hungry THEN eat a snack"
"IF timer goes off THEN wake up"

**Then connect to game**:
```javascript
if (cursors.left.isDown) {
    player.body.setVelocityX(-MOVEMENT_SPEED);
}
```

"IF left key is pressed THEN move left at MOVEMENT_SPEED"

**Have him write it in English first**:
- "IF _____ THEN _____"
- Then show the code version

### Functions

**Don't explain - show usage first**:

```javascript
// We use this function
this.physics.add.collider(player, walls);

// Later we can write our own
function makePlayerJump() {
    player.body.setVelocityY(-300);
}
```

**Explain as "name for a bunch of code"**:
- "Instead of writing 10 lines every time, give them a name"
- "Like a recipe name vs. writing all steps"

---

## Common Challenges & Solutions

### Challenge: "I don't get it"

**Don't**: Explain it again the same way
**Do**:
1. "What part is confusing?"
2. Draw it, act it out, or use analogy
3. "Want to see it in action first?"
4. Build it, THEN explain

### Challenge: "This is boring"

**Causes**:
- Too much explanation, not enough doing
- Not enough visible progress
- Too long without a win

**Solutions**:
- Less talking, more coding
- Test every 5 minutes
- Make something silly (speed = 1000!)
- Take a break

### Challenge: "I want to add [huge feature]"

**Don't**: Say no
**Do**:
1. "That's a cool idea! Let's write it down"
2. "Should we finish what we're building first?"
3. "Want to add your idea in the next prototype?"
4. Keep an "Ideas for Later" list

### Challenge: "You're doing all the work"

**True red flag** - step back:
1. "Want to type this part?"
2. "What should we do next?"
3. "Can you read the next line to me?"
4. Let him make ALL decisions for 5 minutes

### Challenge: Stuck on a bug for 15+ minutes

**Don't**: Power through
**Do**:
1. "Let's take a break"
2. "Want to show mom what we've built so far?"
3. "Should we try something else and come back?"
4. Rubber duck debugging: "Explain to me what you think should happen"

### Challenge: He wants to just play, not code

**This is fine sometimes!**
- Playing is learning (testing, game design)
- "What would make this more fun?"
- "Want to change something while we play?"
- Save coding for when energy returns

---

## Pacing & Progress

### Session Frequency

**Recommended**: 1-2 sessions per week
- More frequent: Skills build faster
- Less frequent: Need review each time

**Consistency matters more than frequency**:
- Same day/time helps
- Builds routine and expectations
- "Tuesday is game dev day!"

### Skill Development Timeline

**Session 1-2** (Prototype 01):
- Typing is slow, needs lots of guidance
- Every concept is new
- Lots of "what's this?" questions
- That's normal!

**Session 3-5** (Prototypes 02-03):
- Recognizes patterns
- "Oh, this is like that other thing!"
- Types a bit faster
- Can predict what code does

**Session 6-10** (Prototypes 03-04):
- Comfortable with basic concepts
- Can read code and understand it
- Makes connections independently
- Asks deeper questions

**Session 11+** (Prototypes 05-06):
- Suggests solutions to bugs
- Wants to try things independently
- Understands game loop, coordinates, variables
- Ready for more complex concepts

**Remember**: Kids learn in bursts, not linearly

### When to Move Forward

**Complete a prototype when**:
- ✅ All success criteria met
- ✅ He can explain what the code does
- ✅ He's played it and had fun
- ✅ Retrospective is filled out

**Don't wait for**:
- ❌ "Perfect" code
- ❌ Him understanding everything deeply
- ❌ Adding every idea he mentioned
- ❌ Bug-free experience

**Progress > Perfection**

---

## Mindset & Language

### Growth Mindset Phrases

**Use these**:
- "You haven't figured it out *yet*"
- "Let's try a different approach"
- "What did we learn from that bug?"
- "Even professional developers get stuck"
- "I don't know - let's look it up together"

**Avoid these**:
- "That's wrong"
- "You should know this"
- "We already learned this"
- "Let me just do it"

### Celebrate Process, Not Just Results

**Good**: "I love how you tried three different numbers to find the right speed!"
**Better**: "You're thinking like a game developer!"

**Good**: "You fixed that bug!"
**Better**: "You debugged that like a pro - you checked each step!"

**Good**: "The game works!"
**Better**: "You made your first game from scratch!"

---

## Real Session Examples

### Example: Good First Session

**Setting**: 40 minutes, Saturday morning, snacks ready

**5 min - Setup**:
- "Today we're making a character move!"
- Drew coordinates on paper, explained briefly
- Opened spec, skimmed it together

**25 min - Coding**:
- Son typed when possible, dad guided
- Created HTML (dad typed structure, son chose title)
- Created JavaScript (son typed values, dad typed syntax)
- Tested every section: "Press arrow keys! It works!"
- Tried different speeds: 50, 200, 500, 1000 (laughed at 1000)

**5 min - Experimenting**:
- Changed colors: red → green → blue
- Made it huge: 128x128
- Took screenshot

**5 min - Wrap**:
- Showed mom, she played it
- "Next time we'll add walls!"
- High five!

**Result**: Successful, energized, wants more

---

### Example: Struggling Session

**Setting**: 60 minutes, after school (tired), no breaks

**First 20 min**:
- Dad explained game loop concept for 10 minutes
- Son looked confused, fidgeting
- Dad kept explaining (mistake!)

**Next 30 min**:
- Tried to type everything perfectly
- Syntax error, took 15 minutes to find
- Son lost interest, watching instead of participating
- Dad did most of the typing

**Last 10 min**:
- Code finally worked
- But son was tired, didn't care
- "Can we be done?"

**Mistakes**:
- Too long (60 min)
- Too much explanation upfront
- Didn't let son experiment
- Didn't take breaks

**How to fix for next time**:
- Shorter sessions (45 min max)
- Less explaining, more doing
- Let him type and make choices
- Take a 5-minute break halfway

---

## Quick Reference: Session Checklist

### Before Starting
- [ ] Environment tested (`npm run dev:01` works)
- [ ] Spec open in browser or VS Code
- [ ] Snacks and water ready
- [ ] Timer set for 45 minutes
- [ ] You've read the spec (know what's coming)

### During Session
- [ ] He's making decisions (colors, speed, names)
- [ ] He's typing when possible
- [ ] Testing every 5-10 minutes
- [ ] Celebrating small wins
- [ ] Explaining WHY, not just WHAT
- [ ] Taking breaks when needed

### After Session
- [ ] Played the game together
- [ ] Took screenshot or video
- [ ] Started retrospective (at least "What worked well")
- [ ] Committed if complete
- [ ] Showed someone else
- [ ] Discussed what's next
- [ ] He's excited for next session

---

## Your Questions Answered

### "What if I don't understand JavaScript?"

**You don't need to!**
- You're learning together
- Use the code examples in the specs
- Read error messages out loud together
- "Let's Google this: 'Phaser velocity not working'"
- He learns that adults don't know everything

### "What if I can't answer his questions?"

**Perfect teachable moment**:
- "Great question! Let's look it up"
- Open docs together: https://phaser.io/docs
- "I'm not sure - let's try it and see"
- He learns: Research is part of coding

### "How much should I prepare?"

**15 minutes before session**:
1. Read the spec (5 min)
2. Test that dev server works (2 min)
3. Skim relevant docs pages (5 min)
4. Think of one analogy for main concept (3 min)

**That's it!** Over-preparation can make you lecture instead of explore

### "Should we code during the week between sessions?"

**Let him decide**:
- If he wants to: Awesome! Let him experiment
- If not: Totally fine, wait for next session
- Don't pressure - keep it fun

**If he codes solo**:
- Great! He's invested
- Review what he did at start of next session
- Celebrate his initiative

### "When should we move to 3D?"

**Not for 6-12 months!**
- Complete all 6 prototypes first
- Build at least one complete 2D game
- Make sure he's comfortable with 2D concepts
- 3D is much harder - master 2D deeply first

### "What if he gets frustrated and wants to quit?"

**In the moment**:
1. "Let's take a break" (immediately)
2. Do something else for 10 minutes
3. "Want to try one more thing?"
4. If still frustrated: "Let's stop for today, that's okay"

**Long-term**:
- Shorter sessions
- Easier success criteria
- More experimentation, less "right answers"
- Show game to others (builds pride)

**Remember**: Frustration is normal, but forced frustration kills love of learning

---

## Final Thoughts

### You've Got This

You don't need to be a programmer to facilitate learning. You need to be:
- **Curious**: "I wonder what happens if..."
- **Patient**: Learning takes time
- **Playful**: Make it silly, have fun
- **Present**: Put phone away, be there

### The Goal Isn't Perfection

**Success looks like**:
- He's excited for the next session
- He talks about the game at dinner
- He shows friends what he made
- He says "I made this!"

**Success is NOT**:
- Perfect code
- Deep understanding of everything
- Completing prototypes quickly
- Him becoming a programmer

### The Real Learning

Technical skills are great, but the real learning is:
- **Problem-solving**: Breaking big challenges into small steps
- **Resilience**: Bugs are puzzles, not failures
- **Creativity**: Expressing ideas through code
- **Collaboration**: Building something together
- **Pride**: "I made this!" is powerful

### You're Teaching More Than Code

Every session teaches:
- Adults don't know everything
- Learning is exploration, not memorization
- Mistakes are how we learn
- Dad values spending time with me
- Building things is rewarding

**That's worth more than any code you write.**

---

## Need Help?

**During a session**:
- Pause, check `docs/SETUP.md` troubleshooting
- Search Phaser docs: https://phaser.io/docs
- Ask Claude Code for help

**Between sessions**:
- Review retrospectives - what worked/didn't
- Ask in parent communities (Reddit: r/learnprogramming)
- Adjust based on what you learn about your son

**Remember**: Every kid learns differently. These are guidelines, not rules. Adapt to what works for your son.

---

**You're doing something amazing. Enjoy the journey!** 🎮👨‍👦
