<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSecondSiteGlobalStore } from '@/stores/secondSiteGlobal'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const secondSiteGlobalStore = useSecondSiteGlobalStore()

const { menu } = secondSiteGlobalStore

const submenusOpened = ref({})

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
                :key="menuIdx">

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
                            :key="`${menuIdx}-${childrenIdx}`">
                            <RouterLink :to="childrenItem.url">
                                <span class="second-menu-link-title" :data-title="childrenItem.title">
                                    {{ childrenItem.title }}
                                </span>
                            </RouterLink>
                        </li>
                    </ul>

                </template>

                <template v-else>
                    <RouterLink :to="menuItem.url">
                        <span class="second-menu-link-title" :data-title="menuItem.title">
                            {{ menuItem.title }}
                        </span>
                    </RouterLink>
                </template>

            </li>
        </ul>
    </nav>
</template>
