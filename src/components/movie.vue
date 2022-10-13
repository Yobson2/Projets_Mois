<template>
 <div class="movie" @click="$emit('excent')">
        <video src="../assets/video/movie1.mp4" controls></video>
    </div>
</template> 

<script>
export default {
    data(){
        return{
        
        }
    }
}
</script>

<style scoped>
.movie{  
    z-index: 30;
    position: absolute;
   width: 100%;
   height: 100vh;
   background-color:#555;
   opacity: 1;
}
video{
    z-index: 10;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>