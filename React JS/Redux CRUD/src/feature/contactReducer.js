import axios from "axios";

const All_Contact = "All_Contact";
const Single_Contact = "Single_Contact";

const objectinit = {
    allcontact: [],
    singlecontact: {}
}

const contactReducer = (state = objectinit, action) => {

    switch (action.type) 
    {
        case "All_Contact":
            return { ...state,allcontact:action.payload }
    
        case "Single_Contact":
            return { ...state,singlecontact:action.payload }
    }
    return state;
}

// ------------------------------------------------------------------------------------------
// Get All Data

const getContact = (data) => ({ type:All_Contact, payload:data });

export const fetchContact = () => {
    return function (dispatch) 
    {
        axios.get('http://localhost:3000/contact')
        .then((resp) => {
            dispatch(getContact(resp.data));
        } )
    }
}

// ------------------------------------------------------------------------------------------
// Get Single Contact Data
const getSingleContact = (data) => ({ type:Single_Contact, payload:data })

export const userSingleContact = (id) => {
    return function (dispatch) 
    {
        axios.get(`http://localhost:3000/contact/${id}`)
        .then((resp) => {
            dispatch(getSingleContact(resp.data));
        } )
    }
}









export default contactReducer;