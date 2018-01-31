"use strict";

var nota = {
    secao: document.getElementsByClassName('notes')[0],
    listaInterna: [],

    adiciona: function adiciona(novoTitulo, novoTexto) {
        var nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };

        undefined.listaInterna.push(nota);

        atualizarSecao(undefined.secao);
    },
    remove: function remove(posicao) {
        undefined.listaInterna.splice(posicao, 1);

        atualizarSecao(undefined.secao);
    },
    edita: function edita(posicao) {
        undefined.listaInterna[posicao].editando = true;

        atualizarSecao(undefined.secao);
    },
    salva: function salva(posicao, novoTitulo, novoTexto) {
        undefined.listaInterna[posicao].titulo = novoTitulo, undefined.listaInterna[posicao].texto = novoTexto, undefined.listaInterna[posicao].editando = false;

        atualizarSecao(undefined.secao);
    },
    pega: function pega(posicao) {
        return undefined.listaInterna[posicao];
    },
    contaTotal: function contaTotal() {
        return undefined.listaInterna.length;
    }
};

function atualizarSecao(secao) {
    var conteudoSecao = "";

    for (var posicao = 0; posicao < nota.contaTotal(); posicao++) {
        var notaAtual = nota.pega(posicao);

        if (notaAtual.editando) {
            //criar variavel para guardar o html de todas as nota.listaInterna que estão aparecendo na tela
            conteudoSecao += "<form class=\"note\">\n                <input class=\"note__title\" type=\"text\" name=\"titulo\" value=\" " + notaAtual.titulo + " \" placeholder=\"T\xEDtulo\">\n                <textarea class=\"note__body\" name=\"texto\" rows=\"5\" placeholder=\"Criar uma nota...\">" + notaAtual.texto + "</textarea>\n                <button class=\"note__control\" type=\"button\" onclick=\"adicionarNota(this.form.titulo, this.form.texto, this.form, " + posicao + ")\">\n                Conclu\xEDdo\n                </button>\n                </form>";
        } else {
            conteudoSecao += "<form class=\"note\" onclick=\"editarFormulario( " + posicao + ", this.parentElement)\">\n                <button class=\"note__control\" type=\"button\" onclick=\"removerNota(event, " + posicao + ")\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                </button>\n                <h1 class=\"note__title\"> " + notaAtual.titulo + "</h1>\n                <p class=\"note__body\"> " + notaAtual.texto + " </p>\n                </form>";
        }
    }
    secao.innerHTML = conteudoSecao;
}

function editarFormulario(posicao) {
    nota.edita(posicao);
}

function adicionarNota(InputTitulo, InputareTexto, formulario, posicao) {
    if (nota.pega(posicao)) {
        nota.salva(posicao, InputTitulo.value, InputareTexto.value);
    } else {
        nota.adiciona(InputTitulo.value, InputareTexto.value);

        formulario.reset();
    }
}

function removerNota(posicao) {
    event.stopPropagation();

    nota.remove(posicao);
}