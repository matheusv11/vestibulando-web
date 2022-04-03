
<script setup lang="ts">
import { useMessageStore } from "@/stores/message"

const messageStore = useMessageStore()
// USAR UM WATCH PRA SEMPRE QUE O VALOR MUDAR, ATUALIZAR O COMPONENTE
// OU NO APP, CHAMAR E DEFINIR UM V-IF

</script>

<template>

    <div v-if="messageStore.message.type && messageStore.message.text" aria-live="polite" aria-atomic="true" class="bg-dark position-relative bd-example-toasts">
        <div class="stoast-container position-absolute p-3 top-0 end-0" id="toastPlacement">
            <div :class="`show toast ${messageStore.message.type}`">
                <div class="toast-header">
                    <strong class="me-auto"> Notificação </strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"/>
                </div>

                <div class="toast-body">
                    <strong> {{messageStore.message.text}} </strong>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>

.error {
    background-color: red;
}
.success {
    background-color: green;
}
</style>