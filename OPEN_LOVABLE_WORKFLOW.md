# Flujo de trabajo con Open Lovable

El repositorio de GitHub es la fuente de verdad. Open Lovable se usa para iterar visualmente sobre una copia del proyecto y revisar el resultado antes de incorporar los cambios al repositorio.

## Inicio de una sesión

1. En Open Lovable, abre el proyecto **Web Espielia**.
2. Crea o recupera el sandbox del proyecto.
3. Usa **Import repository** e introduce `https://github.com/danilinked/espielia.git` cuando necesites partir de la última versión de `main`.
4. Espera a que el preview responda antes de pedir cambios.

## Reglas de edición

- Cada petición debe describir un cambio concreto y comprobable.
- No publiques desde Open Lovable sin revisar primero el preview y los archivos modificados.
- No guardes contraseñas ni claves en prompts, commits o archivos del proyecto.
- Si el preview devuelve un error, revisa los logs del sandbox antes de volver a generar código.

## Llevar cambios a GitHub

La instancia actual importa repositorios, pero no sincroniza cambios de vuelta a GitHub automáticamente. Cuando haya cambios aprobados:

1. Descarga el ZIP o copia los cambios desde el sandbox.
2. Aplícalos en este repositorio local.
3. Ejecuta `npm run lint`, `npm test` y `npm run build`.
4. Haz commit y push a `main` solo tras validar el resultado.

## Incidencias conocidas de la instancia

- El sandbox debe quedar asociado al `projectId`; si no, el workspace puede perder la sesión activa.
- Un preview `502` indica que el servidor de desarrollo no ha arrancado o ha fallado. No despliegues hasta resolverlo.
- Si la generación se queda en fase de planificación, conserva el prompt y revisa los logs de proveedor/servidor antes de reintentarlo.
