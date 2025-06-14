<template>
  <div class="home-page">
    <Transition name="fade">
      <SearchView
        v-if="isSearchViewShow"
        @cancel="toggleSearchView"
      ></SearchView>
    </Transition>
    <div v-show="!isSearchViewShow"></div>
    <TheTop
      :recomments="data.searchRecomments"
      @searchClick="toggleSearchView"
    />
    <OpLoadingView :loading="pending" type="skeleton">
      <div class="home-page__banner">
        <img v-for="v in data.banner" :key="v.imgUrl" :src="v.imgUrl" />
      </div>
      <TheTransformer :data="data.transformer" />
      <ScrollBar :data="data.scrollBarInfoList" />
      <div class="home-page__activity"></div>
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
import ScrollBar from './components/ScrollBar.vue'
import TheTransformer from './components/TheTransformer.vue'

const [isSearchViewShow, toggleSearchView] = useToggle(false)

const { pending, data } = useAsync(fetchHomePageData, {
  banner: [],
  searchRecomments: [],
  transformer: [],
  scrollBarInfoList: [],
  countdown: {} as ICountdown,
  activities: [],
} as IHomeInfo)
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.home-page {
  background: var(--op-gray-bg-color);
  padding-bottom: 70px;

  &__banner {
    img {
      width: 100%;
      padding-top: 10px;
      background: white;
    }
  }
  &__activity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;

    &__swipe {
      border-radius: 8px;
      width: 180px;
      height: 170px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
