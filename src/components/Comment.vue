<script setup lang="ts">
import type { Comment } from '@/types/comment.type';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { ref } from 'vue';

    defineProps<{ comment: Comment }>();

    const showResponses = ref(false);

    function displayResponsesText(comment: Comment) {
        return comment.responses!.length > 1 ? 'responses' : 'response';
    }
</script>
<template>
    <div class="mb-3 border p-3 w-max">
        <div class="flex items-center gap-2 mb-3">
            <p class="text-teal-600 font-medium flex-grow">{{ comment.author }}</p>
            <p class="text-xs text-gray-400">{{ format(comment.timestamp, "PP 'às' HH:mm", {locale: ptBR}) }}</p>
        </div>

        <p class="text-sm">{{ comment.content }}</p>

        <button @click="showResponses = !showResponses" v-if="comment.responses" class="p-2  text-black text-sm mt-2 bg-teal-300 flex items-center"> 
            <fa-icon icon="fa-solid fa-chevron-down block" :class="{ '-rotate-90': !showResponses}"  class="text-xs me-1 transition-all" ></fa-icon>
            <p v-if="!showResponses">
                <span>{{ comment.responses.length }}</span>
                <span class="ms-1">{{ displayResponsesText(comment) }}</span>
            </p>
            <p v-else>Hide {{ displayResponsesText(comment) }}</p>
        </button>
    </div>

    <TransitionGroup name="subcomments-list">
        <div v-if="comment.responses && showResponses" class="border-l-2 border-teal-300 ps-4">
            <Comment v-for="response in comment.responses" :comment="response"/>
        </div>
    </TransitionGroup>
</template>

<style scoped>
.subcomments-list-enter-active,
.subcomments-list-leave-active {
    transition: all 0.25s ease;
}

.subcomments-list-enter-from,
.subcomments-list-leave-to {
    opacity: 0;
    scale: 0.95;
}
</style>
