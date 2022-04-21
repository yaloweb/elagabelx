import { defineStore } from 'pinia'
import axios from 'axios'

export const useSecondSiteGlobalStore = defineStore('second-site-global', {
    state: () => ({
        menu: [
            {
                title: 'Главная',
                code: 'main',
                childrens: [
                    { title: 'Тестнеты', code: 'testnets', url: '/educational-materials', query: {'sort': 'cards'} },
                    { title: 'Статьи', code: 'articles', url: '/educational-materials', query: {'sort': 'articles'} }
                ]
            },
            {
                title: 'Делегирование',
                code: 'delegation',
                childrens: [
                    { title: 'Pool', url: '/pool' },
                    { title: 'Elagabal X', url: '/' },
                    { title: 'Nodes crew', url: '/' },
                    { title: 'Stake Service', url: '/' },
                    { title: 'Making cash', url: '/' }
                ]
            },
            {
                title: 'Глоссарий',
                code: 'glossary',
                url: '/glossary'
            },
            {
                title: 'Новости',
                code: 'news',
                url: '/'
            }
        ],
        soc: []
    }),
    actions: {
        async getSecondSiteGlobalData() {
            const res = await axios.get('/second-site-global')
            this.soc = res.data.soc
        }
    }
})
