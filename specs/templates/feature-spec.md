# Prototype [NUMBER]: [NAME]

Feature specification - write this BEFORE coding!

## Overview

**Goal**: [What are we trying to accomplish in this prototype?]

**Duration Estimate**: [e.g., 1-2 sessions, ~60-90 minutes]

**Prerequisite Prototypes**: [e.g., Must complete Prototype 01 first]

---

## Success Criteria

What must work for this prototype to be "done"? Check these off as you complete them:

- [ ] [Specific, testable criterion 1]
- [ ] [Specific, testable criterion 2]
- [ ] [Specific, testable criterion 3]
- [ ] [Specific, testable criterion 4]
- [ ] [Specific, testable criterion 5]

**Definition of Done**: All boxes checked, game runs without errors, both parent and son can play it.

---

## Mechanics Used

Which mechanics from the Mechanics Library will this prototype use?

### New Mechanics (Implementing for First Time)

1. **[Mechanic Name]**
   - What it does: [Brief description]
   - Reference: See `specs/MECHANICS_LIBRARY.md#[mechanic-name]` (will document after implementing)

2. **[Mechanic Name]**
   - What it does: [Brief description]

### Existing Mechanics (Reusing from Previous Prototypes)

1. **[Mechanic Name]** (from Prototype [XX])
   - Code location: `prototypes/[XX-name]/[file]`
   - Will copy/adapt: [What needs to change]

---

## Assets Needed

What sprites, sounds, and other assets do we need?

### Graphics

| Asset | Description | Size | Source | Status |
|-------|-------------|------|--------|--------|
| [e.g., Player sprite] | [Red square] | [32x32px] | [Draw in code] | [Ready] |
| [e.g., Wall tile] | [Gray rectangle] | [64x64px] | [Draw in code] | [Ready] |
| [e.g., Background] | [Blue fill] | [Full screen] | [Phaser built-in] | [Ready] |

### Sounds (Optional)

| Sound | Description | Source | Status |
|-------|-------------|--------|--------|
| [e.g., Collect item] | [Ding sound] | [Freesound.org] | [Need to find] |

### Other Assets

- [e.g., Tilemap JSON file]
- [e.g., Font for score display]

---

## Step-by-Step Code Plan

Break down implementation into small, sequential steps:

### Phase 1: Setup (5-10 minutes)

1. **Create project files**
   - [ ] Create `prototypes/[XX-name]/index.html`
   - [ ] Create `prototypes/[XX-name]/game.js`
   - [ ] Copy structure from previous prototype

2. **Verify it runs**
   - [ ] Run `npm run dev:[XX]`
   - [ ] See blank game window
   - [ ] Hot reload works

### Phase 2: Core Feature (20-30 minutes)

3. **[First major feature]**
   - [ ] [Sub-step 1]
   - [ ] [Sub-step 2]
   - [ ] [Sub-step 3]
   - [ ] Test: [What you expect to see]

4. **[Second major feature]**
   - [ ] [Sub-step 1]
   - [ ] [Sub-step 2]
   - [ ] Test: [What you expect to see]

### Phase 3: Enhancement (10-15 minutes)

5. **[Polish or additional feature]**
   - [ ] [Sub-step 1]
   - [ ] [Sub-step 2]

6. **[Another enhancement]**
   - [ ] [Sub-step 1]

### Phase 4: Testing & Polish (10-15 minutes)

7. **Test all success criteria**
   - [ ] Go through checklist at top
   - [ ] Fix any bugs found
   - [ ] Let son test and play

8. **Clean up**
   - [ ] Add comments to code
   - [ ] Remove console.log() statements
   - [ ] Check for errors in browser console

---

## Questions to Answer

Things to figure out during implementation:

- [ ] [Question 1: e.g., "How fast should enemies move?"]
- [ ] [Question 2: e.g., "Should diagonal movement be slower?"]
- [ ] [Question 3: e.g., "What happens when player reaches edge of world?"]

---

## Learning Goals

What should we learn from this prototype?

### For Son (Primary Learner)

**Technical Concepts**:
- [e.g., "Collision detection - how objects know they're touching"]
- [e.g., "Boolean logic - true/false values"]

**Game Design Concepts**:
- [e.g., "Obstacles create challenge"]
- [e.g., "Level design - where to place things"]

**Soft Skills**:
- [e.g., "Breaking big problems into small steps"]
- [e.g., "Testing as you go"]

### For Parent (Secondary Learner)

**Technical**:
- [e.g., "Phaser physics system"]
- [e.g., "JavaScript arrow functions"]

**Teaching**:
- [e.g., "How to explain collision without too much math"]
- [e.g., "When to let him experiment vs. guide"]

---

## Risks & Mitigation

What might go wrong and how do we handle it?

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| [e.g., "Too complex for one session"] | [High - lose interest] | [Medium] | [Break into smaller prototype] |
| [e.g., "Bug we can't figure out"] | [Medium - frustration] | [Low] | [Have fallback simplified version] |

---

## Connection to Game Vision

How does this prototype move us toward the ultimate vision?

**Vision element**: [e.g., "Exploring a large world"]

**This prototype provides**: [e.g., "Basic movement through space, which is foundation for exploration"]

**Next prototype will add**: [e.g., "Larger world with camera following, making exploration feel real"]

---

## Reference Materials

Links to tutorials, documentation, or examples:

- [Link to Phaser docs page]
- [Link to tutorial video]
- [Link to similar game example]

---

## Notes

[Any additional notes, ideas, or reminders]

---

## After Implementation

Once you've built this prototype, remember to:

1. [ ] Update `specs/MECHANICS_LIBRARY.md` with new mechanics
2. [ ] Fill out retrospective (`prototypes/[XX-name]/README.md`)
3. [ ] Update `docs/LEARNING_LOG.md` with session notes
4. [ ] Commit with conventional commit message
5. [ ] Plan next prototype

---

**Ready to code?** Review this spec together, make sure you both understand the plan, then start Phase 1!
