'use client'
import MainSectionClass from "@/components/MenuContainer/mainSectionClass";
import { productList } from "@/constants/store-mock";
import { useState } from "react";
import './page.css'
import Header from "@/components/MenuContainer/header";
import HeaderClass from "@/components/MenuContainer/headerClass";

export default function Home() {

  const [userInput, setUserinput] = useState('')
  const [products, setProducts] = useState<any[]>(productList)
  const [currentSale, setCurrentSale] = useState<any[]>([])

  function handleClick(productId: number){
    const add =  products.find((item) => item.id === productId);
    setCurrentSale([...currentSale, add])
    if (add.cont === 1){
      add.cont +=1
    }
  }

  const totalPrice = currentSale.reduce((previousValue, currentProduct) => {
    return currentProduct.price + previousValue
  }, 0)

  const showProducts = (param: string, userinput: string) => {
    let filteredProducts = productList;
  
    if (userinput === "Bebidas" || param === "Bebidas") {
      filteredProducts = productList.filter(item => item.category === "Bebidas");
    } else if (userinput === "Sanduíches" || param === "Sanduíches") {
      filteredProducts = productList.filter(item => item.category === "Sanduíches");
    }
  
    setProducts(filteredProducts);
  }

  const remove = () => {
    setCurrentSale([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <HeaderClass userinput={userInput} setUserinput={setUserinput} showProducts={showProducts}/>
        <MainSectionClass
          currentSale={currentSale}
          handleClick={handleClick}
          products={products}
          remove={remove}
          totalPrice={totalPrice}
          setCurrentSale={(item: any[]) => setCurrentSale(item)}
        />
      </header>
    </div>
  );
}
