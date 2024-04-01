import { FC } from "react";
import CardProducts from "../CartProducts";
import Product from "../Product";

interface MainSectionProps {
    currentSale: any[];
    setCurrentSale: (sale: any[]) => void;
    remove: () => void;
    totalPrice: number;
    // products: ProductType[];
    products: any[]
    handleClick: (id: number) => void;
}

const MainSection: FC<MainSectionProps> = ({
    currentSale,
    setCurrentSale,
    remove,
    totalPrice,
    products,
    handleClick,
}) => {
    return (
        <section className="flex flex-col md:flex-row">
            <section className="flex flex-wrap justify-center md:justify-start">
                {products.map((item) => (
                    <Product
                        key={item.id}
                        handleClick={handleClick}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        img={item.img}
                    />
                ))}
            </section>
            <CardProducts
                items={products}
                onClearItems={remove}
                onRemoveItem={handleClick}
                totalPrice={totalPrice}
            />
        </section>
    );
};

export default MainSection;