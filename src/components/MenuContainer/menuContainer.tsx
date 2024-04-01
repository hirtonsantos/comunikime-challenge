import { FC } from "react";
import Header from "./header";
import MainSection from "./mainSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import HeaderClass from "./headerClass";

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

const MenuContainer: FC<MenuContainerProps> = async ({
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
    const session = await getServerSession(authOptions);
    return (
        <div>
            <HeaderClass setUserinput={setUserinput} userinput={userinput} showProducts={showProducts} session={session} />
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