<template>
  <UserDelete v-bind="deleteProps" @toggle-delete-modal="toggleDeleteModal" />
  <div class="flex flex-row-reverse">
    <router-link :to="{ name: 'UserAdd' }">
      <button
        type="button"
        class="px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Tambah Pengguna
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
                  Nama Pengguna
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  Peran
                </th>
                <th class="px-6 py-3 bg-gray-100 border-b border-gray-200"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(u, index) in users" :key="index">
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  {{ u.username }}
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  {{ u.role }}
                </td>
                <td
                  class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="flex justify-around">
                    <span class="text-yellow-500 flex justify-center">
                      <router-link
                        custom
                        :to="{ name: 'UserRead', params: { id: u.id } }"
                        v-slot="{ href, navigate }"
                      >
                        <a class="mx-2 px-2" @click="navigate" :href="href">
                          <DocumentMagnifyingGlassIcon
                            class="h-5 w-5 text-blue-700"
                        /></a>
                      </router-link>
                      <router-link
                        custom
                        :to="{ name: 'UserUpdate', params: { id: u.id } }"
                        v-slot="{ href, navigate }"
                      >
                        <a
                          :href="href"
                          @click="navigate"
                          class="mx-2 px-2 rounded-md"
                          ><PencilSquareIcon class="h-5 w-5 text-green-700" />
                        </a>
                      </router-link>
                      <button
                        @click.prevent="toggleDeleteModal(String(u.id))"
                        type="button"
                        class="mx-2 px-2 rounded-md"
                      >
                        <TrashIcon class="h-5 w-5 text-red-700" />
                      </button>
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
import { useUserStore } from "@/store/users";
import { DocumentMagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/solid";
import UserDelete from "./UserDelete.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
await userStore.getAll();
const { users } = storeToRefs(userStore);

const deleteProps = ref({ isModalOpen: false, userId: "" });
function toggleDeleteModal(id: string) {
  deleteProps.value.userId = id;
  if (deleteProps.value.isModalOpen === false) {
    deleteProps.value.isModalOpen = true;
  } else deleteProps.value.isModalOpen = false;
}
</script>
