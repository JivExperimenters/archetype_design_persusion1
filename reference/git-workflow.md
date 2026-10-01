# Git workflow: make your contribution reviewable

[Home](../README.md) · [Assignment](../assignment.md) · [Templates](page-templates.md)

Git records how work changed. A pull request lets a teammate inspect your contribution before it joins the shared guide.

## 1. Claim a clear task

Create an issue with owner, reviewer, exact files, and completion checklist. One page or archetype package is a useful unit. Keep images with their page. If research was merged earlier, create a new issue/PR for its heroes.

Only the lead edits shared tables in README and assignment.md. Coordinate table updates in issues. Edit others' assigned files only by agreement.

## 2. Work on a branch

After cloning the team repository, replace example names and number:

```bash
git switch main
git pull --ff-only
git switch -c issue-12-explorer
# Create or edit your assigned page and images.
git status
git add archetypes/explorer.md assets/heroes/explorer/
git commit -m "Add Explorer package #12"
git push -u origin issue-12-explorer
```

Stage only your issue's files. Never push directly to main or force-push over teammates.

## 3. Open a pull request

Target main. Explain the change, link the page, include `Closes #12`, and request a teammate's review. Address comments with commits on the same branch.

## Review before merging

- **Evidence:** sources support explanations; images have credits.
- **Design:** archetype, named style, and persuasion mechanism are visible.
- **Action:** readable copy; CTA describes its destination.
- **Delivery:** requirements complete; images and links work in GitHub.

**Vague:** “Looks good.”

**Useful:** “You call this social proof, but nothing shows other people choosing the offer. Revise the example or reconsider the principle.”

Each student reviews another student's complete archetype package at least once. The lead merges reviewed, revised work. Resolve conflicts together without overwriting anyone.

## File organization

```text
members/first_last.md
archetypes/explorer.md
persuasion/reciprocity.md
modernism/style-name.md
postmodernism/style-name.md
assets/heroes/explorer/          # final images; drafts/ for rejected work
assets/references/style-name/    # historical images you may reproduce
```

Use descriptive lowercase filenames and relative links. Keep instructor examples in assets/tutorial/ separate from student work in assets/heroes/.
