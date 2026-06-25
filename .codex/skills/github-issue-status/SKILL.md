---
name: github-issue-status
description: Manage GitHub issue workflow status for a repository issue using the GitHub MCP. Use when Codex is given an issue number and a requested status change of doing or done, must read the issue, update its GitHub project/status field, create a local branch from dev for doing, or validate issue completion before moving it to done, without editing repository code.
---

# GitHub Issue Status

## Overview

Use this skill to move one GitHub issue through the repository workflow. Invoke it with exactly two task inputs:

- `issue_number`: a positive integer GitHub issue number.
- `change_type`: either `doing` or `done`.

Example invocation: `Use $github-issue-status issue_number=12 change_type=doing`.

Use the GitHub MCP for issue and project/status operations. Use local git only for inspecting the repository and, for `doing`, creating and switching to a branch from local `dev`.

## Input Rules

1. Normalize `change_type` to lowercase.
2. Continue only when `change_type` is exactly `doing` or `done`.
3. Continue only when `issue_number` is a positive integer.
4. If either input is missing or invalid, ask the user for the missing value and do not change GitHub or git state.

## Repository And Issue Discovery

1. Determine the GitHub owner and repository from the local `origin` remote when possible.
2. Read the issue with the GitHub MCP before making any change.
3. Confirm that the issue number, title, body, labels, project item, and current project/status field were inspected.
4. If the issue cannot be found, or the GitHub MCP is unavailable, stop and report the blocker.

## Doing Workflow

1. Read the issue with the GitHub MCP.
2. Change the issue's GitHub project/status field to `Doing`.
3. Inspect the local worktree with git.
4. If the worktree has uncommitted changes, stop before switching branches and ask the user how to proceed.
5. Switch to the local `dev` branch.
6. Create and switch to a new branch from local `dev`.
7. Name the branch with the issue number included, using this default pattern:

```text
issue-<issue_number>-<short-slug>
```

Use the issue title for `<short-slug>` when it is available. Keep it lowercase, hyphenated, and concise. If the title is unavailable, use `issue-<issue_number>`.

## Done Workflow

1. Read the issue with the GitHub MCP.
2. Extract the issue's validation rules from its body, task list, acceptance criteria, comments, or linked project context.
3. Verify every validation rule using available local evidence before changing the status.
4. Use non-mutating checks only. Reading files, inspecting git history, and running validation commands are allowed when appropriate. Do not edit code, docs, config, generated files, or dependency files.
5. If any rule is unmet, ambiguous, or unverifiable, do not move the issue to `Done`. Report the missing evidence or failed rule.
6. If all validation rules pass, change the issue's GitHub project/status field to `Done` with the GitHub MCP.

## Guardrails

- Do not edit repository code or documentation while using this skill.
- Do not add, remove, or update dependencies.
- Do not close or reopen the issue unless the user explicitly asks for that separate action.
- Do not use GitHub web browsing or the `gh` CLI for issue updates when the GitHub MCP is available.
- Do not use labels, milestones, or comments as a fallback for status changes unless the user explicitly confirms that workflow.
- Do not infer completion from branch names, comments, or intent alone; require validation evidence for `done`.
- Keep changes limited to GitHub issue/project status and the local git branch operation required by `doing`.

## Final Response

Report:

- The issue number and title.
- The requested change type.
- The GitHub status change performed, or why it was not performed.
- For `doing`, the branch created and the current branch.
- For `done`, the validation rules checked and the evidence used.
