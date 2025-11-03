import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "the-assessment.firebaseapp.com",
  projectId: "the-assessment",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const functions = getFunctions(app, "us-central1");
export const genProposal = httpsCallable(functions, "generateProposal");

export async function loginDemo() {
  return signInWithEmailAndPassword(auth, "demo@local.test", "demoPass123!");
}
