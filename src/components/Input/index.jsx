import React from 'react';
import './style.scss';

const Input = (props) => {
    // Construir função para alterar label ao inserir algum arquivo
    return (
        <>
            {props.inputType === 'file' ? <><label for={props.id} className="label-file"><i className="material-icons">description</i>Clique aqui e selecione uma foto</label><input id={props.id} type="file"/></>: <input className="input" id={props.id} readonly={props.readonly ? props.readonly.toString() : false} type={props.inputType} />}
        </>
    );
}

export default Input;