# B2B Agricultural Marketplace

A full-stack project Agricultural Marketplace


##  Project Structure
```

B2B-Agricultural-Marketplace/
│
├── api/   # Backend - Express.js (Node)
│
└── ui/    # Frontend - React (Vite)

````

---

##  Tech Stack
###  Frontend (UI)
- React (Vite)
- Redux Toolkit + Redux Logger
- Axios
- TailwindCSS
- Lucide React Icons
- Formik + Yup
- React Hot Toast

### Backend (API)
- Node.js v22.14.0
- Express.js (ES Modules)
- CORS

---

##  How to Start

## Clone Repo
```bash
 git clone https://github.com/stormdotcom/B2B-Agricultural-Marketplace

 ```

###  Start Backend
```bash
cd api
npm install
npm run dev
````

Runs on **[http://localhost:4000](http://localhost:4000)**

### 2️⃣ Start Frontend

```bash
cd ui
npm install
npm run dev
```

Runs on **[http://localhost:5173](http://localhost:5173)**

---

## 🧩 Environment Variables

**Frontend (`ui/.env`):**

```
VITE_API_BASE_URL=http://localhost:3000/api
