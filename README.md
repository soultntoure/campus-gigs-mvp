# CampusGigs

![CI-CD](https://img.shields.io/badge/CI%2FCD-Pending-yellow) ![License](https://img.shields.io/badge/License-MIT-blue)

A mobile application designed to connect university students with local part-time gigs, freelance tasks, and on-campus jobs. Our mission is to provide a trusted, hyper-local marketplace that helps students earn flexibly and helps local businesses find reliable, temporary staff.

## ✨ Core Idea

The app focuses on the unique university ecosystem. Unlike broad job boards, CampusGigs verifies student status (via `.edu` emails) to build a trusted community. It caters to various gig types:

- **Local Business Shifts:** Part-time jobs at cafes, bookstores, and retail shops near campus.
- **Peer-to-Peer Tasks:** Students helping other students with tasks like tutoring, moving, or event help.
- **University Gigs:** Official on-campus job opportunities from university departments.

## 🚀 Tech Stack

This project is built using a modern, scalable, and cost-effective tech stack, chosen for rapid MVP development.

- **Monorepo Management:** [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- **Mobile App (iOS & Android):** [React Native](https://reactnative.dev/)
- **Backend:** [Node.js](https://nodejs.org/) on [Firebase Cloud Functions](https://firebase.google.com/docs/functions)
- **Database:** [Cloud Firestore](https://firebase.google.com/docs/firestore) (NoSQL)
- **Authentication:** [Firebase Authentication](https://firebase.google.com/docs/auth)
- **Payments:** [Stripe Connect](https://stripe.com/connect)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 📂 Repository Structure

This project is a monorepo managed by Yarn Workspaces. All code is located in the `packages/` directory.

```
campus-gigs-mvp/
├── packages/
│   ├── app/         # The React Native mobile application
│   └── server/      # The Firebase Cloud Functions backend
├── docs/
│   └── architecture.md # Future home for architecture decisions
├── .gitignore
├── package.json     # Root package.json for the monorepo
└── README.md
```

## 🏁 Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Yarn](https://yarnpkg.com/)
- [React Native Development Environment](https://reactnative.dev/docs/environment-setup)
- A [Firebase](https://firebase.google.com/) project with Firestore, Authentication, and Cloud Functions enabled.
- A [Stripe](https://stripe.com/) account.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/campus-gigs-mvp.git
cd campus-gigs-mvp
```

### 2. Install Dependencies

Install all dependencies for the entire monorepo from the root directory.

```bash
yarn install
```

### 3. Environment Variables

This project requires environment variables to connect to services like Firebase and Stripe.

**A. Firebase Configuration (for Mobile App):**

Create a `.env` file in the `packages/app` directory:

```sh
# packages/app/.env

FIREBASE_API_KEY="your_firebase_api_key"
FIREBASE_AUTH_DOMAIN="your_project_id.firebaseapp.com"
FIREBASE_PROJECT_ID="your_project_id"
FIREBASE_STORAGE_BUCKET="your_project_id.appspot.com"
FIREBASE_MESSAGING_SENDER_ID="your_sender_id"
FIREBASE_APP_ID="your_app_id"
```

**B. Firebase & Stripe Configuration (for Backend):**

Set up your Firebase Functions environment configuration. You'll need to have the Firebase CLI installed (`npm install -g firebase-tools`).

```bash
cd packages/server

# Set Stripe secret key
firebase functions:config:set stripe.secret_key="your_stripe_secret_key"

# Set Stripe webhook secret (for production)
firebase functions:config:set stripe.webhook_secret="your_stripe_webhook_secret"
```

### 4. Running the Project

**A. Run the Mobile App:**

From the root directory, you can run the app on your desired platform.

```bash
# Start the Metro bundler
yarn workspace app start

# In a new terminal, run on iOS
yarn workspace app ios

# Or, run on Android
yarn workspace app android
```

**B. Run the Backend Locally:**

You can emulate the Firebase Functions locally for testing.

```bash
cd packages/server

# Start the local emulator suite
firebase emulators:start
```
