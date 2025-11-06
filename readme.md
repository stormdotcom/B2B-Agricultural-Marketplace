# B2B Agricultural Marketplace

A full-stack project Agricultural Marketplace
<img width="1264" height="901" alt="image" src="https://github.com/user-attachments/assets/9799812b-145a-46a0-b75f-0dbcdf5e2bb9" />
<img width="1380" height="910" alt="image" src="https://github.com/user-attachments/assets/845e2ed7-15aa-4c62-baf4-82ffb20b0fdd" />
<img width="1645" height="900" alt="image" src="https://github.com/user-attachments/assets/d57e9b60-6b94-446b-b964-7b84b50689b9" />


##  Project Structure
```

TASKS/
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
