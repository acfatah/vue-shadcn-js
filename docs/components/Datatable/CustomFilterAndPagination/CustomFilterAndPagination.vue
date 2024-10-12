<script setup>
import payments from '../data/payments.json'

// See the `payment-columns.js` file to see how columns are defined.
import columns from '../PaymentDataTable/payment-columns.js'

const data = ref([])

async function getData() {
  // In a real implementation, the data may come from an API request.
  await new Promise(resolve => setTimeout(resolve, 1000))

  return payments
}

onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <DataTable :columns="columns" :data="data">
    <!-- Filter Slot -->
    <template #filter="{ table }">
      <div class="flex items-center justify-end py-4">
        <Input
          class="ml-auto max-w-sm" placeholder="Filter emails..."
          :model-value="table.getColumn('email')?.getFilterValue()"
          @update:model-value=" table.getColumn('email')?.setFilterValue($event)"
        />
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" class="ml-1">
              <SlidersHorizontalIcon class="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              v-for="column in table.getAllColumns().filter((column) => column.getCanHide())" :key="column.id"
              class="capitalize" :checked="column.getIsVisible()" @update:checked="(value) => {
                column.toggleVisibility(!!value)
              }"
            >
              {{ column.id }}
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </template>
    <!-- Pagination Slot -->
    <template #pagination="{ table }">
      <div class="flex items-center justify-end space-x-2 py-4">
        <div class="flex-1 text-sm text-muted-foreground">
          {{ table.getFilteredSelectedRowModel().rows.length }} of
          {{ table.getFilteredRowModel().rows.length }} row(s) selected.
        </div>
        <Button
          class="px-1"
          variant="outline"
          size="sm"
          :disabled="!table.getCanPreviousPage()"
          @click="table.setPageIndex(0)"
        >
          <ChevronsLeftIcon />
        </Button>
        <Button
          class="px-1"
          variant="outline"
          size="sm"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <ChevronLeftIcon />
        </Button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <!--
          <strong>
            {{ table.getState().pagination.pageIndex + 1 }}
          </strong> of{{ ' ' }}
          -->
          <Input
            type="number"
            min="1"
            class="w-16 rounded border p-1 text-right"
            :max="table.getPageCount()"
            :default-value="table.getState().pagination.pageIndex + 1"
            @change="evt => {
              const page = evt.target.value ? Number(evt.target.value) - 1 : 0
              table.setPageIndex(page)
            }"
          /> of{{ ' ' }}
          <strong>
            {{ table.getPageCount() }}
          </strong>
        </span>
        <Button
          class="px-1"
          variant="outline"
          size="sm"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <ChevronRightIcon />
        </Button>
        <Button
          class="px-1"
          variant="outline"
          size="sm"
          :disabled="!table.getCanNextPage()"
          @click="table.setPageIndex(table.getPageCount() - 1)"
        >
          <ChevronsRightIcon />
        </Button>
      </div>
    </template>
  </DataTable>
</template>
