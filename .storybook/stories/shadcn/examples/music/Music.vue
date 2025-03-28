<script setup>
import { PlusCircledIcon } from '@radix-icons/vue'
import AlbumArtwork from './components/AlbumArtwork.vue'
import Menu from './components/Menu.vue'
import PodcastEmptyPlaceholder from './components/PodcastEmptyPlaceholder.vue'
import Sidebar from './components/Sidebar.vue'
import { listenNowAlbums, madeForYouAlbums } from './data/albums'
import { playlists } from './data/playlists'
</script>

<template>
  <div class="md:hidden">
    TBD: mobile view
  </div>
  <div class="hidden md:block">
    <Menu />
    <div class="grid h-full min-h-[calc(100vh-38px)] border-t bg-background lg:grid-cols-5">
      <Sidebar :playlists="playlists" class="hidden lg:block" />
      <div class="col-span-3 h-full lg:col-span-4 lg:border-l">
        <div class="h-full px-4 py-6 lg:px-8">
          <Tabs default-value="music" class="h-full space-y-6">
            <div class="space-between flex items-center">
              <TabsList>
                <TabsTrigger value="music" class="relative">
                  Music
                </TabsTrigger>
                <TabsTrigger value="podcasts">
                  Podcasts
                </TabsTrigger>
                <TabsTrigger value="live" disabled>
                  Live
                </TabsTrigger>
              </TabsList>
              <div class="ml-auto mr-4">
                <Button>
                  <PlusCircledIcon class="mr-2 size-4" />
                  Add music
                </Button>
              </div>
            </div>
            <TabsContent
              value="music"
              class="border-none p-0 outline-none"
            >
              <div class="flex items-center justify-between">
                <div class="space-y-1">
                  <h2 class="text-2xl font-semibold tracking-tight">
                    Listen Now
                  </h2>
                  <p class="text-sm text-muted-foreground">
                    Top picks for you. Updated daily.
                  </p>
                </div>
              </div>
              <Separator class="my-4" />
              <div class="relative">
                <ScrollArea>
                  <div class="flex space-x-4 pb-4">
                    <AlbumArtwork
                      v-for="album in listenNowAlbums"
                      :key="album.name"
                      :album="album"
                      class="w-[250px]"
                      aspect-ratio="portrait"
                      :width="250"
                      :height="330"
                    />
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
              <div class="mt-6 space-y-1">
                <h2 class="text-2xl font-semibold tracking-tight">
                  Made for You
                </h2>
                <p class="text-sm text-muted-foreground">
                  Your personal playlists. Updated daily.
                </p>
              </div>
              <Separator class="my-4" />
              <div class="relative">
                <ScrollArea>
                  <div class="flex space-x-4 pb-4">
                    <AlbumArtwork
                      v-for="album in madeForYouAlbums"
                      :key="album.name"
                      :album="album"
                      class="w-[150px]"
                      aspect-ratio="square"
                      :width="150"
                      :height="150"
                    />
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="podcasts"
              class="h-full flex-col border-none p-0 data-[state=active]:flex"
            >
              <div class="flex items-center justify-between">
                <div class="space-y-1">
                  <h2 class="text-2xl font-semibold tracking-tight">
                    New Episodes
                  </h2>
                  <p class="text-sm text-muted-foreground">
                    Your favorite podcasts. Updated daily.
                  </p>
                </div>
              </div>
              <Separator class="my-4" />
              <PodcastEmptyPlaceholder />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</template>
