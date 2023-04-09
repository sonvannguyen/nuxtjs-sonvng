<template>
  <div>
    <Header />

    <div class="px-16 py-6">
      <h2 class="text-2xl font-bold uppercase">Thêm User :</h2>
      <form class="flex flex-col space-y-4 w-[400px] mt-5">
        <div>
          <label for="name" class="block font-medium text-gray-700">Tên:</label>
          <input
            type="text"
            id="name"
            v-model="name"
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
            v-model="position"
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
            v-model="email"
            class="mt-1 block w-full rounded-md border-2 pl-4 py-2"
          />
        </div>
        <button
          type="submit"
          @click.prevent="submitAddUser"
          class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#0dd3bb] hover:bg-[#259e90] "
        >
          Thêm 
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "../../components/Header.vue";
import { v4 as uuidv4 } from 'uuid'
export default {
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      position: "",
      email: ""
    }
  },
  methods: {
    ...mapActions(['addUser']),
    submitAddUser: function() {
      const user = {
        userId: uuidv4(),
        name: this.name,
        position: this.position,
        email: this.email
      };
      this.addUser(user);
      alert("Thêm User thành công")
      this.$router.push('/users')
    }
  },
};
</script>

