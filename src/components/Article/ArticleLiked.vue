<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    articleId: [String, Number],
    likes: Number
})
</script>

<template>
    <div class="article-likes">
        <div class="article-likes-icon">
            <span class="icon-like" />
        </div>
        <div class="article-likes-quantity">
            {{ likes }} {{ t('educational_materials_article_page.share') }}
        </div>
    </div>
</template>
