
function Reg_form(jsp) 
{

// ------------------------- User Name ------------------------- 
    if (jsp.uname.value == "") 
    {
    document.getElementById("msg").innerHTML = "please enter user name.";    
        jsp.uname.focus();
        return false;
    }
    if (!jsp.uname.value.match(/^[a-zA-Z]+$/)) 
    {
        document.getElementById("msg").innerHTML = "please enter your name in alphabets only.";
        jsp.uname.focus();
        return false;
    }
    
// ------------------------- Password ------------------------- 
    if (jsp.pwd.value == "")
    {
        document.getElementById("msg").innerHTML = "please enter the password.";
        jsp.pwd.focus();
        return false;   
    }
    if (jsp.pwd.value.length < 8) 
    {
        document.getElementById("msg").innerHTML = "please enter password more than 8 characters.";    
        jsp.pwd.focus();
        return false;
    }
    
// ------------------------- Email ------------------------- 
    if (jsp.email.value == "") 
    {
        document.getElementById("msg").innerHTML = "please enter your email id.";
        jsp.email.focus();
        return false;    
    }
    // if (jsp.email.value.match(/^[a-z0-9._]+\@(([a-z0-9])+\.([a-z]{2,3})) $/)) 
    if (jsp.email.value.match(/^[a-z0-9_.]+@[a-z]+.[a-z]{2,4}$/)); 
    {
        document.getElementById("msg").innerHTML = "please enter your correct email address.";
        jsp.email.focus();
        return false;    
    }
    
// ------------------------- Gender ------------------------- 
var gender = document.getElementsByName("gender");
if (gender[0].checked == true) 
{
            
}
else if (gender[1].checked == true) 
{
    
}
else if (gender[2].checked == true) 
    {
        
    }
    else
    {
        document.getElementById("msg").innerHTML = "please select your gender.";
        return false;
    }

// ------------------------- Hobby -------------------------
    var hobby = document.getElementsByName("chk");
    if (hobby[0].checked == true) 
    {

    }
    else if (hobby[1].checked == true) 
    {

    }
    else if (hobby[2].checked == true) 
    {

    }
    else if (hobby[3].checked == true) 
    {

    }
    else
    {
        document.getElementById("msg").innerHTML = "please select your hobby.";
        return false;
    }

// ------------------------- Country -------------------------
    if (jsp.country.value == "")
    {
        document.getElementById("msg").innerHTML = "please select your country.";
        jsp.country.focus();
        return false;    
    }

// ------------------------- Education -------------------------
    if (jsp.education.value == "") 
    {
        document.getElementById("msg").innerHTML = "please select, what is your education.";    
        jsp.education.focus();
        return false;
    }
    
// ------------------------- Address -------------------------
    if (jsp.add.value == "") 
    {
        document.getElementById("msg").innerHTML = "please enter your address.";
        jsp.add.focus();
        return false;    
    }

// ------------------------- Profile Photo -------------------------
    if (jsp.profile.value == "") 
    {
        document.getElementById("msg").innerHTML = "please upload your profile photo.";
        jsp.profile.focus();
        return false;    
    }

    // ---------- Set Size Condition ---------- 
    var photo = document.getElementById("profile");
    var photo_size_MB = parseFloat(photo.files[0].size / (1024*1024).toFixed(2));
    if (photo_size_MB > 2) 
    {
        document.getElementById("msg").innerHTML = "please upload your photo in max 2 MB size.";
        jsp.profile.focus();
        return false;
    } 

// ------------------------- Resume PDF -------------------------
    if (jsp.resume.value == "") 
    {
        document.getElementById("msg").innerHTML = "please upload your resume"; 
        jsp.resume.focus();
        return false;   
    }

    var resume2 = document.getElementById("resume");
    var resume_size_MB = parseFloat(resume2.files[0].size / (1024*1024).toFixed(2));
    if (resume_size_MB > 3) 
    {
        document.getElementById("msg").innerHTML = "please upload your resume in 3 MB size.";
        jsp.resume.focus();
        return false;    
    }

// ------------------------- Date of Birth -------------------------
    if (jsp.dob.value == "")
    {
        document.getElementById("msg").innerHTML = "please select your date of birth.";
        jsp.dob.focus();
        return false;    
    }

// ------------------------- Rating -------------------------
    if (jsp.rating.value == 0) 
    {
        document.getElementById("msg").innerHTML = "please give rating for this form.";
        jsp.rating.focus();
        return false;    
    }

// ------------------------- Eye Colour -------------------------
    if (jsp.color.value == "") 
    {
        document.getElementById("msg").innerHTML = "please select your eye colour.";
        jsp.color.focus();
        return false;    
    }
    //  Not working


}



// Below Function is for Image Validation.

// ---------- Get only JPG, PNG, JPEG, GIF ----------

function image_check(file) 
{
    var filename = file.value;
    var extention = filename.substring(filename.lastIndexOf('.')+1);
    if (extention == "jpg" || extention == "JPG" ||
        extention == "png" || extention == "PNG" ||
        extention == "jpeg" || extention == "JPEG" ||
        extention == "gif" || extention == "GIF" ) 
    {
        document.getElementById("msg").innerHTML = "";
        document.getElementById("submit").disabled = false;
    }
    else
    {
        document.getElementById("msg").innerHTML = "please upload your profile photo file only JPG, PNG, JPEG & gif.";
        document.getElementById("submit").disabled = true;
    }

}

function resume_check(file) 
{
    var filename = file.value;
    var ext = filename.substring(filename.lastIndexOf('.')+1);
    if (ext == "pdf" || ext == "PDF") 
    {
        document.getElementById("msg").innerHTML = "";
        document.getElementById("submit").disabled = false;
    } 
    else 
    {
        document.getElementById("msg").innerHTML = "please upload your reusme file only pdf.";
        document.getElementById("submit").disabled = true;
    }
}



