# Development Guidelines

Guia tecnica resumida para el desarrollo del MVP en React, TypeScript, Material Design y Material UI.

## 1. Estructura de carpetas

| Carpeta | Uso |
| --- | --- |
| `src/app` | Configuracion global de la app. |
| `src/components` | Componentes reutilizables y genericos. |
| `src/features/tasks` | Funcionalidad principal de tareas. |
| `src/features/tasks/components` | Componentes especificos de tareas. |
| `src/features/tasks/hooks` | Hooks especificos de tareas. |
| `src/features/tasks/services` | Llamadas API de tareas o IA. |
| `src/features/tasks/types` | Tipos TypeScript de tareas. |
| `src/features/tasks/utils` | Funciones puras de calculo y validacion. |
| `src/shared` | Utilidades compartidas si son necesarias. |
| `src/main.tsx` | Punto de entrada de React. |

Vista rapida:

```text
src/
  app/
  components/
  features/
    tasks/
      components/
      hooks/
      services/
      types/
      utils/
  shared/
  main.tsx
```

## 2. Convenciones de nombres

- [ ] Componentes en `PascalCase`: `TaskForm.tsx`.
- [ ] Hooks en `camelCase` con prefijo `use`: `useTasks.ts`.
- [ ] Servicios con sufijo `Service`: `aiService.ts`.
- [ ] Tipos e interfaces en `PascalCase`: `Task`, `TaskStatus`.
- [ ] Funciones y variables en `camelCase`.
- [ ] Constantes globales en `UPPER_SNAKE_CASE`.
- [ ] Archivos de componentes con el mismo nombre del componente.
- [ ] Nombres descriptivos, sin abreviaturas innecesarias.
- [ ] Eventos con prefijo `handle`: `handleSubmit`.
- [ ] Props con sufijo `Props`: `TaskItemProps`.

## 3. Organizacion de componentes

| Componente | Responsabilidad |
| --- | --- |
| `App` | Composicion principal y layout base. |
| `TaskPage` | Orquestar la funcionalidad de tareas. |
| `TaskForm` | Crear y editar tareas. |
| `TaskList` | Mostrar la lista ordenada. |
| `TaskItem` | Mostrar una tarea y sus acciones. |
| `IceScore` | Mostrar la puntuacion ICE. |
| `LoadingState` | Mostrar cargas reutilizables. |
| `ErrorMessage` | Mostrar errores reutilizables. |

- [ ] Mantener componentes pequenos y legibles.
- [ ] Evitar componentes con demasiadas responsabilidades.
- [ ] Extraer componentes solo cuando reduzcan complejidad real.
- [ ] Usar Material UI como base visual.
- [ ] No crear un sistema de diseno propio.
- [ ] Priorizar composicion simple sobre abstracciones genericas.
- [ ] Mantener la logica de negocio fuera del JSX cuando crezca.
- [ ] Evitar props innecesariamente profundas.
- [ ] Usar `children` solo cuando simplifique la composicion.
- [ ] No optimizar renderizados antes de tener un problema visible.

## 4. Uso de hooks

- [ ] Usar `useState` para estado local simple.
- [ ] Usar `useMemo` solo para calculos derivados no triviales.
- [ ] Usar `useCallback` solo si evita renders o dependencias problematicas.
- [ ] Usar `useEffect` solo para efectos externos.
- [ ] Evitar sincronizar estado derivado con `useEffect`.
- [ ] Crear hooks propios cuando agrupen logica reutilizable.
- [ ] Mantener hooks propios cerca de la feature que los usa.
- [ ] No mezclar llamadas API directamente en componentes grandes.
- [ ] No ocultar flujos complejos dentro de hooks prematuros.
- [ ] Respetar siempre las reglas de hooks.

## 5. Gestion del estado

