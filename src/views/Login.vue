<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <svg
          class="w-10 h-10 ml-2 text-blue-600"
          fill="currentColor"
          stroke="currentColor"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 26.2L52 135h408L256 26.2zM73 153v14h366v-14H73zm16 32v206h30V185H89zm101.334 0v206h30V185h-30zm101.332 0v206h30V185h-30zM393 185v206h30V185h-30zM73 409v30h366v-30H73zm-32 48v30h430v-30H41z"
          />
        </svg>
        <span class="text-xl font-semibold text-gray-700"
          >SI Museum &amp; Cagar Budaya</span
        >
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label for="username" class="block">
          <span class="text-sm text-gray-700">Username</span>
        </label>
        <input
          id="username"
          autocomplete="username"
          type="type"
          tabindex="1"
          placeholder="johndoe"
          class="block w-full mt-1 p-2 border border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          v-model="username"
        />

        <label for="password" class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
        </label>
        <div class="relative flex">
          <input
            id="password"
            autocomplete="current-password"
            tabindex="2"
            :placeholder="
              passwordInputType === 'password'
                ? '•••••••••••'
                : 'berkahselalu1234'
            "
            :type="passwordInputType"
            class="block w-full mt-1 p-2 border border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="password"
          />
          <button type="button" @click.prevent="toggleShowPassword">
            <EyeIcon
              v-if="passwordInputType === 'password'"
              class="w-6 h-6 absolute right-4 top-4 my-auto text-gray-600 hover:text-indigo-800"
            />
            <EyeSlashIcon
              v-else
              class="w-6 h-6 absolute right-4 top-4 my-auto text-gray-600 hover:text-indigo-800"
            />
          </button>
        </div>

        <div class="flex items-center justify-between mt-4"></div>

        <div class="mt-6">
          <button
            tabindex="3"
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

const router = useRouter();
const username = ref("");
const password = ref("");
const authStore = useAuthStore();
const toast = useToast();

const passwordInputType = ref("password");
const toggleShowPassword = () => {
  passwordInputType.value =
    passwordInputType.value === "password" ? "text" : "password";
};

async function login() {
  try {
    await authStore.login(username.value, password.value);
    router.push({ name: "Dashboard" });
    toast.success("Welcome!");
  } catch (e) {
    console.error("login failed");
  }
}
</script>
