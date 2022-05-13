import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const fakestoreapi = createApi({
    reducerPath:'fakestore',
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
    endpoints: (builder) => {
        return ({
            GetCategories: builder.query({
                query: () => 'products/category/jewelery'
            })
        });
    }
})

export const {useGetCategoriesQuery} = fakestoreapi;