<script setup>
import { TabsRoot as Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger } from 'radix-vue'
</script>

<template>
  <Tabs default-value="account" class="w-[400px] rounded-xl border border-border bg-card text-card-foreground shadow">
    <TabsList class="relative flex justify-center shrink-0 border-b border-border px-4 py-0">
      <TabsTrigger value="account" class="relative h-12 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-0 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
        Account
      </TabsTrigger>
      <TabsTrigger value="password" class="relative h-12 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-0 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
        Password
      </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <Card class="border-none shadow-none">
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-2">
          <div class="space-y-1">
            <Label for="name">Name</Label>
            <Input id="name" default-value="Pedro Duarte" />
          </div>
          <div class="space-y-1">
            <Label for="username">Username</Label>
            <Input id="username" default-value="@peduarte" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="password">
      <Card class="border-none shadow-none">
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password here. After saving, you'll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-2">
          <div class="space-y-1">
            <Label for="current">Current password</Label>
            <Input id="current" type="password" />
          </div>
          <div class="space-y-1">
            <Label for="new">New password</Label>
            <Input id="new" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save password</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
</template>
