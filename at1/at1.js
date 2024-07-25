const form = document.getElementById('pedidoForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const tamanho = document.getElementById('tamanho').value;
    const ingredientes = Array.from (document.querySelectorAll('[name="ingredientes[]"]:checked')).map(el => el.value);
    const borda = document.querySelector('[name="borda"]:checked').value;
    const observacoes = document.getElementById('observacoes').value;

    console.log(`Nome: ${nome}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Tamanho: ${tamanho}`);
    console.log(`Ingredientes: ${ingredientes}`);
    console.log(`Borda de Catupiry: ${borda}`);
    console.log(`Observações: ${observacoes}`);
})