import React from 'react'
import ListaNotas from '../listaNotas'
import Section from './section'
import FormNotas from './formNotas'

const montaUmFormNotas = (posicao, listaNotas, removerNota, adicionarNota, editaFormulario) => {
    const props = {
        key: posicao,
        notaAtual: listaNotas.pega(posicao),
        posicao: posicao,
        removerNota: removerNota,
        adicionarNota: adicionarNota,
        editaFormulario: editaFormulario
    }
    return <FormNotas {...props} />
}

const SecaoNotas = ({ listaNotas, removerNota, adicionarNota, editaFormulario }) => {
    const props = { 
        className: 'notes'
     }
     
    return (
        <Section {...props}>
            {listaNotas.pegaTodos().map(
                (notaAtual, posicao) => (montaUmFormNotas(posicao, listaNotas, removerNota, adicionarNota, editaFormulario))
            )}
        </Section>
    )
}

export default SecaoNotas;