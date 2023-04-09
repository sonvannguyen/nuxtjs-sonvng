<template>
  <div>
    <Header />

    <div class="px-16">
      <h2 class="text-2xl font-bold uppercase  py-6">
        Preview User
      </h2>
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-4">
          <div class="rounded-full overflow-hidden w-12 h-12">
            <img src="https://www.redditstatic.com/avatars/avatar_default_02_0DD3BB.png" :alt="name" class="w-full h-full object-cover" />
          </div>
          <div>
            <h2 class="text-lg font-medium">{{ user.name }}</h2>
            <p class="text-gray-500">{{ user.position }}</p>
          </div>
        </div>
       
      </div>
      <div >
          <p id="email" class="mt-1 text-sm text-gray-900">Email: {{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "../../../components/Header.vue";
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
  computed: {
    ...mapGetters(['getUserById']),
    userId: function() {
      return this.$route.params.id;
    },
    user: function() {
      return this.getUserById(this.userId);
    }
  },
};
</script>
