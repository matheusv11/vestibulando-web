
<script setup lang="ts">
import { useMessageStore } from "@/stores/message"

const messageStore = useMessageStore()
// DEPENDENTE DO TIPO, MUDAR COR
// USAR UM WATCH PRA SEMPRE QUE O VALOR MUDAR, ATUALIZAR O COMPONENTE
// OU NO APP, CHAMAR E DEFINIR UM V-IF

</script>

<template>
    <div :class="messageStore.message.type">
        <h1> {{messageStore.message.text}} </h1>
    </div>
</template>

<style>

.error {
    background: red;
}
.success {
    background: green;
}
</style>