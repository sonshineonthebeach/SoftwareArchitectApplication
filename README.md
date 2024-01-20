# SoftwareArchitectApplication
Application to scrap data from Yahoo Finance

Setting up a Web Application
To get started on the development of your project, we will set up a simple website with a public facing website. We will use 
Flask
 as the web framework, GitHub to host the code repository, and Heroku to provide us with a public facing URL for the website.

Getting Started with Flask
To get started on development we shall create a virtual environment using Python and then upload the contents of the repository to GitHub.

To create a Python virtual environment in Linux, use the following commands:

Install Python's venv module:  sudo apt install python3-venv

Create a new directory for the application, and then make that directory your current working directory: mkdir my_flask_app && cd my_flask_app

Create the virtual environment and source the activation script:  python3 -m venv venv && source venv/bin/activate

Install Flask: pip install Flask

Once the virtual environment has been created, we can go ahead and create a simple website. To get started on the Flask application, follow the ensuing steps:

Create a source folder: mkdir src

 This is where majority of the source code for the project will reside.

Create the application file: touch src/app.py

Tell the system which file is the application file: export FLASK_APP=src/app.py

The next step is to add code to app.py. Insert the following code to the file:

19181516171213144567891011321
#!/usr/bin/env python3

from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def main():
    return '''
     <form action="/echo_user_input" method="POST">
         <input name="user_input">
         <input type="submit" value="Submit!">
     </form>
     '''

@app.route("/echo_user_input", methods=["POST"])
def echo_input():
    input_text = request.form.get("user_input", "")
    return "You entered: " + input_text
The code above creates a web page which contains a form that requests user input. Once the "Submit!" button is clicked, the user input is displayed as text on the web page. 

  5. To run the Flask application, go to the terminal and execute:  flask run. The application should be accessible     via this url: http://127.0.0.1:5000/. You should see a web page resembling the picture below.


Code Repository
Once we have verified that the application is able to run locally, we shall now upload the source code to GitHub. 

The first step is to create a repository on GitHub.com and get the URL for the remote repository. To do so, navigate to 
GitHub
, and click on the '+' icon on the top right corner of the screen. Then click "New repository".

You will be prompted to give your repository a name. Once you have given the repository a name, click the Project Structure"Create repository" button.

Afterwards, you will be presented with the URL for the remote repository. It typically follows the format git@github.com:<username>/<repo_name>.git.

Return to the root directory of your Flask application and initialize a Git reporistory as well as add and stage the files: git init && git add . && git commit -m "First Commit" && git branch -M main

Next add the URL for the remote origin: git remote add origin <remote_url>, using the remote URL from step 3.

Push to the remote repository: git push -u origin main

Now your code should be hosted on GitHub. If you need additional help, feel free to consult 
GitHub Docs
. 

Hosting on Heroku
Now that your code is on a remote repository, you are one step closer to deploying a web application. We will be using Heroku to deploy the Flask application. Heroku is one of many cloud platforms as a service (PaaS). Once the application is deployed, we will get a public URL that makes our application accessible by any device connected to the internet.  Follow the steps below to host your Flask application on Heroku:

To get things started, install Gunicorn: pip install gunicorn

We need to add two additional files to the remote repository.  The first file would be a text file that list the modules our application depends on. To do so execute: pip freeze > requirements.txt

Next we need to create a Procfile at the root of the directory. A Procfile tells Heroku how to run our application. We create the Procfile using: echo "web: gunicorn src.app:app" > Procfile

Once you have created the two aforementioned files, push them to your remote repository.

If you do not have an account with Heroku, you need to 
create an account
. 

Once you have logged in and accessed the dashboard, click on the "New" button located on the top right corner of the screen. Afterwards, select "Create new app".




   7.  After creating the app, you should be redirected to a screen resembling the image below. The next step entails connecting your GitHub repository to the Heroku application. Click on the "GitHub Connect to GitHub" button.
