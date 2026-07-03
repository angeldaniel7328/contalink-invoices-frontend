# Contalink Invoices Frontend

Aplicación web desarrollada con React para consultar facturas almacenadas en una base de datos PostgreSQL mediante una API REST desarrollada en Flask.

## Repositorio

https://github.com/angeldaniel7328/contalink-invoices-frontend

## Tecnologías

- React
- React Router DOM
- Bootstrap
- JavaScript

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/angeldaniel7328/contalink-invoices-frontend.git
cd contalink-invoices-frontend
```

Instalar las dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
REACT_APP_API_URL=http://localhost:5000
```

> La URL debe apuntar al backend Flask.

## Ejecutar la aplicación

```bash
npm start
```

La aplicación estará disponible en:

```
http://localhost:3000
```

## Inicio de sesión

La aplicación utiliza autenticación mediante JWT.

### Credenciales

| Campo | Valor |
|-------|-------|
| Usuario | `admin` |
| Contraseña | `admin123` |