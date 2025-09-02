type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25rem',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span
          style={{ borderBottom: '0.1em solid #ffffde' }}
          key={index}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? 'visible'
                : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal
                  ? 'red'
                  : '#ffffde',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
