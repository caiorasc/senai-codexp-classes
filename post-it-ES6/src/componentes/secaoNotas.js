import React from 'react';
import Section from './section'
import FormNotas from './formNotas'

const criarFormNotas = (posicao, notaAtual, removerNota, adicionarNota, editaFormulario) => {
    props = {
        posicao: posicao,
        notaAtual: notaAtual,
        removerNota: removerNota,
        adicionarNota: adicionarNota,
        editaFormulario: editaFormulario
    }
    return React.createElement(FormNotas, props);
}

const SecaoNotas = ({ listaNotas, removerNota, adicionarNota, editaFormulario }) => {
    const props = { className: 'notes' };
    const children = [];

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let notaAtual = listaNotas.pega(posicao);

        let formNotas = criarFormNotas(posicao, notaAtual, removerNota, adicionarNota, editaFormulario);

        children.push(formNotas);
    }
    
    return React.createElement(Section, props, children);
}

export default SecaoNotas;