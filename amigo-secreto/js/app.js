let amigos = [];

function adicionar() {

    let amigo = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');

    if (amigo == '') {
        alert('Necessário preencher um nome!');
        return;
    } else if (amigos.includes(amigo.toUpperCase())) {
        alert('Nome já adicionado!');
        return;
    } else {
        amigos.push(amigo.toUpperCase());
    }

    if (lista.textContent == '') {
        lista.textContent = amigo;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo;
    }

    amigo.value = '';
}

function sortear() {

    if (amigos.length < 4) {
        alert('Digite ao menos 4 participante');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    if (sorteio != '<p id="lista-sorteio"></p>') {
        sorteio.innerHTML = '';
    }

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
