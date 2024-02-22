// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('user', {
  state: () => ({ 
    componentsData: [],
    activeComponent: {}
  }),
  actions: {
    setActiveComponent(data) {
      this.activeComponent = data
    },
    setComponentsData(data){
        this.componentsData = data
    }
  },
})