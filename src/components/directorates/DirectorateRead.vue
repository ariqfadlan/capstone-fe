<template>
  <div class="mt-8">
    <div class="flex justify-end mt-4">
      <button
        @click="$router.back()"
        type="button"
        class="mx-2 px-4 py-2 text-indigo-600 border border-indigo-200 bg-white rounded-md hover:text-indigo-800 hover:bg-indigo-100 focus:outline-none"
      >
        Close
      </button>
      <button
        @click="$router.push({ name: 'DirectorateEdit', params: { id } })"
        type="button"
        class="ml-2 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Edit
      </button>
    </div>
    <div class="mt-4">
      <div class="p-6 bg-white rounded-md shadow-md">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div class="mb-2 pb-2 border-b border-gray40 sm:col-span-2">
            <div class="text-gray-600">Nama Divisi</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { useDirectorateStore } from "@/store/directorate";

const route = useRoute();
const directorateStore = useDirectorateStore();
const id = route.params.id as string;
try {
  await directorateStore.getById(id);
} catch (e) {
  console.log(e);
}
const result = directorateStore.directorate;
</script>
