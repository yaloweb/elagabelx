import { defineStore } from 'pinia'
import axios from 'axios'

export const useTeamsStore = defineStore('teams', {
    state: () => ({
        teams: []
    }),
    actions: {
        async getTeams() {
            if (!this.teams.length) {
                const res = await axios.get('/teams')
                this.teams = res.data
            }
        }
    }
})
