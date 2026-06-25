---
name: run-implementation-task
description: Detect and execute the next implementation task from a repository's docs/implementation-tasks.md. Use when Codex must continue project work task-by-task from that implementation plan, infer the current task from repository state and optional GitHub issues, analyze the selected task, implement it, and explicitly avoid changing task status, labels, issue state, or project-board state.
---

# Run Implementation Task

## Overview

Use this skill to continue the repository implementation plan one task at a time. Detect the next task, analyze only that task and its applicable documentation, execute the implementation, and leave task tracking state unchanged.

## Workflow

1. Read the repository instructions first:
   - `AGENTS.md`
   - `docs/implementation-tasks.md`
   - Any document referenced by `AGENTS.md` that applies to the selected task.
2. Detect the next task to execute using `references/task-detection.md`.
3. Announce the selected task and the evidence used to choose it.
4. Analyze the selected task:
   - Extract its objective, included work, dependencies, and validation criteria.
   - Check whether it is in scope according to the project documentation.
   - Identify the minimum files likely to change.
5. Execute the selected task with small, scoped edits.
6. Validate against the task's own validation criteria and the repository's technical guidance.
7. Report what changed, what was validated, and any remaining blockers.

## Guardrails

- Do not change GitHub issue labels, issue state, project-board columns, or task status.
- Do not mark a task as done in documentation or remote trackers.
- Do not start a later task if an earlier dependency is incomplete.
- Do not add dependencies unless the repository documentation approves them or the user explicitly confirms the change.
- Keep implementation scope limited to the selected task.
- If the selected task requires a large scope expansion, stop and ask the user for confirmation before implementing.

## Output

When finishing, include:

- The task number and title selected.
- The files changed.
- The validation performed.
- Any reason the task could not be fully completed.
