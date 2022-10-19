<template>
  <div
    :class="`modal ${
      !props.isModalOpen && 'opacity-0 pointer-events-none'
    } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
  >
    <div
      @click="$emit('toggleImportModal')"
      class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
    ></div>
    <div
      class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
    >
      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="mt-2 px-6 py-4 text-left modal-content">
        <ArrowUpOnSquareIcon class="mx-auto mb-4 w-14 h-14 text-indigo-600" />

        <!--Title-->
        <div class="flex items-center justify-center pb-3">
          <p class="text-2xl text-slate-600 font-bold">Impor CSV</p>
          <div
            class="z-50 cursor-pointer modal-close"
            @click="$emit('toggleImportModal')"
          ></div>
        </div>
        <p class="text-center text-slate-700">{{ promptMessage }}</p>

        <!--Body-->
        <form class="text-center" @submit.prevent="create">
          <input
            type="file"
            @change="setFile"
            id="image"
            class="w-full mt-2 p-2 text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </form>

        <!--Footer-->
        <div class="flex justify-end mt-4 pt-2">
          <button
            @click="$emit('toggleImportModal')"
            class="p-3 px-6 py-3 mr-2 text-indigo-600 border border-indigo-400 bg-transparent rounded-lg hover:bg-indigo-100 hover:text-indigo-800 focus:outline-none"
          >
            Batal
          </button>
          <button
            class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useToast } from "vue-toastification";
import { ArrowUpOnSquareIcon } from "@heroicons/vue/24/outline";

const toast = useToast();
//const emits = defineEmits(["toggleImportModal"]);
const props = defineProps<{ isModalOpen: boolean }>();
const promptMessage = computed(() => {
  return "Pilih berkas CSV anda";
});
const csvFile = ref<File>();

function setFile(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target?.files?.length === 1) {
    csvFile.value = target.files[0];
  } else {
    toast.info("Please choose an image!");
  }
}

function create() {
  if (csvFile.value === undefined) {
    toast.error("No selected file!");
    return;
  }
}
</script>
