# Redux 
## Redux Tutorial (28-10-2023)

**Step - 1 : Create React App and Clean Waste Code & Files**
    
    - Create New React App using : 
    -> create-react-app folder_name 
        type this command in Command box (cmd).
    - Clean some data and code from Newly Created React App for your New Code.

**Step - 2 : Install JSON-Server & Add Server in Package.json file for API & RUN**

    - Install JSON-Server and Add Server in Package.json file for API & RUN :
    -> npm i -g json-server
    - Type this command in Terminal for Install JSON-Server.
    
    - Create db.json file in React App with package.json & package-lock.json files. 
    - this db.json file is store our Data of Users, Products, Categories, etc. 

    - Add JSON-Server details in package.json in Scripts Object : 
    -> "server": "json-server  --watch db.json --port 3000"

    - Run JSON-Server using this command in Terminal : 
    -> npx json-server --watch db.json

**Step - 3 : Start the React App on Browser**

    - Start the React App on Browser using this Command in Terminal :
    -> npm start

**Step - 4 : create feature folder**

    - Create Feature named Folder in src.

**Step - 5 : create Webiste folder and Reducers files in Feature folder.**

    (1) create Webiste folder and Reducers files in Feature folder.
    - Exmaple, Theme Intigration files are in Website Folder.
    - Theme Intigration contains Components and Pages folder. 
    
    (2) Create App folder in Website folder.
    -> this App folder contains store.js & rootReducer.js files.
    - these both file are Main files for Redux.

    - and that Reducers like (1) contact_reducer.js (2) user_Reducer.js, etc.
    - this reducer files have stored some functionalities, code, etc.     

**Step - 6 : Theme Intigration**
    
    - Theme Intigration of Website. Make Website OR Take Ready Made Template or Website.

**Step - 7 : Routing**

    - Routing : 
        Install Routing in React App using this Command
    -> npm i react-router-dom
    - type this command in Terminal for Install Routing and then Use.

**Step - 8 : Write Code in Reducer Files**

    - Write Code in Reducer Files like User_Reducer.js and Contact_Reducer.js. etc.

## $ Exmaples $ : 
## Code in User_Reducer.js file : 

    ```javascript

    const objectinit = {
    alluser: [],
    singleuser: {},
    demo: "Jainish Patel"
    }

    const userReducer = (state = objectinit, action) => {
        return state;
    }

    export default userReducer;
    ```
    -------------------------------------------------------------------------
    - In this code, we create Object and Arrow Function.

    > This Object stored All_User data in Array and Store Single Data in a  Object and also other some few data are stored in this Object.
    - That Single_Data Object stored in All_User Array and this Array stored in Object_Init Object Variable.
    
    - Single_User Data (Object) < All_User Data (Array) < Object_Init (Object Varibale)

    > in this Arrow Function, we pass the Arguments of 
    - State = Object_Name
    - Action
    - and we return State in Arrow Function.

    > after write all code of Functionalities we Export the file.
    - export default User_Reducer;  

## Code in Contact_Reducer.js file : 

    ```javascript
    const objectinit = {
    allcontact: [],
    singlecontact: {}
    }

    const contactReducer = (state = objectinit, action) => {
        return state;
    }

    export default contactReducer;
    ```

**Step - 9 : Write Code in rootReducer.js**

    - Write Code in rootReducer.js.
    > All Reducers are stored in rootReducer.js file.

    ```javascript
    import { combineReducers } from "redux";
    import userReducer from "../../userReducer";
    import contactReducer from "../../contactReducer";

    const rootReducer = combineReducers({
        userReducer: userReducer,
        contactReducer: contactReducer
    })

    export default rootReducer;
    ```

    1st - Import "{combineReducers}" Hook from "redux" in rootReducer.js file. 
    2nd - Import "userReducer" file.
    3rd = Import "contactReducer" file.
    // Import All files of Reducers.

    4th - create rootReducer varibale with const.
    5th - Create names of all Reducers file in combineReducers in rootReeducer variable.
     
    6th - export the rootReducer file.


**Step - 10 : Write code in store.js file**

    - Write code in store.js file.
    > rootReducers.js is stored in main store.js file.

    ```javascript
    import { createStore, applyMiddleware } from "redux";
    import reduxThunk from 'redux-thunk';    
    // For Middleware for API Serve
    import rootReducer from './rootReducer';

    const thunkMiddleware = [reduxThunk];

    const store = createStore(rootReducer, applyMiddleware(...thunkMiddleware));

    export default store;   
    ``` 

    1st - Import (1) createStore and (2) applyMiddleware in {} bracket from "redux".
    2nd - Import reduxThunk from "redux-thunk".
    3rd - Import rootReducer.js file from ".../path".

    4th - create thunkMiddleware const variable and store reduxThunk in Square Bracket [].  // [reduxThunk]
    5th - create store named const varibale. 
    
    6th - create store in this varibale using createStore().
    7th - createStore() call rootReducer and applyMiddleware().
    8th - Apply Redux-Thunk on store const variable using created thunkMiddleware on applyMiddleware(...thunkMiddleware)

    9th - export the store.js file.



    