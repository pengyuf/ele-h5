<template>
  <div class="home-page">
    <Transition name="fade">
      <SearchView
        v-if="isSearchViewShow"
        @cancel="toggleSearchView"
      ></SearchView>
    </Transition>
    <TheTop :recomments="recomments" @searchClick="toggleSearchView" />
    <OpLoadingView :loading="pending" type="loading">
      <template #template>
        <div>loading</div>
      </template>
      <div>{{ data }}</div>
    </OpLoadingView>
  </div>
</template>

<script setup lang="ts">
import type { ICountdown, IHomeInfo } from '../../../types'
import { fetchHomePageData } from '../../../api/home'
import OpLoadingView from '../../../components/OpLoadingView.vue'
import { useAsync } from '../../../use/useAsync'
import { useToggle } from '../../../use/useToggle'
import SearchView from '../../search/SearchView.vue'
import TheTop from './components/TheTop.vue'

const [isSearchViewShow, toggleSearchView] = useToggle(false)

const recomments = [
  { value: 1, label: '牛腩' },
  { value: 2, label: '色拉' },
]

const { pending, data } = useAsync(fetchHomePageData, {
  banner: [],
  searchRecomments: [],
  transformer: [],
  scrollBarInfoList: [],
  countdown: {} as ICountdown,
  activities: [],
} as IHomeInfo)
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
