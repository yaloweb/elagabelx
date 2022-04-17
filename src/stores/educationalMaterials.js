import { defineStore } from 'pinia'
import axios from 'axios'

export const useEducationalMaterialsStore = defineStore('educational-materials', {
    state: () => ({
        searchResults: [],
        filters: {
            selectedSort: 'all',
            selectedRank: 'expert',
            selectedRating: 'promising',
            selectedPlatform: 'technical',
        },
        filtersOptions: {
            ranks: [
                {type: 'expert', title: 'Эксперт'},
                {type: 'newbie', title: 'Новичок'},
                {type: 'user', title: 'Пользователь'}
            ],
            ratings: [
                {title: 'Многообещающий', value: 'promising'},
                {title: 'Мифический', value: 'mythical'},
                {title: 'Редко', value: 'seldom'}
            ],
            platforms: [
                {title: 'Технические', value: 'technical'},
                {title: 'Сообщество', value: 'community'}
            ],
            sorts: [
                {title: 'Карточки', value: 'cards'},
                {title: 'Статьи', value: 'articles'},
                {title: 'Все', value: 'all'}
            ]
        },
        educationalMaterialsList: [],
        offset: 0,
        limit: 18
    }),
    getters: {
        queryParameters: (state) => {
            const paramsObject = {
                sort: state.filters.selectedSort
            }
            if (state.filters.selectedSort === 'articles') {
                paramsObject.rating = state.filters.selectedRating
                paramsObject.platform = state.filters.selectedPlatform
            }
            if (state.filters.selectedSort === 'cards') {
                paramsObject.rank = state.filters.selectedRank
            }
            return paramsObject
        }
    },
    actions: {
        async search(searchValue) {
            const res = await axios.get('/educational-materials-search', {
                params: {
                    search: searchValue
                }
            })
            this.searchResults = res.data
        },
        async getEducationalMaterials() {
            this.offset = 0
            const res = await axios.get('/educational-materials', {
                params: {
                    sort: this.filters.selectedSort
                }
            })
            this.educationalMaterialsList = res.data
        },
        async loadMoreEducationalMaterials() {
            this.offset = this.offset + this.educationalMaterialsList.length
            const res = await axios.get('/educational-materials', {
                params: {
                    sort: this.filters.selectedSort
                }
            })
            this.educationalMaterialsList.push(...res.data)
        }
    }
})
