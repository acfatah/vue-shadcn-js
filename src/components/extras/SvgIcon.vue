<script setup>
const props = defineProps({
  name: { type: String, required: true },

  /** Size prop will override width and height */
  size: { type: [String, Number], required: false, default: 24 },
})

const fileExists = ref(true)
const { name: nameAttr, size: sizeAttr, ...delegatedAttrs } = useAttrs()

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
      ...delegatedAttrs,
      ...(props.size ? { width: props.size } : {}),
      ...(props.size ? { height: props.size } : {}),
    }"
  />
</template>
