import { FC } from 'react';
import SaleItemClass from '../SaleItem/saleItemClass';
import { FaCartPlus } from 'react-icons/fa'
import './style.css'
import AlertService from '@/services/AlertService';

interface CardProductsProps {
    items: any[]; /*SaleItemType[]*/
    totalPrice: number;
    onRemoveItem: (itemId: number) => void;
    onClearItems: () => void;
    buyProducts: () => void;
}

const CardProductsClass: FC<CardProductsProps> = ({ items, totalPrice, onRemoveItem, onClearItems, buyProducts }) => {
    return (
        <div className="carrinho">
            <div className="header-carrinho">
                <p> Carrinho de compras </p>
            </div>
            {items.length !== 0 ? (
                <>
                    {items.map(item => (
                        <SaleItemClass key={item.id} item={item} onRemove={() => onRemoveItem(item.id)} />
                    ))}
                    <span className="span-inferior">
                        <div className="valor-total">
                            <p> Total: </p>
                            <p className="total-price"> R$ {totalPrice} </p>
                        </div>
                        <div className="btn-group">
                            <FaCartPlus color='green' size={30} onClick={buyProducts} />
                            <button onClick={onClearItems}> Limpar lista </button>
                        </div>
                        <div className="btn-group">
                        </div>
                    </span>
                </>
            ) : (
                <div className="itens-adicionados">
                    <p className="sacola-vazia"> Sua sacola está vazia </p>
                    <p className="pedido-para-adicionar-itens"> Adicione itens </p>
                </div>
            )}
        </div>
    );
};

export default CardProductsClass;