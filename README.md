# 🪙 TracKrypto

**TracKrypto** is a real-time cryptocurrency tracking application built with **React**. It provides users with live price updates, detailed market data, and interactive price charts for thousands of cryptocurrencies.

🚀 **Live Demo:** [https://trac-krypto.vercel.app](https://trac-krypto.vercel.app)

---

## ✨ Features

* **⚡ Real-Time Data:** Live cryptocurrency prices, market cap, and volume updates.
* **📈 Interactive Charts:** Dynamic 7-day price history charts powered by `Recharts`.
* **🔍 Search Functionality:** Instantly find any coin by name or symbol.
* **📱 Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
* **🌙 Dark Mode UI:** Sleek, modern dark-themed interface for better readability.
* **🔄 Auto-Polling:** Data automatically refreshes every 30 seconds without page reloads.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite
* **Routing:** React Router DOM
* **Charts:** Recharts
* **API:** [CoinGecko Public API](https://www.coingecko.com/en/api)
* **Deployment:** Vercel
* **Styling:** CSS3 (Custom Responsive Layouts)

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

* Node.js (v14 or higher)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/pran5hu-p/TracKrypto.git](https://github.com/pran5hu-p/TracKrypto.git)
    cd TracKrypto
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` to view the app.

---

## 📂 Project Structure

```bash
src/
├── api/
│   └── coingecko.js       # API fetch functions (Axios/Fetch)
├── components/
│   └── cryptocard.jsx     # Reusable coin display card
├── pages/
│   ├── Home.jsx           # Main landing page with search & list
│   └── CoinDetail.jsx     # Detailed view with charts
├── utils/
│   └── formatter.js       # Helper functions for currency formatting
├── App.jsx                # Main App component & Routes
└── main.jsx               # Entry point
```

---

## ⚠️ Note on API Limits

This project uses the **free tier** of the CoinGecko API.

* **Rate Limit:** ~10-30 calls per minute.
* If you see data not loading or 429 errors, please wait a minute and refresh.

---

## 👨‍💻 Author

**Pranshu**
* GitHub: [@pran5hu-p](https://github.com/pran5hu-p)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
