import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const womenclothing = createApi({
    reducerPath:'womenclothing',
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
    endpoints: (builder) => {
        return ({
            GetWomenClothings: builder.query({
                query: () => "products/category/women's clothing"
            })
        });
    }
})

export const {useGetWomenClothingsQuery} = womenclothing;