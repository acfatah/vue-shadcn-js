<script setup>
import SheetMenu from './SheetMenu.vue'
</script>

<template>
  <header class="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
    <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <a
        href="#"
        class="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2Icon class="size-6" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <a
        href="#"
        class="text-foreground transition-colors hover:text-foreground"
      >
        Dashboard
      </a>
      <a
        href="#"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        Orders
      </a>
      <a
        href="#"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        Products
      </a>
      <a
        href="#"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        Customers
      </a>
      <a
        href="#"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        Analytics
      </a>
    </nav>
    <Sheet>
      <SheetTrigger as-child>
        <Button
          variant="outline"
          size="icon"
          class="shrink-0 md:hidden"
        >
          <MenuIcon class="size-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetMenu />
      </SheetContent>
    </Sheet>
    <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <form class="ml-auto flex-1 sm:flex-initial">
        <div class="relative">
          <SearchIcon class="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          />
        </div>
      </form>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary" size="icon" class="rounded-full">
            <CircleUserIcon class="size-5" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
</template>
