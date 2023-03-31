import RevealAnim from '../RevealAnim/RevealAnim'
import './Hero.scss'

const Hero = () => {
    return (
        <section className="hero">
            <RevealAnim type='opacity'>
                <h1>Hi, my name is</h1>
            </RevealAnim>
            <RevealAnim type='translateY' delay='0.2s'>
                <h2>Elias Åkesson</h2>
            </RevealAnim>
            <RevealAnim type='translateY' delay='0.4s'>
                <h3>And I'm a programmer</h3>
            </RevealAnim>
            <RevealAnim type='translateY' delay='1s'>
                <p>I'm a software engineer specializing in building and designing exceptional digital experiences.</p>
            </RevealAnim>
        </section>
    )
}

export default Hero