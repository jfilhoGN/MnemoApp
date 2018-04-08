import flask, MySQLdb, time
from flask_mysqldb import MySQL
from flask import Flask, render_template, request, jsonify, redirect, url_for, send_from_directory
import json
app = Flask(__name__)
mysql = MySQL(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'asafaster'
app.config['MYSQL_DB'] = 'mnemoapp'
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/historia')
def historia():
    cur = mysql.connection.cursor()
    cur.execute("select * from historia_historia")
    row_headers=[x[0] for x in cur.description] #this will extract row headers
    rv = cur.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return jsonify({'historia': json_data})
   #return json.dumps(json_data)


if __name__ == '__main__':
	app.run(
    host="localhost",
    port=int("5000"),
    debug=True
	)