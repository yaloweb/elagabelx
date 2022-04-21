<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSecondSiteGlobalStore } from '@/stores/secondSiteGlobal'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const { t } = useI18n()
const secondSiteGlobalStore = useSecondSiteGlobalStore()
const { menu } = secondSiteGlobalStore
const submenusOpened = ref({})
const emit = defineEmits()

menu.forEach((menuItem, idx) => {
    if (menuItem.childrens) {
        submenusOpened.value[`${idx}`] = false
    }
})

function openedSubmenu(idx) {
    for (const key in submenusOpened.value) {
        if (+key !== idx) {
            submenusOpened.value[key] = false
        }
    }
    submenusOpened.value[`${idx}`] = !submenusOpened.value[`${idx}`]
}

document.addEventListener('click', () => {
    for (const key in submenusOpened.value) {
        submenusOpened.value[key] = false
    }
})

const dropdown = ref([])

function getDropdownHeight () {
    dropdown.value.forEach(dropdownItem => {
        if (window.innerWidth < 1200) {
            let height = 0

            dropdownItem.querySelectorAll('li').forEach(item => {
                height += item.offsetHeight
            })

            dropdownItem.style.maxHeight = height + 'px'
        } else {
            dropdownItem.style.maxHeight = ''
        }
    })
}

function closeMenu() {
    emit('close-menu')
}

window.addEventListener('resize', getDropdownHeight)

onMounted(() => {
    getDropdownHeight()
})

onUnmounted(() => {
    window.removeEventListener('resize', getDropdownHeight)
})

</script>

<template>
    <nav class="second-menu">
        <ul>
            <li
                v-for="(menuItem, menuIdx) in menu"
                :key="menuIdx"
            >

                <template v-if="menuItem.childrens">

                    <span
                        class="second-menu-link-children-title"
                        :class="{'active': submenusOpened[`${menuIdx}`]}"
                        @click.stop="openedSubmenu(menuIdx)">
                        <span class="second-menu-link-title" :data-title="t(`global.second_header.menu.${menuItem.code}`)">
                            {{ t(`global.second_header.menu.${menuItem.code}`) }}
                        </span>
                    </span>

                    <ul
                        class="second-menu-children-dropdown"
                        :class="{'opened': submenusOpened[`${menuIdx}`]}"
                        :ref="item => dropdown[menuIdx] = item">
                        <li
                            v-for="(childrenItem, childrenIdx) in menuItem.childrens"
                            :key="`${menuIdx}-${childrenIdx}`"
                            @click="closeMenu"
                        >
                            <RouterLink
                                :to="{path: childrenItem.url, query: childrenItem.query}"
                                custom
                                v-slot="{ isActive, href, navigate }"
                            >
                                <a
                                    :href="href"
                                    :class="{'router-link-active': childrenItem.query ? childrenItem.query.sort === route.query.sort : isActive}"
                                    @click="navigate"
                                >
                                     <span class="second-menu-link-title" :data-title="childrenItem.title">
                                        {{ childrenItem.title }}
                                    </span>
                                </a>
                            </RouterLink>
                        </li>
                    </ul>

                </template>

                <template v-else>
                    <span @click="closeMenu">
                        <RouterLink :to="menuItem.url">
                            <span class="second-menu-link-title" :data-title="menuItem.title">
                                {{ menuItem.title }}
                            </span>
                        </RouterLink>
                    </span>
                </template>

            </li>
        </ul>
    </nav>
</template>
