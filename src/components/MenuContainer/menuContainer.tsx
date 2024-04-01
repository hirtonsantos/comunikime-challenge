import { FC } from "react";
import Header from "./header";
import MainSection from "./mainSection";

interface MenuContainerProps {
    currentSale: any[];
    setProducts: (products: any[]) => void;
    setCurrentSale: (sale: any[]) => void;
    remove: () => void;
    totalPrice: number;
    // products: ProductType[];
    products: any[];
    handleClick: (id: number) => void;
    showProducts: (userInput: string) => void;
    setUserinput: (input: string) => void;
    userinput: string;
}

const MenuContainer: FC<MenuContainerProps> = ({
    currentSale,
    setProducts,
    setCurrentSale,
    remove,
    totalPrice,
    products,
    handleClick,
    showProducts,
    setUserinput,
    userinput,
}) => {
    return (
        <div>
            <Header setUserinput={setUserinput} userinput={userinput} showProducts={showProducts} />
            <MainSection
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                remove={remove}
                totalPrice={totalPrice}
                products={products}
                handleClick={handleClick}
            />
        </div>
    );
};

export default MenuContainer;