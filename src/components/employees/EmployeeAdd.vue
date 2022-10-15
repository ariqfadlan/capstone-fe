<template>
  <div class="mt-8">
    <div class="mt-4">
      <form @submit.prevent="create">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            Tambah Pegawai
          </h2>

          <div class="grid grid-cols-1 sm:w-3/5 lg:w-1/2 xl:w-2/5 gap-6 mt-4">
            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="fullname" class="text-gray-600">Nama Lengkap</label>
              <input
                v-model.lazy="formData.fullname"
                id="fullname"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="Amanda Manopo"
                type="text"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="employee-number" class="text-gray-600"
                >Nomor Induk</label
              >
              <input
                v-model.lazy="formData.employeeNumber"
                id="employee-number"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="198200000000000001"
                type="text"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="user" class="text-gray-600">Pengguna</label>
              <select
                v-model.lazy="formData.userId"
                id="user"
                class="block mt-2 rounded-md w-full p-2 text-gray-700 bg-white border border-gray-40 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              >
                <option disabled selected>Pilih pengguna</option>
                <option v-for="u in userList" :key="u.id" :value="Number(u.id)">
                  {{ u.username }}
                </option>
              </select>
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="directorate" class="text-gray-600">Divisi</label>
              <select
                v-model.lazy="formData.directorateId"
                id="directorate"
                class="block mt-2 rounded-md w-full p-2 text-gray-700 bg-white border border-gray-40 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              >
                <option disabled selected>Pilih divisi</option>
                <option
                  v-for="d in directorateList"
                  :key="d.id"
                  :value="Number(d.id)"
                >
                  {{ d.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="flex justify-end mt-4">
            <button
              @click.prevent="$router.back()"
              type="button"
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
import type { IEmployeeData } from "@/types/employees";
import { useEmployeeStore } from "@/store/employees";
import { useDirectorateStore } from "@/store/directorate";
import { useUserStore } from "@/store/users";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const toast = useToast();
const router = useRouter();
const employeeStore = useEmployeeStore();
const userStore = useUserStore();
const directorateStore = useDirectorateStore();

const userGetAllRequest = userStore.getAll();
const directorateGetAllRequest = directorateStore.getAll();

const formData = reactive<IEmployeeData>({
  userId: "Pilih pengguna",
  directorateId: "Pilih divisi",
});

const { users: userList } = storeToRefs(userStore);
const { directorates: directorateList } = storeToRefs(directorateStore);

async function create() {
  const data = formData;
  try {
    await employeeStore.create(data);
    toast.success("New employee created!");
    router.go(-1);
  } catch (e) {
    console.error(e);
  }
}

await Promise.all([userGetAllRequest, directorateGetAllRequest]);
</script>
