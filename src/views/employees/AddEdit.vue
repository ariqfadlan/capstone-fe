<template>
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense v-else>
      <EmployeeEdit v-if="isEditing" />
      <EmployeeAdd v-else />
      <template #fallback><EmployeeFormSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import EmployeeAdd from "@/components/employees/EmployeeAdd.vue";
import { onErrorCaptured, ref } from "vue";
import ErrorAlert from "@/partials/ErrorAlert.vue";
import Breadcrumb from "@/partials/Breadcrumb.vue";
import { useRoute } from "vue-router";
import EmployeeEdit from "@/components/employees/EmployeeEdit.vue";
import EmployeeFormSkeleton from "../../partials/employees/EmployeeFormSkeleton.vue";

const route = useRoute();
const id = route.params.id;
const isEditing = id !== undefined;
const error = ref<Error | null>(null);

const breadcrumb = [
  { link: "/employees/list", name: "Employees" },
  { link: "#", name: isEditing ? "Update" : "Add New" },
];
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>
