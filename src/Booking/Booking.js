/**
 * Booking.js
 *
 * Specifies booking dates, options (number of pets and accessible room)
 * and the available room.
 *
 * @param  {...any} args { startDate, endDate, room, pets, accessible }
 * @return {object} { room, pets, startDate, endDate, accessible }
 */
export default function Booking(...args) {
  const { startDate, endDate, room, pets, accessible } = args[0];

  if (pets > 2) throw new Error('Cannot have more than 2 pets in a room.');
  if (endDate - startDate <= 0) throw new Error('Invalid number of nights.');
  if (!room.level || !room.beds) throw new Error('Invalid room definition.');
  if (room.booked) throw new Error(`Room is already booked.`);
  if (accessible && !room.accessible) {
    throw new Error('This room is not an accessble room.');
  }

  return { room, pets, startDate, endDate, accessible };
};
