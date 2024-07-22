<script setup lang="ts">
    import FilesystemItem from './components/FilesytemItem.vue';
    import type { Node } from './types/folder.type';

    const nodes: Node[] = [
        {name: 'Home', nodes: [
            { name: 'Movies', nodes: [{ name: '2000s', nodes: [{ name: 'movie.mp4' }] }] },
            { name: 'Songs', nodes: [{name: 'Metal', nodes: []} , {name: 'Hip Hop', nodes: []}] },
            { name: 'Videos', nodes: [{name: 'Highlights', nodes: [{name: 'Valorant', nodes: [{name: 'split.mp4'}]}, {name: 'clutchcs.mp4'}, {name: 'eldenring.mp4'}]}]}
        ]},
    ];
</script>

<template>
    <header>
        <h1 class="text-teal-600 text-3xl mb-6">Recursive Components</h1>
    </header>

    <div>
        <h1 class="text-lg font-semibold">File system</h1>
        <FilesystemItem v-for="folder in nodes" :node="folder" />
    </div>

</template>


