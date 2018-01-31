var nota = {
    secao: document.getElementsByClassName('notes')[0],
    listaInterna: [],

    adiciona: function(novoTitulo, novoTexto){
        var nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };

        this.listaInterna.push(nota);
        
        atualizarSecao(this.secao);
    },
    remove: function(posicao){
        this.listaInterna.splice(posicao, 1);

        atualizarSecao(this.secao);
    },
    edita: function(posicao){
        this.listaInterna[posicao].editando = true;

        atualizarSecao(this.secao);
    },
    salva: function(posicao, novoTitulo, novoTexto){
        this.listaInterna[posicao].titulo = novoTitulo,
        this.listaInterna[posicao].texto = novoTexto,
        this.listaInterna[posicao].editando = false;

        atualizarSecao(this.secao);
    },
    pega: function(posicao){
        return this.listaInterna[posicao];
    },
    contaTotal: function(){
        return this.listaInterna.length;
    }
};


function atualizarSecao(secao) {
    var conteudoSecao = "";

    for (var posicao = 0; posicao < nota.contaTotal(); posicao++) {
        var notaAtual = nota.pega(posicao);

        if (notaAtual.editando) {
            //criar variavel para guardar o html de todas as nota.listaInterna que estão aparecendo na tela
            conteudoSecao += '<form class="note">' +
                '<input class="note__title" type="text" name="titulo" value="' + notaAtual.titulo + '" placeholder="Título">' +
                '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + notaAtual.texto + '</textarea>' +
                '<button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ' + posicao + ')">' +
                'Concluído' +
                '</button>' +
                '</form>';
        } else {
            conteudoSecao += '<form class="note" onclick="editarFormulario(' + posicao + ', this.parentElement)">' +
                '<button class="note__control" type="button" onclick="removerNota(event, ' + posicao + ')">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</button>' +
                '<h1 class="note__title">' + notaAtual.titulo + '</h1>' +
                '<p class="note__body">' + notaAtual.texto + '</p>' +
                '</form>';
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