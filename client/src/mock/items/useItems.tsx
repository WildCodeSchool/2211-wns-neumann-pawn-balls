import { useItemsQuery } from '../../gql/generated/schema'

export function useItems() {
  const { data } = useItemsQuery()
  const items = data?.getAllItems ?? []

  return items
}
