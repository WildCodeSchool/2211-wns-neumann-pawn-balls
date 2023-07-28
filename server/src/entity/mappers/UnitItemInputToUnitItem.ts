import datasource from '../../db';
import Item from '../Item';
import type UnitItem from '../UnitItem';
import { type UnitItemInput } from '../UnitItem';

export async function UnitItemInputToUnitItem(
  unitItemInput: UnitItemInput
): Promise<Partial<UnitItem>> {
  const item = await datasource.getRepository(Item).findOneByOrFail({ id: unitItemInput.itemId });
  const unitItem: Partial<UnitItem> = {
    item,
    status: unitItemInput.status,
    orderLine: [],
  };

  return unitItem;
}
