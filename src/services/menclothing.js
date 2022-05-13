import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const menclothing = createApi({
    reducerPath:'menclothing',
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
    endpoints: (builder) => {
        return ({
            GetMenClothings: builder.query({
                query: () => "products/category/men's clothing"
            })
        });
    }
})

export const {useGetMenClothingsQuery} = menclothing;