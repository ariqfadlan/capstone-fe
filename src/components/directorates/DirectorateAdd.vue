<template>
  <div class="mt-8">
    <div class="mt-4">
      <form @submit.prevent="create">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            Tambah Divisi
          </h2>

          <div class="grid grid-cols-1 sm:w-3/5 lg:w-1/2 xl:w-2/5 gap-6 mt-4">
            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="username" class="text-gray-600">Nama Divisi</label>
              <input
                v-model.lazy="formData.name"
                id="username"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
                type="text"
              />
            </div>
          </div>

          <div class="flex justify-end mt-4">
            <button
              @click.prevent="$router.back()"
              class="mx-2 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              Cancel
            </button>
            <button
              class="ml-2 px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import type { IDirectorateData } from "@/types/directorates";
import { useDirectorateStore } from "@/store/directorate";

const toast = useToast();
const router = useRouter();
const directorateStore = useDirectorateStore();

const formData = reactive<IDirectorateData>({});

async function create() {
  try {
    await directorateStore.create(formData);
    toast.success("New user created!");
    router.go(-1);
  } catch (e) {
    console.error("gagal buat");
  }
}
</script>
