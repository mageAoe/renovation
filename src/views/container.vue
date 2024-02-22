<template>
    <div class="container">
        <div class="head">
            头部功能
        </div>
        <div class="content">
            <div class="left">
                <LeftLayout />
            </div>
            <div class="center">
                <CenterLayout/>
            </div>
            <div class="right">
                <RightLayout v-if="activeComponent.type" />
                <div v-else>暂无</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed} from 'vue'
import { useCounterStore } from '../store'
import LeftLayout from '../components/left-layout/index.vue'
import CenterLayout from '../components/center-layout/index.vue'
import RightLayout from '../components/right-layout/index.vue'


const store = useCounterStore()

const activeComponent = computed(() => store.activeComponent)

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>