# ASimpleQuoteViewer

**1. Project overview**<br><br>
	**1.1 Description**<br>
		A Simple Quote Viewer is a microwebsite that will display the quote and picture of the day as provided by the TheySaidSo API.<br><br>
	**1.2 Used technologies**<br>
		Written in Javascript using Node.js and Express for the server. Axios is used to make calls to the TheySaidSo API, Handlebars is used to generate the html.<br><br>
**2. Installation**<br><br>
	**2.1 Prerequisite**<br>
		- Node.js : can be downloaded here : https://nodejs.dev/download<br><br>
	**2.2 Installation**<br>
		The project can be cloned or downloaded from this github page.<br><br>
**3. Launch**<br><br>
	**3.1 Server**<br>
		Open the folder containing the project in a terminal and use the command "npm start" to launch the server.<br><br>
	**3.2 Website**<br>
		Open the link logged in the terminal.<br><br>
**4. Docker**<br><br>
	run the following commands<br>
	```
	sudo docker build .
	```<br>
	once you have your image id run<br> ``` sudo docker run -p 8080:8080 {imageId}``` 
