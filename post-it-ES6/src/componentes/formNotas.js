
import React from 'react'
import Form from './form'
import FormInput from './formInput'
import FormTextarea from './formTextarea'
import FormButton from './formButton'
import Nota from '../nota'

const criaComponenteInputTitulo = (notaAlterada) => {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readonly: !props.notaAlterada.editando,
        defaultValue: notaAlterada.titulo,
        onChange: event => {
            notaAlterada.titulo = event.target.value;
        }
    }
    return React.createElement(FormInput, props);
}

const criaComponentFormTextarea = (notaAlterada) => {
    const props = {
        className: 'note__body',
        name: 'texto',
        rows: '5',
        placeholder: 'Criar uma nota...',
        readonly: !props.notaAlterada.editando,
        defaultValue: notaAlterada.texto,
        onChange: event => {
            notaAlterada.texto = event.target.value;
        }
    }
    return React.createElement(FormTextarea, props);
}

const criaComponentButtonRemover = (removerNota, posicao) => {
    const props = {
        className: 'note__control',
        type: 'button',
        click: event => props.remover(event, posicao)
    }
    const children = {
         className: 'fa fa-times',
         'aria-hidden': true
    }
    return React.createElement(FormButton, props, children);
}

const criaComponentButtonConcluido = (adionarNota, posicao, notaAlterada) => {
    const props = {
        className: 'note__control',
        type: 'button',
        onClick: event => adicionarNota(notaAlterada.titulo, notaAlterada.text, event.target.form, posicao);
    }
    const children = 'concluido';

    return React.createElement(FormButton, props, children);
}


const FormNotas = (props) => {
    let notaAlterada = new Nota(props.notaAtual.titulo, props.notaAtual.texto, props.notaAtual.editando);
    let formNotas;

    let inputTitulo = criaComponenteInputTitulo(notaAlterada);
    let formTextarea = criaComponenteFormTextarea(notaAlterada);

    formProps = {
        className: 'note',
    };

    let children;
    let onClick;

    if (props.notaAtual.editando){
        let buttonRemover = criaComponentButtonRemover(props.removerNota, props.posicao);
        let buttonConcluido = criaComponentButtonConcluido(props.adicionarNota, props.posicao, notaAlterada);
    }

    formNotas = React.createElement(form, formProps, children);

    return formNotas;
}

export default FormNotas;
