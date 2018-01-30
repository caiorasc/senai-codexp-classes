var notas = [];

var nota = {
    listaInterna: [],

    adiciona: function(novoTitulo, novoTexto){
        var nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };

        this.listaInterna.push(nota);
    },
    remove: function(posicao){
        this.listaInterna.splice(posicao, 1);
    },
    edita: function(posicao){
        this.listaInterna[posicao].editando = true;
    },
    salva: function(posicao, novoTitulo, novoTexto){
        this.listaInterna[posicao].titulo = novoTitulo,
        this.listaInterna[posicao].texto = novoTexto,
        this.listaInterna[posicao].editando = false;
    }
}


function atualizarSecao(secao) {
    var conteudoSecao = "";

    for (var posicao = 0; posicao < notas.length; posicao++) {
        if (notas[posicao].editando) {
            //criar variavel para guardar o html de todas as notas que estão aparecendo na tela
            conteudoSecao += '<form class="note">' +
                '<input class="note__title" type="text" name="titulo" value="' + notas[posicao].titulo + '" placeholder="Título">' +
                '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + notas[posicao].texto + '</textarea>' +
                '<button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, this.form.parentElement, ' + posicao + ')">' +
                'Concluído' +
                '</button>' +
                '</form>';
        } else {
            conteudoSecao += '<form class="note" onclick="editarFormulario(' + posicao + ', this.parentElement)">' +
                '<button class="note__control" type="button" onclick="removerNota(event, ' + posicao + ', this.form.parentElement)">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</button>' +
                '<h1 class="note__title">' + notas[posicao].titulo + '</h1>' +
                '<p class="note__body">' + notas[posicao].texto + '</p>' +
                '</form>';
        }
    }
    secao.innerHTML = conteudoSecao;
}

function editarFormulario(posicao, secao) {
    notas[posicao].editando = true;

    // atualizarSecao(secao);
}

function adicionarNota(inputTitulo, textareaTexto, formulario, secao, posicao) {
    if (notas[posicao]) {
        notas[posicao].titulo = inputTitulo.value,
        notas[posicao].texto = textareaTexto.value,
        notas[posicao].editando = false;
        
        // atualizarSecao(secao);

    } else {
        var nota = {
            titulo: inputTitulo.value,
            texto: textareaTexto.value,
            editando: false
        }

        notas.push(nota);

        // atualizarSecao(secao);

        formulario.reset();
    }
}

function removerNota(event, posicao, secao) {
    event.stopPropagation();

    notas.splice(posicao, 1);

    // atualizarSecao(secao);
}