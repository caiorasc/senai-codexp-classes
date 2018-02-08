
import Form from './form.js';
import FormInput from './formInput.js';
import FormTextarea from './formTextarea.js';
import FormButton from './formButton.js';

const FormNotas = (props) => {

    let textareaTexto = new FormTextarea({
        className: 'note__body',
        name: 'texto',
        value: props.notaAtual.texto,
        rows: '5',
        placeholder: 'Criar uma nota...',
        readonly: !props.notaAtual.editando 
    });

    let formInput = new FormInput({
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        value: props.notaAtual.titulo,
        placeholder: 'Título',
        readonly: !props.notaAtual.editando 
    });
    
    let buttonConcluido = new FormButton({
        className: 'note__control',
        type: 'button',
        value: props.notaAtual.editando == true ? 'Conluído':'<i class="fa fa-times" aria-hidden="true"></i>',
        click: props.notaAtual.editando == true ? () => adicionarNota(formInput, textareaTexto, formNotas, props.posicao):(evento) => removerNota(evento, props.posicao)
    });

    let formNotas = new Form({
        className: 'note',
        click: props.notaAtual.editando == true ? () => { } : () => editaFormulario(props.posicao), 
        children: props.notaAtual.editando == true ? [formInput, textareaTexto, buttonConcluido]:[buttonConcluido, formInput, textareaTexto] 
    });

    return formNotas;

}

export default FormNotas;
