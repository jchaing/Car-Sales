export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const buyItem = (item, price) => {
  console.log(item);
  return {
    type: BUY_ITEM,
    payload: { item, price }
  }
};

export const removeFeature = (item, price) => {
  // dispatch an action here to remove an item
  console.log(item, price);
  return {
    type: REMOVE_FEATURE,
    payload: { item, price }
  }
};

