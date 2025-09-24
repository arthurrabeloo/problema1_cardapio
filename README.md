Lanchonete Online


 ### Funcionalidades
- Listar cardápio (nome, categoria e preço).
- Buscar item por nome.
- Adicionar itens ao carrinho.
- Calcular subtotal e total do pedido.
- Finalizar pedido com nome e observações.
- Gravar pedidos em `backend/pedidos.json`.

## Estrutura do projeto
```
lanchonete/
├── backend/
│   ├── server.js       # Servidor Node.js (API)
│   ├── cardapio.json   # Cardápio inicial
│   └── pedidos.json    # Pedidos gravados
└── frontend/
    ├── index.html      # Interface do cardápio
    ├── style.css       # Estilos da página
    └── script.js       # Lógica do frontend
```

 Como rodar o projeto:

Clonar o repositório:
pelo git bash
git clone <https://github.com/arthurrabeloo/problema1_cardapio.git>
cd problema1_cardapio


### 2. Rodar o backend
Entre na pasta `backend`, instale dependências e inicie o servidor:
- pelo cmd ou terminal do seu editor
- cd back-end
- npm install express cors body-parser
- node server.js

O backend vai rodar em:  
Deve aparecer isso: http://localhost:3000


### 3. Rodar o frontend
Abra o projeto no VS Code e use a extensão Live Server:

- Clique com o botão direito em `frontend/index.html`.  
- Escolha "Open with Live Server".  
- O navegador abrirá em algo como:  
   http://127.0.0.1:5500/frontend/index.html


### 4. Testar o sistema
1. O cardápio será carregado automaticamente.  
2. Busque itens, adicione ao carrinho.  
3. Preencha seu nome e observações.  
4. Clique em Enviar Pedido.  
5. O pedido será salvo em `backend/pedidos.json`.  

Exemplo de conteúdo salvo:
json
[
  {
    "nomeCliente": "Arthur",
    "observacoes": "Sem cebola",
    "itens": [
      { "id": 1, "nome": "X-Burger", "preco": 15 }
    ],
    "total": 15
  }
]


## ⚠️ Problemas comuns
- **Erro CORS / fetch falhando** → verifique se o backend (`node server.js`) está rodando antes do frontend.  
- **Porta 3000 ocupada** → altere a porta no `server.js` e atualize `API_URL` no `script.js`.  
- **Abrir via file://** → não funciona, sempre use Live Server ou outro servidor local.  

---

## ✅ Tecnologias usadas
- **Frontend**: HTML5, CSS3, JavaScript puro  
- **Backend**: Node.js + Express + File System (JSON)  
- **Ferramentas**: VS Code + Live Server  
