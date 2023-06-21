import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://api.scaleserp.com';

const createrequest = (url) => ( url );
const api_key = "1551CFEEB7D0442D9B5BCC6E8CD71BE6"
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
            query: (search) => createrequest(`/search?q=${search}&news&api_key=${api_key}&location=New York,New York,United State`) 
        })
    })
})

export const {
    useGetEventsQuery,
    useGetImagesQuery,
    useGetVideosQuery,
    useGetNewsQuery
} = overallEventViewsApi ;