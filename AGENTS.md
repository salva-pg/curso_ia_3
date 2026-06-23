# AGENTS.md

Guia permanente para agentes Codex que trabajen en este repositorio.

Este archivo no duplica las reglas globales de Codex ni la documentacion funcional o tecnica del proyecto. Su funcion es indicar que documentos consultar, como resolver conflictos entre ellos y que informacion debe permanecer fuera de este archivo.

## Principio de uso

- Usa este archivo como indice operativo del repositorio.
- Antes de implementar, lee la documentacion aplicable en `docs/`.
- No copies aqui reglas que ya esten en la guia global de agentes.
- No copies aqui requisitos que ya esten en la documentacion del proyecto.
- Si una decision estable ya existe en `docs/`, referenciala desde aqui.
- Si una decision nueva modifica el alcance o la arquitectura, actualiza primero el documento fuente correspondiente.
- Mantener este archivo breve, practico y accionable.

## Fuentes de verdad

- Alcance funcional: [`docs/alcance-mvp-todo-inteligente.md`](docs/alcance-mvp-todo-inteligente.md).
- Guia tecnica: [`docs/development-guidelines.md`](docs/development-guidelines.md).
- Plan de implementacion: [`docs/implementation-tasks.md`](docs/implementation-tasks.md).
- Flujo de navegacion: [`docs/user-navigation-flow.mmd`](docs/user-navigation-flow.mmd).
- Flujo de creacion de tareas: [`docs/task-creation-flow.mmd`](docs/task-creation-flow.mmd).
- Referencia visual: [`docs/app-screens.svg`](docs/app-screens.svg).

## Orden de lectura recomendado

- Para dudas de producto, empieza por `alcance-mvp-todo-inteligente.md`.
- Para dudas de estructura, nombres, estado, hooks, servicios, errores o dependencias, usa `development-guidelines.md`.
- Para conocer el orden sugerido de construccion, usa `implementation-tasks.md`.
- Para entender el flujo de pantallas y acciones, usa los archivos `.mmd`.
- Para alinear la interfaz con la referencia visual, revisa `app-screens.svg`.
- Si una tarea toca varias areas, lee primero alcance funcional y despues guia tecnica.

## Uso por tipo de tarea

- Nueva funcionalidad: valida alcance y despues consulta guia tecnica.
- Cambio visual: consulta guia tecnica, flujos y referencia visual.
- Integracion con IA: consulta alcance funcional y gestion de llamadas API.
- Cambio de estado o hooks: consulta guia tecnica antes de tocar codigo.
- Cambio de dependencias: consulta librerias aprobadas y pide autorizacion si no estan listadas.
- Cambio documental: edita el documento fuente, no este indice, salvo que cambie la navegacion documental.

## Prioridad entre documentos

- Las instrucciones explicitas del usuario tienen prioridad sobre este archivo.
- Las reglas globales de agentes tienen prioridad sobre este archivo.
- Este archivo define como usar la documentacion del repo, no reemplaza los documentos de `docs/`.
- El alcance funcional prevalece para decidir que pertenece o no al MVP.
- La guia tecnica prevalece para decisiones de implementacion dentro del alcance aprobado.
- El plan de implementacion orienta el orden de trabajo, pero no debe tratarse como requisitos permanentes.
- Los flujos y el SVG aclaran UX, pero no deben ampliar el alcance por si solos.

## Reglas especificas del repositorio

- No inventes arquitectura que no aparezca en `docs/`.
- No conviertas sugerencias de `implementation-tasks.md` en reglas permanentes sin confirmacion.
- No implementes funcionalidad fuera de alcance solo porque aparezca como idea posible.
- No anadas dependencias fuera de las aprobadas en `development-guidelines.md` sin autorizacion explicita.
- No introduzcas backend, autenticacion ni persistencia real salvo cambio documentado de alcance.
- No conviertas la aplicacion en multipagina si el alcance sigue siendo Single Page App.
- No uses `localStorage` salvo que se apruebe como mejora y se documente el cambio.
- No cambies el proveedor de IA elegido sin mantener la regla documentada de un unico proveedor para el MVP.
- Si una clave de API queda en frontend, tratalo como limitacion conocida del MVP educativo.
- Cualquier cambio de arquitectura debe quedar reflejado en `development-guidelines.md`.
- Cualquier cambio de alcance funcional debe quedar reflejado en `alcance-mvp-todo-inteligente.md`.

## Como trabajar con cambios

- Para una tarea funcional, verifica primero si esta dentro de `alcance-mvp-todo-inteligente.md`.
- Para una tarea tecnica, verifica primero si respeta `development-guidelines.md`.
- Si la tarea contradice los documentos, avisa al usuario antes de implementar.
- Si la tarea amplia el alcance de forma importante, pide confirmacion y documenta la decision aprobada.
- Si detectas una mejora ajena a la tarea, mencionarla como sugerencia y no implementarla directamente.
- Si encuentras una inconsistencia, describela como observacion y no la conviertas en regla.
- Mantener los cambios en los archivos minimos necesarios para cumplir la tarea.

## Que no debe duplicarse aqui

- No repetir el listado de funcionalidades incluidas o excluidas del MVP.
- No repetir la formula ICE ni sus reglas de validacion.
- No repetir la estructura completa de carpetas.
- No repetir convenciones de nombres.
- No repetir reglas de componentes, hooks, estado, servicios, cargas o errores.
- No repetir la lista de dependencias aprobadas.
- No repetir criterios de aceptacion.
- No repetir flujos Mermaid ni contenido del wireframe SVG.
- No repetir principios globales de Clean Code, alcance reducido o comentarios en codigo.

## Mantenimiento de documentacion

- Si se corrige una regla tecnica existente, edita `development-guidelines.md`.
- Si se corrige una regla funcional existente, edita `alcance-mvp-todo-inteligente.md`.
- Si cambia el orden de construccion, edita `implementation-tasks.md`.
- Si cambia el flujo UX, edita el archivo `.mmd` correspondiente.
- Si cambia la referencia visual, actualiza `app-screens.svg` o el documento visual equivalente.
- Mantener este archivo como mapa de navegacion, no como copia resumida de todos los documentos.

## Observaciones actuales

- `alcance-mvp-todo-inteligente.md` excluye persistencia real, mientras `development-guidelines.md` menciona `localStorage` solo como mejora opcional.
- Los documentos describen una sola pantalla, aunque los flujos nombran secciones internas como listado, formulario y resumen.
- El alcance sugiere varias APIs de IA posibles, pero la guia tecnica pide mantener un unico proveedor para el MVP.
