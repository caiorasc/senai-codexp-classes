import React from 'react'
import Nota from '../nota'
import ListaNotas from '../listaNotas'
import FormNotas from './formNotas'
import SecaoNotas from './secaoNotas'

const montaFormNotas = (adicionarNota, removerNota, editaFormulario) => {
    const props = {
        key: 'form-note',
        notaAtual: new Nota('', ''),
        adicionarNota, //adicionarNota: adicionarNota
        removerNota, //removerNota: removerNota
        editaFormulario
    }

    return React.createElement(FormNotas, props)
}

const montaSecaoNotas = (listaNotas, adicionarNota, removerNota, editaFormulario) => {
    const props = {
        key: 'section-notes',
        listaNotas,
        adicionarNota,
        removerNota,
        editaFormulario
    }

    return React.createElement(SecaoNotas, props)
}

class Pagina extends React.Component {
    constructor(props) {
        super(props);
        this.atualizaPagina = this.atualizaPagina.bind(this)
        this.editaFormulario = this.editaFormulario.bind(this)
        this.adicionarNota = this.adicionarNota.bind(this)
        this.removerNota = this.removerNota.bind(this)

        this.state = {
            listaNotas: new ListaNotas(this.atualizaPagina)
        }
    }

    atualizaPagina(novaLista) {
        this.setState({ 
            listaNotas: novaLista 
        });
    }

    editaFormulario(posicao) {
        this.state.listaNotas.edita(posicao)
    }

    adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {
        if (this.state.listaNotas.pega(posicao)) {
            this.state.listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
        } else {
            this.state.listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
            formulario.reset();
        }
    }

    removerNota(evento, posicao) {
        evento.stopPropagation();
        this.state.listaNotas.remove(posicao);
    }

    render() {
        const props = { className: 'container' }

        let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editaFormulario);
        let secaoNotas = montaSecaoNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editaFormulario);

        return (
            <main {...props}>
                {formNotas}
                {secaoNotas}
            </main>
        )
    }
}

export default Pagina;