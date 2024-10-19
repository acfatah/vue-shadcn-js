<script setup>
const props = defineProps({
  name: { type: String, required: true },
})

const fileExists = ref(true)

const SvgIcon = defineAsyncComponent(async () => {
  try {
    return await import(`~/assets/icons/${props.name}.svg?component`)
  }
  catch (error) {
    if (!error.message.match(/^Unknown variable dynamic import: (.*)/))
      throw error

    fileExists.value = false
    console.error(`Icon ${props.name}.svg not found`)
  }
})
</script>

<template>
  <SvgIcon
    v-if="props.name && fileExists"
    v-bind="{
      ...$attrs,
      class: cn('size-6', $attrs.class),
    }"
  />
</template>
