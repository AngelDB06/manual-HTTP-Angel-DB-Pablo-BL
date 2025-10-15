# ✅ Checklist de Progreso - Proyecto CRUD HTTP Manual y Herramientas Visuales

## 🏗️ Parte 1: Configuración Inicial del Proyecto
- [X] Crear carpeta del proyecto con el nombre `manual-http-angel-db-pablo-bl`
- [X] Inicializar proyecto con `npm init`
- [X] Completar los datos del `package.json` (nombre, versión, autor, descripción)
- [X] Instalar dependencias `json-server` y `dotenv`
- [X] Configurar el proyecto para usar módulos ES (`"type": "module"`)
- [X] Crear scripts en `package.json`: `server:up`, `crud:curl`, `validate`
- [X] Crear estructura de carpetas `src/db`, `scripts`, `images`
- [X] Crear archivos `.env`, `.env.example`, `.gitignore`
- [X] Crear base de datos `src/db/db.json` con las colecciones requeridas

## 💻 Parte 2: Script CRUD con funciones JavaScript
- [ ] Crear archivo `src/crud-curl.js`
- [ ] Importar y configurar `dotenv`
- [ ] Definir `BASE_URL` con variables de entorno
- [ ] Implementar función `createStudent(studentData)`
- [ ] Implementar función `readAllStudents()`
- [ ] Implementar función `readStudentById(id)`
- [ ] Implementar función `updateStudent(id, studentData)`
- [ ] Implementar función `patchStudent(id, partialData)`
- [ ] Implementar función `deleteStudent(id)`
- [ ] Ejecutar las funciones y mostrar los comandos cURL correctamente

## 📚 Parte 3: Documentación CRUD con cURL
- [ ] Documentar cada operación CRUD en `README.md`
- [ ] Incluir comando cURL funcional para cada operación
- [ ] Explicar cada flag y código de estado HTTP
- [ ] Capturar y documentar las respuestas reales del servidor

## ⚡ Parte 4: Thunder Client
- [ ] Crear las 6 peticiones CRUD en Thunder Client
- [ ] Realizar capturas de pantalla de cada petición y guardarlas en `images/`
- [ ] Incluir las capturas en el README con descripción

## 🧾 Parte 5: REST Client
- [ ] Crear archivo `peticiones-crud.http`
- [ ] Definir variables `@baseUrl`, `@port`, `@apiUrl`
- [ ] Implementar todas las operaciones CRUD con comentarios
- [ ] Probar todas las peticiones en VS Code

## 🧰 Parte 6: Script de Validación
- [ ] Crear `scripts/validate.sh`
- [ ] Validar existencia de archivos requeridos
- [ ] Validar dependencias en `package.json`
- [ ] Comprobar capturas en carpeta `images/`
- [ ] Probar que el script funciona correctamente

## 🌿 Parte 7: Git y GitHub
- [ ] Crear repositorio remoto en GitHub
- [ ] Inicializar Git local y conectar con remoto
- [ ] Crear ramas `main` y `m1/http-request-response`
- [ ] Realizar commits descriptivos por fase (feat:, fix:, docs:, etc.)
- [ ] Crear Pull Request con título y descripción correctos
- [ ] Asignar al profesor como reviewer
- [ ] Crear tag `M1/http-request-response` tras la aprobación

## ✅ Parte 8: Validación Final
- [ ] Ejecutar script de validación y comprobar todos los checks en verde
- [ ] Confirmar que todas las funciones CRUD y peticiones funcionan correctamente
- [ ] Revisar README completo con documentación, capturas y comandos
- [ ] Confirmar estructura final del proyecto conforme al modelo

---
📅 **Consejo:** Marca cada tarea al completarla.  
💬 **Objetivo:** Terminar todas las secciones antes de enviar el Pull Request final.
