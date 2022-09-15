<template>
  <div class="mt-8">
    <div class="mt-4">
      <form @submit.prevent="create">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            Tambah Koleksi
          </h2>

          <div class="grid grid-cols-1 sm:w-3/5 lg:w-1/2 xl:w-2/5 gap-6 mt-4">
            <!-- start form-->

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="name" class="text-gray-600">Nama</label>
              <input
                v-model.lazy="formData.name"
                id="name"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
                type="text"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="registration-number" class="text-gray-600"
                >Nomor Registrasi</label
              >
              <input
                v-model.lazy="formData.registrationNumber"
                id="registration-number"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
                type="text"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="role" class="text-gray-600">Bahan</label>
              <select
                v-model.lazy="formData.material"
                id="role"
                class="block mt-2 rounded-md w-full p-2 text-gray-700 bg-white border border-gray-40 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              >
                <option disabled selected>Pilih</option>
                <option value="0">Staff</option>
              </select>
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="origin-description" class="text-gray-600"
                >Asal Usul</label
              >
              <textarea
                v-model.lazy="formData.originDescription"
                id="origin-description"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="original-material" class="text-gray-600"
                >Tempat Asal Pembuatan Benda</label
              >
              <input
                v-model.lazy="formData.originalMaterial"
                type="text"
                id="original-aterial"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="originSource" class="text-gray-600"
                >Tempat Asal Didapatnya Benda</label
              >
              <input
                v-model.lazy="formData.originSource"
                type="text"
                id="originSource"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="a" class="text-gray-600">Cara Perolehan</label>
              <select
                v-model.lazy="formData.acquisitionWay"
                id="role"
                class="block mt-2 rounded-md w-full p-2 text-gray-700 bg-white border border-gray-40 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              >
                <option disabled selected>Pilih</option>
                <option value="0">Staff</option>
              </select>
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="original-material" class="text-gray-600"
                >Tanggal Perolehan</label
              >
              <input
                v-model.lazy="formData.originalMaterial"
                type="date"
                id="original-aterial"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="type-code" class="text-gray-600">Kode Jenis</label>
              <input
                type="text"
                v-model.lazy="formData.typeCode"
                id="type-code"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="record-of-transfer" class="text-gray-600"
                >Berita Acara</label
              >
              <textarea
                v-model.lazy="formData.recordOfTransfer"
                id="record-of-transfer"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="object-description" class="text-gray-600"
                >Deskripsi Benda</label
              >
              <textarea
                v-model.lazy="formData.objectDescription"
                id="object-description"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="inventory-number" class="text-gray-600"
                >Nomor Inventaris</label
              >
              <input
                type="text"
                v-model.lazy="formData.inventoryNumber"
                id="inventory-number"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="region" class="text-gray-600">Daerah</label>
              <input
                type="text"
                v-model.lazy="formData.region"
                id="region"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="start-year" class="text-gray-600"
                >Tahun Peristiwa Awal</label
              >
              <input
                type="text"
                v-model.lazy="formData.startYear"
                id="start-year"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="end-year" class="text-gray-600"
                >Tahun Peristiwa Akhir</label
              >
              <input
                type="text"
                v-model.lazy="formData.endYear"
                id="end-year"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="role" class="text-gray-600">Status</label>
              <select
                v-model.lazy="formData.material"
                id="role"
                class="block mt-2 rounded-md w-full p-2 text-gray-700 bg-white border border-gray-40 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              >
                <option disabled selected>Pilih</option>
                <option value="0">Staff</option>
              </select>
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="object-size" class="text-gray-600">Ukuran</label>
              <input
                v-model.lazy="formData.objectSize"
                id="object-size"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
                type="text"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="condition-description" class="text-gray-600"
                >Kondisi</label
              >
              <textarea
                v-model.lazy="formData.conditionDescription"
                id="condition-description"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="additional-information" class="text-gray-600"
                >Keterangan</label
              >
              <textarea
                v-model.lazy="formData.additionalInformation"
                id="additional-information"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="flex justify-end mt-4">
              <button
                @click.prevent="$router.back()"
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

            <!-- end form--->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import type { ICollectionCreateFormData } from "@/types/collections";
import { parseUserRequest } from "@/utils/transforms/user";
import { useUserStore } from "@/store/users";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();
const userStore = useUserStore();

const formData = reactive<ICollectionCreateFormData>({});

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
