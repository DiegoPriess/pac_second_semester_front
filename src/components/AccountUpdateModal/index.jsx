import React from 'react';
import './style.scss';

const AccountUpdateModal = (props) => {

    const[accountData, setAccountData] = useState([]);
    const [updateAccountPrice, setUpdateAccountPrice] = useState("");
    const [updateAccountDate, setUpdateAccountDate] = useState("");
    const [updateAccountDescription, setUpdateAccountDescription] = useState("");
    const [updateAccountType, setUpdateAccountType] = useState(false);
    const [updateAccountStatus, setUpdateAccountStatus] = useState("");
    const PATH = "/criarcontas";

    const onUpdateAccount = (event) => {
        
        event.preventDefault();
        
        if(updateAccountPrice === "" || updateAccountDate === "" || updateAccountDescription === "")
        {
            ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Ops! Todos os campos precisam ser preenchidos" type="negative" />, document.getElementById('root'));
        }
        else
        {
            const data = {
                "description": updateAccountDescription,
                "month": parseInt(updateAccountDate.split("-")[1]),
                "year": parseInt(updateAccountDate.split("-")[0]),
                "price": parseInt(updateAccountPrice),
                "type": updateAccountType ? "positive" : "negative",
                "status": updateAccountStatus,
                "currentUser": {
                    "email": localStorage.getItem("email"),
                    "password": localStorage.getItem("password") 
                }
            };

            api.post(`account/register`, data).then((response) => {
                setUpdateAccountDescription(response.data.result[0].description);
                setUpdateAccountPrice(response.data.result[0].price);
                setUpdateAccountType(response.data.result[0].type);
                setUpdateAccountDate(response.data.result[0].date);
                setUpdateAccountStatus(response.data.result[0].status);
                if(response.status === 200){
                    ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Conta criada com sucesso." type="positive" />, document.getElementById('root'));
                }else{
                    ReactDOM.render(<CustomAlert urlPath={PATH} labelText="Erro ao criar conta." type="negative" /> , document.getElementById('root'));
                }
            })
            .catch((error) => {
                ReactDOM.render(<CustomAlert urlPath={PATH} labelText={error} type="negative" />, document.getElementById('root'));
            });
           
            
        }
    }
  
    useEffect(() => {
        api.get(`account/getById/${props.id}/${localStorage.getItem("email")}/${localStorage.getItem("password")}`).then((response) => {
            setAccountData(response.data.result);
        })
        // Adicionar getById na api
    }, []);

    return (
        <div className="account-update-modal">
            <div className="account-update-modal-content">
                <div className="account-update-modal-text">                    
                    <form>
                        <div className="data">
                            <InputGroup id="account-description" inputType="text" labelText="Descrição" inputValue={updateAccountDescription} onChangeFunction={event => { setUpdateAccountDescription(event.target.value) }}/>
                            <InputGroup id="account-price" inputType="number" labelText="Preço:" inputValue={updateAccountPrice} onChangeFunction={event => { setUpdateAccountPrice(event.target.value) }}/>
                            <InputGroup id="account-date" inputType="date" labelText="Data:" inputValue={updateAccountDate} onChangeFunction={event => { setUpdateAccountDate(event.target.value) }}/>
                            {/* Inserir status */}
                            <div className="account-type-select">
                                <div className="input-container">
                                    <i className="material-icons negative">money_off</i>
                                    <input className="account-type-input" name="account-type" type="radio" value={updateAccountType} onClick={() => { setUpdateAccountType(false) }} defaultChecked/>
                                </div>

                                <div className="input-container">
                                    <i className="material-icons positive">attach_money</i>
                                    <input className="account-type-input" name="account-type" type="radio" value={updateAccountType} onClick={() => { setUpdateAccountType(true) }}/>
                                </div>
                            </div>
                        </div>
                        <div className="submit-container">
                            <button onClick={onUpdateAccount}>
                                <i className="material-icons">add</i>
                                <p>Enviar conta</p>
                            </button>
                        </div>
                    </form>
                </div>
                <button onClick={() => {window.location.pathname = props.urlPath}}>Ok</button>
            </div>
        </div>
    );
}

export default AccountUpdateModal;