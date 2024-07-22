<script setup lang="ts">
    import CommentListItem from './components/Comment.vue';
import FilesystemItem from './components/FilesytemItem.vue';
import type { Comment } from './types/comment.type';
import type { Node } from './types/node.type';

    const nodes: Node[] = [
        {name: 'Home', nodes: [
            { name: 'Movies', nodes: [{ name: '2000s', nodes: [{ name: 'movie.mp4' }] }] },
            { name: 'Songs', nodes: [{name: 'Metal', nodes: []} , {name: 'Hip Hop', nodes: []}] },
            { name: 'Videos', nodes: [{name: 'Highlights', nodes: [{name: 'Valorant', nodes: [{name: 'split.mp4'}]}, {name: 'clutchcs.mp4'}, {name: 'eldenring.mp4'}]}]}
        ]},
    ];
    
    const comments: Comment[] = [
        {author: 'gabrielgua', content: 'Wow recursivness is truly a beauty', timestamp: new Date(), responses: [
            {author: 'username236', content: 'It really is!', timestamp: new Date()},
            {author: 'loreEnjoyer', content: 'Yeah it truly is!', timestamp: new Date()},
        ]},
        {author: 'opaco', content: 'Did you use Vue 3 or 2 to achieve that?', timestamp: new Date(), responses: [
            {author: 'gabrielgua', content: 'Vue 3 with tailwind :)', timestamp: new Date(), responses: [
                {author: 'opaco', content: 'Ok, thanks for the response', timestamp: new Date()}
            ]}
        ]},
    ];
</script>

<template>
    <div class="container  mx-auto">
        <header class="p-6">
            <h1 class="text-teal-600 text-3xl">Recursive Components</h1>
        </header>

        <div class="container p-6 border mb-6">
            <h1 class="text-lg font-semibold">File system</h1>
            <FilesystemItem v-for="folder in nodes" :node="folder" />
        </div>

        <div class="container p-6 border">
            <h1 class="text-lg font-semibold mb-3">Comment Section</h1>
            <CommentListItem v-for="comment in comments" :comment="comment"/>
        </div>
    </div>

</template>


