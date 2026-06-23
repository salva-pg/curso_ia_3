# Alcance funcional del MVP: Gestor de Tareas Inteligente con modelo ICE

## 1. Objetivo del MVP

El objetivo del MVP es construir una aplicacion web simple en React que permita gestionar tareas y priorizarlas usando el modelo ICE: Impacto, Confianza y Esfuerzo.

La aplicacion debe estar pensada para un curso de React, por lo que el desarrollo debe ser sencillo, sin backend y centrado en una experiencia funcional clara.

## 2. Descripcion general

El usuario podra crear tareas con una descripcion textual. A partir de esa descripcion, la aplicacion podra solicitar ayuda a una API de IA gratuita para estimar automaticamente los valores ICE:

- Impacto: valor de 1 a 10.
- Confianza: valor de 1 a 10.
- Esfuerzo: valor de 1 a 10.

Con esos valores, la aplicacion calculara la puntuacion ICE de cada tarea y mostrara una lista ordenada por prioridad.

Formula propuesta:

```text
ICE = (Impacto * Confianza) / Esfuerzo
```

Cuanto mayor sea el resultado ICE, mayor sera la prioridad de la tarea.

## 3. Usuarios objetivo

El MVP esta dirigido a estudiantes de React que necesitan practicar la construccion de una aplicacion funcional, visualmente clara y con una pequena integracion de IA.

No se contempla un uso empresarial, multiusuario ni productivo.

## 4. Funcionalidades incluidas

### 4.1 Crear una tarea

El usuario podra crear una nueva tarea indicando:

- Titulo de la tarea.
- Descripcion de la tarea.

Opcionalmente, el usuario podra introducir manualmente:

- Impacto.
- Confianza.
- Esfuerzo.

Si el usuario no introduce los valores ICE, podra solicitarlos automaticamente mediante IA.

### 4.2 Calcular ICE manualmente

Cuando una tarea tenga valores de impacto, confianza y esfuerzo, la aplicacion calculara automaticamente su puntuacion ICE.

Reglas:

- Impacto debe estar entre 1 y 10.
- Confianza debe estar entre 1 y 10.
- Esfuerzo debe estar entre 1 y 10.
- El esfuerzo no puede ser 0.
- El resultado ICE puede mostrarse con uno o dos decimales.

### 4.3 Calcular ICE con IA

La aplicacion permitira calcular los valores ICE usando una API de IA gratuita a partir de la descripcion de la tarea.

Flujo esperado:

1. El usuario escribe el titulo y la descripcion de una tarea.
2. Pulsa un boton como "Calcular con IA".
3. La aplicacion envia la descripcion a una API de IA.
4. La IA devuelve valores estimados para impacto, confianza y esfuerzo.
5. La aplicacion rellena esos valores en el formulario.
6. La aplicacion calcula la puntuacion ICE.

Respuesta esperada de la IA:

```json
{
  "impact": 8,
  "confidence": 7,
  "effort": 4,
  "reason": "La tarea puede mejorar la experiencia del usuario, es razonablemente clara y requiere un esfuerzo medio."
}
```

La explicacion `reason` es opcional, pero recomendable para que el estudiante vea como enriquecer la interfaz.

### 4.4 API de IA gratuita sugerida

Para mantener el proyecto simple, se recomienda usar una API gratuita o con plan gratuito que pueda consumirse desde frontend durante el curso.

Opciones posibles:

- OpenRouter con modelos gratuitos disponibles.
- Hugging Face Inference API con modelos gratuitos.
- Google AI Studio, si el curso facilita una clave gratuita.

La integracion con IA debe usarse solo con fines educativos.

### 4.5 Listar tareas

La aplicacion mostrara todas las tareas creadas durante la sesion actual.

Cada tarea deberia mostrar:

- Titulo.
- Descripcion.
- Impacto.
- Confianza.
- Esfuerzo.
- Puntuacion ICE.
- Estado.
- Fecha de creacion opcional.

### 4.6 Ordenar tareas por prioridad

Las tareas se mostraran ordenadas por puntuacion ICE de mayor a menor.

Esto permite que el usuario vea primero las tareas mas prioritarias.

### 4.7 Cambiar estado de una tarea

Cada tarea podra tener un estado simple:

- Pendiente.
- Completada.

