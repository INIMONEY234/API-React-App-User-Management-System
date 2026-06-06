import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/user";

interface UserState {
    users: User[]; 
    loading: boolean; 
    error: string | null;
} 

const initialState: UserState = {
    users: [], 
    loading: false,
    error: null,
};


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (): Promise<User[]> => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users from server");
        }

        const data = await response.json();
        return data as User[];
    }
);

const userSlice = createSlice({
    name: "users",
    initialState,

    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },

        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex(
                (user) => user.id === action.payload.id
            );
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },

        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                // Now action.payload is properly typed as User[]
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch users";
            }); 
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions; 

export default userSlice.reducer;