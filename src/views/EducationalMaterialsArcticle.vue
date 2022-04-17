<script setup>
import { useArticlestore } from '@/stores/article'
import { storeToRefs } from 'pinia'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import ArticleContentNavigation from '@/components/Article/ArticleContentNavigation.vue'
import ArticleAuthor from '@/components/Article/ArticleAuthor.vue'
import ArticleLiked from '@/components/Article/ArticleLiked.vue'
import ArticleShare from '@/components/Article/ArticleShare.vue'
import ArticleWrittenByItem from '@/components/Article/ArticleWrittenByItem.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()
const id = route.params.id

const articleStore = useArticlestore()
const { article } = storeToRefs(articleStore)

const getArticleDate = computed(() => {
    const date = article.value?.date
    if (date) {
        const formatDate = format(new Date(date), 'dd LLLL yyyy', { locale: ru })
        const formatTime = format(new Date(date), 'HH:mm', { locale: ru })
        return formatDate + ' в ' + formatTime
    } else {
        return ''
    }
})

onMounted(async () => {
    await articleStore.getArticlesData(id)
})
</script>

<template>
    <div
        class="article-page"
        v-animate="'article-page-animate'">
        <div class="container">

            <div class="article-row">

                <div class="article-sidebar">
                    <ArticleContentNavigation
                        v-if="article.content_navigation && article.content_navigation.length"
                        :list="article.content_navigation" />
                </div>

                <div class="article-main">

                    <div class="article-main-back">
                        <RouterLink
                            to="/educational-materials"
                            class="search-header-back-link">
                            <span class="icon-arrow-left" />{{ t('educational_materials_article_page.back_link') }}
                        </RouterLink>
                    </div>

                    <div class="article-header">

                        <ArticleAuthor
                            v-if="article.author"
                            :name="article.author.name"
                            :imgSrc="article.author.img_src"
                            :rank="article.author.rank"
                        />

                        <div class="article-reading-info">
                            <span>
                                {{ getArticleDate }}
                            </span>
                            <span>
                                {{ article.reading_time_minutes }} {{ t('educational_materials_article_page.reading_time') }}
                            </span>
                        </div>

                    </div>

                    <div class="article-body">

                        <div
                            v-if="article.img_src"
                            class="article-main-img">
                            <img
                                :src="article.img_src"
                                alt="">
                        </div>

                        <h1
                            id="article-page-title"
                            v-html="article.title"/>

                        <div
                            class="article-content"
                            v-html="article.content"
                        />

                    </div>

                    <div class="article-footer">

                        <ArticleAuthor
                            v-if="article.author"
                            :name="article.author.name"
                            :imgSrc="article.author.img_src"
                            :rank="article.author.rank"
                        />

                        <ArticleLiked
                            :articleId="article.id"
                            :likes="article.likes"
                        />

                        <ArticleShare
                            v-if="article.share"
                            :shareList="article.share"/>

                    </div>

                </div>

            </div>

        </div>
    </div>
</template>
