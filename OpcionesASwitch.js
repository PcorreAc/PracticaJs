const adversario = 'Iron-man'
let loki = ''

switch (adversario) {
    case 'Iron-man':
        loki = 'Magneto'
        break
    case 'Hulk':
        loki = 'Thanos'
        break
    case 'Thor':
        loki = 'Odin'
        break
    default:
        loki = 'Loki'
}
console.log(loki)

//Reemplazar switch
const Adversario = 'Hulk'

const LOKI_DISFRACES = {
    'Iron-man': 'Magneto',
    Thor: 'Odin',
    Hulk: 'Thanos'
}

const LOKI_DEFAULT_DISFRAZ = 'Loki'
const Loki = LOKI_DISFRACES[Adversario] || LOKI_DEFAULT_DISFRAZ
console.log(Loki)