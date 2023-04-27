<template>
  <div>
    <Header/>
    <div class="px-16">

      <div class="flex justify-between py-6">
        <h2 class="text-2xl font-bold uppercase">Danh sách Users :</h2>

        <div class="flex justify-center items-center p-2 bg-[#0dd3bb] cursor-pointer rounded-md hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <nuxt-link to="/users/add">Thêm mới User</nuxt-link>
        </div>
      </div>
     
      <UsersList />
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import UsersList from '../../components/UsersList.vue';

export default {
  components: { Header, UsersList },
  mounted() {
     this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      await this.$store.dispatch('fetchUsers')
    }
  }
};
</script>
