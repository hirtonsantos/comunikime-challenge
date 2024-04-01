// src/components/SaleItem/SaleItem.tsx
import { FC } from 'react';
import Image from 'next/image';
import ImageDefault from '@/assets/What-is-a-Product.png'

interface SaleItemProps {
    item: any; /*SaleItemType;*/
    onRemove: () => void;
}

const SaleItemClass: FC<SaleItemProps> = ({ item, onRemove }) => {

    return (
        <span>
            <div className="imagem-span">
                <Image src={ImageDefault} alt="car-image" width={420} height={70}/>
            </div>
            <div className="details-span">
                <div className="informations-products">
                    <p className="name-span"> {item.name} </p>
                    <p className="category-span"> {item.category} </p>
                </div>
                <p onClick={onRemove} className="span-delete">Remover</p>
            </div>
        </span>
    );
};

export default SaleItemClass;
