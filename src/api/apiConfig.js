const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "9d43cea694f82aa9f478cdea4b1dea58",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
