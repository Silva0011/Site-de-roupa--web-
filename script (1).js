function adicionarCarrinho(event, produto) {
    event.preventDefault();
    const tamanho = event.target.tamanho.value;
    const item = `${produto} (Tamanho: ${tamanho})`;
    const listaCarrinho = document.getElementById('lista-carrinho');
    const novoItem = document.createElement('li');
    novoItem.textContent = item;
    listaCarrinho.appendChild(novoItem);
    alert(item + " foi adicionado ao carrinho!");
}


document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
});

document.getElementById('form-adicionar-produto').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeProduto = document.getElementById('nome-produto').value;
    const precoProduto = document.getElementById('preco-produto').value;
    const imagemProduto = document.getElementById('imagem-produto').value;
    
    const novoProduto = document.createElement('div');
    novoProduto.classList.add('produto');
    
    const imagem = document.createElement('img');
    imagem.src = imagemProduto;
    imagem.alt = nomeProduto;
    imagem.style.width = '311px';
    imagem.style.height = '200px';
    imagem.style.objectFit = 'cover';
    imagem.style.marginBottom = '10px';
    imagem.style.borderRadius = '10px';
    
    const titulo = document.createElement('h3');
    titulo.textContent = nomeProduto;
    
    const preco = document.createElement('p');
    preco.textContent = `R$ ${precoProduto}`;
    
    novoProduto.appendChild(imagem);
    novoProduto.appendChild(titulo);
    novoProduto.appendChild(preco);
    
    document.getElementById('produtos').appendChild(novoProduto);
    
    document.getElementById('form-adicionar-produto').reset();
    
    alert('Produto adicionado com sucesso!');
});
