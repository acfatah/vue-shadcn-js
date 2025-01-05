<script setup>
import { useToast } from '~/components/ui/toast'

const { toast } = useToast()
</script>

<template>
  <Button
    variant="outline" @click="() => {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    }"
  >
    Show Toast
  </Button>
</template>
