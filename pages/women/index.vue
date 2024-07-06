<template>
  <div class="h-full">
    <div
      class="grid h-full grid-cols-2 gap-2 overflow-hidden lg:m-8 lg:grid-cols-4">
      <span
        v-for="p in womensection.filter(filterProducts)"
        class="transform hover:shadow-2xl"
        :key="p.id">
        <div class="flex flex-col justify-between p-4 text-left">
          <NuxtLink :to="`/women/${p.id}`"
            ><div class="overflow-hidden">
              <img
                :src="p.image"
                class="w-full h-56 lg:w-[292px] lg:h-[360px]" /></div
          ></NuxtLink>
          <div class="flex flex-col my-6">
            <NuxtLink :to="`/women/${p.id}`"
              ><p
                class="font-semibold lg:text-lg text-slate-500 hover:text-slate-800">
                {{ p.title }}
              </p>
            </NuxtLink>
            <button @click="wishbtn(p)">
              <svg
                class="absolute w-6 ml-20 hover:text-red-600 right-4 bottom-4"
                viewBox="0 0 20 20">
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"></path>
              </svg>
            </button>
          </div>
          <div class="flex text-center">
            <p class="text-xl font-semibold text-left text-green-600">
              ₹{{ p.price }}
            </p>
            <p class="mt-1 ml-2 text-sm text-green-600 lg:mx-4">
              Special Price
            </p>
          </div>
          <p class="text-sm">Free Delivery</p>
          <!-- <p class="text-lg ">Ratings: {{ p.rating.rat }}</p>  -->
        </div>
      </span>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
import { Cart } from "~/composables/useCart";
const cart = Cart();
import newprod from "/API_Data.json";
console.log(newprod);

import { Wish } from "~/composables/Wish";
const wish = Wish();
function wishbtn(item) {
  wish.addToWishlist(item);
  console.log("wishlisted");
}

const searchInput = ref("");
function filterProducts(p) {
  return p.title.toLowerCase().includes(searchInput.value.toLowerCase());
}

let womensection = [];
if (newprod && Array.isArray(newprod)) {
  womensection = newprod.filter(
    (women) => women.category === "female's clothing"
  );
}

console.log(womensection);
defineProps({
  id: Number,
  image: String,
  title: String,
  category: String,
  description: String,
  price: Number,
});
</script>
