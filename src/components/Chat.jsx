export default function Chat({ messages }) {
  return (
    <div className="flex flex-col gap-3 p-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`max-w-[70%] px-3 py-2 rounded-lg ${
            msg.role === "user"
              ? "bg-gray-100 text-gray-400 self-end"
              : " text-gray-600 self-start"
          }`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
}
