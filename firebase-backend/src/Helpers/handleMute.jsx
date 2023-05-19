export const handleMute = ( setState, state ) => setState({ 
    ...state, 
    muted: !state.muted 
});