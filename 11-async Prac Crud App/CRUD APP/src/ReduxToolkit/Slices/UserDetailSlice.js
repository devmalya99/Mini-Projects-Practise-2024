import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create user
export const createUser = createAsyncThunk(
  "createUser",
  async (data, rejectWithValue) => {
    const response = await fetch(
      "https://65eae98b43ce16418932ccdc.mockapi.io/CRUDpractise",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
//Update Action

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, rejectWithValue) => {
    console.log("UpdatedData",data)
    const response = await fetch(
      `https://65eae98b43ce16418932ccdc.mockapi.io/CRUDpractise/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

//Delete Action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://65eae98b43ce16418932ccdc.mockapi.io/CRUDpractise/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

//Read action
export const showUser = createAsyncThunk(
  "showUser",
  async (data, rejectWithValue) => {
    const response = await fetch(
      "https://65eae98b43ce16418932ccdc.mockapi.io/CRUDpractise"
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//now create slice for it
export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers:{
   searchUser: (state,action)=>{
      state.searchData = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })

      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //extra reducers for showUser

      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; //why not push it ? comment

        // When you get all your users from a server API call, you generally want to replace your current set of users with the new set you just fetched. .push() would add the newly fetched users to the end of the existing array, which is not usually what you want when fetching a new set of items. The equal (=) operator ensures that the existing state is replaced with the new data.
      })

      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //extra reducers for deleteUser

      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;

        const { id } = action.payload;

        if (id) {
          state.users = state.users.filter((ele) => ele.id !== id);
        }
      })

      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

        //Update user
        .addCase(updateUser.pending, (state) => {
          state.loading = true;
        })
  
        .addCase(updateUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users = state.users.map((ele)=>{
            if(ele.id === action.payload.id){
              return action.payload
            }
            return ele
          })
        })
  
        .addCase(updateUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
      
  },
});

export default userDetails.reducer;
export const {searchUser} = userDetails.actions

