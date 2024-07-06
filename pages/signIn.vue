<template>
     <div class="grid lg:grid-cols-2 items-center justify-center p-8 my-12 ">
        <img src="../assests/images/loginImg.png" class="lg:w-[70%] lg:h-[60%]" />
         <div class="p-8 m-8 ">
             <form @submit.prevent="handleSubmit" class="flex flex-col py-8 bg-slate-50 w-[350px]">
                <h1 class="px-6 py-8 mx-auto text-3xl font-semibold text-white bg-slate-800 "> LOGIN / SIGN-IN</h1>
                <input v-model="adduser" class="p-2 mx-4 my-4 bg-white border-2 rounded-lg outline-none"  placeholder="Username/Phone-number"/>
                <input v-model="addpass" class="p-2 mx-4 my-4 bg-white border-2 rounded-lg outline-none"  placeholder="Password"/>
                <button  @click="btnClick" class="p-2 mx-auto my-2 text-white rounded bg-slate-800 w-fit">Continue</button>
                <h1 class="p-4 text-sm text-slate-400">Sign up with your credentials to get started  </h1>
            </form>
         </div>
     </div>
</template>

<script setup>
const entries=ref([])
const latest =ref("") 
const adduser=ref("")
const addpass=ref("")

function handleSubmit(){

    localStorage.setItem('login', JSON.stringify(entries.value));
    latest.value=JSON.parse(localStorage.getItem('login'))
     
    entries.value.push({
        username:adduser.value,
        password:addpass.value
    })
}

defineProps({
    username:String,
    password:String
})

</script>