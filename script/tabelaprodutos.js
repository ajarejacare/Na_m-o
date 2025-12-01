


document.addEventListener('DOMContentLoaded', () => {
    produto();
});

async function produto() {
    try{
        const response =await fetch('../lista_produto/produtos.json');
        const data = await response.json();
        console.log(data);
        const container = document.getElementById('containerproduto');
        let parray = data.produtos;
        parray.forEach(produto =>{
            const div =document.createElement('div');
            div.classList.add("item");
            div.innerHTML = `

            <div class="imagemitem">
            <img src="${produto.imagem}" >
            </div>
            <h1>${produto.nome}</h1>
            <p class="estrela">⭐ X,y ()</p>
            <p>${produto.preco}</p>
            <a href="./html/produto.html?id=${produto.id}" class="versite">Ver já</a>
            `;

            container.appendChild(div);
        })
    }catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 2. Buscar produto correspondente
const paginaproduto = produtos[id];

// 3. Mostrar informações
if (produto) {
    document.getElementById("nome").textContent = produto.nome;
    document.getElementById("preco").textContent = produto.preco;
    document.getElementById("descricao").textContent = produto.descricao;
    document.getElementById("imagem").src = produto.imagem;
} else {
    document.body.innerHTML = "<h2>Produto não encontrado.</h2>";
}
