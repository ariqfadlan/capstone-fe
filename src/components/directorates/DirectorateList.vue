<template>
  <DirectorateDelete
    v-bind="deleteProps"
    @toggle-delete-modal="toggleDeleteModal"
  />
  <div class="flex flex-row-reverse">
    <router-link :to="{ name: 'DirectorateAdd' }">
      <button
        class="px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Tambah Direktorat
      </button>
    </router-link>
  </div>
  <div class="mt-8">
    <div class="flex flex-col mt-6">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  Nama Divisi
                </th>
                <th class="px-6 py-3 bg-gray-100 border-b border-gray-200"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(d, index) in directorates" :key="index">
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  {{ d.name }}
                </td>

                <td
                  class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="flex justify-around">
                    <span class="text-yellow-500 flex justify-center">
                      <router-link
                        custom
                        :to="{ name: 'DirectorateRead', params: { id: d.id } }"
                        v-slot="{ href, navigate }"
                      >
                        <a class="mx-2 px-2" @click="navigate" :href="href">
                          <DocumentMagnifyingGlassIcon
                            class="h-5 w-5 text-blue-700"
                        /></a>
                      </router-link>
                      <router-link
                        custom
                        :to="{
                          name: 'DirectorateEdit',
                          params: { id: d.id },
                        }"
                        v-slot="{ href, navigate }"
                      >
                        <a
                          :href="href"
                          @click="navigate"
                          class="mx-2 px-2 rounded-md"
                          ><PencilSquareIcon class="h-5 w-5 text-green-700" />
                        </a>
                      </router-link>
                      <form method="POST">
                        <button
                          @click.prevent="toggleDeleteModal(String(d.id))"
                          class="mx-2 px-2 rounded-md"
                        >
                          <TrashIcon class="h-5 w-5 text-red-700" />
                        </button>
                      </form>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { DocumentMagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { useDirectorateStore } from "@/store/directorate";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/solid";
import DirectorateDelete from "./DirectorateDelete.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const directorateStore = useDirectorateStore();
await directorateStore.getAll();
const { directorates } = storeToRefs(directorateStore);

const deleteProps = ref({ isModalOpen: false, userId: "" });
function toggleDeleteModal(id: string) {
  deleteProps.value.userId = id;
  if (deleteProps.value.isModalOpen === false) {
    deleteProps.value.isModalOpen = true;
  } else deleteProps.value.isModalOpen = false;
}
</script>
