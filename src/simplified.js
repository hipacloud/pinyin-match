import { dict } from './simplified_dict.js'
import init from './core.js'

const allPinyin = Object.keys(dict)

// getFirstPinyinChar 是为了取地址首拼音字母的方法，所以一些多音字需要处理一下。
const specialCases = {
    '广': 'g',
    '宁': 'n'
}

var pinyin = {
    match: init(dict),
    getFirstPinyinChar: (letter) => {
        if (specialCases[letter]) {
            return specialCases[letter];
        }

        for (let key of allPinyin) {
            if (dict[key].indexOf(letter) !== -1) {
                return key[0]
            }
        }

        return undefined
    }
}

export default pinyin
