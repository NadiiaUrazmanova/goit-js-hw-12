import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// let page = 1;
export const perPage = 15;
const loadMoreEl = document.querySelector('.load-more');


export async function getImagesByQuery(query, page = 1) {
    const searchParams = new URLSearchParams({
        key: '51651971-b67330e54672f93571a43cb22',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });
    try {
        const response = await axios.get(`https://pixabay.com/api/?${searchParams}&page=${page}&per_page=${perPage}`);
        return response.data;
    }
        
    catch (error) {
        iziToast.error({
        title: 'Error',
        message: `Error: ${error}`,
        position: 'topRight'
        });
        throw error;
    }     
}