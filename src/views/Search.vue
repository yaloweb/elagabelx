<script setup>
import SearchHeader from '@/components/Search/SearchHeader.vue'
import SearchList from '@/components/Search/SearchList.vue'
</script>

<template>
    <div class="search-page">

        <SearchHeader />

        <section class="s-search-results">
            <div class="container">

                <SearchList />

            </div>
        </section>

    </div>
</template>
