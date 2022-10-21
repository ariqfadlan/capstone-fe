<template>
  <div>
    <Breadcrumb :links="breadcrumb" />
    <h2 class="text-xl font-semibold leading-tight text-gray-700">Dashboard</h2>
    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/4">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
              <CircleStackIcon class="w-8 h-8 text-white" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ data.collections }}
              </h4>
              <div class="text-gray-500">Benda Koleksi</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-green-600 bg-opacity-75 rounded-full">
              <BuildingOfficeIcon class="w-8 h-8 text-white" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ data.directorates }}
              </h4>
              <div class="text-gray-500">Divisi</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/4 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
              <UserGroupIcon class="w-8 h-8 text-white" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ data.employees }}
              </h4>
              <div class="text-gray-500">Pegawai</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/4 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
              <UsersIcon class="w-8 h-8 text-white" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ data.users }}
              </h4>
              <div class="text-gray-500">Pengguna Sistem</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8"></div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "../partials/Breadcrumb.vue";
import {
  CircleStackIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/vue/24/solid";
import { useDashboardStore } from "@/store/dashboard";
import { storeToRefs } from "pinia";

const breadcrumb = [{ link: "/dashboard", name: "Dashboard" }];

const dashboardStore = useDashboardStore();
dashboardStore.getAll();
const { dashboard: data } = storeToRefs(dashboardStore);
</script>
