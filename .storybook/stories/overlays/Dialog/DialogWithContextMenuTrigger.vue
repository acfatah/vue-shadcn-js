<template>
  <Dialog>
    <ContextMenu>
      <ContextMenuTrigger>Right click</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem disabled>
          Open
        </ContextMenuItem>
        <ContextMenuItem disabled>
          Download
        </ContextMenuItem>
        <DialogTrigger as-child>
          <ContextMenuItem>
            <span>Delete</span>
          </ContextMenuItem>
        </DialogTrigger>
      </ContextMenuContent>
    </ContextMenu>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. Are you sure you want to permanently
          delete this file from our servers?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button type="submit">
          Confirm
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
