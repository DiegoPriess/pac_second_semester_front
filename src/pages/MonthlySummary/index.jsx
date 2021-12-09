import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom'
import { api } from '../../api/api';
import './style.scss';


const MonthlySummary = (props) => {

    const [positiveAccountsAmount, setPositiveAccountsAmount] = useState(0);
    const [negativeAccountsAmount, setNegativeAccountsAmount] = useState(0);
    const [positiveAccountsPriceAmount, setPositiveAccountsPriceAmount] = useState(0);
    const [negativeAccountsPriceAmount, setNegativeAccountsPriceAmount] = useState(0);
    const { searchText } = useParams();

    useEffect(() => {
        api.get(`account/monthlySummary/${localStorage.getItem("email")}/${localStorage.getItem("password")}`).then((response) => {
            setPositiveAccountsAmount(response.data.result.positiveAccountsAmount);
            setNegativeAccountsAmount(response.data.result.negativeAccountsAmount)
            setPositiveAccountsPriceAmount(response.data.result.positiveAccountsPriceAmount);
            setNegativeAccountsPriceAmount(response.data.result.negativeAccountsPriceAmount)
        })
    }, [searchText]);

    const finishValue = positiveAccountsPriceAmount - negativeAccountsPriceAmount;

    return (
        <div className="monthlySummary-container">
            <i className="material-icons accounts-icon">summarize</i>
            <div className="monthlySummary-content">
                <div className="left">
                    <div className="data-group">
                        <label>Total de contas :</label>
                        <p>{positiveAccountsAmount + negativeAccountsAmount}</p>
                    </div>
                    <div className="data-group">
                        <label>Saldo final :</label>
                        <p className={`${finishValue < 0 ? "negative" : "positive"}`}>R$ {finishValue}</p>
                    </div>

                </div>
                <div className="right">
                    <div className="data-group">
                        <label>Contas positivas :</label>
                        <p className="positive">{positiveAccountsAmount}</p>
                    </div>
                    <div className="data-group">
                        <label>Valor positivo acumulado :</label>
                        <p className="positive">R$ {positiveAccountsPriceAmount}</p>
                    </div>
                    <div className="data-group">
                        <label>Contas negativas :</label>
                        <p className="negative">{negativeAccountsAmount}</p>
                    </div>
                    <div className="data-group">
                        <label>Valor negativo acumulado :</label>
                        <p className="negative">R$ {negativeAccountsPriceAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MonthlySummary;