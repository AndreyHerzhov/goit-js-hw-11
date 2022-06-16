//  const fetchFotos = function (nameOfPicture) {
//     const url = `
//     ${BASE_URL}?key=${KEY}&q=${nameOfPicture}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`
//     return fetch(url).then(response =>  response.json())
//   }
  
  // fetchFotos(searchQuery).then(r => {
  //   if(r.hits.length === 0) {
  //     Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  //   }
  //     const markup = r.hits.map(el =>   
  //     `
  //      <div class="photo-card">
       
  //         <img 
  //         src="${el.webformatURL}" 
  //         alt="${el.tags}" 
  //         loading="lazy" 
  //         class="image"
  //         width = 100%
  //         />       
       
       
  //         <div class="info">
  //           <p class="info-item">
  //             <b>Likes: ${el.likes}</b>
  //           </p>
  //           <p class="info-item">
  //             <b>Views: ${el.views}</b>
  //           </p>
  //           <p class="info-item">
  //             <b>Comments: ${el.comments}</b>
  //           </p>
  //           <p class="info-item">
  //             <b>Downloads: ${el.downloads}</b>
  //           </p>
  //       </div>
  //     </div>
  //    `  
     
  //   ).join('')
    
  // refs.gallery.insertAdjacentHTML('beforeend', markup)
  // })

// const BASE_URL = "https://pixabay.com/api/"
// const KEY = '27897235-d7c53493320d0870f17cf5746'
  
