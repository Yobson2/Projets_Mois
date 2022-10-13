<template>
<div v-if="showForm">
<SignForm @sign="showForm=false" />
</div>
  <div v-else>
 <Login @login="showForm=true"/>
  </div>
  
 
</template>

<script>
import SignForm from '@/components/SignForm.vue';
import Login from '@/components/Login.vue';
import { ref } from '@vue/reactivity';
export default {
    components: { SignForm, Login },
    setup(){
      const showForm=ref(true)

      return{
        showForm
      
      }
    }
   
}
</script>

<style>
/* .anim{
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;  
  margin: 30px auto;

}
@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:900px; top:0px;}
  50%  {background-color:blue; left:900px; top:900px;}
  75%  {background-color:green; left:0px; top:900px;}
  100% {background-color:red; left:0px; top:0px;}
} */
</style>