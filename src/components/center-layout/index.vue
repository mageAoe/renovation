<template>
    <div class="center-layout">
        <VueDraggableNext
            class="dragArea list-group"
            :list="componentsData"
            group="pageEdit"
            :move="checkMove"
            filter=".undraggable"
            @end="pageAdd"
            @change="pageChange"
        >
            <div
                v-for="(item, index) in componentsData"
                :key="index"
                class="list-group-item"
                :class="{ on: activeComponentIndex === index }"
                @click="selectComponent(item,index)">
                1234
            </div>
        </VueDraggableNext>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next';
import { useCounterStore } from '../../store'

const store = useCounterStore()

const activeComponentIndex = ref(-1)
const componentsData = ref([])

const pageChange = ()=>{}
const pageAdd = ()=>{}

// 拖动检查
function checkMove (e) {
  // 不允许停靠
  if (e.relatedContext.element.type === 'header') return false
  // 不允许拖拽
  if (e.draggedContext.element.type === 'header') return false
}

const selectComponent = (item,index)=>{
    activeComponentIndex.value = index
    store.setActiveComponent(item)
}

watch(() => componentsData,
(newVal) => {
    console.log(newVal.value);
}, { immediate: false, deep: true })
</script>

<style lang="scss" scoped>
.center-layout{
    height: 100%;
}
.list-group {
    min-height: calc(100vh - 50px);
    .list-group-item{
        height: 200px;
        background-color: grey;
        position: relative;
        margin: 5px 0;
        &:hover{
            &::after{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                border: 1px #FF7800 dashed;
                z-index: 2;
            }
        }
    }
    .list-group-item.on{
        &::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            border: 1px #FF7800 solid;
            z-index: 2;
        }
    }
}
</style>