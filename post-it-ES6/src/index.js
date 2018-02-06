import ListaNotas from './listaNotas.js';

let secao = document.getElementsByClassName('notes')[0];

const observaMudancasNaLista = () => {
    atualizarSecao(secao);
};

const listaNotas = new ListaNotas(observaMudancasNaLista);

window.atualizarSecao = secao => {
    let conteudoSecao = "";

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let notaAtual = listaNotas.pega(posicao);
        if (notaAtual.editando) {
            let formularioNotas = document.createElement('form');
            formularioNotas.setAttribute('class', 'note');

            let inputTitle = document.createElement('input');
            inputTitle.setAttribute('class', 'note__title');
            inputTitle.setAttribute('type', 'text');
            inputTitle.setAttribute('name', 'titulo');
            inputTitle.setAttribute('value', notaAtual.titulo);
            inputTitle.setAttribute('placeholder', 'titulo');

            let textareaTexto = document.createElement('textarea');
            textareaTexto.setAttribute('class', 'note__body');
            textareaTexto.setAttribute('name', 'texto');
            textareaTexto.setAttribute('rows', '5');
            textareaTexto.setAttribute('placeholder', 'Criar uma nota...');
            textareaTexto.innerHTML = notaAtual.texto;

            let botaoConcluido = document.createElement('button');
            botaoConcluido.setAttribute('class', 'note__control');
            botaoConcluido.setAttribute('type', 'button');
            botaoConcluido.addEventListener('click', (event) => {
                adicionaNota(formularioNotas, inputTitle, textareaTexto, posicao);
            });




            conteudoSecao += `<form class="note">
                                 <input class="note__title" type="text" name="titulo" value="${notaAtual.titulo}" placeholder="Título">
                                 <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}</textarea>
                                 <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ${posicao})">
                                     Concluído
                                 </button>
                               </form>`;
        } else {
            conteudoSecao += `<form class="note" onclick="editaFormulario(${posicao})">
                                 <button class="note__control" type="button" onclick="removerNota(event, ${posicao})">
                                     <i class="fa fa-times" aria-hidden="true"></i>
                                 </button>
                                 <h1 class="note__title">${notaAtual.titulo}</h1>
                                 <p class="note__body">${notaAtual.texto}</p>
                               </form>`;
        }
    }

    secao.innerHTML = conteudoSecao;
}

window.editaFormulario = posicao => listaNotas.edita(posicao);

window.adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

window.removerNota = (evento, posicao) => {
    evento.stopPropagation();
    listaNotas.remove(posicao);
}