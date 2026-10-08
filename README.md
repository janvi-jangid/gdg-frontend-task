# GDG RBU – Frontend Task

A responsive frontend website for **Google Developer Groups (GDG) – Ramdeobaba University**, created as a frontend development task based on the provided Figma design.

## 🌐 Live Demo

**Live Website:**  
https://gdg-frontend-task-iota.vercel.app/

**GitHub Repository:**  
https://github.com/janvi-jangid/gdg-frontend-task

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript / JSX
- CSS
- React Icons
- Oxlint
- Git & GitHub
- Vercel

---

## ✨ Features

- Responsive design for desktop, tablet, and mobile
- GDG-style navigation bar
- Hero section
- Events section
- Team section
- Interactive FAQ accordion
- Newsletter / contact section
- Footer
- Hover effects and CSS transitions
- Reusable React components
- Vercel deployment

---

## 📁 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Events.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Footer.css
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Newsletter.jsx
│   ├── Newsletter.css
│   └── Team.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```
---


## 🔀 Git & GitHub Commands Used

### 1. Initialize Git

`git init`

Used at the beginning to initialize Git and start version control for the project.

### 2. Check Git Status

`git status`

Used to check which files were modified, staged, or untracked before committing changes.

### 3. Stage All Changes

`git add .`

Used after completing the frontend work to stage all changed files before creating a commit.

### 4. Stage a Specific File

`git add README.md`

Used when updating only the README documentation.

### 5. Commit Changes

`git commit -m "complete gdg frontend task"`

Used to save the completed frontend work as a Git commit.

### 6. Commit Documentation Changes

`git commit -m "Update project documentation"`

Used to save the README/documentation changes as a new commit.

### 7. Connect Local Project to GitHub

`git remote add origin <GitHub-URL>`

Used to connect the local Git repository to the GitHub repository.

### 8. Check GitHub Connection

`git remote -v`

Used to verify that the local project was connected to the correct GitHub repository.

### 9. Check Current Branch

`git branch`

Used to check the current Git branch.  
The project uses the `main` branch.

### 10. Push Changes to GitHub

`git push`

Used to upload committed changes from the local project to GitHub.

---

## 🔄 Git Workflow Used in This Project

Make changes to the website

↓

`git status`

Check the changed files

↓

`git add .`

Stage the changes

↓

`git commit -m "message of the change"`

Save the changes as a commit

↓

`git push`

Upload the commit to GitHub

↓

GitHub repository is updated

↓

Vercel deploys the updated project

---

## 💻 Example Used in This Project

After completing the frontend:

`git status`

`git add .`

`git commit -m "complete gdg frontend task"`

`git push`

When updating the README:

`git status`

`git add README.md`

`git commit -m "Update project documentation"`

`git push`

### Git and GitHub in This Project

Git was used locally to track and save changes to the project.

GitHub was used to store the project repository online and share the source code.

Vercel was connected to the GitHub repository to deploy the website.