'use client'
import MainSectionClass from "@/components/MenuContainer/mainSectionClass";
import { productList } from "@/constants/store-mock";
import { useContext, useEffect, useState } from "react";
import './page.css'
import HeaderClass from "@/components/MenuContainer/headerClass";
import PopUpCreateProduct from "@/components/PopUpCreateProduct";
import { AuthContext } from "@/contexts/AuthContext";
import AlertService from "@/services/AlertService";

export default function Home() {

  const [userInput, setUserinput] = useState('')
  const [products, setProducts] = useState<any[]>(productList)
  const [currentSale, setCurrentSale] = useState<any[]>([])
  const [showPopUp, setPopUp] = useState(false)

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

  const fetchProducts = async () => {
    const products = await findProducts()
    const productsData = products.data
    setProducts(productsData)
  }


  const remove = () => {
    setCurrentSale([])
  }

  const buyProducts = () => {
    AlertService.AlertSuccess('Compra efetuada com sucesso')
    remove()
    fetchProducts()
  }

  const { findProducts } = useContext(AuthContext)

  useEffect(() => {
    fetchProducts()
  }, [showPopUp])

  return (
    <div className="App">
      <header className="App-header">
          <HeaderClass userinput={userInput} setUserinput={setUserinput} showProducts={showProducts} setPopup={setPopUp}/>
          <MainSectionClass
            buyProducts={buyProducts}
            currentSale={currentSale}
            handleClick={handleClick}
            products={products}
            remove={remove}
            totalPrice={totalPrice}
            setCurrentSale={(item: any[]) => setCurrentSale(item)}
          />
          {showPopUp ? <PopUpCreateProduct setPopup={(show: boolean) => setPopUp(show)} /> : null}
      </header>
    </div>
  );
}
