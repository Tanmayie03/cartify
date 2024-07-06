export const wishItems=() => {
    return useState('wishitems', () => [])
    
}

export const Wish = () =>{

    const wishitems= wishItems();

    if(localStorage.getItem("wishes") != null){
        console.log("wish exist");
        wishitems.value=JSON.parse(localStorage.getItem("wishes"))
        console.log(wishitems);
       }

    localStorage.setItem('wishes',JSON.stringify(wishitems.value))
    wishitems.value=JSON.parse(localStorage.getItem("wishes"))
    
    
    const wishlist = (item:object)=>{
       wishitems.value.unshift(item)
       console.log("wishlisted", wishitems);
    }
    
    const addToWishlist = (item) => {
       wishitems.value.unshift  (item);
       localStorage.setItem('wishes', JSON.stringify(wishitems.value));
       console.log("add to wishlist");
     };
    const removeWishlist = (index:number) => {
       wishitems.value.splice(index , 1);
       localStorage.setItem('wishes', JSON.stringify(wishitems.value));
       console.log("remove wishlist");
     };
     const getWishlist = () => {
        return wishitems.value;
      };
return{
    wishlist,
    wishitems,
    addToWishlist,
    getWishlist,
    removeWishlist
}
}