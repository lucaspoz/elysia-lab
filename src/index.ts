import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => 'hello elysia').listen(3000)

console.log(`elysia is running at ${app.server?.hostname}:${app.server?.port}`)
