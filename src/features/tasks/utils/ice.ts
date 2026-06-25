import type { IceValues, Task } from '../types';

export const ICE_VALUE_MIN = 1;
export const ICE_VALUE_MAX = 10;

export type IceField = keyof IceValues;

export type IceValidationErrors = Partial<Record<IceField, string>>;

// Checks whether one ICE input is inside the accepted numeric range.
export function isValidIceValue(value: number): boolean {
  return (
    Number.isFinite(value) && value >= ICE_VALUE_MIN && value <= ICE_VALUE_MAX
  );
}

// Centralizes validation messages for impact, confidence, and effort values.
export function validateIceValues(values: IceValues): IceValidationErrors {
  const errors: IceValidationErrors = {};

  if (!isValidIceValue(values.impact)) {
    errors.impact = 'El impacto debe estar entre 1 y 10.';
  }

  if (!isValidIceValue(values.confidence)) {
    errors.confidence = 'La confianza debe estar entre 1 y 10.';
  }

  if (!isValidIceValue(values.effort)) {
    errors.effort = 'El esfuerzo debe estar entre 1 y 10.';
  }

  return errors;
}

// Confirms that a complete ICE group has no validation errors.
export function hasValidIceValues(values: IceValues): boolean {
  return Object.keys(validateIceValues(values)).length === 0;
}

// Calculates the ICE priority score from valid impact, confidence, and effort.
export function calculateIceScore(values: IceValues): number {
  if (!hasValidIceValues(values)) {
    throw new Error('Los valores ICE deben estar entre 1 y 10.');
  }

  return (values.impact * values.confidence) / values.effort;
}

// Returns a new task list ordered from highest to lowest ICE score.
export function sortTasksByIceScore(tasks: Task[]): Task[] {
  return [...tasks].sort(
    (firstTask, secondTask) =>
      calculateIceScore(secondTask.ice) - calculateIceScore(firstTask.ice),
  );
}
