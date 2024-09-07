import { Elysia } from 'elysia'
import { index } from './index'
import { clickRoute } from './click'

export const routes = (app: Elysia) => {
    return app
        .use(index)
        .use(clickRoute)
}
