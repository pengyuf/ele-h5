<template>
  <div v-if="loading" class="op-loading-view">
    <slot name="template">
      <div v-if="type === 'loading'" class="loading-wrapper">
        <VanLoading />
      </div>
      <div v-if="type === 'skeleton'" class="skeleton-wrapper">
        <VanSkeleton :row="10" />
        <VanSkeleton title avatar :row="5" />
        <VanSkeleton title :row="5" />
      </div>
    </slot>
  </div>
  <slot v-else></slot>
</template>
<script setup lang="ts">
interface IProps {
  loading: boolean
  type: 'loading' | 'skeleton'
}

defineProps<IProps>()
</script>
