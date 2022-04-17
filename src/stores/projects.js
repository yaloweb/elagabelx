import { defineStore } from 'pinia'
import axios from 'axios'

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: []
    }),
    actions: {
        async getProjects() {
            if (!this.projects.length) {
                const res = await axios.get('/projects')
                this.projects = res.data
            }
        }
    }
})
