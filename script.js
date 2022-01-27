function validation(emailId){
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(emailId.value.match(mailformat))
    {
       document.form.email.focus();
    /* alert("Valid email address"); */
        return true;
    } 
    else{
        alert("Invalid email");
        document.form.email.focus();
        return false;
    }

}