import axios from "axios";

const API = "http://localhost:3001/api/notes";

const getAllNotes = async () => {
  const response = await axios.get(API).then((response) => {
    const { data } = response;
    console.log(data)
    return data;
  });
  return response;
};
const createNote = async ({ content, important }) => {
  const response = await axios
    .post(API, {
      content,
    })
    .then(function (response) {
      const { data } = response;
      return data;
    });
  return response;
};

export { getAllNotes, createNote };
