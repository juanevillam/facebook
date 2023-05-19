export const getStickers = async ( category ) => {
    const url = `https://api.giphy.com/v1/stickers/search?q=${ encodeURI( category ) }&limit=12&api_key=fGruWHV0syCkLo4vX1vHmhZnn1vOhTH0`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const stickers = data.map( img => {
        return {
            id: img.id,
            url: img.images?.downsized_medium.url
        };
    });

    return stickers;
};