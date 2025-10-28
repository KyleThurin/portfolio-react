import resumePdf from '../../assets/Newer.pdf'
import styles from './ResumeView.module.css'

export default function ResumeView() {

    return (
        <>
            <h3>Kyle Thurin's Resume:</h3>

            <iframe src={resumePdf} className={styles.iframe} />

            <p>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" download className={styles.downloadButton}>
                    Download Resume (PDF)
                </a>
            </p>
        </>
    )
}