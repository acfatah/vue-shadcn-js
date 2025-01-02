<template>
  <aside class="inset-y-0 flex h-full flex-col border-r">
    <div class="border-b p-2">
      <Button variant="outline" size="icon" aria-label="Home">
        <TriangleIcon class="size-5 fill-foreground" />
      </Button>
    </div>
    <nav class="grid gap-1 p-2">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="rounded-lg bg-muted"
            aria-label="Playground"
          >
            <SquareTerminalIcon class="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" :side-offset="5">
          Playground
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="rounded-lg"
            aria-label="Models"
          >
            <BotIcon class="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" :side-offset="5">
          Models
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="rounded-lg"
            aria-label="API"
          >
            <Code2Icon class="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" :side-offset="5">
          API
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="rounded-lg"
            aria-label="Documentation"
          >
            <BookIcon class="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" :side-offset="5">
          Documentation
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="rounded-lg"
            aria-label="Settings"
          >
            <Settings2Icon class="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" :side-offset="5">
          Settings
        </TooltipContent>
      </Tooltip>
    </nav>
    <nav class="mt-auto grid gap-1 p-2">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="mt-auto rounded-lg"
            aria-label="Help"
          >
            <LifeBuoyIcon class="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" :side-offset="5">
          Help
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="mt-auto rounded-lg"
            aria-label="Account"
          >
            <SquareUserIcon class="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" :side-offset="5">
          Account
        </TooltipContent>
      </Tooltip>
    </nav>
  </aside>
</template>
