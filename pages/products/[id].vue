<template>
    <div>
        <!-- <img :src="wefulwihe" /> -->
        <div class="bg-neutral-50 p-4 capitalize flex items-center my-6   ">

            <div v-for="(p,index) in route.params.id" :key="index" class="flex items-center">
                <img :src=newprod[p-1].image class="w-[35%]" />
                <div class="flex flex-col m-8">
                    <h1 class="uppercase text-2xl font-semibold my-2">{{ newprod[p-1].title }}</h1>
                    <h1 class="capitalize mb-2">{{ newprod[p-1].category }}</h1>
                    <h1 class="text-green-600">Special Price</h1>
                    <h1 class="text-3xl my-4"> ₹{{ newprod[p-1].price }}</h1>
                    <div class="flex my-2">
                        <p class="text-lg font-semibold hover:bg-slate-200 mx-4  border border-slate-900 py-2 px-[16px]  rounded-full">M</p>
                        <p class="text-lg font-semibold hover:bg-slate-200 mx-4  border border-slate-900 py-2 px-[20px]  rounded-full">L</p>
                        <p class="text-lg font-semibold hover:bg-slate-200 mx-4  border border-slate-900 py-[10px] px-4  rounded-full">Xl</p>
                    </div>
                    <h1 class="text-xl font-semibold mt-4">About the product</h1>
                    <h1 class="text-lg w-[700px] text-justify"> {{ newprod[p-1].description }}</h1>
                </div>
                <!-- <h1>Rating: {{ newprod[index].rating[0].value }}</h1> -->
            </div>
        </div>
        </div>
</template>

<script setup>
const route =useRoute();
const details = route.params.id
import newprod from '/API_Data.json';
let latest=newprod
console.log(newprod)

console.log(latest)

const link=  latest+ `${details}` ;
console.log(link)
console.log(details)



defineProps({
    id:Number,
    image:String,
    title: String,
    category: String,
    description: String ,
    price: Number,
})




// const route =useRoute();
// const details = route.params.id
// // console.log(route.params.id)
// const link= `https://fakestoreapi.com/products/${details}`;
// const { data : products, error }= await useFetch(link )
// console.log(link)
</script>