import { defineStore } from 'pinia'
import axios from 'axios'

export const useInTheFutureStore = defineStore('in-the-future', {
    state: () => ({
        inTheFutureProjects: []
    }),
    actions: {
        async getInTheFutureProjects() {
            if (!this.inTheFutureProjects.length) {
                const res = await axios.get('/in-the-future')
                this.inTheFutureProjects = res.data
            }
        }
    },
    getters: {
        inTheFutureProjectsCols: state => {
            let array = [[], []]
            state.inTheFutureProjects.forEach((item, index) => {
                if (index % 2 === 0) {
                    array[0].push(item)
                } else {
                    array[1].push(item)
                }
            })
            return array
        }
    }
})
