# Jobify – React Job Finder

A clean, resume-ready job finder built with **React + Vite + Tailwind + React Router**.
It features search, filters, pagination, job details, and a saved/bookmark list stored in localStorage.

## ✨ Features
- Search by title/company/skills
- Filter by location, type, and min salary
- Pagination (8 per page)
- Job details page + external Apply link
- Save/unsave jobs (localStorage)
- Responsive UI with Tailwind
- Easy to deploy on Netlify/Vercel

## 🚀 Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build
npm run preview
```

> Requires Node.js 18+

## 🧩 Tech Stack
- React 18, React Router 6
- Vite
- Tailwind CSS
- Axios

## 📁 Project Structure
```
jobify/
  public/
    data/jobs.json
  src/
    components/
    context/
    hooks/
    pages/
    services/
```

## 📝 Notes
- Data is served from `/public/data/jobs.json` to simulate an API.
- You can replace it with your own API endpoint in `src/services/api.js`.
- Update branding and screenshots, then deploy to Netlify/Vercel and add to your resume.
```

