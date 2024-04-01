import { FC } from 'react';
import './style.css'
import SignIn from '../User/signIn';
import { Session } from 'next-auth';

interface HeaderProps {
    setUserinput: (input: string) => void;
    userinput: string;
    showProducts: (param: string, userinput: string) => void
    session: any;
}

const HeaderClass: FC<HeaderProps> = ({ setUserinput, userinput, showProducts, session }) => {
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
            <div className="order-3 col-start-8 col-end-8 flex justify-end">        
              <SignIn session={session}/>
            </div>
        </header>
    );
};

export default HeaderClass;