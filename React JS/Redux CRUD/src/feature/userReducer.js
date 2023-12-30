import axios from "axios";

// For Store All Data of Users
const All_Data = 'All_Data';
const Single_Data = 'Single_Data';




const objectinit = {
    alluser: [],
    singleuser: {},
    demo: "Jainish Patel"
}   


const userReducer = (state = objectinit, action) => {

    // Show Data
    switch (action.type) 
    {
        case 'All_Data':
        return { ...state, alluser:action.payload }

    // Edit and Update Data
        case 'Single_Data':
        return { ...state, singleuser:action.payload }
    }
    return state;
}



export default userReducer;




const getData = (data) => ({ type:All_Data,payload:data })

export const userFetch = () => {
    return function (dispatch) 
    {
        axios.get('http://localhost:3000/user')
        .then((resp) => {
            dispatch(getData(resp.data));
        } )
    }
}

// Get Single Data
const getSingleData = (data) => ({ type:Single_Data, payload:data })

export const userSingleFetch = (id) => {
    return function (dispatch)  
    {
        axios.get(`http://localhost:3000/user/${id}`)
        .then((resp) => {
            dispatch(getSingleData(resp.data));
        } )
    }
}








// Insert Data to API || Add Data
export const insert = (api, object) => {
    return function () 
    {
        axios.post(api, object).
        then( (resp) => console.log(resp) )    
    }
}



// Delete Data to API 
export const deleteData = (api) => {
    return function () 
    {
        axios.delete(api)
        .then((resp) => console.log(resp));    
    }
}

// UPDATE Data
export const updateData = (api, object) => {
    return function () 
    {
        axios.patch(api, object)
        .then((resp) => console.log(resp));    
    }
}






// export default userReducer;