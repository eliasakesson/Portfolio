import RevealAnim from '../RevealAnim/RevealAnim'
import './Portfolio.scss'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2><span className='number'>02.</span>Portfolio</h2>
            <ul className="featured-projects">
                {featuredProject.map((project, index) => (
                    <FeaturedProject key={index} {...project} i={index} />
                ))}
            </ul>
            <h3>More Projects</h3>
            <ul className="projects">
                {projects.map((project, index) => (
                    <Project key={index} {...project} i={index} />
                ))}
            </ul>
        </section>
    )
}

const featuredProject = [
    {
        title: 'Volted',
        description: 'Volted is a mobile application that allows users to learn and experience with electricity. It is built with React Native and uses the Expo framework.',
        tags: ['React Native', 'Expo', 'JavaScript'],
        image: '/Images/Volted.png',
        github: 'https://github.com/eliasakesson/Volted'
    },
    {
        title: 'Chatterly',
        description: 'Chatterly is a discord clone built with React, Firebase and Electron. It is a desktop messaging app that allows users to create servers, channels, and send messages to one another in real-time.',
        tags: ['React', 'Firebase', 'Electron', 'TypeScript'],
        image: '/Images/Chatterly.png',
        github: 'https://github.com/eliasakesson/Chatterly',
    }
]

const projects = [
    {
        title: 'Devup',
        description: 'Devup is my personal web development agency. This website is made for my clients to showcase my work and services. It is built with NextJS.',
        tags: ['NextJS', 'JavaScript'],
        image: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg',
        github: 'https://github.com/eliasakesson/Devup',
        link: 'https://devup.se'
    },
    {
        title: 'Taskeer',
        description: 'Taskeer is a web application that allows users to create boards and add tasks to them. It is built with React and Firebase. It is a full-stack application that uses Firebase for authentication and database.',
        tags: ['React', 'Firebase', 'JavaScript'],
        image: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg',
        github: 'https://github.com/eliasakesson/Task-manager',
        link: 'https://taskeer.netlify.app'
    },
    {
        title: 'Code Editor',
        description: 'This is a simple code editor built with Windows Forms. It is a desktop application that allows users to create and edit text files.',
        tags: ['Windows Forms', 'C#'],
        image: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg',
        github: 'https://github.com/eliasakesson/Code-editor'
    },
    {
        title: 'Chess Game',
        description: 'This is my own chess game built with Unity. It is a game that allows users to play chess against local friends, my own personal chess bot or the Stockfish Chess Engine.',
        tags: ['Unity', 'C#'],
        image: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg',
        github: 'https://github.com/eliasakesson/Chess-game'
    }
]

interface ProjectProps {
    title: string,
    description: string,
    tags: string[],
    image?: string,
    github?: string,
    link?: string,
    i: number
}

const FeaturedProject = ({ title, description, tags, image, github, link, i } : ProjectProps) => {
    return (
        <li className="featured-project">
            <RevealAnim type='translateX' amount={i % 2 === 0 ? '10%' : '-10%'} >
                <div className="content">
                    <span>Featured Project</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                    <div className="links">
                        {github && 
                            <a href={github} target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <title>GitHub</title>
                                    <path fill='none' d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                        }
                        {link &&
                            <a href={link} target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: "80%", height: "80%"}}>
                                    <title>External Link</title>
                                    <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                                </svg>
                            </a>
                        }
                    </div>
                </div>
            </RevealAnim>
            <div className="image">
                <img src={image} alt="Project" />
            </div>
        </li>
    )
}

const Project = ({ title, description, tags, github, link, i } : ProjectProps) => {
    return (
        <li className="project">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
            <div className="links">
                {github && 
                    <a href={github} target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>GitHub</title>
                            <path fill='none' d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                }
                {link &&
                    <a href={link} target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: "80%", height: "80%"}}>
                            <title>External Link</title>
                            <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                        </svg>
                    </a>
                }
            </div>
        </li>
    )
}

export default Portfolio