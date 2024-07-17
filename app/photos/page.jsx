'use client'
import { createFlickr } from "flickr-sdk"
import { useState, useEffect } from "react"

export default function Photo() {
  const [photo, setPhoto] = useState(null);
  const { flickr } = createFlickr("c9f10f419c7ee17812798af5c75a7705")

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const res = await flickr("flickr.photos.getInfo", {
          photo_id: '53848626551/',
        });
        setPhoto(res.photo);
      } catch (error) {
        console.error("Erreur lors de la récupération de la photo:", error);
      }
    };

    fetchPhoto();
   
  }, []); // Exécute la fonction une fois au montage du composant

  return (
    <>
      {photo && (
        <div className="photo-container">
          <h2>{photo.title._content}</h2>
          <p>{photo.description._content}</p>
          <img
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
            alt={photo.title._content}
          />
          <p>
            <strong>Auteur :</strong>{' '}
            <a href={`https://www.flickr.com/people/${photo.owner}`} target="_blank" rel="noopener noreferrer">
              {photo.ownername}
            </a>
          </p>
          <p>
            <strong>Date de téléversement :</strong> {new Date(photo.dateuploaded * 1000).toLocaleDateString()}
          </p>
        </div>
      )}
    </>
  );
}