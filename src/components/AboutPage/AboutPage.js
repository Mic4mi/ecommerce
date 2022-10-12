import './style.css';
import aboutphoto from '../../aboutphoto.jpg'
export const AboutPage = () => {
  return (
    <div className='aboutpage-container'>
      <div className='about-section text-container'>
        <text>TEXT</text>
        <text>TEXT</text>
      </div>
      <div className='about-section'>
        <img id="portrait" src={aboutphoto} alt="portrait" />
      </div>
    </div>
  )
}
