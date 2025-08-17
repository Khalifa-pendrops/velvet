"use client";

import { useEffect, useState } from "react";

export default function FailedMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMessages() {
    const res = await fetch("/api/failed-messages");
    const data = await res.json();
    setMessages(data);
    setLoading(false);
  }

  async function markResolved(id: string) {
    await fetch("/api/failed-messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchMessages(); // Refresh list
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) return <p className="p-4">Loading failed messages...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Failed Email Submissions</h1>
      {messages.length === 0 ? (
        <p>No failed messages found 🎉</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Subject</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg: any) => (
              <tr key={msg._id}>
                <td className="border p-2">{msg.name}</td>
                <td className="border p-2">{msg.email}</td>
                <td className="border p-2">{msg.subject}</td>
                <td className="border p-2">{msg.message}</td>
                <td className="border p-2">
                  {new Date(msg.createdAt).toLocaleString()}
                </td>
                <td className="border p-2">{msg.emailStatus}</td>
                <td className="border p-2">
                  <button
                    onClick={() => markResolved(msg._id)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Mark Resolved
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
