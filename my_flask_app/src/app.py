#!/usr/bin/env python3

from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def main():
    return '''
    <h1>Scrapping Data Web Application</h1>
     <p>This application scraps stock data from Yahoo Finance</p> 
     <p>Please enter sticker symbol in the box below:</p>    
     <p>For example: MSFT, AAPL, etc..</p>        
     <form action="/echo_user_input" method="POST">
         <input name="user_input">
         <input type="submit" value="Submit!">
     </form>
     '''

@app.route("/echo_user_input", methods=["POST"])
def echo_input():
    input_text = request.form.get("user_input", "")
    return "You entered: " + input_text
    