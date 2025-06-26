/**
 * This file is intended for configuring a centralized API client,
 * such as Axios or the native Fetch API, for making HTTP requests
 * to the backend (Firebase Cloud Functions).
 *
 * Example using Fetch with a base URL:
 */
import { getFunctions, httpsCallable } from 'firebase/functions';

const functions = getFunctions();

// Example of a callable function wrapper
export const callFunction = (functionName: string, data?: unknown) => {
    const callable = httpsCallable(functions, functionName);
    return callable(data);
};

// Add other API-related configurations and exports here.
