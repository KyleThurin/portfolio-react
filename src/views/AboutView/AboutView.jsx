import styles from './AboutView.module.css'

export default function AboutView() {
    //TODO: Add a photo
    return (
        <>
            <section className={styles.aboutContainer}>
                
                <h2>About Kyle Thurin (Site Creator)</h2>
            
                <p>I am a <strong>passionate, analytical problem-solver</strong> fully committed to a career in software development. 
                My drive stems from a relentless curiosity and a commitment to <strong>continuous learning</strong>—a core principle I apply daily to expanding my technical knowledge base.</p>

                <p>My unique journey began with a Master's degree in <strong>Psychological Research</strong> from Texas State University. 
                This academic background, particularly the use of tools like <strong>MATLAB</strong>, taught me how to apply rigorous code and structured thinking to solve complex analytical problems, solidifying my desire to build innovative and efficient applications.</p>

                <p>As a recent graduate of <strong>Tech Elevator</strong>, I now leverage that curiosity and structured approach in a full-stack capacity, eager to contribute my skills and creativity to a software development team.</p>
            </section>

        </>
    )
}