<template>
  <div class="mt-8">
    <div class="mt-4">
      <form @submit.prevent="create">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            Tambah Pengguna
          </h2>

          <div class="grid grid-cols-1 sm:w-3/5 lg:w-1/2 xl:w-2/5 gap-6 mt-4">
            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="username" class="text-gray-600">Username</label>
              <input
                v-model.lazy="formData.username"
                id="username"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
                type="text"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="role" class="text-gray-600">Peran</label>
              <select
                v-model.lazy="formData.role"
                id="role"
                class="block mt-2 rounded-md w-full p-2 text-gray-700 bg-white border border-gray-40 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              >
                <option disabled selected>Pilih peran</option>
                <option value="0">Staff</option>
                <option value="1">Super Admin</option>
              </select>
            </div>

            <div>
              <label class="text-gray-700" for="password">Password</label>
              <div class="relative flex">
                <input
                  v-model.lazy="formData.password"
                  id="password"
                  class="w-full mt-2 p-2 border border-gray-40 rounded-md focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                  :placeholder="
                    passwordInputType === 'password'
                      ? '•••••••••••'
                      : 'berkahselalu1234'
                  "
                  :type="passwordInputType"
                />
                <button @click.prevent="toggleShowPassword" type="button">
                  <EyeIcon
                    v-if="passwordInputType === 'password'"
                    class="w-6 h-6 absolute right-4 top-4 my-auto hover:text-indigo"
                  />
                  <EyeSlashIcon
                    v-else
                    class="w-6 h-6 absolute right-4 top-4 my-auto hover:text-indigo"
                  />
                </button>
              </div>
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
import { ref, reactive } from "vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import type { IUserCreateFormData } from "@/types/users";
import { parseUserRequest } from "@/utils/transforms/user";
import { useUserStore } from "@/store/users";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();
const userStore = useUserStore();
const passwordInputType = ref("password");
const toggleShowPassword = () => {
  passwordInputType.value =
    passwordInputType.value === "password" ? "text" : "password";
};

const formData = reactive<IUserCreateFormData>({
  username: "",
  password: "",
  role: "Pilih peran",
});

async function create() {
  const data = parseUserRequest(formData);
  try {
    await userStore.create(data);
    toast.success("New user created!");
    router.go(-1);
  } catch (e) {
    console.error("gagal buat");
  }
}
</script>
