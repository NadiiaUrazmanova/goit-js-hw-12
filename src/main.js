import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery, perPage } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton
} from './js/render-functions';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const loadMoreEl = document.querySelector('.load-more');
const galleryEl = document.querySelector('.gallery');

let query = '';
let currentPage = 1;
let totalPages = 0;

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();

  query = inputEl.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter search images name',
      position: 'topRight',
    });
    return;
  }

  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, currentPage);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
      });
      hideLoadMoreButton();
      return;
    }

    createGallery(data.hits);

    totalPages = Math.ceil(data.totalHits / perPage);
    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
});

loadMoreEl.addEventListener('click', async () => {
  currentPage += 1;
  

  try {
    showLoader();
    const data = await getImagesByQuery(query, currentPage);
    createGallery(data.hits, true);

    if (galleryEl.firstElementChild) {

      const elem = galleryEl.firstElementChild;
      const elemHeight = elem.getBoundingClientRect().height;
      const elemTwoHeight = 2 * elemHeight;
      window.scrollBy({
        top: elemTwoHeight,
        behavior: "smooth",
      });
    }


    if (currentPage >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
});


