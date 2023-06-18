import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://api.scaleserp.com';

const createrequest = (url) => ( url );
const api_key = "72B7FBF1ABFA4E76AC8403214277342B"
export const overallEventViewsApi = createApi({
    reducerPath: 'overallEventViewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: (search) => createrequest(`/search?q=${search}&api_key=${api_key}&location=New York,New York,United States`),
        })
    })
})

export const {
    useGetEventsQuery
} = overallEventViewsApi ;