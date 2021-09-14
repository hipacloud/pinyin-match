declare namespace Pinyin {
  export function match(input: string, keys: string): [number, number] | boolean;
  export function getFirstPinyinChar(letter: string): string | undefined;
}

export as namespace Pinyin;
export default Pinyin;
