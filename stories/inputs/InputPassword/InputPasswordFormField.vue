<template>
  <FormField v-slot="{ componentField }" name="password">
    <FormItem>
      <FormLabel>Password</FormLabel>
      <FormControl>
        <InputPassword v-bind="componentField" placeholder="Enter password" />
      </FormControl>
      <FormDescription>
        You login password
      </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
