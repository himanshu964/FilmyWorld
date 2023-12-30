import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3"
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2JiOTgxZTY1NGZjYTUwMTdjNzVlZTcwMmFkYTk5NyIsInN1YiI6IjY1MzRjNzY5YTBiZTI4MDBmZmY3YmFmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Ep1sw_PHC8MT5j8237TFc6nWpEgCpMnRXDFNW07zJE"

const headers={
    Authorization:"bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url,params)=>{
   
    try
    {
        const {data}=await axios.get(BASE_URL+url,{
            headers,
            params,
        });
         
         return data
    }
    catch(error)
    {
        console.log(error);
        return error;
    }
};