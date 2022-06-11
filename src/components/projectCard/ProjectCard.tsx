import { Add } from '@mui/icons-material'
import "./projectCard.scss"
const ProjectCard = () => {
  return (
    <article className="projectCard">
        <div className="projectCard-wrapper">
            <div className="project-image-container">
                <img src="" alt="" />
            </div>
            <div className="project-card-bottom">
                <h1>Marketing</h1>
                <p>Twice Office than before you</p>
                <p>ever got into business</p>
            </div>
            <div className="card-button-container">
                <div className="card-button">
                    <Add className="card-icon"/>
                </div>
            </div>
        </div>
    </article>
  )
}

export default ProjectCard