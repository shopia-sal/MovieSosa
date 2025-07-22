const apiConfig  = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b9787dde0a4eba161012ed844d14e55c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`
}

export default apiConfig;
