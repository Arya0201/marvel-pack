import React from 'react'
import "./Gallery.css"

const GalleryItem = ({ src, caption }) => {
  return (
    <div className="gallery-item">
      <div className="gallery-icon">
        <img src={src} alt={caption} />
      </div>
      <p className='gallery-caption'>{caption}</p>
    </div>
  );
}

const Gallery = () => {

  const galleryItems = [
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/Automotive.svg", caption: "Automotive" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/electronics.svg", caption: "Electronics" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/food.svg", caption: "Food" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/Hardware.svg", caption: "Hardware" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/Health-Beauty.svg", caption: "Health & Beauty" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/house.svg", caption: "House" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/Medical.svg", caption: "Medical" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/Retail-Packaging.svg", caption: "Retail Packaging" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/Retail-Store.svg", caption: "Retail Store" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/School-Office.svg", caption: "School & Office" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/Sporting-Goods.svg", caption: "Sporting Goods" },
    { src: "https://www.marvelpack.com/wp-content/uploads/2020/12/Toys-Hobby.svg", caption: "Toys & Hobby" }
  ];
  return (
    <section className='gallery-section'> 
    <div className="gallery-container">
        <div className="gallery-header">
            <p>Industry We Serve</p>
            <div className="gallery-divider"></div>
        </div>

        <div className="gallery-itemlist">
         
        {galleryItems.map((item, index) => (
              <GalleryItem key={index} src={item.src} caption={item.caption} />
            ))}

        </div>
        
    </div>
    </section>
  )
}

export default Gallery