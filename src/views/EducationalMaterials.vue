<script setup>
import EducationalMaterialsHeader from '@/components/EducationalMaterials/EducationalMaterialsHeader.vue'
import EducationalMaterialsSort from '@/components/EducationalMaterials/EducationalMaterialsSort.vue'
import EducationalMaterialList from '@/components/EducationalMaterials/EducationalMaterialList.vue'
</script>

<template>
    <div
        class="educational-materials-page"
        v-animate="'educational-materials-page-animate'">

        <EducationalMaterialsHeader />

        <section class="s-educational-materials-list">
            <div class="container">

                <EducationalMaterialsSort />

                <EducationalMaterialList />

            </div>
        </section>

    </div>
</template>
