import React from 'react';
import Section from './section'
import FormNotas from './formNotas'

const montaUmFormNotas = (posicao, listaNotas, removerNota, adicionarNota, editaFormulario) => {
    props = {
        posicao: posicao,
        notaAtual: listaNotas.pega(posicao),
        removerNota: removerNota,
        adicionarNota: adicionarNota,
        editaFormulario: editaFormulario
    }
    return React.createElement(FormNotas, props);
}

const SecaoNotas = ({ listaNotas, removerNota, adicionarNota, editaFormulario }) => {
    const props = { className: 'notes' };
    const children = listaNotas.map((notaAtual, posicao) => montaUmFormNotas(posicao, listaNotas, removerNota, adicionarNota, editaFormulario));
    
    return React.createElement(Section, props, children);
}

export default SecaoNotas;