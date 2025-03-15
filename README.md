# Backend

Este es el **BACKEND**, desarrollado con **NestJS**, **TypeORM** y **MySQL**.

## 🚀 Instalación y Configuración

### 📌 Clonar el repositorio

```sh
# Clonar el repositorio
git clone https://github.com/tu-usuario/AlmacenHV-backend.git

# Entrar al directorio del proyecto
cd AlmacenHV-backend
```

### 📌 Instalar dependencias

Asegúrate de tener instalado **Node.js** y **npm** (o **yarn**). Luego, instala las dependencias del proyecto:

```sh
# Usando npm
npm install

# O usando yarn
yarn install
```

### 📌 Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega la configuración de la base de datos y otras variables necesarias:

```env
PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=tu_contraseña
DATABASE_NAME=almacen_hv
JWT_SECRET=tu_secreto
```

### 📌 Ejecutar el proyecto

```sh
# Ejecutar en modo desarrollo
npm run start:dev

# O en producción
npm run start:prod
```

## 📦 Dependencias principales

- **@nestjs/core** - Framework principal de NestJS
- **@nestjs/common** - Módulo común de NestJS
- **@nestjs/typeorm** - Integración de TypeORM con NestJS
- **mysql2** - Cliente para conectar con MySQL
- **dotenv** - Manejo de variables de entorno
- **class-validator** - Validaciones en los DTOs
- **class-transformer** - Transformaciones en los DTOs




