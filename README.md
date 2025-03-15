# Proyecto NestJS

Este documento proporciona los pasos necesarios para instalar y configurar un proyecto NestJS con sus dependencias principales.

## 📌 Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js** (Versión recomendada: 18.x o superior)
- **npm** (Incluido con Node.js) o **yarn**

Puedes verificar si los tienes instalados ejecutando:

```sh
node -v
npm -v
```

Si no los tienes instalados, descárgalos desde [Node.js](https://nodejs.org/).

---

## 🚀 Instalación de NestJS y configuración inicial

### 1️⃣ Instalar el CLI de NestJS

Ejecuta el siguiente comando para instalar el CLI de NestJS de manera global:

```sh
npm install -g @nestjs/cli
```

Verifica que se haya instalado correctamente con:

```sh
nest --version
```

---

### 2️⃣ Crear un nuevo proyecto NestJS

Para crear un nuevo proyecto, usa el siguiente comando:

```sh
nest new nombre-del-proyecto
```

Te preguntará qué gestor de paquetes deseas usar. Puedes elegir `npm` o `yarn`.

Una vez creado el proyecto, entra en la carpeta del proyecto:

```sh
cd nombre-del-proyecto
```

---

### 3️⃣ Instalar dependencias esenciales

Ejecuta el siguiente comando para instalar las dependencias base:

```sh
npm install @nestjs/common @nestjs/core @nestjs/platform-express @nestjs/typeorm typeorm mysql
```

### 📌 Dependencias adicionales opcionales

Si necesitas autenticación con JWT:
```sh
npm install @nestjs/jwt passport-jwt passport @nestjs/passport
```

Si quieres utilizar validaciones en los DTOs:
```sh
npm install class-validator class-transformer
```

Si necesitas manejar variables de entorno:
```sh
npm install @nestjs/config dotenv
```

---

### 4️⃣ Ejecutar el servidor NestJS

Para iniciar el servidor en modo desarrollo, ejecuta:

```sh
npm run start:dev
```

Esto ejecutará el servidor en `http://localhost:3000/` por defecto.

Para detenerlo, usa `Ctrl + C` en la terminal.

---

### 🎯 Comandos útiles en NestJS

- **Iniciar el servidor en modo desarrollo**:
  ```sh
  npm run start:dev
  ```
- **Generar un módulo**:
  ```sh
  nest generate module nombre-modulo
  ```
- **Generar un controlador**:
  ```sh
  nest generate controller nombre-controlador
  ```
- **Generar un servicio**:
  ```sh
  nest generate service nombre-servicio
  ```

---

## 🔥 Contribuir

Si deseas contribuir, clona el repositorio y crea un nuevo branch con tu mejora.

```sh
git clone https://github.com/usuario/nombre-del-proyecto.git
cd nombre-del-proyecto
git checkout -b feature-nueva
```

¡Gracias por contribuir! 🚀

