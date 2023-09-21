import { useItems } from '../../mock/items/useItems'
import { HomeDisplay } from './HomeDisplay'

export default function Home() {
  const items = useItems()

  return <HomeDisplay items={items} />
}
