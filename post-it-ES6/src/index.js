import ListaNotas from './listaNotas.js';
// import FormInput from './componentes/formInput.js';
// import FormTextarea from './componentes/formTextarea.js';
// import FormButton from './componentes/formButton.js';
import FormNotas from './componentes/formNotas.js';

let secao = document.getElementsByClassName('notes')[0];

const observaMudancasNaLista = () => {
    atualizarSecao(secao);
};

const listaNotas = new ListaNotas(observaMudancasNaLista);

window.atualizarSecao = secao => {
    //let conteudoSecao = "";
    while (secao.firstChild) {
        secao.removeChild(secao.firstChild);
    }
    
    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let notaAtual = listaNotas.pega(posicao);
        // if (notaAtual.editando) {
        let props = {
            notaAtual: notaAtual,
            posicao: posicao,
            adicionarNota: adicionarNota,
            editaFormulario: editaFormulario,
            removerNota: removerNota
        };

        let formNotas = new FormNotas(props);


        secao.appendChild(formNotas);
    }
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