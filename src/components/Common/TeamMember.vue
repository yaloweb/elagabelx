<script setup>
const props = defineProps({
    member: Object
})
</script>

<template>
    <div class="team-member">
        <div class="team-member-img">
            <img
                :src="member.img_src"
                alt="">
        </div>
        <div class="team-member-content">
            <div class="team-member-name">
                {{ member.name }}
            </div>
            <div class="team-member-position">
                {{ member.position }}
            </div>
        </div>
    </div>
</template>
