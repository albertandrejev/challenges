import PseudoRandom, { MersenneTwister19937, string } from "random-js";

const prng: PseudoRandom.Engine = MersenneTwister19937.autoSeed();
const pool = "abcdefghijklmnopqrstuvwxyz0123456789";
export function randomString(len: number): string {
  return string(pool)(prng, len);
}
