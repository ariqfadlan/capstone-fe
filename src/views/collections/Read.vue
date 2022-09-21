<template>
  <!-- Breadcrumb -->
  <Breadcrumb :links="breadcrumb" />
  <div v-if="error">
    <ErrorAlert :err="error" />
  </div>
  <div class="mt-4">
    <Suspense>
      <CollectionRead />
      <template #fallback><CollectionReadSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import Breadcrumb from "@/partials/Breadcrumb.vue";
import { onErrorCaptured, ref } from "vue";
import CollectionRead from "../../components/collections/CollectionRead.vue";
import CollectionReadSkeleton from "../../partials/collections/CollectionReadSkeleton.vue";
const breadcrumb = [
  { link: "/collections/list", name: "Collections" },
  { link: "#", name: "Details" },
];

const error = ref<Error | null>(null);
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>
