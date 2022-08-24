import * as C from './style'

import { Skills } from './Skills'
import { WhoIam } from './WhoIam'



export const About = () => {

    return (

        <C.About id="about" >
            <C.Container>
                <WhoIam  />
                <Skills />
            </C.Container>
        </C.About >

    )
}