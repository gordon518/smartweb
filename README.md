Smartweb is a web framework for nodejs. It's ultra slim and very powerful, and it saves programmers a lot of works for building web applications. With smartweb, programmers only need to do is to write controllers and views, the framework automatically let them work together. 

Run Guide for this project:
1. Install node-v12.22.0
2. Run the command of "npm install" to install node modules.
3. Run the command of "node ./" to start nodejs app.
4. Aceess the url of "http://localhost:8080/" to show the web page of this app.


Setup Guide for smartweb framework:

1. Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

   ```
   $ mkdir myapp
   $ cd myapp
   ```

2. Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.

   ```
   $ npm init
   ```

   This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:

   entry point: (index.js)
   Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.

3. Now install smartweb in the myapp directory and save it in the dependencies list. For example:

   ```
   $ npm install smartweb --save
   ```

4. Create some folders for smartweb. 

   ```
   $ mkdir web
   $ mkdir controller
   $ mkdir view
   ```

   The web folder is for htm or ejs files. The controller folder is for controller. The view folder is for ejs files.

   Convention over config, the folder of controller is for all controllers, and programmers don't need to do any router job. Any URL with the ".do" extension will call controllers in controller folder. These convension will make easy for building application.

   For examples, the URL of "list.do" will call the list.js in "controller" folder,  the URL of "user/showUser.do" will call the showUser.js in "controller/user" folder. 

   Other URLs without ".do" will call the file in web folder. For examples, the URL of "list.htm" will load the file of list.htm in "web" folder,  the URL of "map/showSite.ejs" will load the file of showSite.ejs in "web/map" folder.

5. Create the app.js file in the current folder. The file is as following:

   ```
   var smart = require("smartweb");
   
   smart.start(8080);
   ```


Developing Guide for smartweb framework (One example):

1. Create the file of ejs.js in the folder of controller as following:

   ```
   var smart = require("smartweb");

   module.exports = {
		get: function(req, res) {
			console.log("ejs:get() starting");
			var data={  
				names: ['foo', 'bar', 'baz']  
			};
			smart.showView(res, "list.ejs", data); //load list.ejs in the folder of view
		}
   };
   ```

2. Create the file of list.ejs in the folder of view as following:
   ```
   <% if (names.length) { %>
		<ul>
			<% names.forEach(function(name){ %>
				<li foo='<%= name + "'" %>'><%= name %></li>
			<% }) %>
		</ul>
   <% } %>
   ```

3. Test the code:

   (1) Change the folder to myapp, and run the following command:
   ```
   $ node ./
   ```

   (2) Open a web browser, such as IE, chrome, firefox. Try the address of http://localhost:8080/ejs.do. The url will call the controller of ejs.js, and show the view of list.ejs.

   In smartweb, the ".do" extention will call the controller, the others will load the files in the folder of web.
