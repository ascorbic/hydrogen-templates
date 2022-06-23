import { existsSync } from 'node:fs'
import { cp, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
const source = resolve('upstream', 'templates')
const destination = resolve('templates')
if (existsSync(destination)) {
  await rm(destination, { recursive: true })
}
await cp(source, destination, {
  recursive: true,
})

await cp('skeleton', destination, {
  recursive: true,
})
