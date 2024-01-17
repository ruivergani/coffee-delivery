import { ShoppingCart } from 'phosphor-react';
import { CardCoffee, CardCoffeeFooter } from './styles';
import { QuantityInput } from '../Form/QuantityInput';
import { useEffect, useState } from 'react';

type Props = {
  coffee: {
    id: string,
    name: string,
    description: string,
    price: number,
    image: string,
    tags: Array<string>
  }
}
export function Card({coffee} : Props){
  // States
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false)

  useEffect(() => {

  }, [isItemAdded])

  // useEffect(() => {
  //   let timeout: number
  //   if (isItemAdded) {
  //     timeout = setTimeout(() => {
  //       setIsItemAdded(false)
  //     }, 1000)
  //   }
  //   return () => {
  //     if (timeout) {
  //       clearTimeout(timeout)
  //     }
  //   }
  // }, [isItemAdded])
  
  // Functions
  function incrementQuantity() {
    setQuantity((state) => state + 1) // Closures Concept
  }
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1) // Closures Concept
    }
  }
  function handleAddItem() {
    //addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }
  return(
    <CardCoffee>
      <img src={coffee.image} alt={coffee.name} className='cardCoffeeImage'/>
      <div className="tags">
        { // Array<string> 
          coffee.tags.map((item) => {
            return (
              <span key={item}>{item}</span>
            )
          })
        }
      </div>
      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>
      <CardCoffeeFooter>
        <div className="cardfooter__price">
          <p><span>£ </span>{coffee.price.toFixed(2)}</p>
        </div>
        <div className="cardfooter__buttons">
          <QuantityInput 
            quantity={quantity} 
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button type='button' onClick={handleAddItem}>
            <ShoppingCart size={22}/>
          </button>
        </div>
      </CardCoffeeFooter>
    </CardCoffee>
  )
}