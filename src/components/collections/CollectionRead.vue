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
        @click="$router.push({ name: 'CollectionEdit', params: { id } })"
        class="ml-2 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Edit
      </button>
    </div>
    <div class="mt-4">
      <div class="p-6 bg-white rounded-md shadow-md">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div class="mb-2 pb-2 sm:row-span-4 sm:-order-1">
            <div class="text-gray-600 invisible sm:visible">Gambar</div>
            <img :src="`http://${result.imagePath}`" class="mt-2 max-h-72" />
          </div>

          <div class="mb-2 pb-2 border-b border-gray40 sm:order-first">
            <div class="text-gray-600">Nama</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.name }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-600">Nomor Registrasi</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.registrationNumber }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Bahan</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.material }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Penyimpanan</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.storage }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40 sm:col-span-2">
            <div class="text-gray-700">Asal Usul</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.originDescription }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Tempat Asal Pembuatan Benda</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.originalMaterial }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Tempat Asal Didapatnya Benda</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.originSource }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40 sm:col-span-2">
            <div class="text-gray-700">Cara Perolehan</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.acquisitionWay }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Waktu Masuk</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.acquisitionEntryDate }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Kode Jenis</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.typeCode }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40 sm:col-span-2">
            <div class="text-gray-700">Berita Acara</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.recordOfTransfer }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40 sm:col-span-2">
            <div class="text-gray-700">Deskripsi Benda</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.objectDescription }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Nomor Inventarsi</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.inventoryNumber }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Daerah</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.region }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Tahun Peristiwa Awal</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.startYear }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Tahun Peristiwa Akhir</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.endYear }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Status</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.status }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Ukuran</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.objectSize }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40 sm:col-span-2">
            <div class="text-gray-700">Kondisi</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.conditionDescription }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40 sm:col-span-2">
            <div class="text-gray-700">Keterangan</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.additionalInformation }}
            </div>
          </div>

          <div class="mb-2 pb-2 border-b border-gray40">
            <div class="text-gray-700">Penanggung Jawab</div>
            <div class="text-gray-700 font-semibold text-lg" for="username">
              {{ result.authorId }}
            </div>
          </div>

          <!-- end item -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCollectionStore } from "@/store/collections";
import { computed } from "vue";
import { parseCollectionResponse } from "@/utils/transforms/collection";

const route = useRoute();
const collectionStore = useCollectionStore();
const id = route.params.id as string;
try {
  await collectionStore.getById(id);
} catch (e) {
  console.log(e);
}

const result = computed(() =>
  parseCollectionResponse(collectionStore.collection)
);
</script>
