import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="flex justify-center">
      <span class="px-4 py-2 text-xl text-yellow-300">{count}</span>
      <button class="border px-4 py-2 text-xl" onClick={() => setCount(count + 1)}>+</button>
      <button class="border px-4 py-2 text-xl" onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}