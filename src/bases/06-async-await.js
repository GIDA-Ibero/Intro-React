const apiKey = 'qlliDsP9EbiJxsO4nHYRhreERaxu48a9';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`;

const getAsyncAwaitGif = async () => {
  try {
    const resp = await fetch(url);
    const { data } = await resp.json();
    const { url:urlGif } = data.images.original;
    const img = document.createElement('img');

    img.src = urlGif;
    document.body.append(img);

  } catch (err) {
    console.warn(err);
  }
}

getAsyncAwaitGif();