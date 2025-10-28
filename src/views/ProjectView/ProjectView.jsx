import GithubService from "../../services/GithubService";
import loadingGif from '../../assets/Loading.gif';
import styles from './ProjectView.module.css';
import { useState, useEffect} from 'react';


export default function ProjectView() {
    //The setter 'setRepos' to load info into 'repos' ('repos' is set to be an empty array)
    const[repos, setRepos] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    
    //TODO: Add error handling
    //const[error, setError] = useState(null)

    //When dealing with an API, the function is ALWAYS asynchronous ('async'), allowing other code to be executed while this loads
    async function loadRepos() {
        setIsLoading(true); // Set loading to true right before the call

        //setError(null); // Clear previous errors

        try {
            //Loads and indexes the response from 'GitHub'
            //'await': Used inside 'async' to pause the function until the 'Promise' is resolved
            const response = await GithubService.getRepos();
            console.log(response);

            /*Sorts and displays the most recently worked on projects*/
            const sortedRepos = response.data.sort((a,b) => {
                return new Date(b.updated_at) - new Date(a.updated_at);
            })

            setRepos(sortedRepos); //setRepos(response.data);

            //setError(null); // Clear any previous errors

        } catch (err) {
            console.error("Error loading GitHub repositories:", err);

            //Error message displayed to 'user'
            //setError("Failed to load projects from GitHub. Please try again later."); 

        } finally {
            //Stop loading
            setIsLoading(false); 
        }
    }
    
    useEffect(() => {
        setTimeout(() => {
            loadRepos();
            setIsLoading(false);
        }, 3000);
    }, []); // [] = run when page is loaded

    // TODO: Display 'language" info for each of the projects
    return (
        <>
            <h4>Personal projects</h4>
            
            {/*
            {error && <p className={styles.error}>{error}</p>}
            */}
            {isLoading ? (
                <img src={loadingGif} alt="Loading Kyle Thurin's personal projects from GitHub..." className={styles.img}/>
            ) : (
                <div className={styles.myComponent}>
                    {repos.map((repo) => (
                        <div className={styles.repoBox} key={repo.id}>
                           <p><a href={repo.html_url} target='_blank'>{repo.name}</a></p> 
                           <p>{repo.description}</p>
                           <p className={styles.languageLabel}>Language: {repo.language || 'N/A'}</p>
                        </div>
                    ))}
                    
                </div>
            )
        }
        </>
    )
}