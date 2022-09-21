<template>
  <!-- Breadcrumb -->
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense>
      <CollectionList />
      <template #fallback><CollectionListSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import Breadcrumb from "@/partials/Breadcrumb.vue";
import CollectionList from "@/components/collections/CollectionList.vue";
import { onErrorCaptured, ref } from "vue";
import CollectionListSkeleton from "../../partials/collections/CollectionListSkeleton.vue";
const breadcrumb = [{ link: "/collections/list", name: "Collections" }];
const error = ref<Error | null>(null);
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>
