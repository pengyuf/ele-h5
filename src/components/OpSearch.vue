<template>
  <div
    class="op-search"
    :class="{ 'op-search--show-action': showAction }"
    :style="{ background }"
  >
    <div
      class="op-search__content"
      :class="shape ? `op-search__content--${shape}` : ''"
    >
      <div class="op-cell op-search__field">
        <div class="op-field__left-icon">
          <VanIcon name="search" />
        </div>
        <div class="op-cell__value">
          <div class="op-field__body">
            <input
              type="search"
              class="op-field__control"
              :value="modelValue"
              :placeholder="placeholder"
              @keypress="onKeypress"
              @input="
                (e) =>
                  emits(
                    'update:modelValue',
                    (e.target as HTMLInputElement).value
                  )
              "
            />
            <div v-if="$slots['right-icon']" class="op-field__right-icon">
              <slot name="right-icon"></slot>
            </div>
            <VanIcon
              v-else-if="modelValue"
              name="clear"
              class="op-field__clear"
              @click="onClear"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="showAction" class="op-search__action">
      <slot name="action">
        <div @click="emits('cancel')">取消</div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  showAction?: boolean
  background?: string
  placeholder?: string
  shape?: string
  modelValue?: string | number
}

interface IEmits {
  (e: 'search', v?: string | number): void
  (e: 'cancel'): void
  (e: 'clear'): void
  (e: 'update:modelValue', v?: string | number): void
}

const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()

const onKeypress = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    emits('search', props.modelValue)
  }
}

const onClear = () => {
  emits('update:modelValue', '')
  emits('clear')
}
</script>
<style lang="scss"></style>
