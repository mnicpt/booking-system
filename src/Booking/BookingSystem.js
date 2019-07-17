/**
 * BookingSystem.js
 *
 * @return {object}
 * {
 *  addRoom,
 *  removeRoom,
 *  getRoom,
 *  bookRoom,
 *  releaseRoom,
 *  calculateTotalCost
 * }
 */
export default function BookingSystem() {
  const rooms = {};
  const bookings = [];
  let roomCount = 0;

  const addRoom = (room) => {
    if (!room.level || !room.beds) {
      throw new Error('Parameter must be of type Room.');
    }
    room.id = ++roomCount;
    rooms[roomCount] = room;
  };

  const removeRoom = (roomNumber) => {
    if (!rooms[roomNumber]) throw new Error('This room is not available.');
    delete rooms[roomNumber];
  };

  const getRoom = (roomNumber) => {
    if (!rooms[roomNumber]) throw new Error('This room is not available.');
    return rooms[roomNumber];
  };

  const bookRoom = (newBooking) => {
    const bookedRoomNumbers = [];
    bookings.forEach((booking) => {
      if (newBooking.startDate < booking.endDate ||
        newBooking.endDate > booking.startDate) {
        bookedRoomNumbers.push(booking.room.id);
      }
    });

    const reservableRoomNumbers = Object.keys(rooms).filter((roomNumber) => {
      return !bookedRoomNumbers.includes(roomNumber);
    });

    if (reservableRoomNumbers.length === 0) {
      throw new Error('This room is not available on these dates.');
    }

    const room = rooms[reservableRoomNumbers[0]];
    bookings.push(room);

    return room;
  };

  const releaseRoom = (roomNumber) => {
    if (!rooms[roomNumber]) throw new Error('This room is not available.');
    rooms[roomNumber].booked = false;
  };

  const calculateTotalCost = (booking) => {
    if (!booking.room || !booking.startDate ||
      !booking.endDate || !booking.pets ||
      booking.accessible === undefined) {
      throw new Error('Parameter must be a Booking.');
    }
    const nights = (booking.endDate - booking.startDate) / 1000 / 60 / 60 / 24;
    return booking.room.cost * nights + (booking.pets > 0 ? 20 : 0);
  };

  return {
    addRoom,
    removeRoom,
    getRoom,
    bookRoom,
    releaseRoom,
    calculateTotalCost,
  };
}
