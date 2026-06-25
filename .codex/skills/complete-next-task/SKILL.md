---
name: complete-next-task
description: Orchestrate the full repository workflow for exactly one pending implementation task: select the first incomplete task from docs/implementation-tasks.md, match it to an explicit Todo GitHub issue, move the issue to Doing, implement and verify the task, create and push one commit, then move the issue to Done only after all checks pass. Use when Codex is asked to complete the next project task end to end with GitHub issue status and commit workflow coordination.
---

# Complete Next Task

## Overview

Use this skill as an orchestrator for exactly one project task. It coordinates the required specialist skills and defines the handoff data, stop points, and mandatory order; it must not duplicate or replace their detailed instructions.

## Required Skills

Load these skills before making GitHub, git, or repository changes:

- `$run-implementation-task` from `.codex/skills/run-implementation-task/SKILL.md`
- `$github-issue-status` from `.codex/skills/github-issue-status/SKILL.md`
- `$create-commit` from `C:\Users\usuario\.codex\skills\create-commit\SKILL.md`

If any required skill is unavailable, cannot be loaded, or rejects its operation, stop and report that exact blocker. Do not substitute a required skill with direct commands, GitHub calls, ad hoc scripts, or duplicated logic.

Compatibility note: if the user says `$implement-next-task` while linking to `.codex/skills/run-implementation-task/SKILL.md`, treat that as the repository implementation skill `$run-implementation-task`. If a separate `$implement-next-task` skill is explicitly required and is not available, stop.

During each phase, the specialist skill's own restrictions prevail. The orchestrator may only add sequencing, inputs, outputs, and stop conditions around that specialist phase.

## Mandatory Workflow

1. Load the required skills and confirm the repository context.
2. Use `$run-implementation-task` instructions to detect the first incomplete task from `docs/implementation-tasks.md`; do not implement yet.
3. Find the associated GitHub issue number by comparing that selected task with GitHub issues currently in Todo state.
4. Stop before modifying GitHub or the repository if the association is missing, ambiguous, inferred only by similarity, or points to an issue that is not in Todo.
5. Invoke `$github-issue-status issue_number=<ISSUE_NUMBER> change_type=doing`.
6. Use `$run-implementation-task` instructions to implement exactly the selected task and no later task.
7. Verify every acceptance criterion for the selected task with local evidence.
8. Verify the current branch includes the issue number. Branch creation and checkout normally happen inside the `doing` phase because `$github-issue-status` owns that workflow.
9. Invoke `$create-commit issue_number=<ISSUE_NUMBER>` to propose, validate with commitlint, request approval, create exactly one commit, and push it.
10. Verify that the commit exists locally and that the pushed branch contains that commit.
11. Invoke `$github-issue-status issue_number=<ISSUE_NUMBER> change_type=done` only when implementation validation, commit creation, and push verification all passed.
12. Report the final result or the exact step where the flow stopped.

Do not start, implement, commit, or mark done more than one task.

## Issue Association Rules

Use read-only GitHub/project inspection only to identify candidate Todo issues. This discovery is not a replacement for `$github-issue-status`, which must perform all status changes.

Accept the issue association only when it is explicit and unique:

- The selected implementation task text contains a GitHub issue number or URL that matches one Todo issue.
- Or exactly one Todo issue explicitly references the selected task number/title from `docs/implementation-tasks.md`.
- Or the implementation document contains a dedicated mapping between the selected task and one Todo issue.

Reject the association and stop when:

- No Todo issue explicitly matches the selected task.
- Multiple Todo issues match the selected task.
- The match depends only on semantic similarity or agent judgment.
- The issue is closed, not inspectable, or not in Todo.

When stopping for missing association, ask for the implementation task to be updated with an explicit issue link or number.

## Handoff Data

Carry these values between phases and include them in the final report:

- Selected task number/title and the evidence used to choose it.
- Issue number, title, URL if available, and evidence of explicit association.
- Branch name and current branch after the `doing` phase.
- Files changed by the implementation phase.
- Acceptance criteria checked and the local evidence for each check.
- Commit header, commit hash, and push target from `$create-commit`.
- Result of the final `done` status attempt.

## Stop Points

Stop immediately and report clearly when any of these occurs:

- A required skill cannot be loaded or refuses the operation.
- The next task cannot be selected with `$run-implementation-task` rules.
- The selected task has no unequivocal Todo issue association.
- `$github-issue-status ... doing` does not complete successfully.
- Implementation would require a major scope expansion or a dependency change without user confirmation.
- Any acceptance criterion fails, is ambiguous, or lacks local evidence.
- The current branch does not include the issue number before commit creation.
- `$create-commit` does not create and push exactly one approved commit.
- Local verification cannot prove the pushed branch contains the created commit.
- `$github-issue-status ... done` refuses or cannot verify completion.

When stopped, do not continue to later phases. Preserve the worktree and report what remains to unblock the next run.

## Final Response

Report concise status in this order:

1. Completed phase or stop point.
2. Selected task and issue.
3. Branch, commit hash, and push target when available.
4. Validation evidence summary.
5. GitHub status changes performed or skipped.
6. Any required user action to continue.
