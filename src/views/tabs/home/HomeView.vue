<template>
  <div class="home-page">
    <Transition name="fade">
      <SearchView
        v-if="isSearchViewShow"
        @cancel="toggleSearchView"
      ></SearchView>
    </Transition>
    <TheTop :recomments="recomments" @searchClick="toggleSearchView" />
    {{ pending }}
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import { fetchHomePageData } from '../../../api/home'
import { useAsync } from '../../../use/useAsync'
import { useToggle } from '../../../use/useToggle'
import SearchView from '../../search/SearchView.vue'
import TheTop from './components/TheTop.vue'

const [isSearchViewShow, toggleSearchView] = useToggle(false)

const recomments = [
  { value: 1, label: '牛腩' },
  { value: 2, label: '色拉' },
]

const { pending, data } = useAsync(fetchHomePageData, {})
</script>

<style setup scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
