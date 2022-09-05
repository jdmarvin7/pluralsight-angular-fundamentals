import { FormControl } from "@angular/forms";

export function restricteWords(words: string[]) {
  return (control: FormControl) => {

    if(!words) return null;

    let invalidWords = words.map(
      w => control.value.includes(w) ? w : null
    ).filter(w => w != null)

    return invalidWords && invalidWords.length > 0
      ? { 'restrictedWords': invalidWords.join(', ') }
      : null
  }
}
