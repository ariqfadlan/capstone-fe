<template>
  <div class="mt-8">
    <div class="flex justify-end mt-4">
      <button
        @click="$router.back()"
        class="mx-2 px-4 py-2 text-indigo-600 border border-indigo-200 bg-white rounded-md hover:text-indigo-800 hover:bg-indigo-100 focus:outline-none"
      >
        Close
      </button>
      <button
        @click="$router.push({ name: 'EmployeeUpdate', params: { id } })"
        class="ml-2 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Edit
      </button>
    </div>
    <div class="mt-4">
      <div class="p-6 bg-white rounded-md shadow-md">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-600">Nama Lengkap</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result?.fullname }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700" for="emailAddress">Nomor Induk</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result?.employeeNumber }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700" for="emailAddress">Username</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result?.user?.username }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700" for="emailAddress">Peran</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result?.user?.role }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700" for="emailAddress">Divisi</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result?.directorate?.name }}
            </div>
          </div>

          <!-- end data -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { useEmployeeStore } from "@/store/employees";
import { storeToRefs } from "pinia";

const route = useRoute();
const employeeStore = useEmployeeStore();
const id = route.params.id as string;
try {
  await employeeStore.getById(id);
} catch (e) {
  console.log(e);
}
const { employee: result } = storeToRefs(employeeStore);
console.log(result);
</script>
