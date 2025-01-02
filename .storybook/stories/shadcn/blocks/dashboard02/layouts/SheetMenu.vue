<script setup>
import { Home, LineChart, Menu, Package, Package2, ShoppingCart, Users } from 'lucide-vue-next'
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button
        variant="outline"
        size="icon"
        class="shrink-0 md:hidden"
      >
        <Menu class="size-5" />
        <span class="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="flex flex-col">
      <nav class="grid gap-2 text-lg font-medium">
        <a
          href="#"
          class="flex items-center gap-2 text-lg font-semibold"
        >
          <Package2 class="size-6" />
          <span class="sr-only">Acme Inc</span>
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Home class="size-5" />
          Dashboard
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
        >
          <ShoppingCart class="size-5" />
          Orders
          <Badge class="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge>
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Package class="size-5" />
          Products
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Users class="size-5" />
          Customers
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <LineChart class="size-5" />
          Analytics
        </a>
      </nav>
      <div class="mt-auto">
        <Card>
          <CardHeader>
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our
              support team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" class="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </SheetContent>
  </Sheet>
</template>
