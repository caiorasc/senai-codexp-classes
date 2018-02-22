
import React from 'react'
import Form from './form'
import FormInput from './formInput'
import FormTextarea from './formTextarea'
import FormButton from './formButton'
import Nota from '../nota'

const criaComponenteInputTitulo = (notaAlterada, posicao) => {
    const props = {
        key: 'note-title',
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: notaAlterada.titulo,
        onChange: event => {
            notaAlterada.titulo = event.target.value;
        }
    }
    if(posicao !== undefined && !notaAlterada.editando){
        props.readOnly = true
    }

    return <FormInput {...props} />
}

const criaComponenteFormTextarea = (notaAlterada, posicao) => {
    const props = {
        key: 'note-body',
        className: 'note__body',
        name: 'texto',
        rows: '5',
        placeholder: 'Criar uma nota...',
        defaultValue: notaAlterada.texto,
        onChange: event => {
            notaAlterada.texto = event.target.value;
        }
    }
    if(posicao !== undefined && !notaAlterada.editando){
        props.readOnly = true
    }

    return <FormTextarea {...props} />
}

const criaComponentButtonRemover = (removerNota, posicao) => {
    const props = {
        key: 'note-title-remover',
        className: 'note__control',
        type: 'button',
        click: event => props.remove(event, posicao)
    }
    const children = React.createElement('i',{
        className: 'fa fa-times',
        'aria-hidden': true
    })
    return <FormButton {...props }>{children}</FormButton>
}

const criaComponentButtonConcluido = (adicionarNota, posicao, notaAlterada) => {
    const props = {  
        key: 'note-title-concluir',
        className: 'note__control',
        type: 'button',
        onClick: event => adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao)
    }
    const children = 'Concluido';

    return <FormButton {...props}>{children}</FormButton>
}

const FormNotas = ({ notaAtual, posicao, adicionarNota, removerNota, editarFormulário }) => {
    let notaAlterada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando);
    let formNotas;

    let inputTitulo = criaComponenteInputTitulo(notaAlterada, posicao);
    let formTextarea = criaComponenteFormTextarea(notaAlterada, posicao);
    let buttonRemover = criaComponentButtonRemover(removerNota, posicao);
    let buttonConcluido = criaComponentButtonConcluido(adicionarNota, posicao, notaAlterada);

    let props = { className: 'note' };
    
    return  <Form {...props}>
                {notaAlterada.editando === undefined && buttonRemover}
                {inputTitulo}
                {formTextarea}
                {(posicao === undefined || notaAlterada.editando == undefined) && buttonConcluido} 
            </Form>
}

export default FormNotas;
