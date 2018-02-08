const FormButton = (props) => {
    let formButton = document.createElement('button');
        formButton.setAttribute('class', props.className);
        formButton.setAttribute('type', props.type);

    formButton.addEventListener('click', props.click);
    formButton.innerHTML = props.value;

    return formButton;
}

export default FormButton;