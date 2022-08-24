import * as C from './style'

import { Card } from './Card/Card'

import electric_site from '../../../../assets/img/thumbProjects/electric_site.png'
import slim_mom from '../../../../assets/img/thumbProjects/slim_mom.png'
import kids_like from '../../../../assets/img/thumbProjects/kids_like.png'
import ice_creame from '../../../../assets/img/thumbProjects/ice_cream.png'
import phonebook_app from '../../../../assets/img/thumbProjects/phonebook_app.png'
import movie_search from '../../../../assets/img/thumbProjects/movies_site.png'



export const Cards = () => {
    return (
        <C.Cards>

            <Card
                img={electric_site}
                alt='electric_site'
                title='Electric Site'
                info='The site was created for a company engaged in electrical installation works.'
                live='https://electric-site.netlify.app/'
                repo='https://github.com/anton-cloud/electrical_site'
            />

            <Card
                img={phonebook_app}
                alt='phonebook_app'
                title='Phonebook APP'
                info='Project for storing personal phone contacts with the possibility of authorization.'
                live='https://phonebook-edc027.netlify.app/'
                repo='https://github.com/anton-cloud/phonebook'
            />

            <Card
                img={movie_search}
                alt='movie_search'
                title='Movie Search'
                info='Project about searching movies.'
                live='https://movie-search-458c8d.netlify.app/'
                repo='https://github.com/anton-cloud/movie_search'
            />

            <Card
                img={slim_mom}
                alt='SlimMom'
                title='SlimMom'
                info='The app helps control weight for women after pregnancy.'
                live='https://t-1-slimmom.netlify.app/'
                repo='https://github.com/anton-cloud/react-project-bc10-health'
                project='[team project]'
            />

            <Card
                img={kids_like}
                alt='KidsLike'
                title='KidsLike'
                info='An app for kids to do household chores in a playful way.'
                live='https://kidslike-team2.netlify.app/'
                repo='https://github.com/anton-cloud/bc8-react_team-2'
                project='[team project]'
            />

            <Card
                img={ice_creame}
                alt='ICECREAME'
                title='ICECREAME'
                info='Ice cream shop website.'
                live='https://anton-cloud.github.io/html-css_project-new/'
                repo='https://github.com/anton-cloud/html-css_project-new'
                project='[team project]'
            />
        </C.Cards>
    )
}