<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="account">
        Account
      </TabsTrigger>
      <TabsTrigger value="password">
        Password
      </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <!-- account tab -->
    </TabsContent>
    <TabsContent value="password">
      <!-- password tab -->
    </TabsContent>
  </Tabs>
</template>
