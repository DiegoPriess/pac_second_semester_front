import React from 'react';
import InputGroup from '../../components/InputGroup';
import './style.scss';

const CreateAccounts = () => {
    return (
        <div className="create-accounts">
            <i className="material-icons accounts-icon">add</i>
            <form>
                <div class="data">
                    <InputGroup id="account-name" labelText="Nome:"/>
                    <InputGroup id="account-price" inputType="number" labelText="Preço:"/>
                    <InputGroup id="account-price" inputType="date" labelText="Data:"/>
                    <div className="account-type-select">
                        <div className="input-container">
                            <i className="material-icons negative">money_off</i>
                            <input className="account-type-input" name="account-type" type="radio" defaultChecked/>
                        </div>

                        <div className="input-container">
                            <i className="material-icons positive">attach_money</i>
                            <input className="account-type-input" name="account-type" type="radio"/>
                        </div>
                    </div>
                </div>
                <button>
                    <i className="material-icons">add</i>
                    Enviar conta
                </button>
            </form>
        </div>
    );
}

export default CreateAccounts;