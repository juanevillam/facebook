import './styles.css';
import React from 'react';
import { StickerGridItem } from './StickerGridItem';
import { useFetchStickers } from '../../Hooks/useFetchStickers';

export const StickerGrid = ( { category } ) => {
    const { data:images, loading } = useFetchStickers( category );

    return (
        <>
            { loading && <i className="fas fa-sync-alt fa-spin"></i> }
            <div className="StickerGrid mx-auto justify-center w-full">
                { images.map( img => <StickerGridItem key={ img.id } { ...img } /> ) }
            </div>
        </>
    );
};