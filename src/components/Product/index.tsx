import Image from 'next/image';
import { FC } from 'react';

interface ProductProps {
    id: number;
    name: string;
    price: number;
    category: string;
    img: string;
    handleClick: (id: number) => void;
}

const Product: FC<ProductProps> = ({ id, name, price, category, img, handleClick }) => {
    return (
        <div className="bg-white flex flex-col items-start rounded border border-gray-300 p-4 m-4 md:w-72">
            <Image src={img} alt="image-product" className="w-full h-auto mb-4" width={100} height={100} />
            <div className="flex flex-col items-start w-full">
                <p className="font-bold text-lg text-gray-900">{name}</p>
                <p className="text-gray-600 text-sm">{category}</p>
                <p className="font-semibold text-lg text-green-600">R$ {price.toFixed(2)}</p>
                <button onClick={() => handleClick(id)} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Adicionar</button>
            </div>
        </div>
    );
};

export default Product;