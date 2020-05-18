# Homework 2 
In this homework you will create a base UI for your application on client side. 
The general idea is that sys admin should be able to create user input forms and deploy them to server and client should be able to fetch the form descriptions and render proper forms in UI based on form descriptors. 
Also UI should be able to collect the information from those forms and send them back to server. 
## Form Descriptor 
Each form is a list of fields to be displayed on client UI. Here is the list of field types that can be added to the forms : 
* Text Input: Simple text input  
* Number: Any positive and negative float number 
* Date : A date picker. The value of this field is a *YYYY-MM-DD* string 
* Location : A field that once clicked shows a Map and user can select a location there or can select to send current device location. The value of this field is an object with *long* and *lat* fields. 

Each of the above filed can be turned into a Drop Down list  of values corresponding to the type. The details will come later. 

Each form descriptor comes with a form title  to be displayed in UI 

### Form Descriptor JSON 
Here is a sample form descriptor: 
```
{
    "title":"A smaple form" , 
    "id" : "1234" , 
    "fields" : [
        {
            "name":"First_Name" , 
            "title" : "First Name" , 
            "type" : "Text",
            "required":true
        } , 
        {
            "name":"Loc" , 
            "title" : "Your Location" , 
            "type" : "Location",
            "required":false
        } , 

        {
            "name":"Request_Type" , 
            "title" : "Request Type" , 
            "type" : "Text" , 
            "options" : [
                {"label" : "Help" , "value" : "Help"}, 
                {"label" : "Info" , "value" : "Information"} 
            ] 
        } , 
        {
            "name":"Base_Location" , 
            "title" : "Base Location" , 
            "type" : "Location" , 
            "options" : [
                {"label" : "Base1" , "value" : {"lat" : "1.2" , "long": "3.2}}, 
                {"label" : "Base2" , "value" : {"lat" : "2.3" , "long" : "1.434" }} 
            ] 
        } 
    ] 
}
``` 

In the above example here are the description of the fields: 
* title : the title of the form 
* Id : the id of the form 
* fields : Array of the form fields 
* fields.name : The API name of the field. This is the field name that is passed to server. It will not contain space or special characters 
* fields.title: Name of the field displayed on UI 
* fields.type : One of the following values Text, Number, Location, Date 
* fields.required: If this exist then it means the field is mandatory for submission of the form. 
* fields.options: If this field exist then the field must be rendered as a drop down list.  The options of the drop down list must be the options of the list. 

## App UI 
Once the app is loaded it should fetch the list of the forms from server. The list of the forms is available in your backend at */api/forms*  it should return the List of the form description URLs the form description details must be available on */api/forms/\<id\>* of the form  and it should return the form descriptor of the specified form. 

In the first page you should display the form  titles in proper way and once a user clicked / touched the form. It should open the proper form for the user to start entering data. Then user should be able to submit the form to backend. The backend must display proper information in the console to show successful submission of the form. 

## Libraries and Tools
It should have a separate front-end and back-end. You can use any node library that you want in NodeJS ecosystem. 
I highly recommend to use one of the component libraries and use of the create-react-app. 

For Location type field you have to use Google Map API to let user select a location. 

### Marking 
Following point have extra point in the homework: 
* Supporting RTL (Persian) language  
* Responsive UI To work both on mobile and desktop 
* Deployment on Heroku or any other cloud provider 

## Team Structure 
You can work in group of up to 2  students. All of you team members MUST be able to explain all of the code. I will pick a member randomly and he/she should be able to explain all of the project. Otherwise the whole team will lose the mark of the homework.

