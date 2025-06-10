import { ref, type Ref } from 'vue'

export const useToggle = (initState: boolean): [Ref<boolean>, () => void] => {
  const state = ref(initState)
  const toggle = () => {
    state.value = !state.value
  }
  return [state, toggle]
}
