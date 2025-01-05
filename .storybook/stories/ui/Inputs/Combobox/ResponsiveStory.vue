<script setup>
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'

const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
  },
  {
    value: 'todo',
    label: 'Todo',
  },
  {
    value: 'in progress',
    label: 'In Progress',
  },
  {
    value: 'done',
    label: 'Done',
  },
  {
    value: 'canceled',
    label: 'Canceled',
  },
]

const [UseTemplate, StatusList] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')

const isOpen = ref(false)
const selectedStatus = ref(null)

function onStatusSelect(status) {
  selectedStatus.value = status
  isOpen.value = false
}
</script>

<template>
  <div>
    <UseTemplate>
      <Command>
        <CommandInput placeholder="Filter status..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="status of statuses"
              :key="status.value"
              :value="status.value"
              @select="onStatusSelect(status)"
            >
              {{ status.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </UseTemplate>

    <Popover v-if="isDesktop" v-model:open="isOpen">
      <PopoverTrigger as-child>
        <Button variant="outline" class="w-[150px] justify-start">
          {{ selectedStatus ? selectedStatus.label : "+ Set status" }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-[200px] p-0" align="start">
        <StatusList />
      </PopoverContent>
    </Popover>

    <Drawer v-else v-model:open="isOpen">
      <DrawerTrigger as-child>
        <Button variant="outline" class="w-[150px] justify-start">
          {{ selectedStatus ? selectedStatus.label : "+ Set status" }}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div class="mt-4 border-t">
          <StatusList />
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>
