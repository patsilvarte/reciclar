import yellowBin from "../assets/yellow_bin.png";
import blueBin from "../assets/blue_bin.png";
import greenBin from "../assets/green_bin.png";
import caixaCartao from "../assets/garbage/caixa_cartao.png";
import garrafaAgua from "../assets/garbage/garrafa_agua.png";
import lataSumo from "../assets/garbage/lata_sumo.png";
import garrafaVidro from "../assets/garbage/garrafa_vidro.png";
import folhaPapel from "../assets/garbage/folha_papel.png";
import frascoPerfume from "../assets/garbage/frasco_perfume.png";
import { Bin, Garbage, Level } from "../types";

const yellonBinO: Bin = { name: "Amarelo", id: "yellow", img: yellowBin };
const blueBinO: Bin = { name: "Azul", id: "blue", img: blueBin };
const greenBinO: Bin = { name: "Verde", id: "green", img: greenBin };

const garrafaAguaO: Garbage = {
  id: "garrafa-agua",
  displaynName: "Garrafa de água",
  rightBin: "yellow",
  img: garrafaAgua,
};
const lataSumoO: Garbage = {
  id: "lata-bebida",
  displaynName: "Lata de sumo",
  rightBin: "yellow",
  img: lataSumo,
};
const garrafaVidroO: Garbage = {
  id: "garrafa-vidro",
  displaynName: "Garrafa de vidro",
  rightBin: "green",
  img: garrafaVidro,
};
const frascoPerfumeO: Garbage = {
  id: "perfume",
  displaynName: "Frasco de Perfume",
  rightBin: "green",
  img: frascoPerfume,
};
const caixaCartaoO: Garbage = {
  id: "caixa",
  displaynName: "Caixa de Cartão",
  rightBin: "blue",
  img: caixaCartao,
};
const folhaPapelO: Garbage = {
  id: "folha",
  displaynName: "folha de papel",
  rightBin: "blue",
  img: folhaPapel,
};

// shampoo
// tetrapack - leite
// jornal
// folhetps
// caixa da manteiga

export const level1: Level = {
  bins: [yellonBinO, blueBinO, greenBinO],
  garbage: [garrafaAguaO, garrafaVidroO, caixaCartaoO],
};
export const level2: Level = {
  bins: [yellonBinO, blueBinO, greenBinO],
  garbage: [lataSumoO, frascoPerfumeO, folhaPapelO],
};

export const bins: Bin[] = [
  { name: "Amarelo", id: "yellow", img: yellowBin },
  { name: "Azul", id: "blue", img: blueBin },
  { name: "Verde", id: "green", img: greenBin },
];
export const garbage: Garbage[] = [
  garrafaAguaO,
  lataSumoO,
  garrafaVidroO,
  frascoPerfumeO,
  caixaCartaoO,
  folhaPapelO,
];
