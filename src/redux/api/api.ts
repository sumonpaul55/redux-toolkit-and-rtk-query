import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    // post data using mutation
    addTodo: builder.mutation({
      query: (data) => {
        // console.log("inside base api", data);
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    // update data
    updateTodo: builder.mutation({
      query: (updateDocs) => {
        // console.log("from api", updateDocs);
        return {
          url: `/task/${updateDocs.id}`,
          method: "PUT",
          body: updateDocs.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery, useUpdateTodoMutation } = baseApi;
