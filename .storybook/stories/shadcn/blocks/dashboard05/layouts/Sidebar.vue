<template>
  <aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
      <a
        href="#"
        class="group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:size-8 md:text-base"
      >
        <Package2Icon class="size-4 transition-all group-hover:scale-110" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <Tooltip side="right" text="Dashboard">
        <a
          href="#"
          class="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
        >
          <HomeIcon class="size-5" />
          <span class="sr-only">Dashboard</span>
        </a>
      </Tooltip>
      <Tooltip side="right" text="Orders">
        <a
          href="#"
          class="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:size-8"
        >
          <ShoppingCartIcon class="size-5" />
          <span class="sr-only">Orders</span>
        </a>
      </Tooltip>
      <Tooltip side="right" text="Products">
        <a
          href="#"
          class="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
        >
          <PackageIcon class="size-5" />
          <span class="sr-only">Products</span>
        </a>
      </Tooltip>
      <Tooltip side="right" text="Customers">
        <a
          href="#"
          class="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
        >
          <Users2Icon class="size-5" />
          <span class="sr-only">Customers</span>
        </a>
      </Tooltip>
      <Tooltip side="right" text="Analytics">
        <a
          href="#"
          class="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
        >
          <LineChartIcon class="size-5" />
          <span class="sr-only">Analytics</span>
        </a>
      </Tooltip>
    </nav>
    <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <Tooltip side="right" text="Settings">
        <a
          href="#"
          class="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
        >
          <SettingsIcon class="size-5" />
          <span class="sr-only">Settings</span>
        </a>
      </Tooltip>
    </nav>
  </aside>
</template>
