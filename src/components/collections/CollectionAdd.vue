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
                placeholder="Koin Logam Zaman Belanda"
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
                placeholder="000128"
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
                <option disabled selected>Pilih bahan</option>
                <option v-for="(val, i) in materialType" :value="i" :key="i">
                  {{ val }}
                </option>
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
                <option disabled selected>Pilih cara</option>
                <option
                  v-for="(val, key) in acquisitionWay"
                  :value="key"
                  :key="key"
                >
                  {{ val }}
                </option>
              </select>
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="acquisition-entry-date" class="text-gray-600"
                >Tanggal Perolehan</label
              >
              <input
                v-model.lazy="formData.acquisitionEntryDate"
                type="date"
                id="acquisition-entry-date"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md resize-y focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
              />
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="type-code-number" class="text-gray-600"
                >Kode Jenis</label
              >
              <input
                type="text"
                v-model.lazy="formData.typeCode"
                id="type-code-number"
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
                v-model.lazy="formData.status"
                id="role"
                class="block mt-2 rounded-md w-full p-2 text-gray-700 bg-white border border-gray-40 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              >
                <option disabled selected>Pilih status</option>
                <option
                  v-for="(val, key) in statusType"
                  :key="key"
                  :value="key"
                >
                  {{ val }}
                </option>
              </select>
            </div>

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="storage" class="text-gray-600">Penyimpanan</label>
              <input
                v-model.lazy="formData.storage"
                id="storage"
                class="w-full mt-2 p-2 border border-gray-40 rounded-md focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-indigo-500"
                placeholder="amandamanopo"
                type="text"
              />
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

            <div class="mb-2 pb-2 border-b border-gray40">
              <label for="role" class="text-gray-600">Bahan</label>
              <select
                v-model.lazy="formData.authorId"
                id="role"
                class="block mt-2 rounded-md w-full p-2 text-gray-700 bg-white border border-gray-40 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              >
                <option disabled selected>Pilih pegawai</option>
                <option
                  v-for="employee in employees"
                  :value="employee.id"
                  :key="employee.id"
                >
                  {{ employee.fullname }}
                </option>
              </select>
            </div>

            <!-- end component--->
          </div>

          <div class="flex justify-end mt-4">
            <button
              @click.prevent="$router.back()"
              class="mx-2 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
              type="button"
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
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import {
  MaterialType,
  AcquisitionWayType,
  StatusType,
} from "@/types/collections";
import type { ICollectionCreateFormData } from "@/types/collections";
import { parseCollectionRequest } from "@/utils/transforms/collection";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { useCollectionStore } from "@/store/collections";
import { useEmployeeStore } from "@/store/employees";
import { storeToRefs } from "pinia";

const toast = useToast();
const router = useRouter();
const collectionStore = useCollectionStore();
const employeeStore = useEmployeeStore();

const formData = reactive<ICollectionCreateFormData>({
  material: "Pilih bahan",
  acquisitionWay: "Pilih cara",
  status: "Pilih status",
  authorId: "Pilih pegawai",
});

const { employees } = storeToRefs(employeeStore);

async function create() {
  try {
    const data = parseCollectionRequest(formData);
    await collectionStore.create(data);
    toast.success("New user created!");
    router.go(-1);
  } catch (e: any) {
    console.error(e);
  }
}

const materialType = Object.values(MaterialType).filter(
  (o) => typeof o == "string"
);

const acquisitionWay = Object.values(AcquisitionWayType).filter(
  (o) => typeof o == "string"
);

const statusType = Object.values(StatusType).filter(
  (o) => typeof o == "string"
);

await employeeStore.getAll();
</script>
