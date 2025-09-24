const API_URL = "http://localhost:3000";

let carrinho = [];

// Carregar cardápio
async function carregarCardapio() {
  const res = await fetch(`${API_URL}/cardapio`);
  const itens = await res.json();

  const container = document.getElementById("cardapio");
  container.innerHTML = "";

  itens.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)}
      <button onclick="adicionarCarrinho(${item.id}, '${item.nome}', ${item.preco})">Adicionar</button>`;
    container.appendChild(div);
  });
}

// Adicionar ao carrinho
function adicionarCarrinho(id, nome, preco) {
  carrinho.push({ id, nome, preco });
  atualizarCarrinho();
}

// Atualizar carrinho
function atualizarCarrinho() {
  const lista = document.getElementById("carrinho");
  lista.innerHTML = "";

  let subtotal = 0;

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    subtotal += item.preco;
  });

  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("total").textContent = subtotal.toFixed(2);
}

// Enviar pedido
document.getElementById("pedidoForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nomeCliente = document.getElementById("nomeCliente").value;
  const observacoes = document.getElementById("observacoes").value;

  const pedido = {
    nomeCliente,
    observacoes,
    itens: carrinho,
    total: carrinho.reduce((acc, item) => acc + item.preco, 0)
  };

  const res = await fetch(`${API_URL}/pedidos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pedido)
  });

  const data = await res.json();
  alert(data.message);

  carrinho = [];
  atualizarCarrinho();
  e.target.reset();
});

// Buscar item por nome
document.getElementById("search").addEventListener("input", async (e) => {
  const termo = e.target.value.toLowerCase();
  const res = await fetch(`${API_URL}/cardapio`);
  const itens = await res.json();

  const filtrados = itens.filter(item => item.nome.toLowerCase().includes(termo));

  const container = document.getElementById("cardapio");
  container.innerHTML = "";
  filtrados.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)}
      <button onclick="adicionarCarrinho(${item.id}, '${item.nome}', ${item.preco})">Adicionar</button>`;
    container.appendChild(div);
  });
});

carregarCardapio();
