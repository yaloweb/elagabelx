import { defineStore } from 'pinia'
import axios from 'axios'

export const useSocStore = defineStore('soc', {
    state: () => ({
        socLinks: []
    }),
    actions: {
        async getSoc() {
            const res = await axios.get('/soc')
            this.socLinks = res.data
        }
    }
})
