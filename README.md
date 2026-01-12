# Tax Assistant – Angular Frontend

Frontend application for the **Tax Assistant** platform, built with **Angular** and modern SPA best practices.

This project is responsible for delivering a clean, responsive, and professional user interface to interact with the **Tax Assistant Spring APIs** and the **Tax Assistant Python (FastAPI + ML)** services.

The focus of this frontend is **clarity, scalability, and maintainability**, following real-world enterprise Angular standards.

---

## Project Overview

The **Tax Assistant Frontend** allows users to:

- Authenticate into the platform
- Navigate through a clean and consistent layout (header, content, footer)
- Consult tax predictions based on customer and product information
- Consume backend APIs in a scalable and decoupled way

The application is designed as a **Single Page Application (SPA)** with a global layout and route-based navigation.

---

## Architecture & Design Decisions

- **Standalone Components** (Angular modern standard)
- **Global Layout** defined in `app.component.html`
- **RouterOutlet-based navigation**
- Clear separation between:
  - Pages (screens)
  - Shared services, interfaces, and utilities
- No unnecessary over-engineering (focused and pragmatic design)

---

## Tech Stack

- **Angular** (Standalone Components)
- **TypeScript**
- **Angular Router**
- **RxJS**
- **Materialize CSS** (UI foundation)
- **SCSS** (custom styling and layout control)
- **NPM**
- **Prettier & EditorConfig** (code style and consistency)

---

## Project Structure

```text
src
├── app
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.routes.ts
│   │
│   ├── pages
│   │   ├── home
│   │   ├── login
│   │   └── tax-prediction
│   │
│   └── shared
│       ├── services
│       ├── interfaces
│       ├── directives
│       ├── pipes
│       └── utils
│
├── assets
└── main.ts
```

## Install dependences

```bash
npm install

# Execute
npm run dev
```

## Tests

```bash
npm test
```

## Deploy
