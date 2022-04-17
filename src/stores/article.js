import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticlestore = defineStore('article', {
    state: () => ({
        article: {}
    }),
    actions: {
        async getArticlesData(id) {
            const res = await axios.get('/article', {
                params: {
                    id
                }
            })
            this.article = res.data
        }
    }
})
