import { defineStore } from 'pinia'
import axios from 'axios'

export const useTestnetStore = defineStore('testnet', {
    state: () => ({
        testnet: {}
    }),
    actions: {
        async getTestnet(id) {
            console.log(id)
            const res = await axios.get('/testnet')
            this.testnet = res.data
        }
    }
})
