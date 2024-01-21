import { SECRETS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const secretsApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getSecrets:builder.query({
            query:()=>({
                url: SECRETS_URL,
            }),
            keepUnusedDataFor:5
        }),
        getSecretByUserId:builder.query({
            query:()=>({
                url: `${SECRETS_URL}/finduser`
            }),
        }),
        updateSecret:builder.mutation({
            query: (data) => ({
                url: `${SECRETS_URL}/update`,
                method: 'PATCH',
                body: data,
            }),
        }),
    }),
})


export const {useGetSecretsQuery,useGetSecretByUserIdQuery,useUpdateSecretMutation}=secretsApiSlice;