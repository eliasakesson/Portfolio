import RevealAnim from '../RevealAnim/RevealAnim'
import './About.scss'

const About = () => {
    return (
        <section className="about">
            <h2><span className='number'>01.</span>About Me</h2>
            <RevealAnim type='translateY' delay='0.2s'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veritatis debitis ut consequatur explicabo, deleniti officiis accusamus corporis maxime aut. Quasi et, similique iure iusto nostrum nihil suscipit optio eum.</p>
            </RevealAnim>
        </section>
    )
}

export default About