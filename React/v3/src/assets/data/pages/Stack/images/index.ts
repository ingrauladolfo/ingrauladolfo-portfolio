import type { Image } from "../../../../../common/interfaces/data/pages/Stack";
import front from './front'
import back from './back'
import css from './css.ts'
import controlVer from './controlVer.ts'
import bbdd from "./bbdd.ts";
import test from "./test.ts";
import cloud from "./cloud.ts";
import containers from "./containers.ts";
// Concatenar en el orden deseado
const all = [...front, ...css, ...back, ...controlVer, ...bbdd, ...test, ...cloud, ...containers];

// Sobrescribir IDs para que sean consecutivos
const images: Image[] = all.map((item, index) => ({
  ...item,
  id: index + 1,
}));

export default images;
