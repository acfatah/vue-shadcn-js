<script setup>
import { PlusCircledIcon } from '@radix-icons/vue'
import { playlists } from '../data/playlists'

const props = defineProps({
  album: { type: Object, required: true },
  aspectRatio: { type: String, required: false },
  width: { type: Number, required: false },
  height: { type: Number, required: false },
})
</script>

<template>
  <div :class="cn('space-y-3', $attrs.class ?? '')">
    <ContextMenu>
      <ContextMenuTrigger>
        <div class="overflow-hidden rounded-md">
          <img
            :src="props.album?.cover"
            :alt="props.album?.name"
            :width="width"
            :height="height"

            :class="cn(
              'h-auto w-auto object-cover transition-all hover:scale-105',
              aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
            )"
          >
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent class="w-40">
        <ContextMenuItem>Add to Library</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
          <ContextMenuSubContent class="w-48">
            <ContextMenuItem>
              <PlusCircledIcon class="mr-2 size-4" />
              New Playlist
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem v-for="playlist in playlists" :key="playlist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                class="mr-2 size-4"
                viewBox="0 0 24 24"
              >
                <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
              </svg>
              {{ playlist }}
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Play Next</ContextMenuItem>
        <ContextMenuItem>Play Later</ContextMenuItem>
        <ContextMenuItem>Create Station</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Like</ContextMenuItem>
        <ContextMenuItem>Share</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
    <div class="space-y-1 text-sm">
      <h3 class="font-medium leading-none">
        {{ props.album?.name }}
      </h3>
      <p class="text-xs text-muted-foreground">
        {{ props.album?.artist }}
      </p>
    </div>
  </div>
</template>
