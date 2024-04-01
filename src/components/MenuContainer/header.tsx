import { FC } from 'react';

interface HeaderProps {
    setUserinput: (input: string) => void;
    userinput: string;
    showProducts: (userInput: string) => void;
}

const Header: FC<HeaderProps> = ({ setUserinput, userinput, showProducts }) => {
    return (
        <header className="flex flex-row justify-between items-center">
            <div>
                <h1 className="text-xl font-bold"> Comunikime </h1>
                <h3 className="text-lg"> Store </h3>
            </div>
            <div className="flex flex-row items-center">
                <input
                    type="text"
                    value={userinput}
                    onChange={(event) => setUserinput(event.target.value)}
                    className="px-2 py-1 border border-gray-300 rounded mr-2"
                />
                <button
                    onClick={() => showProducts(userinput)}
                    className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                >
                    {' '}
                    Buscar{' '}
                </button>
            </div>
        </header>
    );
};

export default Header;