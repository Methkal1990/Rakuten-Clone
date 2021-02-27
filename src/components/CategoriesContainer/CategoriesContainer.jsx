import React, { useState } from 'react';
import Slider from '../Slider/Slider.jsx';
import './CategoriesContainer.css';

function CategoriesContainer() {
  const [movies, setmovies] = useState([
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
    {
      image:
        'https://images-1.wuaki.tv/system/artworks/25785/original/mud-1611332921-width217-quality80.jpeg',
      title: 'Mud',
    },
  ]);
  return (
    <div className='categoriesContainer'>
      <Slider movies={movies}/>
      <Slider movies={movies}/>
    </div>
  );
}

export default CategoriesContainer;
