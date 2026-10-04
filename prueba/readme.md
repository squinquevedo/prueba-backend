# API REST de Productos

Backend desarrollado con Node.js y Express que expone una API REST para consultar productos.

Los productos son almacenados en un archivo JSON que funciona como una base de datos simulada.

## Funcionalidades

La API permite:

- Obtener el listado completo de productos.
- Buscar productos por nombre, marca o categoría.
- Obtener el detalle completo de un producto mediante su ID.
- Manejar productos inexistentes mediante una respuesta 404.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- JSON

## Instalación

Clonar o descargar el proyecto e instalar las dependencias:

```bash
npm install
```

## Ejecutar el proyecto

Para iniciar el servidor:

```bash
npm start
```

El servidor se ejecutará en:

```text
http://localhost:3000
```

## Endpoints

### Obtener todos los productos

```http
GET /api/products
```

Ejemplo:

```text
http://localhost:3000/api/products
```

### Buscar productos

Se puede utilizar el parámetro `search` para buscar productos por nombre, marca o categoría.

```http
GET /api/products?search=Samsung
```

Ejemplo:

```text
http://localhost:3000/api/products?search=Samsung
```

### Obtener producto por ID

```http
GET /api/products/:id
```

Ejemplo:

```text
http://localhost:3000/api/products/2
```

La API devuelve el detalle completo del producto correspondiente.

### Producto inexistente

Si el ID solicitado no existe, por ejemplo:

```text
http://localhost:3000/api/products/999
```

La API responde con un código HTTP `404` y:

```json
{
  "mensaje": "Producto no encontrado"
}
```

## Dataset

Los productos están almacenados en:

```text
data/products.json
```

Este archivo funciona como una base de datos simulada para la API.