# Hire Me Project

This project constitutes a web application with a backend connected to Django (Python) and a frontend constructed with Next.js (React).

## Technologies Used

### Backend

- **Python**: Core programming language.
- **Django**: High-level Python web framework.
- **Django Rest Framework (DRF)**: Flexible toolkit for building Web APIs.
- **SQLite**: Lightweight database (default configuration).

### Frontend

- **Next.js**: The React Framework for the web.
- **React**: JavaScript library for building user interfaces.
- **Material UI (MUI)**: React component library for faster and easier web development.
- **Axios**: Promise-based HTTP client for the browser.
- **TypeScript**: Typed superset of JavaScript.

## Project Structure

```bash
.
├── backend
│   ├── hireme          # Main Django project settings
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── ...
│   ├── myjob           # Django app for job functionalities
│   │   ├── migrations  # Database migrations (Not versioned in this project)
│   │   ├── models.py
│   │   ├── views.py
│   │   └── ...
│   ├── db.sqlite3      # SQLite database (Generated locally, not versioned)
│   ├── manage.py       # Django command-line utility
│   └── requirements.txt # Backend dependencies
├── frontend
│   ├── public          # Static files
│   ├── src             # Source code
│   │   ├── app
│   │   ├── components
│   │   ├── entities
│   │   ├── hooks
│   │   ├── services
│   │   └── ...
│   ├── next.config.ts  # Next.js configuration
│   ├── package.json    # Frontend dependencies and scripts
│   └── tsconfig.json   # TypeScript configuration
└── README.md           # Project documentation
```

## How to Run the Project

Follow the steps below to set up and run the application locally.

### Prerequisites

- **Python** (v3.8 or higher)
- **Node.js** (v18 or higher) and **npm**

### 1. Backend Setup (Django)

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
# On Linux/macOS
python3 -m venv .venv

# On Windows
python -m venv .venv
```

Activate the virtual environment:

```bash
# On Linux/macOS
source .venv/bin/activate

# On Windows
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations (optional, if setting up for the first time):

```bash
python manage.py migrate
```

Start the server:

```bash
python manage.py runserver
```

The backend server will run at `http://127.0.0.1:8000/`.

### 2. Frontend Setup (Next.js)

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend application will be available at `http://localhost:3000/`.
