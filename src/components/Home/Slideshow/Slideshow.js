import {Zoom} from "react-slideshow-image";
import image1 from "./slideimages/slide3.png";
import image2 from "./slideimages/slider.svg";
import image3 from "./slideimages/slide1.jpg";

const images=[image1,image2];
const properties={
  duration:1000,
  transitionDuration:500,
  infinite:true,
  indicators:true,
  scale:0.4,
  arrows:true
}
const Slideshow=()=>{
  return (
    <div className='slide-container'>
      <Zoom {...properties}>
        {images.map((each,index)=>(
          <img key={index} style={{width:"100%",height:"400px",marginTop:"50px"}} src={each}/>
        ))}
      </Zoom>
    </div>
  )
}
export default Slideshow;
