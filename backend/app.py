from flask import Flask
import mysql.connector
import os

app = Flask(__name__)

db = mysql.connector.connect(
    host=os.getenv("DB_HOST", "localhost"),
    user=os.getenv("DB_USER", "root"),
    password=os.getenv("DB_PASSWORD", "root"),
    database=os.getenv("DB_NAME", "caption_db")
)

@app.route("/")
def home():
    return "Flask + MySQL Two Tier App Running!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
