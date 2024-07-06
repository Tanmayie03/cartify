    <template>
        <div>
            
            <div class="grid h-full grid-cols-2 gap-4 lg:m-8 overflow-hidden lg:grid-cols-4">
            <span v-for="(w,index ) in wish.wishitems.value" class="transform hover:shadow-2xl" :key="index">
            

            <div  class="relative flex flex-col h-full p-4 text-left " >
                <div class="flex justify-center overflow-hidden"><img :src=w.image class="h-72 lg:w-[250px] lg:h-[300px]"></div>
                <button @click="wishbtn(index)"> 
                    <svg class="absolute text-red-600 right-4 bottom-4" stroke="black "  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                    fill="currentColor"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                    </svg>
                </button>
                <div class="flex mt-8">
                    <p class="my-2 lg:text-lg font-semibold text-left text-slate-500 hover:text-slate-800 text-ellipsis lg:text-ellipsis ">{{ w.title }}</p> 
                    <!-- <p class="mx-4 text-lg font-semibold">{{ category }}</p>  -->
                    
                </div>
            
                <div class="flex text-center " >
                    <p class="text-xl font-semibold text-left text-green-600 ">₹{{ w.price }}</p>
                    <p class="lg:mx-6 ml-2 mt-1 text-sm text-green-600">Special Price</p>
                </div>
                <p class="text-sm">Free Delivery</p>
                <!-- <p class="text-lg ">Ratings: {{ rating }}</p> -->
                
        </div>
            </span>
        </div>      
        </div>
    </template>
    <script setup>
    import { Wish } from '~/composables/Wish';
    const wish=Wish();

    console.log(wish.wishitems.value)

    console.log(wish.wishitems.value.title)

    function wishbtn(index){
    wish.removeWishlist(index);
    console.log("Added to wishlist");

    }


    // localStorage.setItem('wishes',JSON.stringify(items.value))
    //     items.value=JSON.parse(localStorage.getItem("wishes"))
    </script>