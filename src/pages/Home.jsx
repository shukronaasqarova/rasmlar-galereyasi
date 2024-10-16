import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image from '../assets/image.jpg'  

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        console.log('API dan olingan ma\'lumotlar:', data.slice(0, 20));
        setPhotos(data.slice(0, 20));
      })
      .catch(err=> {
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Rasmlar gallereyasi</h1>
      <div className="flex flex-wrap justify-center">
        {photos.map((photo) => (
          <div key={photo.id} className="w-64 m-4 bg-white rounded-lg shadow-md overflow-hidden">
            <LazyLoadImage 
              src={photo.thumbnailUrl} 
              alt={photo.title} 
              effect="blur"
              placeholderSrc="https://via.placeholder.com/150"
              className="w-full h-48 object-cover" 
              onError={(e) => {
                console.error(`Rasm yuklanmadi: ${photo.thumbnailUrl}`);
                e.target.src = 'https://via.placeholder.com/150';
              }}
            />
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Home;