# Task Detection

Use this reference when deciding which task from `docs/implementation-tasks.md` should be executed next.

## Inputs

- `docs/implementation-tasks.md` is the source of task order, dependencies, descriptions, and validation criteria.
- Local repository state is the primary implementation signal.
- GitHub issues or labels may be read as secondary context when available, but must not be changed by this skill.

## Detection Procedure

1. Parse the numbered implementation tasks in document order.
2. For each task, inspect whether its expected result is already present in the repository.
3. Treat a task as complete only when its validation criteria are demonstrably satisfied by the current codebase.
4. Select the first task whose validation criteria are not satisfied.
5. If a task depends on earlier incomplete tasks, select the earlier incomplete task instead.
6. If local evidence conflicts with GitHub issue labels or project state, trust local code evidence for implementation choice and mention the mismatch.
7. If the next task cannot be determined confidently, ask the user before editing files.

## Evidence Checklist

- For project setup tasks, inspect package files, source folders, app entry points, and build/dev scripts.
- For model or utility tasks, inspect types, pure functions, validation helpers, and tests if present.
- For local state tasks, inspect hooks, components, and state transitions.
- For UI tasks, inspect components, Material UI usage, responsive layout, and visible validation states.
- For AI integration tasks, inspect services, environment-variable usage, response validation, loading/error states, and manual fallback.

## Non-Actions

Never modify labels such as `toDo`, `doing`, or `done`.
Never close, reopen, assign, move, or otherwise update issues.
Never edit `docs/implementation-tasks.md` to record progress unless the user explicitly requests documentation changes.
