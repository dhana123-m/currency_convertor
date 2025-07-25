# 💱 Currency Converter Website

This is a responsive and stylish **Currency Converter Web App** that allows users to:
- Log in using email/password or Google/Facebook
- Convert between currencies using live exchange rates
- View real-time conversion results
- Select currencies with country **flag emojis**
- Toggle between login page and main app

---

## ✅ Features

### 1. **Login Page**
- Login via email and password
- Social login buttons for Google & Facebook (UI only)
- "Login" button switches to the converter page

### 2. **Currency Converter Page**
- Modern UI matching custom design
- Logo & title at top left, Sign Out button on top right
- Centered currency converter input and dropdowns
- Real-time exchange conversion
- Country **flag emojis** in currency dropdowns
- Responsive layout with smooth flow

---

## 🔧 What Was Changed / Added

| Feature/Section        | Description |
|------------------------|-------------|
| 🔄 Page Switching       | JavaScript added to toggle between login page and converter page |
| 🔐 Login Form          | Email + password input and a Login button |
| 🌐 Live API Connection | Connected to `https://api.exchangerate.host` for live currency rates |
| 🏳️ Flags in Dropdowns  | Country flags shown using emoji logic based on currency code |
| ⚡ Real-time Conversion | Input triggers conversion immediately on typing or dropdown change |
| 💅 Style Preservation  | Design of converter page **not changed** — matches uploaded image exactly |
| 🧪 Error Handling       | Invalid amount entry shows validation message |
| 📦 Structured Code     | JS and HTML cleanly separated and scalable |

---

## 🚀 Technologies Used

- HTML5
- CSS3 (with gradients, responsive layout)
- JavaScript (ES6)
- [ExchangeRate.host API](https://exchangerate.host)
- Emojis for flags (no extra image files)

---

## 📝 How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/currency-converter-app.git
