<template>
    <div>
        <component :is="defineAsyncComponent(componentMap.get(activeComponent.type))" />
    </div>
</template>

<script setup>
import { componentMap } from './componentMap'
import { defineAsyncComponent, computed, ref } from 'vue'
import { useCounterStore } from '../../store'


const store = useCounterStore()
const activeComponent = computed(()=> store.activeComponent)
// console.log(activeComponent.value);

</script>

<style lang="scss" scoped>

</style>