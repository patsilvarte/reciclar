export type RecyclingBinName = "Amarelo" | "Azul" | "Verde";
export type BinIds = "empty" | "yellow" | "blue" | "green";
export type ItemsIds = "garrafa" | "folha-papel" | "caixa-cartão";

export type Bin = {
  name: RecyclingBinName;
  id: BinIds;
};
export type LocationsSet = Record<BinIds, ItemsIds[]>;
export type Item = {
  id: ItemsIds;
  item: JSX.Element;
};
