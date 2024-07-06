<template>
    <div>
        <div class="grid h-full grid-cols-1 gap-6 m-8">
        <span  v-for="(p,index) in newprod.value" :key="index">
            <Shop 
            :id="p.id" 
            :image="p.image"
            :title="p.title"
            :description="p.description"
            :category="p.category"
            :price="p.price"
            
            
          
            />
        </span>
    </div>
        <!-- {{ data.title }} -->
    </div>
</template>
<script setup>

const route=useRoute();
// const {data: newprod} = await useFetch('https://fakestoreapi.com/products')
import { Cart } from '~/composables/useCart';
const cart=Cart();
const { data: newprod } = await useFetch('https://mocki.io/v1/a41b30bd-e2cb-4432-953a-9e107746b108');
console.log(newprod.value, "new");

// console.log(newprod.title)

// defineProps({
//     id: Number,
//     title: String,
//     price: Number,
//     category: Array,
//    })
</script>