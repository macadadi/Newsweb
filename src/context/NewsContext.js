import {createContext,useContext,useEffect,useState} from 'react'
import useFetch from './useFetch'



const NewsContext = createContext()

export function useNews(){
	return useContext(NewsContext)
}

export function NewsProvider({children}){
	 const KEY= process.env.REACT_APP_NEWS_KEY
	const {news,error,isloading} = useFetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${KEY}`)
		


const value ={isloading,news,error}

	return(<NewsContext.Provider value={value}>
		{children}
		</NewsContext.Provider>)
}