import { useCallback, useEffect, useState, memo } from "react";
import axios from "axios";
import "./style.css";

const ImageCard = memo(({download_url, isActive})=>(
    <div className="imgCard">
              <img
                style={{
                  width: "300px",
                  display: isActive ? "block" : "none",
                }}
                src={download_url}
              />
            </div>

))
export default function ImageSlider() {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchImages=useCallback(async ()=> {
       const img = await axios.get('https://picsum.photos/v2/list');
       setImages(img.data);
  },[])

  useEffect(() => {
    fetchImages();
    console.log(images);
  }, [fetchImages]);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <div>
      <h1>ImageSlider Component</h1>
      <div className="imgContainer ">
        <span>
          <button onClick={handlePrevClick}>Prev </button>
        </span>
        {Array.isArray(images) &&
          images.length > 0 &&
          images.map((each, i) => (
            <ImageCard

              key={each.id}
              isActive={i===activeIndex}
              download_url={each.download_url}
            
            />
          ))}
        <span>
          <button onClick={handleNextClick}>Next </button>
        </span>
      </div>
    </div>
  );
}
