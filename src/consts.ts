import type { Links, Skills } from "./types";

export const LINKS: Links[] = [
    {
        TEXT: 'Inicio',
        HREF: '/'
    },
    {
        TEXT: 'Proyectos',
        HREF: '/projects/'
    },
    {
        TEXT: 'Contacto',
        HREF: '/#contact'
    },
]

export const SKILLS: Skills[] = [
    {
        NAME: 'html',
        HREF: 'https://developer.mozilla.org/en-US/docs/Web/html'
    },
    {
        NAME: 'css',
        HREF: 'https://developer.mozilla.org/en-US/docs/Web/css',
    },
    {
        NAME: 'javascript',
        HREF: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        NAME: 'typescript',
        HREF: 'https://www.typescriptlang.org/'
    },
    {
        NAME: 'astro',
        HREF: 'https://astro.build/'

    },
    {
        NAME: 'react',
        HREF: 'https://react.dev'
    },
    {
        NAME: 'dart',
        HREF: 'https://dart.dev/'
    },
    {
        NAME: 'flutter',
        HREF: 'https://flutter.dev/'
    },
    {
        NAME: 'git',
        HREF: 'https://git-scm.com/'
    },
    {
        NAME: 'github',
        HREF: 'https://github.com/'
    },
    {
        NAME: 'figma',
        HREF: 'https://www.figma.com/'
    },
    {
        NAME: 'SEO',
        HREF: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es-419#:~:text=SEO%E2%80%94short%20for%20search%20engine,site%20through%20a%20search%20engine.'
    },
]



export const filteredTag = ( tag:string ) => {

    const skill = SKILLS.find( (sk) => sk.NAME.toLocaleLowerCase() == tag.toLocaleLowerCase() );

    return skill;


}

interface ApiRespuesta  {
    [key:string]: number
}

export const filteredLanguages = ( lang: ApiRespuesta ) => {


    const skills = SKILLS.filter((skill) => {
        const skillsNameLower = skill.NAME.toLocaleLowerCase();
        for ( const key in lang ){
            if( key.toLocaleLowerCase() === skillsNameLower ){
                return true;
            }
            return false
        }
    })

    return skills;
}
