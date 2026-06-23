# Tareas de implementacion

Plan de implementacion para el MVP "Gestor de Tareas ICE" basado en la documentacion funcional, tecnica y UX de `docs/`.

## 1. Preparar base del proyecto y estructura

**Objetivo:** dejar lista la aplicacion React + TypeScript + Material UI con la estructura minima acordada.

**Incluye:**

- Crear o validar proyecto con React, TypeScript y Vite.
- Instalar Material UI y dependencias aprobadas.
- Crear estructura base:
  - `src/app`
  - `src/components`
  - `src/features/tasks`
  - `src/features/tasks/components`
  - `src/features/tasks/hooks`
  - `src/features/tasks/services`
  - `src/features/tasks/types`
  - `src/features/tasks/utils`
- Crear `App` y `TaskPage` como pantalla principal.
- Configurar layout base con Material UI.

**Resultado esperado:**

- La app arranca correctamente.
- Existe una pantalla principal vacia o con estado inicial.
- La estructura respeta `development-guidelines.md`.

## 2. Definir modelo de tareas y logica ICE

**Objetivo:** implementar la base funcional sin interfaz compleja.

**Incluye:**

- Definir tipos TypeScript:
  - `Task`
  - `TaskStatus`
  - `IceValues`
  - `AiIceSuggestion`
- Crear utilidad para calcular ICE:
  - `ICE = (impact * confidence) / effort`
- Validar valores de impacto, confianza y esfuerzo entre 1 y 10.
- Evitar esfuerzo igual a 0.
- Definir ordenacion de tareas por ICE descendente.
- Preparar datos derivados sin duplicar estado innecesario.

**Resultado esperado:**

- Existe una funcion pura para calcular ICE.
- Las tareas pueden ordenarse por prioridad.
- Las reglas de validacion ICE quedan centralizadas.

## 3. Implementar gestion local de tareas

**Objetivo:** permitir crear, listar y eliminar tareas usando estado local.

**Incluye:**

- Crear hook `useTasks`.
- Gestionar `tasks` como fuente unica de verdad.
- Crear tareas con titulo, descripcion, ICE y estado inicial `pending`.
- Mostrar lista ordenada por ICE.
- Mostrar estado vacio cuando no hay tareas.
- Eliminar tareas.
- Marcar tareas como pendientes o completadas.

**Resultado esperado:**

- El usuario puede crear una tarea con valores ICE manuales.
- La tarea aparece en el listado ordenado.
- El usuario puede eliminarla o cambiar su estado.

## 4. Construir interfaz Material UI del flujo principal

**Objetivo:** implementar la experiencia visual base definida en los flujos UX.

**Incluye:**

- Crear `AppHeader`.
- Crear `TaskList`, `TaskItem` e `IceScore`.
- Crear `TaskForm` para crear tareas.
- Crear campos para titulo, descripcion, impacto, confianza y esfuerzo.
- Mostrar preview de puntuacion ICE.
- Mostrar validaciones junto a los campos.
- Usar componentes Material UI:
  - `AppBar`
  - `Container`
  - `Paper` o `Card`
  - `TextField`
  - `Button`
  - `Chip`
  - `Alert`

**Resultado esperado:**

- El flujo manual funciona de extremo a extremo.
- La interfaz sigue Material Design.
- La pantalla coincide con la estructura de `app-screens.svg`.

## 5. Integrar sugerencia ICE por IA y cierre del MVP

**Objetivo:** completar el flujo inteligente de creacion y revision de tareas.

**Incluye:**

- Crear `aiService`.
- Leer API key desde variable `VITE_*`.
- Enviar la descripcion de la tarea al proveedor de IA elegido.
- Validar y normalizar la respuesta de IA.
- Crear `AiSuggestionPanel`.
- Mostrar impacto, confianza, esfuerzo y motivo sugerido.
- Permitir aceptar la sugerencia.
- Permitir editar manualmente los valores sugeridos.
- Mostrar estado de carga mientras se calcula.
- Mostrar error recuperable si falla la API o el JSON no es valido.
- Confirmar la tarea y volver al listado actualizado.

**Resultado esperado:**

- El usuario puede crear una tarea usando sugerencia ICE por IA.
- Puede revisar, aceptar o ajustar la sugerencia antes de guardar.
- El MVP cumple los criterios de aceptacion funcionales.

## Orden recomendado

| Orden | Tarea | Dependencia |
| --- | --- | --- |
| 1 | Base del proyecto y estructura | Ninguna |
| 2 | Modelo y logica ICE | Tarea 1 |
| 3 | Gestion local de tareas | Tareas 1 y 2 |
| 4 | Interfaz Material UI | Tareas 1, 2 y 3 |
| 5 | Integracion IA y cierre | Tareas 1 a 4 |

## Fuera de estas tareas

- Backend.
- Autenticacion.
- Persistencia real.
- Paginacion.
- Multiusuario.
- Tags.
- Routing avanzado.
- Estado global con librerias externas.
