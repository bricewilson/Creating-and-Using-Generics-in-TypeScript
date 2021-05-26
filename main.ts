function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
  return data.splice(amountToShorten, data.length);
}

let stringArray: string[] = ['Visual Basic', 'C++', 'TypeScript', 'JavaScript'];

let fewerLanguages = shortenArray<string>(stringArray, 2);

console.log(fewerLanguages);