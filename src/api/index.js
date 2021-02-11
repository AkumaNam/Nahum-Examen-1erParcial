const album= async (albumId, photoId, title,image = "") => {
    const albums = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&id=${photoId}&title=${title}&thumbnailUrl=${image}`;
  
    const response = await fetch(albums);
    const data = await response.json();
    return data;
  
  };
  
  export default album;