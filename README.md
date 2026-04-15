# TaskFlow 📋

> A collaborative, real-time task management platform for modern agile teams.

---

## 🚀 Overview

**TaskFlow** is a fictional web application used to illustrate Agile/Scrum software development workflows using GitHub Projects.

TaskFlow allows teams to:
- Create, assign, and prioritize tasks across sprints
- Track progress in real time with live dashboard analytics
- Collaborate with comments, attachments, and @mentions
- Integrate with Slack, GitHub, and Google Calendar

This repository is a **demo project** designed to showcase GitHub Issues, Pull Requests, Labels, and GitHub Projects in the context of a Scrum workflow.

---

## 🛠️ Tech Stack

| Layer       | Technology             |
|-------------|------------------------|
| Frontend    | React 18, TypeScript   |
| Backend     | Node.js, Express       |
| Database    | PostgreSQL              |
| Auth        | JWT + bcrypt           |
| Real-time   | WebSockets (Socket.io) |
| CI/CD       | GitHub Actions         |
| Hosting     | AWS (ECS + RDS)        |

---

## 📁 Project Structure

```
taskflow/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/
├── server/          # Express backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── middleware/
├── database/
│   └── migrations/
└── docs/
```

---

## 🏃 Scrum Workflow

This repo uses **GitHub Projects** to manage work in Scrum sprints.

### Sprint Board Columns

| Column       | Description                                              |
|--------------|----------------------------------------------------------|
| **Backlog**  | Groomed items not yet scheduled for a sprint             |
| **Sprint 1** | Items committed to in the current sprint                 |
| **In Progress** | Actively being worked on                              |
| **In Review**   | PR open, awaiting code review                         |
| **Done**        | Merged and deployed to staging                        |

### Issue Types & Labels

| Label         | Color  | Meaning                                       |
|---------------|--------|-----------------------------------------------|
| `epic`        | Purple | A large feature broken into user stories      |
| `user story`  | Blue   | A user-facing feature written in story format |
| `task`        | Green  | A technical subtask (not user-facing)         |
| `bug`         | Red    | A defect or unintended behavior               |
| `spike`       | Yellow | Research or investigation timeboxed item      |
| `enhancement` | Teal   | Improvement to an existing feature            |
| `blocked`     | Dark Red | Waiting on external dependency or decision  |

---

## 🤝 Contributing

1. Pick an issue from the **Sprint 1** column on the project board
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit with a descriptive message
4. Open a Pull Request and link it to the issue using `Closes #<issue-number>`
5. Request a review from a teammate
6. Once approved, squash and merge

---

## 📌 Definition of Done

A story is **Done** when:
- [ ] Code is written and peer-reviewed
- [ ] Unit tests pass (coverage ≥ 80%)
- [ ] Feature is deployed to the staging environment
- [ ] Acceptance criteria in the issue are verified
- [ ] Documentation is updated if applicable

---

## 📄 License

This is a demo project for educational purposes. No license applies.
