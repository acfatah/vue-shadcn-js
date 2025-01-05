<template>
  <NumberField id="age" :default-value="18" :min="0">
    <Label for="age">Age</Label>
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>
