class Nota {
    constructor(novoTitulo, novoTexto, novoEditando = false) {
        // modificadores visibilidade
        this._titulo = novoTitulo;
        this._texto = novoTexto;
        this._editando = novoEditando;
    }

    // getters/setters
    get titulo() {
        return this._titulo;
    }

    get texto() {
        return this._texto;
    }

    get editando() {
        return this._editando;
    }

    set titulo(tituloAlterado) {
        this._titulo = tituloAlterado;
    }

    set texto(textoAlterado) {
        this._texto = textoAlterado;
    }

    set editando(editandoAlterado) {
        this._editando = editandoAlterado;
    }
};

export default Nota;