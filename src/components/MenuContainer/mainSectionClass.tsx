import { FC } from "react";
import ProductClass from "../Product/productClass";
import CardProductsClass from "../CartProducts/cartProductsClass";
import './style.css'

interface MainSectionProps {
    currentSale: any[];
    setCurrentSale: (sale: any[]) => void;
    remove: () => void;
    totalPrice: number;
    // products: ProductType[];
    products: any[]
    handleClick: (id: number) => void;
}

const MainSectionClass: FC<MainSectionProps> = ({
    currentSale,
    setCurrentSale,
    remove,
    totalPrice,
    products,
    handleClick,
}) => {

    function removeItem (itemRemove: number){
        setCurrentSale(currentSale.filter((item) => {
          return item.id!==itemRemove
        }))
    }

    return (
        <section className="mae">
            <section>
                {products.map((item) => (
                    <ProductClass
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
            <CardProductsClass
                items={currentSale}
                onClearItems={remove}
                onRemoveItem={removeItem}
                totalPrice={totalPrice}
            />
        </section>
    );
};

export default MainSectionClass;