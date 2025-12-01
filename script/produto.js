
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

        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        
        if (parray[id-1]) {
            document.getElementById("nome").textContent = parray[id-1].nome;
            document.getElementById("preco").textContent = parray[id-1].preco;
            document.getElementById("descricao").textContent = parray[id-1].descricao;
            document.getElementById("imagem").src = parray[id-1].imagem;
        } else {
            document.body.innerHTML = "<h2>Produto não encontrado.</h2>";
        }
    }catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}
