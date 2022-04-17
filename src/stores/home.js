import { defineStore } from 'pinia'
import axios from 'axios'

export const useHomeStore = defineStore('home', {
    state: () => ({
        banners: [],
        about: {
            delivered_assets: '',
            awards_pald: ''
        }
    }),
    actions: {
        async getHomePageInfo() {
            if (!this.banners.length) {
                const res = await axios.get('/home')
                this.banners = res.data.banners
                this.about = res.data.about
            }
        }
    }
})
