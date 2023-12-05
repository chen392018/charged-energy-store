"use client"
import { useState } from "react"

export default function SelectPack() {
  const packs = [8, 16, 24]
  const [selected, setSelected] = useState(0)
  return (
    <div className="space-y-4">
      <h2 className="text-accent-200 text-xl font-bold uppercase">
        Select pack:
      </h2>
      <ul className="flex flex-wrap gap-4">
        {packs.map((pack) => (
          <li key={pack}>
            <button
              onClick={() => setSelected(pack)}
              className={`border border-secondary-400 font-bold rounded-sm text-accent-200 w-12 h-12 duration-200 outline-none sm:w-16 sm:h-16 ${
                selected !== pack && "hover:bg-secondary-800"
              } ${selected === pack && "bg-secondary-400"}`}
            >
              {pack}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
