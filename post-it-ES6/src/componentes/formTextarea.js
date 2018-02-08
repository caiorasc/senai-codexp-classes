const FormTextarea = (props) => {
    let formTextarea = document.createElement('textarea');
        formTextarea.setAttribute('class', props.className);
        formTextarea.setAttribute('name', props.name);
        formTextarea.setAttribute('rows', props.rows);
        formTextarea.setAttribute('placeholder', props.placeholder);
    
    if(props.readonly){
        formTextarea.setAttribute('readonly', true);
    }

    formTextarea.innerHTML = props.value;

    return formTextarea;
}

export default FormTextarea;