import { useState } from "react";
import { loginDemo, genProposal } from "./firebase";

export default function App() {
  const [out, setOut] = useState<any>(null);

  async function run() {
    await loginDemo();
    const res: any = await genProposal({
      client: "Acme",
      scope: ["website audit", "analytics setup"],
      outcomes: ["lead growth"],
      timeline: "4 weeks",
      price: "$5,000",
      brandVoice: "plain"
    });
    setOut(res.data.payload);
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Proposal Generator</h1>
      <button onClick={run}>Generate</button>
      <pre>{out && JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}
