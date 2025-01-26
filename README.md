
 Notification Service

The **Notification Service** is a microservice responsible for handling notifications within a multi-service architecture. This service sends notifications to users about various events, such as order updates, product availability, or promotional offers. It supports both push and email notifications, and integrates with other services to ensure timely communication.

---

## Features

- **Send Notifications:** Send notifications to users about various events, such as order updates, product availability, or promotions.
- **Email Notifications:** Enable email notifications to keep users informed.

---

## Technologies Used

- **Node.js:** Backend runtime environment.
- **Express.js:** Framework for building RESTful APIs.
- **MongoDB:** Database for storing product information.
- **Mongoose:** ORM for MongoDB interactions.
- **RabbitMQ:** Message broker for communication with other microservices (e.g., Order, Search).

---

## Installation and Setup

### Steps to Set Up

1. Delete the `node_modules` folder, then run the following command in the root directory:
   ```bash
   npm install

2. Create a .env file that looks like this:
   
		    DB_URI=<your MongoDB URI>
		    MESSAGE_BROKER_URL=<Your broker URL>
		    EXCHANGE_NAME=<any exchange name of your choice>
		    QUEUE_NAME=<any queue name of your choice>
        CUSTOMER_BINDING_KEY=<variable to bind messages to the user/customer queue. eg customerBindingKey>
        SHOPPING_BINDING_KEY=<variable to bind messages to the shopping queue. eg shoppingBindingKey>
        NOTIFICATION_BINDING_KEY= <variable to bind messages to the shopping queue. eg notificationKey>
        EMAIL_ADDRESS=<base email address used to send the email notifcations>
        APP_PASSWORD=<Your google app password(go to your google account and search app passwords,create an app and paste password) eg. xxxx yyyy zzzz aaaa>


	



	3.	Note:
The RabbitMQ URL for interservice communication can be obtained from CloudAMQP:
	•	Create a new instance and follow the prompts.
	•	After creating the instance, click on the link for the instance with the name you gave it to view and copy the URL.
	4.	Start the service by running:

Run:


	5.	node index.js


You can now test the APIs

