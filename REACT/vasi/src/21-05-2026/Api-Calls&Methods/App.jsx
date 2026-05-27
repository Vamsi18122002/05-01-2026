import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {configureStore, createSlice, createAsyncThunk,} from '@reduxjs/toolkit'
import {Provider, useDispatch, useSelector,} from 'react-redux'

/* GET METHOD */
export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  })

/*POST METHOD*/
export const addUser = createAsyncThunk(
  'users/addUser',
  async (data) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users',data)
    return response.data
  })

/*PUT METHOD */
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (data) => {
    const response = await axios.put( `https://jsonplaceholder.typicode.com/users/${data.id}`, data )
    return response.data 
})

/* DELETE METHOD*/
export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id) => { await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    return id 
})

/*SLICE */
const userSlice = createSlice({
  name: 'users',

  initialState: {
    users: [],
    loading: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    /* GET */
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true })

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload })

    builder.addCase(getUsers.rejected, (state) => {
      state.loading = false }) 

    /* POST */
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload) })

    /* PUT */
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((item) => item.id === action.payload.id ? action.payload  : item) })

    /* DELETE */
    builder.addCase(deleteUser.fulfilled, (state, action) => {  state.users = state.users.filter(
        (item) => item.id !== action.payload ) }) }, })

/* STORE*/
const store = configureStore({
  reducer: userSlice.reducer,})

/* COMPONENT*/
function Users() {
const dispatch = useDispatch()
  const { users, loading } = useSelector((state) => state )
  const [name, setName] = useState('')
  /* GET */
  useEffect(() => { dispatch(getUsers()) }, [])
  /* POST */
  const handleAdd = () => {  dispatch( addUser({  id : Date.now(), name: name, }) )
 setName('')  }
  /* PUT */
  const handleUpdate = (id) => { dispatch(updateUser({ id: id, name: 'Updated User',  }) ) }
  /* DELETE */
  const handleDelete = (id) => { dispatch(deleteUser(id)) }
  return (
    <div>
      <h1>Redux Toolkit API Methods</h1>
      <input type="text" placeholder="Enter Name" value={name}  onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleAdd}> POST User</button> <hr />

      {loading ? (<h2>Loading...</h2>) : ( users.map((item) => ( <div key={item.id}>
            <h3>{item.name}</h3>
            <button onClick={() => handleUpdate(item.id)}>
              PUT
            </button>
            <button onClick={() => handleDelete(item.id)}>
              DELETE
            </button>
        <hr />
          </div>
        )) )}
    </div>
  )}

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  )
}

export default App