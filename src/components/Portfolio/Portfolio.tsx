import './Portfolio.scss'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2><span className='number'>02.</span>Portfolio</h2>
            <ul className="featured-projects">
                {featuredProject.map((project, index) => (
                    <FeaturedProject key={index} {...project} />
                ))}
            </ul>
            <h3>More Projects</h3>
            <ul className="projects">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
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
        image: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg'
    },
    {
        title: 'Chatterly',
        description: 'Chatterly is a discord clone built with React, Firebase and Electron. It is a desktop application that allows users to create servers and chat with other users in real time.',
        tags: ['React', 'Firebase', 'Electron', 'TypeScript'],
        image: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg'
    }
]

const projects = [
    {
        title: 'Volted',
        description: 'Volted is a mobile application that allows users to learn and experience with electricity. It is built with React Native and uses the Expo framework.',
        tags: ['React Native', 'Expo', 'JavaScript'],
        image: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg'
    },
    {
        title: 'Chatterly',
        description: 'Chatterly is a discord clone built with React, Firebase and Electron. It is a desktop application that allows users to create servers and chat with other users in real time.',
        tags: ['React', 'Firebase', 'Electron', 'TypeScript'],
        image: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg'
    },
    {
        title: 'Volted',
        description: 'Volted is a mobile application that allows users to learn and experience with electricity. It is built with React Native and uses the Expo framework.',
        tags: ['React Native', 'Expo', 'JavaScript'],
        image: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg'
    },
    {
        title: 'Chatterly',
        description: 'Chatterly is a discord clone built with React, Firebase and Electron. It is a desktop application that allows users to create servers and chat with other users in real time.',
        tags: ['React', 'Firebase', 'Electron', 'TypeScript'],
        image: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg'
    }
]

interface ProjectProps {
    title: string,
    description: string,
    tags: string[],
    image?: string
}

const FeaturedProject = ({ title, description, tags, image } : ProjectProps) => {
    return (
        <li className="featured-project">
            <div className="content">
                <span>Featured Project</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>
            <div className="image">
                <img src="https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg" alt="Project" />
            </div>
        </li>
    )
}

const Project = ({ title, description, tags } : ProjectProps) => {
    return (
        <li className="project">
            <div className="content">
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
            </div>
        </li>
    )
}

export default Portfolio