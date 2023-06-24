import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://api.scaleserp.com';

const createrequest = (url) => ( url );
const api_key = "342643FADCBA422EB03302083110DA4C"
export const overallEventViewsApi = createApi({
    reducerPath: 'overallEventViewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: (search) => createrequest(`/search?q=${search}&api_key=${api_key}&location=New York,New York,United States`),
        }),
        getImages: builder.query({
            query: (search) => createrequest(`/search?q=${search}&images&api_key=${api_key}&location=New York,New York,United State`)
        }),
        getVideos: builder.query({
            query: (search) => createrequest(`/search?q=${search}&videos&api_key=${api_key}&location=New York,New York,United State`)
        }),
        getNews: builder.query({
            query: ({searchTerm,currentPage}) => createrequest(`/search?q=${searchTerm}&news&api_key=${api_key}&location=New York,New York,United State&page=${currentPage}`) 
        })
    })
})

export const {
    useGetEventsQuery,
    useGetImagesQuery,
    useGetVideosQuery,
    useGetNewsQuery
} = overallEventViewsApi ;