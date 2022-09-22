<template>
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense v-else>
      <DirectorateEdit v-if="isEditing" />
      <DirectorateAdd v-else />
      <template #fallback><DirectorateFormSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import DirectorateAdd from "@/components/directorates/DirectorateAdd.vue";
import { onErrorCaptured, ref } from "vue";
import ErrorAlert from "@/partials/ErrorAlert.vue";
import Breadcrumb from "@/partials/Breadcrumb.vue";
import { useRoute } from "vue-router";
import DirectorateEdit from "@/components/directorates/DirectorateEdit.vue";
import DirectorateFormSkeleton from "../../partials/directorates/DirectorateFormSkeleton.vue";

const route = useRoute();
const id = route.params.id;
const isEditing = id !== undefined;
const error = ref<Error | null>(null);

const breadcrumb = [
  { link: "/directorates/list", name: "Directorates" },
  { link: "#", name: isEditing ? "Update" : "Add New" },
];
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>
