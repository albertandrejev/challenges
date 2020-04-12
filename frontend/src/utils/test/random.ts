import PseudoRandom, { MersenneTwister19937, string } from "random-js";

const prng: PseudoRandom.Engine = MersenneTwister19937.autoSeed();
const pool = "abcdefghijklmnopqrstuvwxyz0123456789";

/**
 * Generates random string.
 * @constructor
 * @param {number} len - Length of generated string.
 */
export function randomString(len: number): string {
  return string(pool)(prng, len);
}
