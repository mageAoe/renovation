<template>
    <div class="left-layout">
        <div v-for="item in componentListData" :key="item.type">
            <h3>{{ item.title }}</h3>
            <div class="childList">
                <VueDraggableNext
                    class="dragArea list-group"
                    :list="item.classList"
                    :group="{ name: 'pageEdit', pull: 'clone', put: false }"
                    :options="{ sort: false }"
                >
                    <div
                        v-for="(classItem, i) of item.classList"
                        :key="i"
                        class="childItem list-group-item"
                        @mouseover="hoverItem(classItem)"
                        @mouseout="hoverItemOut"
                    >
                        <div class="contentBox">
                            <i class="iconfont" :class="classItem.iconClass" />
                            <span class="text">{{ classItem.title }}</span>
                        </div>
                    </div>
                </VueDraggableNext>
            </div>
        </div>
    </div>
</template>

<script setup>
import { VueDraggableNext } from 'vue-draggable-next';
import { componentListData } from './index'
import { ref } from 'vue'

const isHover = ref('');
function cloneItem (item) {
  return item
}

function hoverItem (classItem) {
  isHover.value = classItem.title;
}
function hoverItemOut () {
  isHover.value = '';
}
</script>

<style lang="scss" scoped>
.left-layout{
    h3{
        padding-left: 20px;
        height: 35px;
        line-height: 35px;
        font-size: 16px;
        color: #333333;
        position: relative;
    }
    .childList{
        margin: 15px 0px;
        .list-group{
            display: grid;
            grid-template-columns: repeat(2, minmax(0px, 1fr));
            .childItem{
                .contentBox{
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .iconfont{
                        font-size: 40px;
                    }
                    &:hover{
                        background: #ff7800;
                        color: #ffffff;
                        border-radius: 3px;
                    }
                }
            }
        }
    }
}
</style>