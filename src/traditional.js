import { dict } from './traditional_dict'
import init from './core'

const allPinyin = Object.keys(dict)
var pinyin = {
    match: init(dict),
    getFirstPinyinChar: (letter) => {
        for (let key of allPinyin) {
            if (dict[key].indexOf(letter) !== -1) {
                return key[0]
            }
        }

        return undefined;
    }
}

export default pinyin
