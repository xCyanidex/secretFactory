import { SECRETS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const secretsApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getSecrets:builder.query({
            query:()=>({
                url: SECRETS_URL,
            }),
            keepUnusedDataFor:5
        })
    }),
})


export const {useGetSecretsQuery}=secretsApiSlice;