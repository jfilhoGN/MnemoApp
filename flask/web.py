import flask, MySQLdb, time
from flask_mysqldb import MySQL
from flask import Flask, render_template, request, jsonify, redirect, url_for, send_from_directory
import json
from flask import jsonify
app = Flask(__name__)
mysql = MySQL(app)
app.config['JSON_AS_ASCII'] = False
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

@app.route('/historia/<int:id>')
def historia_id(id):
	cur = mysql.connection.cursor()
	cur.execute("select * from historia_historia where id=%d" % (id))
	rv = cur.fetchall()
	#print rv[0][1]
	return jsonify(
		id=rv[0][0],
		titulo=rv[0][2],
		texto=rv[0][3],
		url_figura1=rv[0][4],
		url_figura2=rv[0][5]
	)

@app.route('/sociologia')
def sociologia():
	cur = mysql.connection.cursor()
	cur.execute("select * from sociologia_sociologia")
	row_headers=[x[0] for x in cur.description] #this will extract row headers
	rv = cur.fetchall()
	json_data=[]
	for result in rv:
		json_data.append(dict(zip(row_headers,result)))
	return jsonify({'sociologia': json_data})

@app.route('/sociologia/<int:id>')
def sociologia_id(id):
	cur = mysql.connection.cursor()
	cur.execute("select * from sociologia_sociologia where id=%d" % (id))
	rv = cur.fetchall()
	#print rv[0][1]
	return jsonify(
		id=rv[0][0],
		titulo=rv[0][2],
		texto=rv[0][3],
		url_figura1=rv[0][4],
		url_figura2=rv[0][5]
	)


@app.route('/filosofia')
def filosofia():
	cur = mysql.connection.cursor()
	cur.execute("select * from filosofia_filosofia")
	row_headers=[x[0] for x in cur.description] #this will extract row headers
	rv = cur.fetchall()
	json_data=[]
	for result in rv:
		json_data.append(dict(zip(row_headers,result)))
	return jsonify({'filosofia': json_data})

@app.route('/filosofia/<int:id>')
def filosofia_id(id):
	cur = mysql.connection.cursor()
	cur.execute("select * from filosofia_filosofia where id=%d" % (id))
	rv = cur.fetchall()
	#print rv[0][1]
	return jsonify(
		id=rv[0][0],
		titulo=rv[0][2],
		texto=rv[0][3],
		url_figura1=rv[0][4],
		url_figura2=rv[0][5]
	)



if __name__ == '__main__':
	app.run(
    host="localhost",
    port=int("5000"),
    debug=True
	)
