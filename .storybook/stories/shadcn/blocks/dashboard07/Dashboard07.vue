<script setup>
import Header from './layouts/Header.vue'
import Sidebar from './layouts/Sidebar.vue'
</script>

<template>
  <Teleport defer to="#sidebar">
    <Sidebar />
  </Teleport>
  <Teleport defer to="#header">
    <Header />
  </Teleport>
  <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <div class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
      <div class="flex items-center gap-4">
        <Button variant="outline" size="icon" class="size-7">
          <ChevronLeftIcon class="size-4" />
          <span class="sr-only">Back</span>
        </Button>
        <h1 class="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Pro Controller
        </h1>
        <Badge variant="outline" class="ml-auto sm:ml-0">
          In stock
        </Badge>
        <div class="hidden items-center gap-2 md:ml-auto md:flex">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">
            Save Product
          </Button>
        </div>
      </div>
      <div class="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div class="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div class="grid gap-6">
                <div class="grid gap-3">
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    class="w-full"
                    default-value="Gamer Gear Pro Controller"
                  />
                </div>
                <div class="grid gap-3">
                  <Label for="description">Description</Label>
                  <Textarea
                    id="description"
                    default-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                    class="min-h-32"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Stock</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead class="w-[100px]">
                      SKU
                    </TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead class="w-[100px]">
                      Size
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell class="font-semibold">
                      GGPC-001
                    </TableCell>
                    <TableCell>
                      <Label for="stock-1" class="sr-only">
                        Stock
                      </Label>
                      <Input
                        id="stock-1"
                        type="number"
                        default-value="100"
                      />
                    </TableCell>
                    <TableCell>
                      <Label for="price-1" class="sr-only">
                        Price
                      </Label>
                      <Input
                        id="price-1"
                        type="number"
                        default-value="99.99"
                      />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        default-value="s"
                        variant="outline"
                      >
                        <ToggleGroupItem value="s">
                          S
                        </ToggleGroupItem>
                        <ToggleGroupItem value="m">
                          M
                        </ToggleGroupItem>
                        <ToggleGroupItem value="l">
                          L
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="font-semibold">
                      GGPC-002
                    </TableCell>
                    <TableCell>
                      <Label for="stock-2" class="sr-only">
                        Stock
                      </Label>
                      <Input
                        id="stock-2"
                        type="number"
                        default-value="143"
                      />
                    </TableCell>
                    <TableCell>
                      <Label for="price-2" class="sr-only">
                        Price
                      </Label>
                      <Input
                        id="price-2"
                        type="number"
                        default-value="99.99"
                      />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        default-value="m"
                        variant="outline"
                      >
                        <ToggleGroupItem value="s">
                          S
                        </ToggleGroupItem>
                        <ToggleGroupItem value="m">
                          M
                        </ToggleGroupItem>
                        <ToggleGroupItem value="l">
                          L
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="font-semibold">
                      GGPC-003
                    </TableCell>
                    <TableCell>
                      <Label for="stock-3" class="sr-only">
                        Stock
                      </Label>
                      <Input
                        id="stock-3"
                        type="number"
                        default-value="32"
                      />
                    </TableCell>
                    <TableCell>
                      <Label for="price-3" class="sr-only">
                        Stock
                      </Label>
                      <Input
                        id="price-3"
                        type="number"
                        default-value="99.99"
                      />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        default-value="s"
                        variant="outline"
                      >
                        <ToggleGroupItem value="s">
                          S
                        </ToggleGroupItem>
                        <ToggleGroupItem value="m">
                          M
                        </ToggleGroupItem>
                        <ToggleGroupItem value="l">
                          L
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter class="justify-center border-t p-4">
              <Button size="sm" variant="ghost" class="gap-1">
                <PlusCircleIcon class="size-3.5" />
                Add Variant
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid gap-6 sm:grid-cols-3">
                <div class="grid gap-3">
                  <Label for="category">Category</Label>
                  <Select>
                    <SelectTrigger
                      id="category"
                      aria-label="Select category"
                    >
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clothing">
                        Clothing
                      </SelectItem>
                      <SelectItem value="electronics">
                        Electronics
                      </SelectItem>
                      <SelectItem value="accessories">
                        Accessories
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div class="grid gap-3">
                  <Label for="subcategory">
                    Subcategory (optional)
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="subcategory"
                      aria-label="Select subcategory"
                    >
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="t-shirts">
                        T-Shirts
                      </SelectItem>
                      <SelectItem value="hoodies">
                        Hoodies
                      </SelectItem>
                      <SelectItem value="sweatshirts">
                        Sweatshirts
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div class="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Product Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid gap-6">
                <div class="grid gap-3">
                  <Label for="status">Status</Label>
                  <Select>
                    <SelectTrigger id="status" aria-label="Select status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">
                        Draft
                      </SelectItem>
                      <SelectItem value="published">
                        Active
                      </SelectItem>
                      <SelectItem value="archived">
                        Archived
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card class="overflow-hidden">
            <CardHeader>
              <CardTitle>Product imgs</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div class="grid gap-2">
                <img
                  alt="Product image"
                  class="aspect-square w-full rounded-md object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                >
                <div class="grid grid-cols-3 gap-2">
                  <button>
                    <img
                      alt="Product image"
                      class="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src="/placeholder.svg"
                      width="84"
                    >
                  </button>
                  <button>
                    <img
                      alt="Product image"
                      class="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src="/placeholder.svg"
                      width="84"
                    >
                  </button>
                  <button class="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                    <UploadIcon class="size-4 text-muted-foreground" />
                    <span class="sr-only">Upload</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Archive Product</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div />
              <Button size="sm" variant="secondary">
                Archive Product
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div class="flex items-center justify-center gap-2 md:hidden">
        <Button variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm">
          Save Product
        </Button>
      </div>
    </div>
  </main>
</template>
