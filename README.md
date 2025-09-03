# ![Queue Icon](https://img.icons8.com/ios-filled/24/000000/queue.png) Queue Management API

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A simple **Queue Management System** API built with **Node.js** and **Express.js**, allowing users to take tickets, admins to call next tickets, and reset the queue. Includes a frontend interface for demonstration.

---

## **Features**

* 📝 **Add to Queue** – Users input their name and receive an incremented ticket number.
* 📋 **View Current Queue** – Admin can view the full queue list.
* 🔔 **Call Next Ticket** – Admin calls and removes the next person in the queue.
* 🔄 **Reset Queue** – Admin can reset the queue and start over.
* 💻 **Frontend Interface** – Simple HTML/JS interface to interact with the API.

---

## **Installation / Setup**

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd queue-management-api
```

2. **Install dependencies:**

```bash
npm install
```

3. **Project Structure:**

```
queue-management-api/
├── public/
│   └── index.html      # Frontend interface
├── server.js           # Backend API
├── package.json
└── README.md
```

4. **Run the server:**

```bash
node server.js
```

The API will be accessible at:

```
http://localhost:3000
```

5. **Access the frontend:**
   Open `public/index.html` in a browser or visit `http://localhost:3000/` if using Express static serving.

---

## **API Endpoints**

### **1. Get Full Queue**

**Request:**

```
GET /api/queue
```

**Response (200 OK):**

```json
[
  { "ticketNumber": 1, "name": "Alice" },
  { "ticketNumber": 2, "name": "Bob" }
]
```

---

### **2. Add to Queue**

**Request:**

```
POST /api/queue
Content-Type: application/json
```

**Body Example:**

```json
{
  "name": "Charlie"
}
```

**Response (200 OK):**

```json
{
  "ticketNumber": 3,
  "name": "Charlie"
}
```

---

### **3. Call Next Ticket**

**Request:**

```
POST /api/queue/call
```

**Response (200 OK):**

```json
{
  "ticketNumber": 1,
  "name": "Alice"
}
```

**Error (Queue empty):**

```json
{
  "error": "Queue is empty"
}
```

---

### **4. Reset Queue**

**Request:**

```
POST /api/queue/reset
```

**Response (200 OK):**

```json
{
  "message": "Queue reset successfully"
}
```

---

## **Frontend Usage**

* Enter your name and click **Get Ticket** to join the queue.
* Click **Call Next** to serve the next person.
* Click **Reset Queue** to clear all tickets.
* The queue list updates automatically after every action.

---

## **Example Frontend Screenshot**

![Queue Frontend Screenshot](https://via.placeholder.com/500x300.png?text=Queue+Frontend+Demo)

---

## **License**

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---
