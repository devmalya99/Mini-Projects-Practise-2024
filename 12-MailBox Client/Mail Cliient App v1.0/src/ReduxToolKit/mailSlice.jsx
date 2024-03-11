

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for saving email to the inbox:

    export const saveInboxEmail = createAsyncThunk(
        'mail/saveInboxEmail',
        async (payload, { rejectWithValue }) => {
          try {
            const { to, requestBody } = payload;
            const formattedTo = to.replace(/\./g, '_');
            const response = await fetch(`https://mailbox-client-app-default-rtdb.firebaseio.com/inbox/${formattedTo}.json`, {
              method: 'POST',
              body: JSON.stringify({ requestBody })
            });
      
            if (!response.ok) {
              throw new Error('Error saving email to inbox');
            }
      
            return requestBody;
          } catch (error) {
            return rejectWithValue(error.message);
          }
        }
      );
    

//Async thunk for saving email to the sent box:
export const saveSentEmail = createAsyncThunk(
    'mail/saveSentEmail',
    async (payload, { rejectWithValue }) => {
      try {
        const { from, requestBody } = payload;
        const formattedFrom = from.replace(/\./g, '_');
        const response = await fetch(`https://mailbox-client-app-default-rtdb.firebaseio.com/sent/${formattedFrom}.json`, {
          method: 'POST',
          body: JSON.stringify({ requestBody })
        });
  
        if (!response.ok) {
          throw new Error('Error saving email to sent box');
        }
  
        return requestBody;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  //Async thunk for fetching user's inbox details:
  export const fetchInboxEmails = createAsyncThunk(
    'mail/fetchInboxEmails',
    async (email, { rejectWithValue }) => {
      try {
        const formattedEmail = email.replace(/\./g, '_');
        const response = await fetch(`https://mailbox-client-app-default-rtdb.firebaseio.com/inbox/${formattedEmail}.json`, {
          method: 'GET',
        });
  
        if (!response.ok) {
          throw new Error('Error fetching inbox emails');
        }
  
        const data = await response.json();
        return data ? Object.values(data) : [];
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  //Async thunk for fetching user's sent box details:
  export const fetchSentEmails = createAsyncThunk(
    'mail/fetchSentEmails',
    async (email, { rejectWithValue }) => {
      try {
        const formattedEmail = email.replace(/\./g, '_');
        const response = await fetch(`https://mailbox-client-app-default-rtdb.firebaseio.com/sent/${formattedEmail}.json`, {
          method: 'GET',
        });
  
        if (!response.ok) {
          throw new Error('Error fetching sent emails');
        }
  
        const data = await response.json();
        return data ? Object.values(data) : [];
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  //Async thunk for deleting an email:
  export const deleteEmail = createAsyncThunk(

  )

  //now create slice for it
  const mailSlice = createSlice({
    name: 'mail',
    initialState: {
      inboxEmailsArr: [],
      sentEmailsArr: [],
      isLoading: false,
      error: null,
    },
    reducers:{
        //how will i design my reducers here?
        //Ans: You can define reducers in the reducers field of createSlice to handle synchronous actions, 
        //such as resetting the state or updating a specific property.
        resetState: (state) => {
            state.inboxEmailsArr = [];
            state.sentEmailsArr = [];
            state.isLoading = false;
            state.error = null;
          },

    },
    extraReducers: (builder) => {
        //what is the need of extra reducers here? how should i design extra reducers here?
        //Ans: The extraReducers field is used to handle the lifecycle of asynchronous actions (like your async thunks) 
        //by defining how the state should be updated based on the different action types (pending, fulfilled, and rejected).
    
       builder

       //save Inbox Email
       .addCase(saveInboxEmail.pending , (state)=>{
        state.isLoading = true;
        state.error = null;
       })
       .addCase(saveInboxEmail.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.inboxEmailsArr.push(action.payload);
       })
       .addCase(saveInboxEmail.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.error.message;
       })

       //Save Sent Email
       .addCase(saveSentEmail.pending, (state)=>{
        state.isLoading = true;
        state.error = null;
       })
       .addCase(saveSentEmail.fulfilled, (state, action)=>{
           state.isLoading = false;
           state.sentEmailsArr.push(action.payload);
       })
       .addCase(saveSentEmail.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.error.message;
       })

       // Fetch Inbox Emails

       .addCase(fetchInboxEmails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchInboxEmails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.inboxEmailsArr = action.payload;
      })
      .addCase(fetchInboxEmails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      // Fetch Sent Emails
      .addCase(fetchSentEmails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSentEmails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sentEmailsArr = action.payload;
      })
      .addCase(fetchSentEmails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    
    }
  })

  export default mailSlice.reducer;


