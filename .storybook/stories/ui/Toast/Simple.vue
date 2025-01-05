<script setup>
import { useToast } from '~/components/ui/toast'

const { toast } = useToast()
</script>

<template>
  <Button
    variant="outline" @click="() => {
      toast({
        description: 'Your message has been sent.',
      });
    }"
  >
    Show Toast
  </Button>
</template>
