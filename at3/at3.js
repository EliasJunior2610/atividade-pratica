const form = document.getElementById('alunoForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sexo = document.querySelector('[name="sexo"]:checked').value;
    const escolaridade = document.getElementById('escolaridade').value;

    console.log(`Nome: ${nome}`);
    console.log(`Sexo: ${sexo}`);
    console.log(`Escolaridade: ${escolaridade}`);
})