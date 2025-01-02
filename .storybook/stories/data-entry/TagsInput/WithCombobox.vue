<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const open = ref(false)
const searchTerm = ref('')

const formSchema = toTypedSchema(z.object({
  frameworks: z.array(z.string()).min(1).max(3),
}))

const initialValues = {
  frameworks: ['nuxt'],
}

function onSubmit(values) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <Form
    class="w-2/3 space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField v-slot="{ value, handleChange }" name="frameworks">
      <FormItem>
        <FormLabel>Frameworks</FormLabel>
        <FormControl>
          <TagsInput
            class="w-80 gap-0 px-0"
            :model-value="value"
            :display-value="value => frameworks.find(i => i.value === value)?.label"
            @update:model-value="handleChange"
          >
            <div class="flex flex-wrap items-center gap-2 px-3">
              <TagsInputItem
                v-for="item in value"
                :key="item"
                :value="frameworks.find(i => i.value === item)?.value"
              >
                <TagsInputItemText />
                <TagsInputItemDelete />
              </TagsInputItem>
            </div>

            <ComboboxRoot
              v-model:open="open"
              v-model:search-term="searchTerm"
              class="w-full"
              :value="value"
              @update:value="handleChange"
            >
              <ComboboxAnchor as-child>
                <ComboboxInput placeholder="Framework..." as-child>
                  <TagsInputInput
                    :class="cn('w-full px-3', { 'mt-2': value.length > 0 })"
                    @keydown.enter.prevent
                  />
                </ComboboxInput>
              </ComboboxAnchor>

              <ComboboxPortal>
                <ComboboxContent>
                  <CommandList
                    position="popper"
                    class="mt-2 w-[--radix-popper-anchor-width] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                  >
                    <CommandEmpty />
                    <CommandGroup>
                      <CommandItem
                        v-for="framework in frameworks.filter(i => !value.includes(i.value))"
                        :key="framework.value"
                        :value="framework.label"
                        @select.prevent="(ev) => {
                          if (typeof ev.detail.value === 'string') {
                            searchTerm = ''
                            value.push(framework.value)
                          }

                          if (frameworks.filter(i => !value.includes(i.value)).length === 0) {
                            open = false
                          }
                        }"
                      >
                        {{ framework.label }}
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </ComboboxContent>
              </ComboboxPortal>
            </ComboboxRoot>
          </TagsInput>
        </FormControl>
        <FormDescription>
          Select your frameworks.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
