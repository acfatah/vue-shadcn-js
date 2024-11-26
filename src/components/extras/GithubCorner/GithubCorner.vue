<script setup>
const props = defineProps({
  class: { type: null, required: false },
  bgClass: { type: null, required: false },
  side: { type: String, default: 'right' },
})

const attrs = useAttrs()

const listeners = computed(() => Object.fromEntries(
  Object
    .entries(attrs)
    .filter(([key]) => /^on[A-Z]/.test(key)),
))
</script>

<template>
  <Teleport to="body">
    <!-- eslint-disable tailwindcss/no-custom-classname -->
    <div v-if="props.side === 'right'">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" :class="cn('github-corner absolute right-0 top-0 size-20 fill-[#151513]', props.class)">
        <g class="cursor-pointer" v-bind="listeners">
          <path d="M0 0l115 115h15l12 27 108 108V0z" :class="cn('fill-accent dark:invert', props.bgClass)" />
          <path class="octo-arm" d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16" style="-webkit-transform-origin: 130px 106px; transform-origin: 130px 106px" />
          <path class="octo-body" d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z" />
        </g>
      </svg>
    </div>
    <div v-else-if="props.side === 'left'">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" :class="cn('github-corner absolute left-0 top-0 size-20 fill-[#151513]', props.class)">
        <g class="cursor-pointer" v-bind="listeners">
          <path d="M250 0L135 115h-15l-12 27L0 250V0z" :class="cn('fill-accent dark:invert', props.bgClass)" />
          <path class="octo-arm" d="M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16" style="-webkit-transform-origin: 120px 144px; transform-origin: 120px 144px" />
          <path class="octo-body" d="M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z" />
        </g>
      </svg>
    </div>
    <!-- eslint-enable tailwindcss/no-custom-classname -->
  </Teleport>
</template>

<style scoped>
.github-corner svg {
  clip-path: polygon(0 0, 100% 0, 100% 100%);
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(-25deg);
  }

  40% {
    transform: rotate(10deg);
  }

  60% {
    transform: rotate(-25deg);
  }

  80% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }

  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
