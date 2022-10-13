import './style.css';
import aboutphoto from '../../aboutphoto.jpg'
export const AboutPage = () => {
  return (
    <div className='aboutpage-container'>
      <div className='about-section text-container'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit at massa pulvinar dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla a enim et enim varius suscipit sit amet a dolor. Nam est leo, faucibus vitae sapien et, efficitur lacinia turpis. Quisque pharetra mauris at pulvinar sodales. Phasellus eu vulputate dolor. Fusce sed fermentum metus. Praesent tempus erat gravida odio laoreet vestibulum. Phasellus in risus nec ex cursus vestibulum quis ac erat. Quisque dapibus ipsum in neque laoreet, sed bibendum lorem ornare. Nullam eu malesuada massa. Duis venenatis lacus felis, eget sollicitudin purus vestibulum eget. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <p>
        urabitur scelerisque pretium lacus, vitae placerat orci vulputate quis. Ut fringilla maximus lorem ut pharetra. Fusce dapibus consequat tellus, vitae ornare sem suscipit eu. Morbi turpis turpis, elementum ut posuere non, vehicula quis erat. Quisque vel est vitae leo malesuada posuere. Phasellus non mollis nibh. Nullam malesuada odio ut metus iaculis congue. Maecenas scelerisque dictum dignissim.
        </p>
      </div>
      <div className='about-section'>
        <img id="portrait" src={aboutphoto} alt="portrait" />
      </div>
    </div>
  )
}
