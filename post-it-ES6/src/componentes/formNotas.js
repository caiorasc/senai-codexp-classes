
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
        onClick: event => adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao)
    }
    const children = 'Concluido';

    return React.createElement(FormButton, props, children);
}

const FormNotas = ({ notaAtual, posicao, adicionarNota, removerNota, editarFormulário }) => {
    let notaAlterada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando);
    let formNotas;

    let inputTitulo = criaComponenteInputTitulo(notaAlterada);
    let formTextarea = criaComponenteFormTextarea(notaAlterada);

    let props = { className: 'note' };
    let children;

    if (notaAlterada.editando){
        let buttonRemover = criaComponentButtonRemover(removerNota, posicao);
        let buttonConcluido = criaComponentButtonConcluido(adicionarNota, posicao, notaAlterada);

        children = [buttonRemover, inputTitulo, formTextarea, buttonConcluido];
    } else {
        children = [inputTitulo, formTextarea];
        props.onClick = () => editarFormulário(posicao);
    }

    return React.createElement(form, props, children);
}

export default FormNotas;
