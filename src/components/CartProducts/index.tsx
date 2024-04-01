import { FC } from 'react';
import SaleItem from '../SaleItem';

interface CardProductsProps {
    items: any[]; /*SaleItemType[]*/
    totalPrice: number;
    onRemoveItem: (itemId: number) => void;
    onClearItems: () => void;
}

const CardProducts: FC<CardProductsProps> = ({ items, totalPrice, onRemoveItem, onClearItems }) => {
    return (
        <div className="bg-white p-4 max-w-md mx-auto">
            <div className="bg-green-500 rounded-t-2xl p-4">
                <p className="text-white font-bold text-xl"> Carrinho de compras </p>
            </div>
            {items.length !== 0 ? (
                <>
                    {items.map(item => (
                        <SaleItem key={item.id} item={item} onRemove={() => onRemoveItem(item.id)} />
                    ))}
                    <div className="bg-gray-200 rounded-b-xl p-4 flex justify-between">
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-lg"> Total: </p>
                            <p className="text-gray-700"> R$ {totalPrice.toFixed(2)} </p>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={onClearItems}> Limpar lista </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="bg-gray-200 rounded-xl p-4 flex flex-col items-center">
                    <p className="font-bold text-lg text-gray-700"> Sua sacola está vazia </p>
                    <p className="text-gray-600"> Adicione itens </p>
                </div>
            )}
        </div>
    );
};

export default CardProducts;