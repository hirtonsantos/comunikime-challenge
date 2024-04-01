import { FC } from 'react';
import './style.css'

interface HeaderProps {
    setUserinput: (input: string) => void;
    userinput: string;
    showProducts: (param: string, userinput: string) => void
}

const HeaderClass: FC<HeaderProps> = ({ setUserinput, userinput, showProducts }) => {
    return (
        <header className="pesquisa">
            <div>
                <h1> Comunikime </h1>
                <h3> Store </h3>
            </div>
            <div className="barra-de-pesquisa">
                <input type="text" value={userinput} onChange={(event) => setUserinput(event.target.value)} />
                <button onClick={() => showProducts('Bebidas', userinput)} id="button-buscar">
                    {' '}
                    Buscar{' '}
                </button>
            </div>
        </header>
    );
};

export default HeaderClass;