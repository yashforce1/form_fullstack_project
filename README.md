

````md
# Form Fullstack Project

A full-stack web application that allows users to submit form data and store it securely in a PostgreSQL database using Node.js and Express.

This project demonstrates backend CRUD integration, environment-based configuration, and database connectivity.

---

## 🚀 Getting Started

Follow the steps below to set up and run the project locally.

## 📥 Clone the Repository

```bash
git clone https://github.com/yashforce1/form_fullstack_project.git
cd form_fullstack_project
````

---

## 📦 Install Dependencies

Install all required Node.js dependencies:

```bash
npm install
```

---

## 🔐 Environment Configuration

Create a `.env` file in the root directory of the project and add your PostgreSQL database credentials in the following format:

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=your_database_name
DB_PORT=5432
```

⚠️ Ensure that:

* PostgreSQL is installed and running
* The specified database already exists
* `.env` is added to `.gitignore` to protect sensitive data

---

## ▶️ Run the Server

Start the backend server using:

```bash
node server.js
```

Once the server is running, it will be ready to accept form submissions.

---

## 📝 Usage

1. Open the application in your browser.
2. Fill in the required details in the form.
3. Click **Submit**.
4. The submitted data will be stored in the PostgreSQL database.

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Environment Variables:** dotenv
* **Version Control:** Git & GitHub

---

## 📌 Notes

* This project is intended for learning and demonstration purposes.
* Make sure database credentials are correct to avoid connection errors.
* You can extend this project by adding validation, authentication, or a frontend framework.

---

## 👤 Author

**Yash Srivastav**

