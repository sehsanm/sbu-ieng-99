# General 
In this HW you are going to build a website to show the latest statistics of COVID-19 all over the world. You have to build the wbsite and deploy it to heroku.  For the latest information you need to make an API call to external system and render an HTML result and show it to user.  Your site must be nice and responsive so you have to use bootsrap library to make a good looking website. 

In this homework you need to do following parts: 
## 1. Work with EJS 
Setup  express to work with EJS. You can set it up directly or use one of the tutorials on Internet 

## 2. Add Bootstrap to your templates 
Add Bootstrap to your EJS template (Mostly CSS), if you will be using the Javascrip part you need to add JS part of bootstrap as well. 

## 3. Creat a template 
Crate a template in EJS to show the statistic of all countries in web page.For each country you will be showing following information:
* Name 
* Population 
* Confirmed Cases 
* Deaths
* Recovered 


## 4. Get the information
Connect to get the latest information for all countries here [http://covid19api.xapix.io/v2/locations] and populate your temaplte with information and return it to user.  You can use any library but if no idea you can use ```axios``` to fetch data  from external source.

## 5. Deploy your code to heroku 
Simply deploy your code to heroku!
 

 # What  matters
 In you code we are looking to following: 
 * Proper UI of the application 
 * Cleanness and Best practices 
 * Proper separation of your template to logical parts. (Use of partials) 
 