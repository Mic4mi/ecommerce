import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'


export const SocialMediaSharing = () => {
    return (
        <div className='social-media-icons-container social-media-icons'>
            <a href='/#'>
                <FontAwesomeIcon icon={faShareNodes} />
            </a>
            <a href='/#'>
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='/#'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='/#'>
                <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href='/#'>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>
    )
}
