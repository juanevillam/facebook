import { useState, useEffect } from "react"
import { getStickers } from "../Helpers/getStickers";

export const useFetchStickers = ( category ) => {
    const [ state, setState ] = useState( { data: [], loading: true } );
    useEffect( () => getStickers( category ).then( imgs => setState( { data: imgs, loading: false } ) ), [ category ] );
    return state;
};


