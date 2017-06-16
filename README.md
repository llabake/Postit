# Postit
Bootcamp/LOS 23 PROJECT
 
Description

This is a Node JS project for aspiring developers in Andela. The application is designed to aid communictaion in groups. By making request to the API endpoints,Users can sign up, login, create group and add users to the group created. They can also send broadcast messages to members of their group and also view group messages.


Installation

Clone the repo git clone and navigate to the project root directory

Install depndencies 

Set up Express 

Set up Database and make migrations by running the following commands.
sequelize db model:create.
create necessary tables in the database.
sequelize db migrate to apply changes in the table.


Functionality, Endpoints and Accessiblity

Functionality	Endpoint	
Logs a user in	POST /api/user	
Register a  new user	POST /api/user/signup 	
Create a new group 	POST /api/group/	
Add members to a group POST api/group/groupid/user
Get single user from a group	GET /api/groupid/user 	
Delete  a member from a group	DELETE /api/groupid/user 
Send group members a message POST api/group/groupid/message 
List all group messages for user GET api/group/groupid/message
Update  a message for a group PUT api/group/groupid/message
Delete message from a group DELETE api/group/groupid/message


Usage

The app can be used with Postman,before making requests, make sure the server is running by running  nodemon app.js


References

https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#toc-generating-models
http://docs.sequelizejs.com/manual/tutorial/models-usage.html 
https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6

Author

Lemboye Labake

License
