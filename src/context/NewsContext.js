import {createContext,useContext,useEffect,useState} from 'react'
import useFetch from './useFetch'



const NewsContext = createContext()

export function useNews(){
	return useContext(NewsContext)
}

export function NewsProvider({children}){
	 const ur="9ec65c43ffa11b5ca709a915a1a05075"
	const {news,error,isloading} = useFetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=SkrAvDwdsMERKJLJ4enVtSFC3u4vqA48`)
		


const value ={isloading,news,error}

	return(<NewsContext.Provider value={value}>
		{children}
		</NewsContext.Provider>)
}