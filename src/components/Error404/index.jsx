import './style.scss'
import Button from '../Button';
import img from '../../assets/imgs/404.png';

const Error404 = () => {
    return (
        <div className="errorPage">
            <div className="errorPage-content">
                <h1 className="main-text">Ops! Parece que essa página não existe</h1>
                <div className="button-container">
                    <Button textButton="Voltar para a tela inicial" />
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Error404;