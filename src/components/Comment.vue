<script setup lang="ts">
import type { Comment } from '@/types/comment.type';
import { ref } from 'vue';

    defineProps<{ comment: Comment }>();

    const showResponses = ref(false);
</script>
<template>
    <div class="border border-teal-300 mb-3 p-3">
        <div class="flex items-center gap-2 mb-3">
            <span class="bg-teal-100 rounded-full grid place-items-center p-3">
                <fa-icon class="text-teal-600" icon="fa-solid fa-user"></fa-icon>
            </span>
            <p class="text-teal-600 font-medium flex-grow">{{ comment.author }}</p>

            <p class="text-xs text-gray-400">{{ comment.timestamp }}</p>
        </div>

        <p class="text-sm">{{ comment.content }}</p>

        <button @click="showResponses = !showResponses" v-if="comment.responses" class="py-2 px-3 rounded-full text-black text-sm mt-2 hover:bg-teal-100/50 hover:text-teal-900 flex items-center"> 
            <fa-icon icon="fa-solid fa-chevron-down block" :class="{ '-rotate-90': !showResponses}"  class="text-xs me-1" ></fa-icon>
            <p v-if="!showResponses">
                <span>{{ comment.responses.length }}</span>
                <span class="ms-1">{{ comment.responses.length > 1 ? 'responses' : 'response' }}</span>
            </p>
            <p v-else>Hide {{ comment.responses.length > 1 ? 'responses' : 'response' }}</p>
        </button>
    </div>

    <div v-if="comment.responses && showResponses" class="border-l-2 border-teal-300 ps-4">
        <Comment v-for="response in comment.responses" :comment="response"/>
    </div>
</template>
