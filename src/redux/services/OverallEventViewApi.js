import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://api.scaleserp.com';

const createrequest = (url) => ( url );
const api_key = "F84A6E8A8F604A1ABA95D0178AD4CC84"
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