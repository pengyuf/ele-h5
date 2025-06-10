// interface IDebounceFn<T> {
//   (...args: T[]): void | Promise<void>
// }

import { onUnmounted, ref, watch, type Ref, type UnwrapRef } from 'vue'

// export function useDebounce<T>(fn: IDebounceFn<T>, delay: number) {
//   let timer: null | number = null
//   return function f(this: void, ...args: T[]) {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       fn.call(this, ...args)
//     }, delay)
//   }
// }

export function useDebounce<T>(value: Ref<T>, delay: number) {
  const debounceValue = ref(value.value)
  let timer: number | null = null

  const unwatch = watch(value, (nv) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      debounceValue.value = nv as UnwrapRef<T>
    }, delay)
  })

  onUnmounted(() => {
    unwatch()
  })

  return debounceValue
}
