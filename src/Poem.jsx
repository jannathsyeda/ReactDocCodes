import React from 'react'

export default function Poem() {
    const poemOfhaiku = {
        lines: [
          'I write, erase, rewrite',
          'Erase again, and then',
          'A poppy blooms.'
        ]
      };
  return (
    <div><article>
    {poemOfhaiku.lines.map((line, index) =>
      <p key={index}>
        {line}
      </p>
    )}
  </article></div>
  )
}
