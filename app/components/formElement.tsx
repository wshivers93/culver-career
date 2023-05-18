interface FormProps {
  word: string;
  wordType: string;
}

export function MadLibFormElement(props: FormProps) {
  return (
    <div className="flex flex-row justify-between mb-1">
      {props.wordType}{" "}
      <span className="border-b border-white border-solid w-1/2 text-center">
        {props.word}
      </span>
    </div>
  );
}
