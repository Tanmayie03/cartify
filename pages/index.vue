<template>
    <div class="overflow-hidden font-Nunito">
        <div class="flex justify-around mx-4 my-4 overflow-hidden">
            

<!-- <div >
    <div class="relative h-56 rounded-lg md:h-96" ref="scrollContainer" >
        <div class="duration-700 ease-in-out " >
            <img src="../assests/images/diwali-sale.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <div class="duration-700 ease-in-out " >
            <img src="../assests/images/diwaliSale.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <div class="duration-700 ease-in-out " >
            <img src="../assests/images/Fashion-Carnival.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <div class="duration-700 ease-in-out " >
            <img src="../assests/images/diwali-sale.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <div class="duration-700 ease-in-out " >
            <img src="../assests/images/diwali-sale.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    
    <button type="button" class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none" @click="decrementBtn">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none" @click="incrementBtn">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div> -->


            <NuxtLink to="/"><img src="../assests//images/diwali.jpg" class="w-full duration-500 transform hover:scale-105 lg:h-[450px] " /></NuxtLink>
            <!-- <img src="../assests/images/diwaliSale.png" />
            <img src="../assests/images/Clearance-Sale.jpg" /> -->
        </div>
        <img src="../assests/images/coupon.webp"  class="lg:h-32 px-4 mx-auto "/>

        <div class="flex justify-center w-screen my-4 overflow-hidden">
            <NuxtLink to="/men" class= "overflow-hidden"><img src="../assests/images/maleposter.avif"   class="duration-500 transform hover:scale-105" /></NuxtLink>
             <NuxtLink to="/women" class="overflow-hidden"><img src="../assests/images/femaleposter.avif" class="duration-500 transform hover:scale-105" /></NuxtLink>
             <NuxtLink to="/jewel" class="overflow-hidden"><img src="../assests/images/jewelposter.avif"  class="duration-500 transform hover:scale-105"/></NuxtLink>
             <NuxtLink to="/electronics" class="overflow-hidden"><img src="../assests/images/shoesposter.avif"  class="duration-500 transform hover:scale-105"/></NuxtLink>
        </div>

        <!-- <div data-aos="fade-up">hiiii this is aos</div> -->

        <img src="../assests/images/Last2days.avif"  class="px-2 mx-auto    "/>
        
        <div class="flex justify-center lg:justify-around w-full my-12 gap-2   ">
            <img src="../assests/images/sale01.webp"   class=" w-20 lg:w-36" />
            <NuxtLink to="/men"><img src="../assests/images/men.avif"   class="w-36" /></NuxtLink>
            <NuxtLink to="/women"><img src="../assests/images/female.avif" class="w-36" /></NuxtLink>
            <NuxtLink to="/electronics"><img src="../assests/images/electronics.avif"  class="w-36"/></NuxtLink>
            <NuxtLink to="/jewel"><img src="../assests/images/jewelcircle.avif"  class="w-36"/></NuxtLink>
            <!-- <img src="../assests/images/shoesposter.avif"  class="w-fit"/> -->
        </div>

        <img src="../assests/images/Icons-2.webp"  class="lg:h-32 px-2 mx-auto lg:mt-20 mb-8"/>

        <!-- <NuxtLink to="/products" class="text-4xl text-red-400">Hi there </NuxtLink> -->
        
    </div>
</template>

<!-- <script setup>
let scrollAmount = 370; // Adjust the scroll amount as needed
const scrollContainer = ref(null);

const incrementBtn = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft += scrollAmount;
  }
};

const decrementBtn = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft -= scrollAmount;
  }
};

</script> -->