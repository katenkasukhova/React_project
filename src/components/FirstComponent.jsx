import logo from '../logo.svg';
import '../App.css';
import ChildrenComponent from './ChildrenComponent';

const FirstComponent = () => {
    return(
        <div>
            <h1> Первый компонент</h1>
            <p>Дратути! Это мой первый компонент</p>
            <img src={logo} className="App-logo" alt="logo" />
            <ChildrenComponent name="Катюнечка" text="Вошла в чат"></ChildrenComponent>
            
        </div>
    )
}

export default FirstComponent;
