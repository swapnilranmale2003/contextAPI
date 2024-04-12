import {createContext, useContext} from 'react';

export const ThemContext = createContext({
    themMode: "light",
    darkTheme:()=>{},
    lightTheme:()=>{},
});

export const ThemProvider = ThemContext.Provider

export default function useTheme(){
    return useContext(ThemContext)
}