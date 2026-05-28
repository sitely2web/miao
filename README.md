# 🧋 Miao — All-You-Can-Drink Boba

> *Drink without limits.* — Carrollton, TX · Open daily 1PM–2AM

A hand-coded marketing website for **Miao**, a boba shop in Carrollton, TX offering all-you-can-drink boba for $15, 100% customizable drinks, local artist merch, and late-night vibes. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build step.

---

## ✨ Features

- 🍵 **Full menu** — teas, 21 flavors, sugar levels, and extras
- 🎨 **Artist space** — highlights Miao's local artist merch wall
- ⭐ **Real reviews** from Google
- 📍 **Find us section** — embedded Google Map, address, and hours
- 📱 **Fully responsive** — mobile hamburger nav included
- 🌙 **Scroll animations** — IntersectionObserver-powered reveal effects

---

## 🗂️ Project Structure

```
miao-website/
├── index.html          # Single-page site
├── css/
│   ├── reset.css       # CSS reset
│   ├── tokens.css      # Design tokens (colors, spacing, type)
│   └── style.css       # All component styles
├── js/
│   └── main.js         # Nav scroll behavior + reveal animations
└── assets/
    └── paws.png        # Favicon
```

---

## 🎨 Design

| Token | Value | Use |
|-------|-------|-----|
| `--ink` | `#111111` | Primary text, dark sections |
| `--cream` | `#F5F2EC` | Light background |
| `--warm` | `#B8874A` | Accent — wood/Edison lamp tones |
| `--amber` | `#C97B3A` | CTAs and hover states |

**Typography:** Playfair Display (display/editorial) + DM Sans (body)

---

## 🚀 Running Locally

No build step. Open `index.html` in a browser or serve locally:

```bash
npx serve .
```

---

## 📍 About Miao

**Address:** 2700 Old Denton Rd, Ste 103, Carrollton, TX 75007  
**Hours:** Monday – Sunday, 1PM – 2AM  
**Instagram:** [@miao_carrollton](https://www.instagram.com/miao_carrollton/)
