import axios from "axios";

const hackAPI = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0'
});

export const getTopStoriesList = () => hackAPI.get('/topstories.json');
export const getTopStoriesDetail = (storyId) => hackAPI.get(`/item/${storyId}.json`);
