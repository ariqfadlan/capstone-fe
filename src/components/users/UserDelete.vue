<template>
  <div
    :class="`modal ${
      !props.isModalOpen && 'opacity-0 pointer-events-none'
    } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
  >
    <div
      @click="$emit('toggleDeleteModal')"
      class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
    ></div>
    <div
      class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
    >
      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="px-6 py-4 text-left modal-content">
        <svg
          class="mx-auto mb-4 w-14 h-14 text-red-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>

        <!--Title-->
        <div class="flex items-center justify-center pb-3">
          <p class="text-2xl font-bold">Terjadi Galat!</p>
          <div
            class="z-50 cursor-pointer modal-close"
            @click="$emit('toggleDeleteModal')"
          ></div>
        </div>

        <!--Body-->
        <p class="text-center">{{ promptMessage }}</p>

        <!--Footer-->
        <div class="flex justify-end mt-4 pt-2">
          <button
            @click="$emit('toggleDeleteModal')"
            class="p-3 px-6 py-3 mr-2 text-indigo-600 border border-indigo-400 bg-transparent rounded-lg hover:bg-indigo-100 hover:text-indigo-800 focus:outline-none"
          >
            Batal
          </button>
          <button
            @click.prevent="remove"
            class="px-6 py-3 font-medium tracking-wide text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "@/store/users";
import { useToast } from "vue-toastification";

const toast = useToast();
const emits = defineEmits(["toggleDeleteModal"]);
const props = defineProps<{ isModalOpen: boolean; userId: string }>();
const userStore = useUserStore();
const promptMessage = computed(() => {
  return "Apakah Anda yakin ingin menghapus data ini?";
});

async function remove() {
  try {
    await userStore.deleteById(props.userId);
    toast.success("Delete success!");
    userStore.getAll();
    emits("toggleDeleteModal");
  } catch (e) {
    console.error("update failed");
  }
}
</script>
