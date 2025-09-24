const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Listar cardápio
app.get("/cardapio", (req, res) => {
  fs.readFile("cardapio.json", (err, data) => {
    if (err) return res.status(500).send("Erro ao ler cardápio");
    res.json(JSON.parse(data));
  });
});

// Enviar pedido
app.post("/pedidos", (req, res) => {
  const novoPedido = req.body;

  fs.readFile("pedidos.json", (err, data) => {
    if (err) return res.status(500).send("Erro ao ler pedidos");

    const pedidos = JSON.parse(data);
    pedidos.push(novoPedido);

    fs.writeFile("pedidos.json", JSON.stringify(pedidos, null, 2), err => {
      if (err) return res.status(500).send("Erro ao salvar pedido");
      res.json({ message: "Pedido recebido com sucesso!" });
    });
  });
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