El usuario podra marcar una tarea como completada o volver a marcarla como pendiente.

### 4.8 Editar una tarea

El usuario podra modificar:

- Titulo.
- Descripcion.
- Impacto.
- Confianza.
- Esfuerzo.

Al editar los valores ICE, la puntuacion debera recalcularse automaticamente.

### 4.9 Eliminar una tarea

El usuario podra eliminar una tarea de la lista.

No es necesario mostrar una confirmacion avanzada. Para mantener el MVP simple, puede bastar con un boton de eliminar.

### 4.10 Mensajes de carga y error

Durante el calculo con IA, la interfaz debera mostrar un estado de carga.

Ejemplos:

- "Calculando ICE..."
- Boton deshabilitado mientras se espera la respuesta.

Si la API falla, la aplicacion debera mostrar un mensaje de error sencillo:

- "No se pudo calcular el ICE con IA. Intentalo de nuevo o introduce los valores manualmente."

## 5. Funcionalidades excluidas

El MVP no incluye:

- Backend.
- Autenticacion.
- Persistencia real en base de datos.
- Paginacion.
- Multiusuario.
- Tags o etiquetas.
- Roles de usuario.
- Busqueda avanzada.
- Filtros complejos.
- Adjuntos.
- Notificaciones.
- Historial de cambios.
- Sincronizacion entre dispositivos.

## 6. Persistencia

El MVP no tendra persistencia real.

Las tareas no tienen que conservarse al cerrar o recargar la aplicacion.

## 7. Pantallas o vistas principales

### 7.1 Vista principal

La aplicacion puede resolverse en una unica pantalla.

Elementos principales:

- Cabecera con el nombre de la aplicacion.
- Formulario para crear o editar tareas.
- Boton para calcular ICE con IA.
- Lista de tareas priorizadas.
- Mensajes de carga y error.

### 7.2 Formulario de tarea

Campos:

- Titulo.
- Descripcion.
- Impacto.
- Confianza.
- Esfuerzo.

Acciones:

- Guardar tarea.
- Calcular ICE con IA.
- Cancelar edicion, si se esta editando una tarea existente.

### 7.3 Lista de tareas

Cada tarea puede mostrarse como una tarjeta o fila.

Acciones por tarea:

- Marcar como completada o pendiente.
- Editar.
- Eliminar.

## 8. Criterios de aceptacion

El MVP se considera completado cuando:

- El usuario puede crear tareas.
- El usuario puede introducir valores ICE manualmente.
- La aplicacion calcula correctamente la puntuacion ICE.
- El usuario puede calcular valores ICE usando una API de IA gratuita.
- Las tareas se muestran ordenadas por mayor puntuacion ICE.
- El usuario puede editar una tarea.
- El usuario puede eliminar una tarea.
- El usuario puede marcar una tarea como completada o pendiente.
- La aplicacion muestra estados de carga y error al usar IA.
- La aplicacion funciona sin backend.
- La aplicacion no requiere autenticacion.

## 9. Prompt sugerido para la IA

```text
Analiza la siguiente tarea y devuelve una estimacion ICE en formato JSON.

La escala es de 1 a 10:
- impact: cuanto valor aporta la tarea.
- confidence: que tan claro o seguro es que aporte ese valor.
- effort: cuanto esfuerzo requiere implementarla.

Devuelve solo JSON valido con esta estructura:
{
  "impact": number,
  "confidence": number,
  "effort": number,
  "reason": string
}

Tarea:
"""
{description}
"""
```

## 10. Riesgos y consideraciones

- Al no haber backend, cualquier API key usada en frontend puede quedar expuesta.
- Algunas APIs gratuitas tienen limites de uso.
- La respuesta de la IA puede no ser siempre JSON valido.
- Conviene validar la respuesta antes de actualizar el estado de la aplicacion.
- El calculo de IA debe ser una ayuda, no una fuente perfecta de verdad.

## 11. Version minima recomendada para el curso

Para mantener el desarrollo simple, la primera version deberia incluir solo:

- Crear tarea.
- Calcular ICE manualmente.
- Calcular ICE con IA.
- Listar tareas ordenadas por ICE.
- Editar tarea.
- Eliminar tarea.
- Marcar tarea como completada.

Esta version es suficiente para practicar los conceptos clave de React sin aumentar demasiado la complejidad del proyecto.
