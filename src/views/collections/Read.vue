<template>
  <!-- Breadcrumb -->
  <Breadcrumb :links="breadcrumb" />
  <Suspense>
    <CollectionRead />
  </Suspense>
</template>
<script lang="ts" setup>
import Breadcrumb from "@/partials/Breadcrumb.vue";
import CollectionRead from "../../components/collections/CollectionRead.vue";
const breadcrumb = [
  { link: "/collections/list", name: "Collections" },
  { link: "#", name: "Details" },
];
</script>
