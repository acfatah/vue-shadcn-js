<script setup>
import addDays from 'date-fns/addDays'
import addHours from 'date-fns/addHours'
import format from 'date-fns/format'
import nextSaturday from 'date-fns/nextSaturday'

const props = defineProps({
  mail: { type: Object },
})

const mailFallbackName = computed(() => {
  return props.mail?.name
    .split(' ')
    .map(chunk => chunk[0])
    .join('')
})

const today = new Date()
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="flex items-center p-2">
      <div class="flex items-center gap-2">
        <Tooltip text="Archive" as-child>
          <Button variant="ghost" size="icon" :disabled="!props.mail">
            <ArchiveIcon class="size-4" />
            <span class="sr-only">Archive</span>
          </Button>
        </Tooltip>
        <Tooltip text="Move to junk" as-child>
          <Button variant="ghost" size="icon" :disabled="!props.mail">
            <ArchiveXIcon class="size-4" />
            <span class="sr-only">Move to junk</span>
          </Button>
        </Tooltip>
        <Tooltip text="Move to trash" as-child>
          <Button variant="ghost" size="icon" :disabled="!props.mail">
            <Trash2Icon class="size-4" />
            <span class="sr-only">Move to trash</span>
          </Button>
        </Tooltip>
        <Separator orientation="vertical" class="mx-1 h-6" />
        <Tooltip text="Snooze">
          <Popover>
            <PopoverTrigger as-child>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon" :disabled="!props.mail">
                  <ClockIcon class="size-4" />
                  <span class="sr-only">Snooze</span>
                </Button>
              </TooltipTrigger>
            </PopoverTrigger>
            <PopoverContent class="flex w-[535px] p-0">
              <div class="flex flex-col gap-2 border-r px-2 py-4">
                <div class="px-4 text-sm font-medium">
                  Snooze until
                </div>
                <div class="grid min-w-[250px] gap-1">
                  <Button
                    variant="ghost"
                    class="justify-start font-normal"
                  >
                    Later today
                    <span class="ml-auto text-muted-foreground">
                      {{ format(addHours(today, 4), "E, h:m b") }}
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    class="justify-start font-normal"
                  >
                    Tomorrow
                    <span class="ml-auto text-muted-foreground">
                      {{ format(addDays(today, 1), "E, h:m b") }}
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    class="justify-start font-normal"
                  >
                    This weekend
                    <span class="ml-auto text-muted-foreground">
                      {{ format(nextSaturday(today), "E, h:m b") }}
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    class="justify-start font-normal"
                  >
                    Next week
                    <span class="ml-auto text-muted-foreground">
                      {{ format(addDays(today, 7), "E, h:m b") }}
                    </span>
                  </Button>
                </div>
              </div>
              <div class="p-2">
                <Calendar />
              </div>
            </PopoverContent>
          </Popover>
        </Tooltip>
      </div>
      <div class="ml-auto flex items-center gap-2">
        <Tooltip text="Reply" as-child>
          <Button variant="ghost" size="icon" :disabled="!props.mail">
            <ReplyIcon class="size-4" />
            <span class="sr-only">Reply</span>
          </Button>
        </Tooltip>
        <Tooltip text="Reply all" as-child>
          <Button variant="ghost" size="icon" :disabled="!props.mail">
            <ReplyAllIcon class="size-4" />
            <span class="sr-only">Reply all</span>
          </Button>
        </Tooltip>
        <Tooltip text="Forward" as-child>
          <Button variant="ghost" size="icon" :disabled="!props.mail">
            <ForwardIcon class="size-4" />
            <span class="sr-only">Forward</span>
          </Button>
        </Tooltip>
      </div>
      <Separator orientation="vertical" class="mx-2 h-6" />
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon" :disabled="!props.mail">
            <MoreVerticalIcon class="size-4" />
            <span class="sr-only">More</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Mark as unread</DropdownMenuItem>
          <DropdownMenuItem>Star thread</DropdownMenuItem>
          <DropdownMenuItem>Add label</DropdownMenuItem>
          <DropdownMenuItem>Mute thread</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <Separator />
    <div v-if="props.mail" class="flex flex-1 flex-col">
      <div class="flex items-start p-4">
        <div class="flex items-start gap-4 text-sm">
          <Avatar>
            <AvatarFallback>
              {{ mailFallbackName }}
            </AvatarFallback>
          </Avatar>
          <div class="grid gap-1">
            <div class="font-semibold">
              {{ props.mail.name }}
            </div>
            <div class="line-clamp-1 text-xs">
              {{ props.mail.subject }}
            </div>
            <div class="line-clamp-1 text-xs">
              <span class="font-medium">Reply-To:</span> {{ props.mail.email }}
            </div>
          </div>
        </div>
        <div v-if="props.mail.date" class="ml-auto text-xs text-muted-foreground">
          {{ format(new Date(props.mail.date), "PPpp") }}
        </div>
      </div>
      <Separator />
      <div class="flex-1 whitespace-pre-wrap p-4 text-sm">
        {{ props.mail.text }}
      </div>
      <Separator class="mt-auto" />
      <div class="p-4">
        <form>
          <div class="grid gap-4">
            <Textarea
              class="p-4"
              :placeholder="`Reply ${props.mail.name}...`"
            />
            <div class="flex items-center">
              <Label
                html-for="mute"
                class="flex items-center gap-2 text-xs font-normal"
              >
                <Switch id="mute" aria-label="Mute thread" /> Mute this
                thread
              </Label>
              <Button
                type="button"
                size="sm"
                class="ml-auto"
              >
                Send
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div v-else class="p-8 text-center text-muted-foreground">
      No message selected
    </div>
  </div>
</template>
