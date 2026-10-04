const express = require("express");
const products = require("./data/products.json");

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "API de productos funcionando correctamente"
    });
});

// Obtener todos los productos o buscar productos
app.get("/api/products", (req, res) => {
    const search = req.query.search;

    // Si no se envía una búsqueda, devuelve todos los productos
    if (!search) {
        return res.json(products);
    }

    // Buscar por nombre, marca o categoría
    const resultados = products.filter((producto) => {
        return (
            producto.nombre.toLowerCase().includes(search.toLowerCase()) ||
            producto.marca.toLowerCase().includes(search.toLowerCase()) ||
            producto.categoria.toLowerCase().includes(search.toLowerCase())
        );
    });

    res.json(resultados);
});

// Obtener un producto por su ID
app.get("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const producto = products.find((producto) => producto.id === id);

    if (!producto) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    res.json(producto);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});