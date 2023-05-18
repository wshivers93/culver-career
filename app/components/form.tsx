import { MadLibFormElement } from "./formElement";
import {
  madLib1,
  madLib10,
  madLib11,
  madLib12,
  madLib13,
  madLib2,
  madLib3,
  madLib4,
  madLib5,
  madLib6,
  madLib7,
  madLib8,
  madLib9,
} from "../config";

export function MadLibForm() {
  return (
    <section className="flex flex-col w-1/3 text-2xl">
      <MadLibFormElement wordType="Adjective" word={madLib1} />
      <MadLibFormElement wordType="Adjective" word={madLib2} />
      <MadLibFormElement wordType="Plural Noun" word={madLib3} />
      <MadLibFormElement wordType="Same Plural Noun" word={madLib3} />
      <MadLibFormElement wordType="Plural Noun" word={madLib4} />
      <MadLibFormElement wordType="Noun" word={madLib5} />
      <MadLibFormElement wordType="Adjective" word={madLib6} />
      <MadLibFormElement wordType="Adjective" word={madLib7} />
      <MadLibFormElement wordType="Noun" word={madLib8} />
      <MadLibFormElement wordType="Adjective" word={madLib9} />
      <MadLibFormElement wordType="A Place" word={madLib10} />
      <MadLibFormElement wordType="Adverb" word={madLib11} />
      <MadLibFormElement wordType="Occupation" word={madLib12} />
      <MadLibFormElement wordType="Plural Noun" word={madLib13} />
    </section>
  );
}
