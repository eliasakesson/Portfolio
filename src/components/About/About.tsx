import RevealAnim from '../RevealAnim/RevealAnim'
import './About.scss'

const About = () => {
    return (
        <section className="about">
            <h2><span className='number'>01.</span>About Me</h2>
            <RevealAnim type='translateY' delay='0.2s'>
                <p>Hello! My name is Elias and I enjoy programming and designing things. I'm currently at Finnvedens Gymnasium studying information and media technology.</p>
            </RevealAnim>
        </section>
    )
}

export default About