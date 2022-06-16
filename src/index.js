// import * as basicLightbox from 'basiclightbox'
import Notiflix from 'notiflix';
import PhotoApiService from './photo-service';
import LoadMoreBtn from './load-more';
 




const refs = {
    input: document.querySelector('input'),
    button: document.querySelector('button'),
    gallery: document.querySelector('.gallery'),
    searchForm: document.querySelector('.search-form'),
    // loadMoreButton: document.querySelector('[data-action="load-more"]')
}

 
const photoApiService = new PhotoApiService()
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true
})

  
  refs.searchForm.addEventListener('submit', findFotoByName)
  loadMoreBtn.refs.button.addEventListener('click', onLoadMoreClick)

console.log(loadMoreBtn);

function findFotoByName (e) {
    e.preventDefault()
      photoApiService.query = refs.input.value;
    if(photoApiService.query === '') {
      Notiflix.Notify.warning("Fill in search field")
      return
    }
    refs.input.value = ''
    photoApiService.resetPage()
    
    photoApiService.fetchPhotos().then(hits => {
      if(hits.length === 0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      }
      refs.gallery.innerHTML = ''  
      const markup = hits.map(el =>   
      `
       <div class="photo-card">
       
          <img 
          src="${el.webformatURL}" 
          alt="${el.tags}" 
          loading="lazy" 
          class="image"
          width = 100%
          />       
       
       
          <div class="info">
            <p class="info-item">
              <b>Likes: ${el.likes}</b>
            </p>
            <p class="info-item">
              <b>Views: ${el.views}</b>
            </p>
            <p class="info-item">
              <b>Comments: ${el.comments}</b>
            </p>
            <p class="info-item">
              <b>Downloads: ${el.downloads}</b>
            </p>
        </div>
      </div>
     `  
     
    ).join('')
    
  refs.gallery.insertAdjacentHTML('beforeend', markup)
  
      }
    )
    loadMoreBtn.show()
  }

  function onLoadMoreClick() {
    loadMoreBtn.hide() 
    photoApiService.fetchPhotos().then(hits => {
      if(hits.length === 0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      }
        
      const markup = hits.map(el =>   
      `
       <div class="photo-card">
       
          <img 
          src="${el.webformatURL}" 
          alt="${el.tags}" 
          loading="lazy" 
          class="image"
          width = 100%
          />       
       
       
          <div class="info">
            <p class="info-item">
              <b>Likes: ${el.likes}</b>
            </p>
            <p class="info-item">
              <b>Views: ${el.views}</b>
            </p>
            <p class="info-item">
              <b>Comments: ${el.comments}</b>
            </p>
            <p class="info-item">
              <b>Downloads: ${el.downloads}</b>
            </p>
        </div>
      </div>
     `  
     
    ).join('')
    
  refs.gallery.insertAdjacentHTML('beforeend', markup)
  
    loadMoreBtn.show()
  
      }
    )
 
  }
  