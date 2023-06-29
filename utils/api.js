// utils/api.js

// Utility function to make API requests
async function fetchAPI(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

// API functions
export async function getCatFact() {
    const url = 'https://cat-fact.ninja/fact';
    return fetchAPI(url);
}

export async function getBitcoinPrice() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    return fetchAPI(url);
}

export async function getActivity() {
    const url = 'https://www.boredapi.com/api/activity';
    return fetchAPI(url);
}

export async function getDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    return fetchAPI(url);
}
