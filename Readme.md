# 🌐 Browser Entry Page

> *"Sleep less, Code more"*

A clean, minimal, and fully personalized browser start page — built with pure HTML, Tailwind CSS, and vanilla JavaScript. Designed to replace your default new tab with something actually useful: quick access to your tools, projects, AI agents, documentation, and more — all in one place.

🔗 **Live Demo:** [workvaibhavk.github.io/BrowserEntry](https://workvaibhavk.github.io/BrowserEntry/)

---

## 📸 Preview

> Open the live link above to see it in action.  
> The page greets you with a real-time clock, profile section, sidebar shortcuts, and categorized link cards.

---

## ✨ Features

- **Live Clock** — Displays current time in 24-hour format, updated every 55 seconds automatically.
- **Sidebar Quick Links** — One-click access to Vercel, Supabase, Clerk, Lucide Icons, Google Fonts, and personal projects.
- **Profile Section** — Hover on your profile image for a fun swap effect.
- **Categorized Link Cards** — Organized sections for Professional, AI Agents, and Documentation links.
- **Design Tools Drawer** — A hover-triggered floating panel with links to Canva, Figma, Dribbble, Pinterest, and Excalidraw.
- **Tooltip Support** — Custom CSS tooltips on every icon for clean UX.
- **Gradient Background** — Soft warm-to-cool gradient for an easy-on-the-eyes aesthetic.
- **Fully Static** — No frameworks, no build step, no dependencies to install. Just open and go.
- **Responsive Layout** — Built with Tailwind utility classes for flexible layout.

---

## 🗂️ Project Structure

```
BrowserEntry/
├── index.html          # Main HTML structure and layout
├── style.css           # Custom CSS (tooltips, sidebar, cards, gradients)
├── script.js           # Vanilla JS (show, hide, updateTime functions)
├── me.png              # Your profile picture (default state)
├── notme.png           # Profile picture on hover (fun swap)
└── svg/                # All icons and images
    ...
```

---

## ⚙️ Installation / Setup

### Option 1 — Use it directly (Live)

Just visit: [https://workvaibhavk.github.io/BrowserEntry/](https://workvaibhavk.github.io/BrowserEntry/)

---

### Option 2 — Run Locally

**Step 1: Clone the repository**
```bash
git clone https://github.com/workvaibhavk/BrowserEntry.git
```

**Step 2: Navigate into the project folder**
```bash
cd BrowserEntry
```

**Step 3: Add your assets**  
Place all your icons and images inside the `svg/` folder as referenced in `index.html`. Replace `me.png` and `notme.png` with your own profile pictures.

**Step 4: Open in browser**  
Just double-click `index.html` or open it via your browser:
```
File → Open File → index.html
```
No server, no npm install, no build step required.

---

### Option 3 — Set as Browser Start Page

**Chrome:**
1. Go to `Settings`
2. Under **On startup**, select **Open a specific page or set of pages**
3. Click **Add a new page**
4. Paste: `https://workvaibhavk.github.io/BrowserEntry/`

**Firefox:**
1. Go to `Settings → Home`
2. Set **Homepage and new windows** to **Custom URLs**
3. Paste: `https://workvaibhavk.github.io/BrowserEntry/`

**Edge:**
1. Go to `Settings → Start, home, and new tabs`
2. Under **When Edge starts**, choose **Open these pages**
3. Add the URL

---