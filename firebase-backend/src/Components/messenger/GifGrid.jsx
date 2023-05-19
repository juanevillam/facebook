import './styles.css';
import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../../Hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            { loading && <i className="fas fa-sync-alt fa-spin"></i> }
            <div className="GifGrid mx-auto justify-center w-full">
                { images.map( img => <GifGridItem key={ img.id } { ...img } /> ) }
            </div>
        </>
    );
};