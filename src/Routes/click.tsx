import { Elysia } from 'elysia'
import { Data } from '../Components/data'
import * as elements from 'typed-html'
export const clickRoute = (app: Elysia) => {
  return app.get('/click', () => {
    return <Data />
  })
}
