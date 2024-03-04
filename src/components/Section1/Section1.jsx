import './section1.css'
import imagePhone from '../../Images/Phone.png'
const Section1 = () => {
    return (
        <div className="section1">
            <p>Social media shared today, tomorrow or by location</p>
            <div className="images">
                <img className='img1' src={imagePhone} alt="" />
                <img className='img2' src={imagePhone} alt="" />
                <img className='img3' src={imagePhone} alt="" />
            </div>
            <div className='radius'></div>
        </div>
    )
}

export default Section1