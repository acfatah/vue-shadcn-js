<template>
  <div class="w-[400px] rounded-xl border border-border bg-card text-card-foreground shadow">
    <Tabs default-value="account">
      <TabsList class="relative flex justify-start rounded-none bg-transparent px-6 pb-0">
        <TabsIndicator>
          <div class="size-full bg-primary" />
        </TabsIndicator>
        <div class="flex w-full gap-2 border-b">
          <TabsTrigger value="account" class="inline-flex h-10 px-2 text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none">
            Account
          </TabsTrigger>
          <TabsTrigger value="password" class="inline-flex h-10 px-2 text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none">
            Password
          </TabsTrigger>
          <TabsTrigger disabled class="inline-flex h-10 px-2 text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none">
            disabled
          </TabsTrigger>
        </div>
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
  </div>
</template>
