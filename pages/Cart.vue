<template>
    <div class="grid justify-between lg:grid-cols-2 w-full font-poppins">
        <!-- {{ storeValue }} -->
        <div  class="flex flex-col  ">
        <div v-for="(c, index) in cart.items.value" :key="index">
          <div class="relative flex px-8 lg:py-4 lg:mx-4 border-b ">
           <img :src="c.image" class="w-32 h-32 mt-4 lg:h-64 lg:w-52" />
           <button @click="deletef(index)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="absolute top-12 right-8"><path fill="#000" fill-rule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"></path></svg></button>
           <div class="flex flex-col mx-4 lg:mx-12 my-4">
            <h1 class="my-2 lg:text-xl font-semibold uppercase  w-40 lg:w-full">{{ c.title }}</h1>
            <h1 class="mb-2 text-sm capitalize">{{ c.category }}</h1>
            <h1 class="text-red-600 ">Final Price</h1>
            <h1 class="my-4 text-xl lg:text-3xl font-Nunito"> ₹{{ c.price }}</h1>
         
          <div class="flex  ">
            <button @click="decreasef(index)" class="lg:px-5 lg:py-3 px-3 mr-4 text-xl border rounded-full border-slate-900 hover:bg-slate-300">-</button>
            <p class="mt-2 text-lg font-semibold">{{ c.quantity }}</p>
            <button  @click="increasef(c)" class="lg:px-5 lg:py-2 px-[10px] mx-4 text-xl border rounded-full border-slate-900 hover:bg-slate-300">+</button>
        </div>
        <div class="flex ">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="my-3" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 11L8.5 12.5L13.5 8" stroke="black" stroke-width="1.5"></path>
         <rect x="2" y="5" width="16" height="12" rx="0.5" stroke="black" stroke-width="1.5"></rect>
         <path d="M2 5.5L3.85604 2.25193C3.94506 2.09614 4.11073 2 4.29016 2H15.2427C15.4042 2 15.5557 2.07798 15.6496 2.20938L18 5.5" stroke="black" stroke-width="1.5"></path>
         <path d="M7.5 5L8.5 2H11L12 5H7.5Z" stroke="black" stroke-width="1.5"></path>
        </svg>
          <h1 class="m-2 text-sm lg:text-base font-semibold">Easy 30 days returns on all orders</h1>
        </div>
    </div>
    
    
    
    </div>
</div>
</div>
<div class="flex flex-col lg:w-[80%] p-8 m-8 bg-green-50 h-fit">
    <h1 class="pb-4 my-2 text-xl font-semibold border-b border-gray-300 ">Order Details <span class="text-lg text-gray-400"> ({{cart.items.value.length}} items) </span></h1>
    <div class="flex justify-between my-1"><h1> Bag total</h1> <h1 class="text-gray-500">₹{{total}}</h1></div>
    <div class="flex justify-between my-1"><h1 >Bag discount</h1><h1 class="text-gray-500">₹518</h1></div>
    <div class="flex justify-between my-1"><h1>Coupon Discount</h1><h1 class="text-red-400">Apply Coupon</h1></div>
    <div class="flex justify-between my-1 "><h1>Delivery Fee</h1><h1 class="text-gray-500">Free</h1></div>
    <div class="flex justify-between pt-2 my-4 border-t border-gray-300 "><h1 class="font-semibold ">Order Total</h1><h1 class="font-semibold ">₹{{total-518}}</h1></div>
    <button @click="order" class="w-56 px-6 py-2 my-2 text-center text-white rounded-sm bg-slate-800"> Place Order</button>
    <h1 class="pb-4 mt-16 text-sm">The price and availability of items at cartify.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping Cart Learn more.</h1>


</div>
       
    </div>
</template>
<script setup>

import { Cart } from '~/composables/useCart';
const cart=Cart();
// const localCart=JSON.parse(localStorage.getItem('localCart'))
// const storeValue=JSON.parse(localStorage.getItem('storeValue'))
// console.log(storeValue)
// let count=0
// function decr(){
//  count --
//  console.log(count)
// }
function increasef(item){
    let count=1   
 cart.add(item)

}
function decreasef(index){
 cart.decrease(index)

}
function deletef(index) {
    console.log(cart.items)
    cart.remove(index)
}
function order(){
    alert("Order placed")
}

const sumCart = cart.calculateSumCart(cart.items.value);
const Amount = cart.calTotatAmt(cart.items.value);

const totalAmount= Amount.toFixed(2);
const total=(totalAmount*sumCart).toFixed(2);
console.log(total)
// console.log('Totalquantity:', sumCart);
</script>