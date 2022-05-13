import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const electronics = createApi({
    reducerPath:'electronics',
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
    endpoints: (builder) => {
        return ({
            GetElectronics: builder.query({
                query: () => 'products/category/electronics'
            })
        });
    }
})

export const {useGetElectronicsQuery} = electronics;