/**
 * Room.js
 *
 * @param  {...any} args {beds, level}
 * @return {object}
 * {
 *  id,
 *  beds,
 *  level,
 *  accessible,
 *  petsAllowed,
 *  cost
 * }
 */
export default function Room(...args) {
  const { id, beds, level } = args[0];
  const roomCosts = {
    1: 50,
    2: 75,
    3: 90,
  };

  if (id < 0) throw new Error('Invalid room number.');
  if (level < 1 || level > 2) {
    throw new Error('Allowed number of levels are 1, or 2.');
  }
  if (beds < 1 || beds > 3) {
    throw new Error('Allowed number of beds are 1, 2, or 3.');
  }

  const accessible = level === 1;
  const petsAllowed = level === 1;
  const cost = roomCosts[beds];

  return {
    id,
    beds,
    level,
    accessible,
    petsAllowed,
    cost,
  };
}
