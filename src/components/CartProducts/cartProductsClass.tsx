import { FC } from 'react';
import SaleItemClass from '../SaleItem/saleItemClass';
import './style.css'

interface CardProductsProps {
    items: any[]; /*SaleItemType[]*/
    totalPrice: number;
    onRemoveItem: (itemId: number) => void;
    onClearItems: () => void;
}

const CardProductsClass: FC<CardProductsProps> = ({ items, totalPrice, onRemoveItem, onClearItems }) => {
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
                            <p className="total-price"> R$ {totalPrice.toFixed(2)} </p>
                        </div>
                        <div className="btn-group">
                            <button onClick={onClearItems}> Limpar lista </button>
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