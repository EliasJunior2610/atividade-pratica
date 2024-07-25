const form = document.getElementById('inclusaoForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    console.log(`Nome: ${nome}`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Email: ${email}`);
})