- [ ] Usar estado local de React como opcion por defecto.
- [ ] No usar Redux, Zustand ni Context global para el MVP.
- [ ] Guardar solo el estado minimo necesario.
- [ ] Calcular datos derivados al renderizar o con selectores simples.
- [ ] Mantener `tasks` como fuente unica de verdad.
- [ ] Representar carga con booleanos explicitos.
- [ ] Representar errores con `string | null`.
- [ ] Evitar duplicar `iceScore` si puede calcularse desde ICE.
- [ ] Usar `localStorage` solo si se define como mejora opcional.
- [ ] Mantener actualizaciones de estado inmutables.

## 6. Gestion de llamadas API

- [ ] Centralizar llamadas externas en `services`.
- [ ] No llamar a APIs directamente desde componentes de presentacion.
- [ ] Leer API keys desde variables `VITE_*`.
- [ ] Asumir que toda clave en frontend queda expuesta.
- [ ] Validar la respuesta antes de actualizar estado.
- [ ] Normalizar la respuesta de IA a tipos internos.
- [ ] Controlar errores con `try/catch`.
- [ ] No acoplar la UI al formato bruto del proveedor.
- [ ] Mantener un unico proveedor de IA para el MVP.
- [ ] Permitir fallback manual si falla la IA.

## 7. Manejo de errores y cargas

| Caso | Norma |
| --- | --- |
| Cargando IA | Deshabilitar accion y mostrar progreso. |
| Error API | Mostrar mensaje claro y recuperable. |
| JSON invalido | No actualizar tarea y mostrar error. |
| Campos invalidos | Mostrar validacion junto al campo. |
| Lista vacia | Mostrar estado vacio simple. |

- [ ] Los errores deben ayudar a continuar.
- [ ] No mostrar errores tecnicos crudos al usuario.
- [ ] Limpiar errores al reintentar acciones.
- [ ] Evitar varios spinners simultaneos.
- [ ] Mantener mensajes cortos.
- [ ] No bloquear edicion manual por fallo de IA.
- [ ] Validar antes de guardar.
- [ ] Evitar alertas del navegador.
- [ ] Usar componentes de Material UI para feedback.
- [ ] Mantener los estados visibles y previsibles.

## 8. Librerias aprobadas

| Libreria | Uso |
| --- | --- |
| `react` | UI principal. |
| `react-dom` | Renderizado en navegador. |
| `typescript` | Tipado estatico. |
| `@mui/material` | Componentes Material UI. |
| `@mui/icons-material` | Iconos Material UI. |
| `@emotion/react` | Dependencia de Material UI. |
| `@emotion/styled` | Dependencia de Material UI. |
| `vite` | Desarrollo y build. |

- [ ] No anadir librerias sin necesidad clara.
- [ ] No usar librerias de estado global.
- [ ] No usar librerias de formularios en el MVP.
- [ ] No usar librerias de routing salvo cambio de alcance.
- [ ] No usar librerias de fechas para este MVP.
- [ ] No usar frameworks CSS adicionales.
- [ ] Preferir APIs nativas del navegador.
- [ ] Revisar el peso y valor de cada dependencia.
- [ ] Mantener dependencias alineadas con el curso.
- [ ] Documentar cualquier excepcion aprobada.

### Herramientas de calidad de codigo

| Herramienta | Uso |
| --- | --- |
| `eslint` | Analisis estatico de codigo. |
| `typescript-eslint` | Reglas recomendadas para TypeScript. |
| `eslint-plugin-react` | Reglas recomendadas para React. |
| `eslint-plugin-react-hooks` | Reglas oficiales de Hooks. |
| `eslint-plugin-import` | Validacion de importaciones. |
| `eslint-config-prettier` | Evitar conflictos entre ESLint y Prettier. |
| `prettier` | Formato consistente de codigo. |

- [ ] Ejecutar `npm run lint` para revisar calidad de codigo.
- [ ] Ejecutar `npm run lint:fix` solo para correcciones automaticas seguras.
- [ ] Ejecutar `npm run format` para aplicar formato.
- [ ] Ejecutar `npm run format:check` para validar formato sin modificar archivos.
- [ ] Mantener Prettier separado de ESLint; no usar Prettier como regla de ESLint.
