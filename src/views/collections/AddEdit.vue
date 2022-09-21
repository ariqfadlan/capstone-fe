<template>
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense v-else>
      <CollectionEdit v-if="isEditing" />
      <CollectionAdd v-else />
      <template #fallback><CollectionFormSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import CollectionAdd from "@/components/collections/CollectionAdd.vue";
import { onErrorCaptured, ref } from "vue";
import ErrorAlert from "@/partials/ErrorAlert.vue";
import Breadcrumb from "@/partials/Breadcrumb.vue";
import { useRoute } from "vue-router";
import CollectionEdit from "@/components/collections/CollectionEdit.vue";
import CollectionFormSkeleton from "../../partials/collections/CollectionFormSkeleton.vue";

const route = useRoute();
const id = route.params.id;
const isEditing = id !== undefined;
const error = ref<Error | null>(null);

const breadcrumb = [
  { link: "/collections/list", name: "Collections" },
  { link: "#", name: isEditing ? "Update" : "Add New" },
];
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>
