# Brand Archetypes, Design Styles, and Persuasion
## A Collaborative Survival Guide

Build a practical reference for understanding brand archetypes, applying Robert Cialdini’s principles of persuasion, and recognizing design styles within modernism and postmodernism.

This is also an exercise in **Git collaboration**: organizing work with issues, assigning ownership, working on branches, reviewing changes, and merging without overwriting each other’s work.

## 1. Form Your Team

Form a group of **four**. Choose a **project lead** and assign one topic to each member. The lead also owns a topic.

| Topic | Required Pages | Owner |
|---|---:|---|
| [Brand Archetypes](archetypes/README.md) | 12 archetypes | TBD  |
| [Principles of Persuasion](persuasion/README.md) | 7 principles | TBD  |
| [Modernist Design](modernism/README.md) | 6 styles | TBD  |
| [Postmodernist Design](postmodernism/README.md) | 6 styles | TBD  |

**The project lead:**
- Creates the shared repository, invites teammates as collaborators, and ensures everyone can clone it.
- Coordinates issue assignments and file ownership.
- Maintains this root README, including member links.
- Ensures pull requests receive review and merges approved work.

The lead coordinates the project; **they do not do everyone’s work**. Each member maintains their topic folder and its `README.md` index.

## 2. Assignment One: Discover Your Archetype

Each member creates an issue for their personal page, assigns it to themselves, and completes the work on a branch.

Ask an AI assistant to help identify your brand archetype. Ask follow-up questions rather than accepting its first answer.

Create `members/first_last.md` containing:
- Your name and chosen archetype.
- Why the AI suggested it and whether you agree.
- Suggested imagery, colors, fonts, and sample phrasing.
- Examples of applying Cialdini’s persuasion principles to your personal brand, with explanations.

The project lead adds each member’s name, archetype, and page link below.

### Team Members

<!-- Example: - [Keith Williams](members/keith_williams.md) — Explorer -->

## 3. Assignment Two: Create a Sample Page

Each member creates **one complete sample page** for their assigned topic—for example, Explorer, Unity, or a selected design style.

Have it ready for the next class. Review the samples together and agree on a reusable format **before producing the remaining pages**.

Every topic page should include:
- **What it is:** A clear definition and essential characteristics.
- **When to use it:** The audience, purpose, and situations it suits.
- **How to apply it:** Practical guidance for imagery, color, typography, layout, or wording, as relevant.
- **Examples:** Relevant images and real-world examples with explanations.
- **Sources:** Links to primary sources and image credits.
- **Navigation:** A link back to the topic index.

Design-style pages should also explain historical context and how the style supports, develops, or challenges modernist ideas.

## 4. Assignment Three: Complete the Guide

Use the approved format to finish the required pages in the topic table. Agree on the six styles in each design category before writing.

Each member creates issues for their remaining pages and updates their topic index with links.

**AI is a collaborator, not a source of truth.** Verify claims, check sources, and edit the output into a useful guide you understand.

## 5. Collaboration Workflow: Issue → Branch → Pull Request

### Plan the work

Create an issue **before editing**. Include:
- A specific title, such as `Add Explorer archetype guide`.
- One assigned owner.
- The exact files being created or changed.
- A checklist defining when the task is complete.

The project lead checks for overlapping assignments. Discuss ownership in the issue before starting.

### Create a branch

Start from an updated `main`. Replace the example issue number and branch name with your own.

```bash
git switch main
git pull --ff-only
git switch -c issue-12-explorer
```

### Commit and push

Stage only the files belonging to your issue. Reference the issue number in your commit message.

```bash
git status
git add archetypes/explorer.md
git commit -m "Add Explorer archetype guide #12"
git push -u origin issue-12-explorer
```

### Request review

Open a pull request into `main`. Explain what changed and include `Closes #12` in its description.

Another teammate reviews the content, sources, formatting, and links. Address feedback on the same branch. The project lead merges approved work.

## 6. Don’t Step on Each Other’s Toes

- **Never push directly to `main`.** Use your own branch and a pull request.
- **Respect file ownership.** Only the lead edits the root README; topic owners edit their assigned folders.
- **Coordinate shared changes in an issue.** Do not edit someone else’s files without agreement.
- **Avoid overlapping work.** Merge an existing task before starting another that changes the same files.
- **Do not force-push or overwrite a teammate’s work to fix a conflict.** Resolve it together.

**Done means:** the page meets its checklist, its sources and links work, another teammate has reviewed it, and the pull request has been merged.
