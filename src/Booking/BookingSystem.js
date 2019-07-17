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

    if (rooms[roomCount + 1]) {
      throw new Error(`Room number ${roomCount + 1} already exists.`);
    }

    room.id = ++roomCount;
    rooms[roomCount] = room;
  };

  const removeRoom = (roomNumber) => {
    if (!rooms[roomNumber]) throw new Error('This room is not available.');
    delete rooms[roomNumber];
  };

  const getRoom = (roomNumber) => {
    if (!rooms[roomNumber]) throw new Error('This room does not exist.');
    return rooms[roomNumber];
  };

  const bookRoom = (newBooking) => {
    const proposedBooking = Object.assign({}, newBooking);

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

    let availableRooms = []; // room numbers
    if (newBooking.pets > 0 || newBooking.accessible) {
      availableRooms = reservableRoomNumbers.filter((roomNumber) => {
        const room = rooms[roomNumber];
        return room.level === 1 && room.beds === newBooking.room.beds;
      });
    } else {
      availableRooms = reservableRoomNumbers.filter((roomNumber) => {
        const room = rooms[roomNumber];
        return room.beds === newBooking.room.beds &&
          room.level === newBooking.room.level;
      });
    }

    if (availableRooms.length === 0) {
      throw new Error('This room is not available on these dates.');
    }

    proposedBooking.room = rooms[availableRooms[0]];
    bookings.push(proposedBooking);

    return proposedBooking;
  };

  const releaseRoom = (roomNumber) => {
    if (!rooms[roomNumber]) throw new Error('This room is not available.');

    let releasedRoom = null;
    let index = null;
    bookings.forEach((booking, i) => {
      if (booking.room.id === roomNumber) {
        index = i;
        releasedRoom = booking.room;
      }
    });

    bookings.splice(index, 1);
    return releasedRoom;
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
