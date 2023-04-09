<template>
  <div>
    <Header />

    <div class="px-16">
      <h2 class="text-2xl font-bold uppercase py-6">
        Edit user : 
      </h2>

      <form class="flex flex-col space-y-4 w-[400px] mt-5">
        <div>
          <label for="name" class="block font-medium text-gray-700">Tên:</label>
          <input
            type="text"
            id="name"
            v-model="user.name"
            class="mt-1 block w-full rounded-md border-2 pl-4 py-2"
          />
        </div>
        <div>
          <label for="position" class="block font-medium text-gray-700"
            >Chức vụ:</label
          >
          <input
            type="text"
            id="position"
            v-model="user.position"
            class="mt-1 block w-full rounded-md border-2 pl-4 py-2"
          />
        </div>
        <div>
          <label for="email" class="block font-medium text-gray-700"
            >Email:</label
          >
          <input
            type="email"
            id="email"
            v-model="user.email"
            class="mt-1 block w-full rounded-md border-2 pl-4 py-2"
          />
        </div>
        <button
          type="submit"
          @click.prevent="handleSubmitUpdate"
          class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#0dd3bb] hover:bg-[#259e90]"
        >
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "../../../components/Header.vue";
export default {
  components: {
    Header,
  },
 
  computed: {
    ...mapGetters(['getUserById']),
    userId: function() {
      return this.$route.params.id;
    },
    user: function() {
      const user = this.getUserById(this.userId);
      return {
        userId: user.userId,
        name: user.name || '',
        position: user.position || '',
        email: user.email || ''
      };
    }
  },
  methods: {
    ...mapActions(['updateUser']),

    handleSubmitUpdate: async function() {
      const user = {
        userId: this.user.userId,
        name: this.user.name,
        position: this.user.position,
        email: this.user.email
      };
      await this.updateUser(user)
      alert("Cập nhật User thành công")
      this.$router.push('/users')
    }
  }
};
</script>
