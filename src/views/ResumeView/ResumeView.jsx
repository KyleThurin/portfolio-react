import resumePdf from '../../assets/Newer.pdf'
import styles from './ResumeView.module.css'

//TODO: ext to the Resume button, you can add this Contact ME or LETS CONNECT
// Add a "CONTACT ME" button

export default function ResumeView() {

    return (
        <>
            <h3>Resume:</h3>

            <iframe src={resumePdf} className={styles.iframe} />

            <p>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" download className={styles.downloadButton}>
                    Download Resume (PDF)
                </a>
            </p>
        </>
    )
}