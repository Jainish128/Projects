# CRUD Tutorial

**1st : Create React Apps**

**2nd : Clean React Apps**

**3rd : Theme Intigration**

**4th : Rounting** 

**5th : Header & Footer Links SET karvani**

**6th : JSON-Server SET karvanu**
    
    npm i -g json-server (Install karva maate)
    package.json ma dependdency ne set karavani
    in script : 
    "server": "json-server --watch db.json --port 3000";
    Fake Typed Data ADD karvana.
     

**8th : Admin Panel ma Manage ma Data Show karavvana**

    API method : axios.get(``);
    map() ma fervine show karavvana.

**9th : Website ma User na Signup Data ne Insert karavvana**

    API method : axios.post(``, formValue);
    name=""
    onChange={}
    value={formValue.name}

    Singup User data ne Admin Panel ma Manage_Users na Table ma Show Karavvana.

**10th : Login Validation with Security**

    Singup karelo User jyare Login kare tyare teno Signup vado data ne direct server ma thi validate karai ne LOGIN karavanu.

**11th : Login User na Data ne Profile Page ma SET karavanu.**

**12th : Admin Panel ma ADD and MANAGE options add karvana**

    exmaple : 
        Add Category
        Add Products
        Add Blogs

        Manage Category
        Manage Products
        Manage Blogs
        Manage Users
        Manage Messages

**13th : ADD options thi Category, Products & Blogs add karavana**

    Jyare Admin ADD Products thi product add kare tyare te product Website na Product card ma je te cateogry wise show thay 
                    &&
    Admin Panle ma Manage_Products na Table ma Show thaay.

    axios.get(``);
    axios.post(``, formValue);

**14th : Products, etc. ne Delete Karavana**

    Products, categories, blogs ne 
    axios.delete(`/${id}`) method
    thi delete karta j te Website & Admin Panel banne side thi remove thai jaay.

**15th : Data ne Edit karai ne Update karavvana**

    Add karela Data ne Edit karai ne Update karavana in Two Ways : 
    (1) Open Modal in same Page.
    (2) Open New Edit Page with Form with passing ID using useParams() hook.

    API method : axios.patch(`/${id}`, formValue);

    Data Update thai jaay p6i te Updated data ne show karavvana.  
            



