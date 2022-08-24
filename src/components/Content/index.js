import * as C from './style'

import { Home } from './Home'
import { About } from './About'
import { Projects } from './Projects'
import { Contacts } from './Contacts'
import { Sertifikats } from './Sertifikats'

export const Content = () => {
    return (
        <C.Main>
            <Home />
            <About />
            <Projects />
            <Sertifikats />
            <Contacts />
        </C.Main>

    )
}