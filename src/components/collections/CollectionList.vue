<template>
  <div class="flex flex-row-reverse">
    <router-link :to="{ name: 'CollectionAdd' }">
      <button
        class="px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Tambah Koleksi
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
                  Nama Benda
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  Bahan
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  Jenis
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  Kondisi
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  Ruang Penyimpanan
                </th>
                <th class="px-6 py-3 bg-gray-100 border-b border-gray-200"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(u, index) in collections" :key="index">
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ u.name }}
                  </div>
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="text-sm leading-5 text-gray-900">
                    {{ u.material }}
                  </div>
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <span
                    class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                    >{{ u.typeCode }}</span
                  >
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <span
                    class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                    >{{ u.status }}</span
                  >
                </td>

                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                >
                  {{ u.storage }}
                </td>

                <td
                  class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="flex justify-around">
                    <span class="flex justify-center">
                      <router-link
                        custom
                        :to="{ name: 'CollectionRead', params: { id: u.id } }"
                        v-slot="{ href, navigate }"
                      >
                        <a class="mx-2 px-2" :href="href" @click="navigate">
                          <DocumentMagnifyingGlassIcon
                            class="h-5 w-5 text-blue-700"
                        /></a>
                      </router-link>
                      <router-link
                        custom
                        :to="{ name: 'CollectionEdit', params: { id: u.id } }"
                        v-slot="{ href, navigate }"
                      >
                        <a class="mx-2 px-2" :href="href" @click="navigate">
                          <PencilSquareIcon class="h-5 w-5 text-green-700"
                        /></a>
                      </router-link>
                      <a class="mx-2 px-2" href="#">
                        <TrashIcon class="h-5 w-5 text-red-700"
                      /></a>
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
import { useCollectionStore } from "../../store/collections";
import { DocumentMagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/solid";
import type { ICollectionResponseData } from "@/types/collections";
import { parseCollectionResponse } from "@/utils/transforms/collection";
const collectionStore = useCollectionStore();

const responseData: ICollectionResponseData[] = await collectionStore.getAll();
const collections = responseData.map(parseCollectionResponse);
</script>
