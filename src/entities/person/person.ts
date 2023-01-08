export class Person {
  talkTo(person: string, answer: string, isPersonSpeakEarlier?: boolean): string {
    if (isPersonSpeakEarlier) {
      return '';
    }

    console.log(answer);
  }

  watchAt(subject: string): string {
    return subject;
  }

  walkTo(subject: string): string {
    return subject;
  }

  eat(food: string): string {
    return food;
  }
}
