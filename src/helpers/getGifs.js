export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WzJeN4lm66uNKshaNibDOKCehTAqay3k&q=${category}&limit=10&offset=&rating=g&lang=en`;
  
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((element) => ({
      id: element.id,
      title: element.title,
      url: element.images.downsized_medium.url,
    }));
    return gifs;
  };