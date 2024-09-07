import { Elysia } from 'elysia'
import * as elements from 'typed-html'
import Root from '../Components/root'
import { Main } from '../Components/main'

export const index = (app: Elysia) => {
    return app.get('/', () =>
        <Root>
            <Main />
        </Root>
    )
}