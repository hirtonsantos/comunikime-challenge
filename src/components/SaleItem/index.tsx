// src/components/SaleItem/SaleItem.tsx
import { FC } from 'react';
import Image from 'next/image';
import './style.css'
import ImageDefault from '@/assets/What-is-a-Product.png'

interface SaleItemProps {
    item: any; /*SaleItemType;*/
    onRemove: () => void;
}

const SaleItem: FC<SaleItemProps> = ({ item, onRemove }) => {
    return (
        <span className="flex">
            <div className="mr-4">
                <Image src={ImageDefault} alt="image" className="w-16 h-16" width={16} height={16} />
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col">
                    <p className="font-bold text-base text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.category}</p>
                </div>
                <p onClick={onRemove} className="text-sm text-gray-500 cursor-pointer">Remover</p>
            </div>
        </span>
    );
};

export default SaleItem;