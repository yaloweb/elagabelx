<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const tags = [
    {
        id: 1,
        code: 'active',
        title: "Активные"
    },
    {
        id: 2,
        code: 'upcoming',
        title: "Предстоящие"
    },
    {
        id: 3,
        code: 'completed',
        title: "завершенные"
    }
]

const selectedTag = ref(tags[0])
</script>

<template>
    <div class="educational-materials-tags">
        <nav class="educational-materials-tags-nav">
            <a
                v-for="tag in tags"
                :key="tag.id"
                href="#"
                :class="{'active': selectedTag.id === tag.id}"
                @click.prevent="selectedTag = tag">
                {{ t(`educational_materials_page.tags.${tag.code}`) }}
            </a>
        </nav>
    </div>
</template>
