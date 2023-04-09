<template>
    <div class="grid grid-cols-4 gap-5 mb-[200px]" >
        <User v-for="user in users" :key="user.userId" :userData="user" />
    </div>
</template>

<script>
import User from './User.vue'
import { mapState } from 'vuex';

export default {
    components: {
        User
    },
    computed: {
      ...mapState(['users'])
    },
}
</script>