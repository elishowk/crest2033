import { useState, useEffect } from "preact/hooks";

interface Props {
  id: string;
  label?: string;
}

export default function VoteButton({ id, label = "Prioritaire" }: Props) {
  const storageKey = `vote-${id}`;
  const countKey = `vote-count-${id}`;

  const [voted, setVoted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setVoted(localStorage.getItem(storageKey) === "true");
    setCount(parseInt(localStorage.getItem(countKey) || "0", 10));
  }, []);

  const toggle = () => {
    const next = !voted;
    setVoted(next);
    const newCount = next ? count + 1 : Math.max(0, count - 1);
    setCount(newCount);
    localStorage.setItem(storageKey, String(next));
    localStorage.setItem(countKey, String(newCount));
  };

  return (
    <button
      onClick={toggle}
      class={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
        voted
          ? "bg-avec-terracotta text-white shadow-sm"
          : "bg-avec-gray-light text-avec-dark-light hover:bg-avec-terracotta/10 hover:text-avec-terracotta"
      }`}
      aria-pressed={voted}
      title={voted ? "Retirer mon vote" : "Voter pour cette priorité"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-4 h-4"
      >
        {voted ? (
          <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.723.723 0 01-.692 0h-.002z" />
        ) : (
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        )}
      </svg>
      <span>{label}</span>
      {count > 0 && (
        <span class={`text-xs ${voted ? "text-white/80" : "text-avec-gray"}`}>
          {count}
        </span>
      )}
    </button>
  );
}
