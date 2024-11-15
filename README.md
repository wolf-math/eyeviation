# Home Assignmnet

This is the home assignment for Eyeviation. All instructions are writen for Linux or MacOS.

# Steps to get running

## Backend

1) `cd` into the `backend` directory
2) create a python virtual environment `python3 -m venv venv`
3) start the virtual environment `source venv/bin/activate`
4) Install dependencies `pip3 install -r requirements.txt`
5) Make db migrations `python3 manage.py makemigrations`
6) Migrate the db schema `python3 manage.py migrate`
7) run the server `python3 manage.py runserver`

## Frontend

1) `cd` into the `frontend` directory
2) install dependencies `npm i`
3) inside the `frontend` directory create a file called `.env`
4) make an envrionment variable called `VITE_API_URL="http://127.0.0.1:8000"`
5) run the server `npm run dev`

## Usage

1) create a user
2) login
3) make a project