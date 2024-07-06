import type { RefSymbol } from "@vue/reactivity";

export const cartItems=() => {
    return useState('items', () => [])
    
}
export const Cart=()=>{

 const items = cartItems();

 if(localStorage.getItem("cart") != null){
    console.log("exist");
    items.value=JSON.parse(localStorage.getItem("cart"))
   }

   

 const add = (item: object) => {
    //check if in exists in cart
    const index = items.value.findIndex((i)=>{
       return i.id==item.id
      })
      
      if( index !=  -1){
         items.value[index].quantity++
   
      }else{
         item.quantity =1
         items.value.unshift(item);
      }
      console.log("in add", item)
      localStorage.setItem('cart',JSON.stringify(items.value))
      
      
      // items.value.push(item)
      // console.log(items.value);
   } 
   

   
const remove =(index:number)=>{
      console.log(index,"this is new index");
      console.log(items.value);
      
      items.value.splice(index , 1 )


      localStorage.setItem('cart', JSON.stringify(items.value)); 
      console.log(index,"item deleted");  
      console.log(items.value);  

}

const decrease= (index: number)=>{
   if(items.value[index].quantity == 1){
      //delete item
      remove(index)
      localStorage.setItem('cart', JSON.stringify(items.value)); 

   }
   else {
      items.value[index].quantity--   
      localStorage.setItem('cart', JSON.stringify(items.value)); 

   }
 
}




const calculateSumCart = (items) => {
   let sumCart = 0;

   items.forEach((item) => {
     sumCart += item.quantity;
   //   console.log(sumCart);
});
return sumCart 
   

};
const calTotatAmt =(items) => {
   let totalAmount=0
   items.forEach((item) => {
      totalAmount +=item.price

      console.log(totalAmount);
   })
   return totalAmount
     
   
 };


return {
   items,
   add,
   remove,
   // increase,
   decrease,
   calTotatAmt,
   calculateSumCart
   // addToWishlist
   
}
}

