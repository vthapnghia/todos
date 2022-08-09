import axios from "./axios"


export const todoService = async () => {
    const response = await axios.get("/todos?_limit=20");
    return  response.data;
}

// export const addTodoService = async (todo) => {
//     const response = axios.post("/todos", todo)
//     console.log(response.data);
//     return (await response).data
// }