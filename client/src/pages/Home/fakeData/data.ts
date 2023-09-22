export type Item = {
  id: string & { _brand: 'itemId' }
  title: string
  image: HTMLImageElement
  price: number
}

export const sports: Item[] = [
  {
    id: '1' as Item['id'],
    title: 'Porte bebe - deuter kid confort plus',
    image: require('../../../assets/img/porte-bebe-1.png'),
    price: 189,
  },
  {
    id: '2' as Item['id'],
    title: 'Porte bebe randonnée - ranger little life',
    image: require('../../../assets/img/porte-bebe.png'),
    price: 145,
  },
  {
    id: '3' as Item['id'],
    title: 'sac a dos glaciere - forclaz',
    image: require('../../../assets/img/sac-glaciere.png'),
    price: 35,
  },
  {
    id: '4' as Item['id'],
    title: 'pantalon modulable 2 en 1 - travel 100',
    image: require('../../../assets/img/pantalon.png'),
    price: 42,
  },
  {
    id: '5' as Item['id'],
    title: 'Veste impermeable trek - travel 500',
    image: require('../../../assets/img/manteau.png'),
    price: 120,
  },
  {
    id: '6' as Item['id'],
    title: 'Baton de randonnée - forclaz',
    image: require('../../../assets/img/baton-randonne.png'),
    price: 56,
  },
  {
    id: '7' as Item['id'],
    title: 'casquette trekking desert - forclaz',
    image: require('../../../assets/img/casquette-trek.png'),
    price: 19,
  },
  {
    id: '8' as Item['id'],
    title: 'jumelle randonnée avec reglages - quechua',
    image: require('../../../assets/img/jumelle.png'),
    price: 45,
  },
]
