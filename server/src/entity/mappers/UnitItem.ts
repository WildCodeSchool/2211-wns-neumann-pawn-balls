import OrderLine from '../OrderLine';
import type UnitItem from '../UnitItem';
import { type UnitItemInput } from '../UnitItem';

export function UnitItemInputToUnitItem(unitItemInput: UnitItemInput): UnitItem {
  const item: UnitItem = {
    id: '',
    itemId: unitItemInput.itemId,
    status: '',
    orderLine: new OrderLine(),
  };

  return item;
}
