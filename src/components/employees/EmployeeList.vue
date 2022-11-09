<template>
  <EmployeeDelete
    v-bind="deleteProps"
    @toggle-delete-modal="toggleDeleteModal"
  />
  <div class="flex flex-row-reverse">
    <router-link :to="{ name: 'EmployeeAdd' }">
      <button
        type="button"
        class="px-6 py-2 mt-3 ml-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Tambah Pegawai
      </button>
    </router-link>
    <button
      class="px-6 py-2 mt-3 ml-3 text-indigo-500 bg-white rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
      type="button"
      @click.prevent="syncProvidence"
    >
      Sinkron Providence
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
          v-if="filteredResponseData.length !== 0"
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  <button
                    class="appearance-none flex flex-column items-center uppercase tracking-wider font-medium"
                    @click="toggleSort('employeeNumber')"
                    type="button"
                  >
                    Nomor Induk
                    <BarsArrowDownIcon
                      v-if="
                        sorting.currentKey === 'employeeNumber' &&
                        !sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                    <BarsArrowUpIcon
                      v-if="
                        sorting.currentKey === 'employeeNumber' &&
                        sorting.isAscending
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
                    @click="toggleSort('fullname')"
                    type="button"
                  >
                    Nama Lengkap
                    <BarsArrowDownIcon
                      v-if="
                        sorting.currentKey === 'fullname' &&
                        !sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                    <BarsArrowUpIcon
                      v-if="
                        sorting.currentKey === 'fullname' && sorting.isAscending
                      "
                      class="h-3 w-3 mx-2"
                    />
                  </button>
                </th>
                <th class="px-6 py-3 bg-gray-100 border-b border-gray-200"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(e, index) in employees" :key="index">
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  {{ e.employeeNumber }}
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  {{ e.fullname }}
                </td>
                <td
                  class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="flex justify-around">
                    <span class="text-yellow-500 flex justify-center">
                      <router-link
                        custom
                        :to="{ name: 'EmployeeRead', params: { id: e.id } }"
                        v-slot="{ href, navigate }"
                      >
                        <a class="mx-2 px-2" @click="navigate" :href="href">
                          <DocumentMagnifyingGlassIcon
                            class="h-5 w-5 text-blue-700"
                        /></a>
                      </router-link>
                      <router-link
                        custom
                        :to="{ name: 'EmployeeUpdate', params: { id: e.id } }"
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
                        @click.prevent="toggleDeleteModal(String(e.id))"
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

          <div
            class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
          >
            <span class="text-xs text-gray-900 xs:text-sm">{{
              `Halaman ${paginate.currentPage} dari ${Math.ceil(
                filteredResponseData.length / paginate.size
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
                  Math.ceil(filteredResponseData.length / paginate.size)
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
import { useEmployeeStore } from "@/store/employees";
import { DocumentMagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/vue/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/solid";
import EmployeeDelete from "./EmployeeDelete.vue";
import { ref, reactive, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toastification";
import type { IEmployeeData } from "@/types/employees";
import { sort } from "fast-sort";

const searchKeyword = ref<string>("");
const sorting = reactive<{
  currentKey: keyof IEmployeeData;
  isAscending: boolean;
}>({
  currentKey: "id",
  isAscending: true,
});
const paginate = reactive({
  size: 10,
  currentPage: 1,
});

const toast = useToast();
const employeeStore = useEmployeeStore();
await employeeStore.getAll();
const { employees: responseData } = storeToRefs(employeeStore);

const deleteProps = ref({ isModalOpen: false, id: "" });
function toggleDeleteModal(id: string) {
  deleteProps.value.id = id;
  if (deleteProps.value.isModalOpen === false) {
    deleteProps.value.isModalOpen = true;
  } else deleteProps.value.isModalOpen = false;
}

async function syncProvidence() {
  try {
    const { synced: numberOfSynced } = await employeeStore.syncProvidence();
    toast.success(`Successfully synced ${numberOfSynced} employees!`);
  } catch (e) {
    console.error(e);
    toast.error("Error syncing! Call your sysadmin!");
  }
}

const filteredResponseData = computed(() => {
  const filteredItems = responseData.value!.filter((item) => {
    return (
      item.fullname!.toLowerCase().indexOf(searchKeyword.value?.toLowerCase()) >
      -1
    );
  });
  const sortedItems = sorting.isAscending
    ? sort(filteredItems).asc((u) => u[sorting.currentKey])
    : sort(filteredItems).desc((u) => u[sorting.currentKey]);
  return sortedItems;
});

const employees = computed(() => {
  return filteredResponseData.value.filter((_, index) => {
    let start = (paginate.currentPage - 1) * paginate.size;
    let end = paginate.currentPage * paginate.size;
    if (index >= start && index < end) return true;
  });
});

function toggleSort(key: keyof IEmployeeData) {
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
  if (paginate.currentPage * paginate.size < filteredResponseData.value.length)
    paginate.currentPage++;
}

function prevPage() {
  if (paginate.currentPage > 1) paginate.currentPage--;
}

watch([() => paginate.size, filteredResponseData], () => {
  paginate.currentPage = 1;
});
</script>
