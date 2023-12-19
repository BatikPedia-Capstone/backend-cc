const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});

app.get("/", async (req, res) => {
    res.json({ status: "Ready!!" });
});

app.get("/batik", async (req, res) => {
    const query = "SELECT * FROM data_batik";
    pool.query(query, (error, results) => {
        if (!results) {
            res.json({ status: "Not Found!" })
        } else {
            res.json(results)
        }
    })
});

app.get("/batik/:batik", async (req, res) => {
    const query = "SELECT * FROM data_batik WHERE nama_batik = ?";
    pool.query(query, [req.params.batik], (error, results) => {
        if (!results[0]) {
            res.json({ status: "Not Found!" })
        } else {
            res.json(results[0])
        }
    })
});

app.get("/articles", async (req, res) => {
    const query = "SELECT * FROM artikel_batik";
    pool.query(query, (error, results) => {
        if (!results) {
            res.json({ status: "Not Found!" })
        } else {
            res.json(results)
        }
    })
});

app.get("/articles/:id", async (req, res) => {
    const query = "SELECT * FROM artikel_batik WHERE id_artikel = ?";
    pool.query(query, [req.params.id], (error, results) => {
        if (!results[0]) {
            res.json({ status: "Not Found!" })
        } else {
            res.json(results[0])
        }
    })
});

app.get("/products", async (req, res) => {
    const query = "SELECT * FROM produk";
    pool.query(query, (error, results) => {
        if (!results) {
            res.json({ status: "Not Found!" })
        } else {
            res.json(results)
        }
    })
});

app.get("/products/:id", async (req, res) => {
    const query = "SELECT * FROM produk WHERE id = ?";
    pool.query(query, [req.params.id], (error, results) => {
        if (!results[0]) {
            res.json({ status: "Not Found!" })
        } else {
            res.json(results[0])
        }
    })
});

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'batikpedia',
});