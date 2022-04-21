import { defineStore } from 'pinia'
import axios from 'axios'

export const useProjectStore = defineStore('project', {
    state: () => ({
        id: null,
        title: null,
        img_src: null,
        validator_name: null,
        validator_address: null,
        expected_profit: null,
        commision: null,
        payout_frequency: null,
        delegation_cancellation_period: null,
        staking_link: null,
        educational_materials: null,
        about: null,
        faq: null,
    }),
    actions: {
        async getProjectData() {
            const res = await axios.get('/project')
            for (let key in res.data) {
                this[key] = res.data[key]
            }
        }
    }
})
