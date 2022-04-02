
<script setup lang="ts">

</script>

<template>
    <div class="d-flex justify-content-center align-items-center loader">
        <div class="spinner-grow text-primary spinner" role="status"/>
    </div>
</template>

<style scoped>
    .loader{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
    }
    .spinner{
        width: 4rem; 
        height: 4rem;
    }
</style>