import axios from "axios";
const REST_API_BASE_URL ='http://localhost:1001/book';


export const listBook=()=>{
return axios.get(REST_API_BASE_URL);
}

export const addBook =(book)=> axios.post(REST_API_BASE_URL,book)



export const updateBook = (bookid, book) => {
  return axios.put(`${REST_API_BASE_URL}/${bookid}`, book);
}

