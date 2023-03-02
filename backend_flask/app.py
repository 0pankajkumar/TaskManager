import json
import time
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import sqlite3 as sql
app = Flask(__name__)


@app.route("/")
@app.route("/tasks")
def index():
    con = sql.connect("db_tasks.db")
    con.row_factory = sql.Row
    cur = con.cursor()
    cur.execute("select * from tasks;")
    row_headers = [x[0]
                   for x in cur.description]  # this will extract row headers
    data = cur.fetchall()

    json_data = []
    for result in data:
        json_data.append(dict(zip(row_headers, result)))
    print(json_data)
    return jsonify(json_data)


@app.route("/add", methods=['POST'])
def add_user():
    if request.method == 'POST':
        title = request.form['title']
        eta = int(request.form['eta'])
        status = request.form['status']
        print(title, eta, status)
        con = sql.connect("db_tasks.db")
        cur = con.cursor()
        cur.execute(
            "insert into tasks(title, eta, status) VALUES(?,?,?);", (title,
                                                                     eta, status)
        )

        con.commit()
        print('task Added')
        return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}


@app.route("/update", methods=['POST'])
def update():
    if request.method == 'POST':
        id = request.form['id']
        field_updated = request.form['update_field']
        new_value = request.form['update_value']

        con = sql.connect("db_tasks.db")
        cur = con.cursor()
        cur.execute(f"update tasks set {field_updated}=? where id=?",
                    (new_value, id))
        cur.execute(
            "insert into audittrial(id, field_updated, new_value, timestamp) VALUES(?,?,?,?)",
            (id, field_updated, new_value, int(time.time()))
        )
        con.commit()

        return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}


@app.route("/audittrial/<string:uid>", methods=['GET'])
def audittrial(uid):
    con = sql.connect("db_tasks.db")
    cur = con.cursor()
    cur.execute("select * from audittrial where id=?", (uid))
    row_headers = [x[0]
                   for x in cur.description]  # this will extract row headers
    data = cur.fetchall()

    json_data = []
    for result in data:
        json_data.append(dict(zip(row_headers, result)))

    print(json_data)
    return jsonify(json_data)


if __name__ == '__main__':
    app.secret_key = 'admin'
    app.run(debug=True)
