<script setup>
import { refDebounced } from '@vueuse/core'

import AccountSwitcher from './AccountSwitcher.vue'
import MailDisplay from './MailDisplay.vue'
import MailList from './MailList.vue'
import Nav from './Nav.vue'

const props = defineProps({
  accounts: { type: Array, default: () => [] },
  mails: { type: Array, default: () => [] },
  defaultLayout: { type: Array, default: () => [265, 440, 655] },
  defaultCollapsed: { type: Boolean, default: false },
  navCollapsedSize: { type: Number, default: 4 },
})

const isCollapsed = ref(props.defaultCollapsed)
const selectedMail = ref(props.mails[0]?.id)
const searchValue = ref('')
const debouncedSearch = refDebounced(searchValue, 250)

const filteredMailList = computed(() => {
  let output = []
  const searchValue = debouncedSearch.value?.trim()

  if (!searchValue) {
    output = props.mails
  }
  else {
    output = props.mails.filter((item) => {
      return item.name.includes(debouncedSearch.value)
        || item.email.includes(debouncedSearch.value)
        || item.name.includes(debouncedSearch.value)
        || item.subject.includes(debouncedSearch.value)
        || item.text.includes(debouncedSearch.value)
    })
  }

  return output
})

const unreadMailList = computed(() => filteredMailList.value.filter(item => !item.read))
const selectedMailData = computed(() => props.mails.find(item => item.id === selectedMail.value))

const links = [
  {
    title: 'Inbox',
    label: '128',
    icon: 'lucide:inbox',
    variant: 'default',
  },
  {
    title: 'Drafts',
    label: '9',
    icon: 'lucide:file',
    variant: 'ghost',
  },
  {
    title: 'Sent',
    label: '',
    icon: 'lucide:send',
    variant: 'ghost',
  },
  {
    title: 'Junk',
    label: '23',
    icon: 'lucide:archive',
    variant: 'ghost',
  },
  {
    title: 'Trash',
    label: '',
    icon: 'lucide:trash',
    variant: 'ghost',
  },
  {
    title: 'Archive',
    label: '',
    icon: 'lucide:archive',
    variant: 'ghost',
  },
]

const links2 = [
  {
    title: 'Social',
    label: '972',
    icon: 'lucide:user-2',
    variant: 'ghost',
  },
  {
    title: 'Updates',
    label: '342',
    icon: 'lucide:alert-circle',
    variant: 'ghost',
  },
  {
    title: 'Forums',
    label: '128',
    icon: 'lucide:message-square',
    variant: 'ghost',
  },
  {
    title: 'Shopping',
    label: '8',
    icon: 'lucide:shopping-cart',
    variant: 'ghost',
  },
  {
    title: 'Promotions',
    label: '21',
    icon: 'lucide:archive',
    variant: 'ghost',
  },
]

function onCollapse() {
  isCollapsed.value = true
}

function onExpand() {
  isCollapsed.value = false
}
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup
      id="resize-panel-group-1"
      direction="horizontal"
      class="h-full max-h-screen items-stretch"
    >
      <ResizablePanel
        id="resize-panel-1"
        :default-size="defaultLayout[0]"
        :collapsed-size="navCollapsedSize"
        collapsible
        :min-size="15"
        :max-size="20"
        :class="cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')"
        @expand="onExpand"
        @collapse="onCollapse"
      >
        <div :class="cn('flex h-[52px] items-center justify-center', isCollapsed ? 'h-[52px]' : 'px-2')">
          <AccountSwitcher :is-collapsed="isCollapsed" :accounts="accounts" />
        </div>
        <Separator />
        <Nav
          :is-collapsed="isCollapsed"
          :links="links"
        />
        <Separator />
        <Nav
          :is-collapsed="isCollapsed"
          :links="links2"
        />
      </ResizablePanel>
      <ResizableHandle id="resize-handle-1" with-handle />
      <ResizablePanel id="resize-panel-2" :default-size="defaultLayout[1]" :min-size="30">
        <Tabs default-value="all">
          <div class="flex items-center px-4 py-2">
            <h1 class="text-xl font-bold">
              Inbox
            </h1>
            <TabsList class="ml-auto">
              <TabsTrigger value="all" class="text-zinc-600 dark:text-zinc-200">
                All mail
              </TabsTrigger>
              <TabsTrigger value="unread" class="text-zinc-600 dark:text-zinc-200">
                Unread
              </TabsTrigger>
            </TabsList>
          </div>
          <Separator />
          <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div class="relative">
                <SearchIcon class="absolute left-2 top-2.5 size-4 text-muted-foreground" />
                <Input v-model="searchValue" placeholder="Search" class="pl-8" />
              </div>
            </form>
          </div>
          <TabsContent value="all" class="m-0">
            <MailList v-model:selected-mail="selectedMail" :items="filteredMailList" />
          </TabsContent>
          <TabsContent value="unread" class="m-0">
            <MailList v-model:selected-mail="selectedMail" :items="unreadMailList" />
          </TabsContent>
        </Tabs>
      </ResizablePanel>
      <ResizableHandle id="resiz-handle-2" with-handle />
      <ResizablePanel id="resize-panel-3" :default-size="defaultLayout[2]">
        <MailDisplay :mail="selectedMailData" />
      </ResizablePanel>
    </ResizablePanelGroup>
  </TooltipProvider>
</template>
