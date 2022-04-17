import { defineStore } from 'pinia'
import axios from 'axios'

export const useSearchStore = defineStore('search', {
    state: () => ({
        searchList: []
    }),
    actions: {
        async getSearchResults(keyword) {
            const res = await axios.get('/search', {
                params: {
                    value: keyword
                }
            })
            this.searchList = res.data
        }
    }
})
