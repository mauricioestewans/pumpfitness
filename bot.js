<!-- Interface Básica do Bot -->
<div id="chatbot">
  <div id="messages"></div>
  <input type="text" id="userInput" placeholder="Digite sua escolha...">
</div>

<script>
  // Dados dos Produtos (substitua com os dados reais)
  const produtos = [
    { id: 1, nome: "Cadeira de Rodas", preco: 1500 },
    { id: 2, nome: "Maca Hospitalar", preco: 3200 }
  ];

  let carrinho = [];

  function mostrarProdutos() {
    let mensagem = "Produtos Disponíveis:\n";
    produtos.forEach((produto, index) => {
      mensagem += `${index + 1}. ${produto.nome} - R$ ${produto.preco}\n`;
    });
    document.getElementById("messages").innerHTML += mensagem;
  }

  function calcularTotal() {
    return carrinho.reduce((total, item) => total + item.preco, 0);
  }

  // Redirecionar para o Checkout do Kyte
  function finalizarCompra() {
    const total = calcularTotal();
    window.location.href = `https://medical-brasil.catalog.kyte.site/checkout?total=${total}`;
  }

  // Iniciar Bot
  mostrarProdutos();
</script>