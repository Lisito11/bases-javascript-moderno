//const getImagenPromesa = () => new Promise(resolve => resolve("https://klkwawawa.com"));
//getImagenPromesa().then(console.log);

const getImagen = async () => {

    try {

        const apiKey = 'saonvPuAwL2eKjYL8GoCSPqlO4Zn6wgs';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} =  await data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        console.error(error);
    }
  
};

getImagen();