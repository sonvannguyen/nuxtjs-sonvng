<template>
  <div class="w-[270px] bg-gray-200 p-4 rounded-lg">
    <div class="text-center mb-3">
      <h4 class="text-xl font-bold ">{{ userData.name }}</h4>
      <h5 class="text-sm">{{ userData.position }}</h5>
    </div>

    <img
      class="rounded-md w-full"
      src="https://www.redditstatic.com/avatars/avatar_default_02_0DD3BB.png"
      alt=""
    />

    <div class="flex justify-between mt-2">

      <nuxt-link :to="`users/preview/${userData.userId}`"
        class="flex text-sm bg-blue-400 px-[6px] py-2 justify-center items-center cursor-pointer rounded-md hover:text-white"
      >
        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Preview</span>
      </nuxt-link>

      <nuxt-link 
        :to="`users/edit/${userData.userId}`"
        class="flex text-sm bg-yellow-400 px-[6px] py-2 justify-center items-center cursor-pointer rounded-md hover:text-white"
      >
        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
        </svg>
        <span>Edit</span>
      </nuxt-link>

      <div 
        @click="handleDeleteUser"
        class="flex text-sm bg-red-400 px-[6px] py-2 justify-center items-center cursor-pointer rounded-md hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
        <span>Delete</span>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
      userData: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions(['deleteUser']),
      handleDeleteUser: async function() {
        if (confirm('Bạn có chắc chắn muốn xóa?')) {
          await this.deleteUser(this.userData.userId)
          alert("Đã xóa thành công")
          location.reload()
        } else {
          console.log('Không xóa người dùng');
        }
      },
    }
};
</script>
