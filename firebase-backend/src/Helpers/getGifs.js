export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=FajfMU71cZQ3kw2vXSqtkA2olplgnhf3`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
};