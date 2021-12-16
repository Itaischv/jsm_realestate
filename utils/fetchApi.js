import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

const API_TOKEN = "d7f0075c55msh1482472befebba1p132341jsn4eb13d95efc7"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': API_TOKEN
        },
    });

    return data;
}