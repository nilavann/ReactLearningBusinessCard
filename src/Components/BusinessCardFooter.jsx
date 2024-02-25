import './BusinessCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function BusinessCardFooter() {
    return (
        <>
            <div className='business-card-footer'>
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{color: "#918e9b",}} />
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{color: "#918e9b",}} />
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" style={{color: "#918e9b",}} />
                <FontAwesomeIcon icon={faGithubSquare} size="2x" style={{color: "#918e9b",}} />
            </div>
            
        </>
    )
}

export default BusinessCardFooter