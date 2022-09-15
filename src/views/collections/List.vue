<template>
  <!-- Breadcrumb -->
  <Breadcrumb :links="breadcrumb" />
  <Suspense>
    <CollectionList />
  </Suspense>
</template>
<script lang="ts" setup>
import Breadcrumb from "@/partials/Breadcrumb.vue";
import CollectionList from "@/components/collections/CollectionList.vue";
const breadcrumb = [
  { link: "/collections/list", name: "Collections" },
  { link: "#", name: "Details" },
];
</script>
