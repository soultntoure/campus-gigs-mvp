# Architecture Decisions

This document outlines the key architectural decisions for the CampusGigs MVP.

## 1. Monorepo

**Decision:** Use a monorepo managed by Yarn Workspaces.

**Rationale:**
- **Simplified Dependency Management:** A single `yarn install` from the root sets up the entire project.
- **Code Sharing:** Easily share TypeScript types, validation logic, and utility functions between the `app` and `server` packages.
- **Atomic Commits:** Changes that affect both the frontend and backend can be made in a single, atomic commit, improving traceability.

## 2. Tech Stack

- **React Native:** Chosen for cross-platform mobile development to reduce time-to-market for the MVP.
- **Firebase Suite (Auth, Firestore, Functions):** Provides a tightly integrated, serverless backend that is cost-effective (pay-as-you-go) and removes much of the DevOps overhead. Firestore's real-time capabilities are a bonus for future features like chat or live notifications.
- **Stripe Connect:** The industry standard for building multi-sided marketplaces. It handles complex payment flows, KYC compliance, and payouts, significantly reducing development effort and security risk.

## 3. Data Models (Firestore)

### `users` collection
- `uid` (doc ID)
- `email` (string, verified, must end in .edu)
- `displayName` (string)
- `photoURL` (string)
- `userType` ('student' | 'employer')
- `stripeAccountId` (string, for students who get paid)
- `createdAt` (timestamp)

### `gigs` collection
- `gid` (doc ID)
- `title` (string)
- `description` (string)
- `category` ('on-campus', 'local-business', 'peer-to-peer')
- `location` (geopoint)
- `pay` (number)
- `payType` ('hourly' | 'fixed')
- `status` ('open', 'in-progress', 'completed', 'cancelled')
- `employerId` (string, ref to `users`)
- `studentId` (string, ref to `users`, nullable)
- `createdAt` (timestamp)
