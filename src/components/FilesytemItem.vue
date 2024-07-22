<script setup lang="ts">
import type { Node } from '@/types/folder.type';
import { ref } from 'vue';
defineProps<{ node: Node }>();

const isOpen = ref(false);
</script>

<template>
    <div class="text-lg my-2 antialiased">
        <button class="flex items-center gap-2" @click="isOpen = !isOpen">
            <fa-icon v-if="node.nodes" :class="{ '-rotate-90': !isOpen }"
                class="text-xs text-gray-500 block transition-all" icon="fa-chevron-down"></fa-icon>
            <fa-icon class="text-teal-600" icon="fa-solid block fa-folder-closed" v-if="node.nodes && !isOpen"></fa-icon>
            <fa-icon class="text-teal-600" icon="fa-regular block fa-folder-open" v-if="node.nodes && isOpen"></fa-icon>
            <fa-icon class="text-slate-900 ms-6" icon="fa-solid block fa-file" v-if="!node.nodes"></fa-icon>
            <p>{{ node.name }}</p>
        </button>
    </div>

    <TransitionGroup name="subnodes-list">
        <div class="ms-4" v-if="node.nodes && isOpen">
                <FilesytemItem v-for="subnode in node.nodes" :node="subnode" />
        </div>
    </TransitionGroup>

</template>


<style scoped>
.subnodes-list-enter-active,
.subnodes-list-leave-active {
    transition: all 0.25s ease;
}

.subnodes-list-enter-from,
.subnodes-list-leave-to {
    opacity: 0;
    scale: 0.95;
}
</style>