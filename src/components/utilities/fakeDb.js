

const addToDb = (id)=>{
    let shoppingCart;
    let storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }
    
    const quantity = shoppingCart[id];
    console.log(quantity);
    if(quantity){
        const count = parseInt(quantity) + 1;
        shoppingCart[id] = count;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}
const removeFromDb =(id) =>{
    const storedDb = localStorage.getItem('shopping-cart');
    if(storedDb){
        const shoppingCart = JSON.parse(storedDb);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
        }
    }
}
const removeAllFromDb = () =>{
    localStorage.removeItem('shopping-cart');
}
export {addToDb, removeFromDb, removeAllFromDb};