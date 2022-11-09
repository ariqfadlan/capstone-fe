<template>
  <CollectionDelete
    v-bind="deleteProps"
    @toggle-delete-modal="toggleDeleteModal"
  />
  <CollectionImport
    v-bind="importProps"
    @toggle-import-modal="toggleImportModal"
  />
  <div class="flex flex-col-reverse sm:flex-row-reverse">
    <router-link
      :to="{ name: 'CollectionAdd' }"
      class="px-6 py-2 mt-3 ml-3 font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
    >
      <button type="button">Tambah Koleksi</button>
    </router-link>
    <button
      class="px-6 py-2 mt-3 ml-3 text-indigo-500 bg-white rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
      type="button"
      @click.prevent="syncProvidence"
    >
      Sinkron Providence
    </button>
    <button
      class="px-6 py-2 mt-3 ml-3 text-indigo-500 bg-white rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
      type="button"
      @click.prevent="downloadAtom"
    >
      Ekspor Atom
    </button>
    <button
      class="px-6 py-2 mt-3 ml-3 text-indigo-500 bg-white rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
      type="button"
      @click.prevent="toggleImportModal"
    >
      Impor CSV
    </button>
    <button
      class="px-6 py-2 mt-3 ml-3 text-indigo-500 bg-white rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
      type="button"
      @click.prevent="downloadCSV"
    >
      Ekspor CSV
    </button>
  </div>

  <div class="flex flex-col mt-5 sm:flex-row">
    <div class="relative">
      <select
        class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        v-model="paginate.size"
      >
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>

      <div
        class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
      >
        <svg
          class="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
    <div class="relative block mt-2 sm:mt-0">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg viewBox="0 0 24 24" class="w-4 h-4 text-gray-500 fill-current">
          <path
            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
          />
        </svg>
      </span>

      <input
        v-model="searchKeyword"
        placeholder="Cari"
        type="text"
        class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
      />
    </div>
  </div>

  <div class="mt-8">
    <div class="flex flex-col mt-6">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          v-if="collections.length !== 0"
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs leading-4 tracking-wider text-left text-gray-500 bg-gray-100 border-b border-gray-200"
                >
                  <button
                    class="appearance-none flex flex-column items-center tracking-wider uppercase font-medium"
                    @click="toggleSort('name')"
                    type="button"
                  >
                    Nama Benda
                    <BarsArrowDownIcon
                      v-if="
                        sorting.currentKey === 'name' && !sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                    <BarsArrowUpIcon
                      v-if="
                        sorting.currentKey === 'name' && sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                  </button>
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  <button
                    class="appearance-none flex flex-column items-center uppercase tracking-wider font-medium"
                    @click="toggleSort('material')"
                    type="button"
                  >
                    Bahan
                    <BarsArrowDownIcon
                      v-if="
                        sorting.currentKey === 'material' &&
                        !sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                    <BarsArrowUpIcon
                      v-if="
                        sorting.currentKey === 'material' && sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                  </button>
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  <button
                    class="appearance-none flex flex-column items-center uppercase tracking-wider font-medium"
                    @click="toggleSort('typeCode')"
                    type="button"
                  >
                    Jenis
                    <BarsArrowDownIcon
                      v-if="
                        sorting.currentKey === 'typeCode' &&
                        !sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                    <BarsArrowUpIcon
                      v-if="
                        sorting.currentKey === 'typeCode' && sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                  </button>
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  <button
                    class="appearance-none flex flex-column items-center uppercase tracking-wider font-medium"
                    @click="toggleSort('status')"
                    type="button"
                  >
                    Kondisi
                    <BarsArrowDownIcon
                      v-if="
                        sorting.currentKey === 'status' && !sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                    <BarsArrowUpIcon
                      v-if="
                        sorting.currentKey === 'status' && sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                  </button>
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  <button
                    class="appearance-none flex flex-column items-center uppercase tracking-wider font-medium"
                    @click="toggleSort('storage')"
                    type="button"
                  >
                    Ruang Penyimpanan
                    <BarsArrowDownIcon
                      v-if="
                        sorting.currentKey === 'storage' && !sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                    <BarsArrowUpIcon
                      v-if="
                        sorting.currentKey === 'storage' && sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                  </button>
                </th>
                <th class="px-6 py-3 bg-gray-100 border-b border-gray-200"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(u, index) in displayedCollections" :key="index">
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
                      <button
                        class="mx-2 px-2"
                        @click.prevent="toggleDeleteModal(String(u.id))"
                      >
                        <TrashIcon class="h-5 w-5 text-red-700" />
                      </button>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
          >
            <span class="text-xs text-gray-900 xs:text-sm">{{
              `Halaman ${paginate.currentPage} dari ${Math.ceil(
                collections.length / paginate.size
              )}`
            }}</span>

            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400 disabled:opacity-25"
                type="button"
                :disabled="paginate.currentPage === 1"
                @click="prevPage"
              >
                Prev
              </button>
              <button
                class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400 disabled:opacity-25"
                :disabled="
                  paginate.currentPage ==
                  Math.ceil(collections.length / paginate.size)
                "
                type="button"
                @click="nextPage"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <span
          v-else
          class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
          >Hasil pencarian tidak ada!</span
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCollectionStore } from "@/store/collections";
import {
  DocumentMagnifyingGlassIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/vue/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/solid";
import { parseCollectionResponse } from "@/utils/transforms/collection";
import { computed, reactive, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toastification";
import CollectionDelete from "./CollectionDelete.vue";
import CollectionImport from "./CollectionImport.vue";
import type { ICollectionData } from "@/types/collections";
import { sort } from "fast-sort";

const collectionStore = useCollectionStore();
const toast = useToast();

const searchKeyword = ref<string>("");
const sorting = reactive<{
  currentKey: keyof ICollectionData;
  isAscending: boolean;
}>({
  currentKey: "id",
  isAscending: true,
});
const paginate = reactive({
  size: 10,
  currentPage: 1,
});

await collectionStore.getAll();

const { collections: responseData } = storeToRefs(collectionStore);

const collections = computed(() => {
  const items = responseData.value?.map(parseCollectionResponse);
  const filteredItems = items.filter((item) => {
    return (
      item.name!.toLowerCase().indexOf(searchKeyword.value?.toLowerCase()) > -1
    );
  });
  const sortedItems = sorting.isAscending
    ? sort(filteredItems).asc((u) => u[sorting.currentKey])
    : sort(filteredItems).desc((u) => u[sorting.currentKey]);
  return sortedItems;
});

const displayedCollections = computed(() => {
  return collections.value.filter((_, index) => {
    let start = (paginate.currentPage - 1) * paginate.size;
    let end = paginate.currentPage * paginate.size;
    if (index >= start && index < end) return true;
  });
});

const deleteProps = ref({ isModalOpen: false, id: "" });
function toggleDeleteModal(id: string) {
  deleteProps.value.id = id;
  if (deleteProps.value.isModalOpen === false) {
    deleteProps.value.isModalOpen = true;
  } else deleteProps.value.isModalOpen = false;
}

const importProps = ref({ isModalOpen: false });
function toggleImportModal() {
  if (importProps.value.isModalOpen === false) {
    importProps.value.isModalOpen = true;
  } else importProps.value.isModalOpen = false;
}

function toggleSort(key: keyof ICollectionData) {
  if (sorting.currentKey === key) {
    if (sorting.isAscending === true) {
      sorting.isAscending = false;
    } else {
      sorting.isAscending = true;
    }
  } else {
    sorting.currentKey = key;
    sorting.isAscending = true;
  }
}

function nextPage() {
  if (paginate.currentPage * paginate.size < collections.value.length)
    paginate.currentPage++;
}

function prevPage() {
  if (paginate.currentPage > 1) paginate.currentPage--;
}

async function downloadAtom() {
  try {
    const response = await collectionStore.downloadAtomCSV();
    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/csv" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "atom-collections.csv");
    document.body.appendChild(link);
    link.click();
  } catch (e) {
    console.error(e);
  }
}
async function downloadCSV() {
  try {
    const response = await collectionStore.downloadCSV();
    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/csv" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "collections.csv");
    document.body.appendChild(link);
    link.click();
  } catch (e) {
    console.error(e);
  }
}

async function syncProvidence() {
  try {
    const { synced: numberOfSynced } = await collectionStore.syncProvidence();
    toast.success(`Successfully synced ${numberOfSynced} collections!`);
  } catch (e) {
    console.error(e);
    toast.error("Error syncing! Call your sysadmin!");
  }
}

watch([() => paginate.size, collections], () => {
  paginate.currentPage = 1;
});
</script>
