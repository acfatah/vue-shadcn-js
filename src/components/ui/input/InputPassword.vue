<script setup>
const props = defineProps({
  class: { type: null, required: false },
  iconClass: { type: null, required: false },
})

const isVisible = ref(false)
const attrs = useAttrs()

const delegatedAttrs = computed(() => {
  const { class: _, ...delegated } = attrs

  delegated.type = isVisible.value ? 'text' : 'password'

  return delegated
})

function toggleVisibility() {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div class="space-y-2">
    <div class="relative">
      <Input
        v-bind="delegatedAttrs"
        :type="isVisible ? 'text' : 'password'"
        :class="props.class"
        autocomplete="current-password"
      />
      <button
        :class="cn('absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50', props.iconClass)"
        type="button"
        :aria-label="isVisible ? 'Hide password' : 'Show password'"
        :aria-pressed="isVisible"
        aria-controls="password"
        @click="toggleVisibility"
      >
        <EyeOffIcon v-if="isVisible" size="16" stroke-width="2" aria-hidden="true" />
        <EyeIcon v-else size="16" stroke-width="2" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
/* https://learn.microsoft.com/en-us/microsoft-edge/web-platform/password-reveal */
::-ms-reveal {
  display: none;
}

input[type='password'] {
  -webkit-text-security: none;
  -moz-text-security: none;
}
</style>
