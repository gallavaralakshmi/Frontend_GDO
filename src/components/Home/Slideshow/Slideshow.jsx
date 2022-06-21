import { Zoom } from "react-slideshow-image";
import "../../../CSS/footer.css";

const images = ["https://www.westagilelabs.com/blog/wp-content/uploads/2020/03/image-3.png",
  "https://empxtrack.com/wp-content/uploads/2016/08/goal-setting1.jpg",
  "https://uploads-ssl.webflow.com/5f6e202c72c71024f95ace21/60eb5e05ee50047b7d61c3b6_goal-setting-tracking-system-notion.jpg"];
const properties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
const Slideshow = () => {
  return (
    <div className='home-container'>
      <Zoom {...properties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%", height: "600px", marginTop: "50px" }} src={each} />
        ))}
      </Zoom>
    </div>
  )
}
export default Slideshow;
