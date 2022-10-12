import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts";

const getAllNotes = async () => {
  const response = await axios.get(API).then((response) => {
    const { data } = response;
    return data;
  });
  return response;
};
const createNote = async ({ title, body, userId }) => {
  const response = await axios
    .post(API, {
      title,
      body,
      userId,
    })
    .then(function (response) {
      const { data } = response;
      return data;
    });
  return response;
};

export { getAllNotes, createNote };
