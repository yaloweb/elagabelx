import { defineStore } from 'pinia'
import axios from 'axios'

export const useGlossaryStore = defineStore('glossary', {
    state: () => ({
        glossary: []
    }),
    actions: {
        async getGlossary() {
            const res = await axios.get('/glossary')
            this.glossary = res.data
        }
    }
})
