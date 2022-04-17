import { defineStore } from 'pinia'
import axios from 'axios'

export const usePoolStore = defineStore('pool', {
    state: () => ({
        poolList: [],
        offset: 0,
        limit: 6
    }),
    actions: {
        async getPoolList() {
            this.offset = 0
            const res = await axios.get('/pool')
            this.poolList = res.data
        },
        async getMorePoolList() {
            this.offset = this.offset + this.poolList.length
            const res = await axios.get('/pool')
            this.poolList.push(...res.data)
        }
    }
})
