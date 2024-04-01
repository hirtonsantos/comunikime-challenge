import Image from 'next/image';
import ImageDefault from '@/assets/What-is-a-Product.png'
import { FC } from 'react';
import './style.css'

interface ProductProps {
    id: number;
    name: string;
    price: string;
    category: string;
    img: string;
    handleClick: (id: number) => void;
}

const ProductClass: FC<ProductProps> = ({ id, name, price, category, img, handleClick }) => {
    return (
        <div className="product-card">
            <Image src={ImageDefault} alt="image-product"/>
            <div className="details-product">
                <p className="name-product"> {name} </p>
                <p className="category-product"> {category}</p>
                <p className="price-product"> R$ {price} </p>
                <button onClick={() => handleClick(id)}>Adicionar</button>
            </div>
        </div>
    );
};

export default ProductClass;