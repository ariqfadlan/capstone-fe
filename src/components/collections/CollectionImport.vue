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

        <!--Body-->
        <form
          v-if="isPromptingFile"
          class="text-center"
          @submit.prevent="upload"
        >
          <label for="csv" class="text-center text-slate-700">{{
            promptMessage
          }}</label>
          <input
            type="file"
            accept=".csv"
            @change="setFile"
            id="csvimage"
            class="w-full mt-2 p-2 text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />

          <!--Footer-->
          <div class="flex justify-end mt-4 pt-2">
            <button
              @click="$emit('toggleImportModal')"
              class="p-3 px-6 py-3 mr-2 text-indigo-600 border border-indigo-400 bg-transparent rounded-lg hover:bg-indigo-100 hover:text-indigo-800 focus:outline-none"
              type="button"
            >
              Batal
            </button>
            <button
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
              type="submit"
            >
              Unggah
            </button>
          </div>
        </form>

        <div class="text-center mb-2" v-else>
          <svg
            class="inline mr-2 w-12 h-12 text-gray-200 animate-spin fill-indigo-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <p class="text-slate-700 my-4">Mengimpor...</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useToast } from "vue-toastification";
import { ArrowUpOnSquareIcon } from "@heroicons/vue/24/outline";
import { useCollectionStore } from "@/store/collections";

const toast = useToast();
const emits = defineEmits(["toggleImportModal"]);
const props = defineProps<{ isModalOpen: boolean }>();
const collectionStore = useCollectionStore();

const isPromptingFile = ref<boolean>(true);
const promptMessage = computed(() => {
  return "Pilih berkas CSV anda";
});
const csvFile = ref<File>();

function setFile(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target?.files?.length === 1) {
    csvFile.value = target.files[0];
  } else {
    toast.info("Please choose an csv file!");
  }
}

async function upload() {
  if (csvFile.value === undefined) {
    toast.error("No selected file!");
    return;
  }
  try {
    isPromptingFile.value = false;
    collectionStore.uploadCSV(csvFile.value);
    toast.success("Import success!");
    emits("toggleImportModal");
  } catch (e) {
    console.log("failed import");
  } finally {
    isPromptingFile.value = true;
  }
}
</script>
