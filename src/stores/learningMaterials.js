import { defineStore } from 'pinia'
import axios from 'axios'

export const useLearningMaterialsStore = defineStore('learning-materials', {
    state: () => ({
        materialsList: []
    }),
    actions: {
        async getLearningMaterials() {
            if (!this.materialsList.length) {
                const res = await axios.get('/learning-materials')
                this.materialsList = res.data
            }
        }
    }
})
