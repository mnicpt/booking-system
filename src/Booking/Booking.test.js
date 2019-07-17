import BookingSystem from './BookingSystem'
import Room from '../Room'
import Booking from './Booking'
import { fail } from 'assert'

const system = new BookingSystem()

beforeEach(() => {
  system.addRoom(new Room({ level: 1, beds: 2 }))
})

it('should be able to create a valid booking', () => {
  const room = new Room({
    beds: 3,
    level: 1
  })
  const booking = new Booking({
    room,
    pets: 1,
    startDate: 1563320420000,
    endDate: 1563579620000
  });
  expect(booking.room).toEqual(room);
  expect(booking.pets).toEqual(1);
  expect(booking.startDate).toEqual(1563320420000);
  expect(booking.endDate).toEqual(1563579620000);
})

it('should not create a booking with invalid room', () => {
  try {
    const room = {}
    const booking = new Booking({
      room,
      pets: 1,
      startDate: 1563320420000,
      endDate: 1563579620000
    });
    fail()
  } catch (e) {
    expect(e.message).toEqual('Invalid room definition.')
  }
})

it('should not create a booking with invalid pets', () => {
  try {
    const room = new Room({
      beds: 3,
      level: 1
    })
    const booking = new Booking({
      room,
      pets: 3,
      startDate: 1563320420000,
      endDate: 1563579620000
    })
    fail()
  } catch (e) {
    expect(e.message).toEqual('Cannot have more than 2 pets in a room.')
  }
})

it('should not create a booking with invalid nights', () => {
  try {
    const room = new Room({
      beds: 3,
      level: 1
    })
    const booking = new Booking({
      room,
      pets: 2,
      startDate: 1563320420000,
      endDate: 1563320420000
    });
    fail()
  } catch (e) {
    expect(e.message).toEqual('Invalid number of nights.')
  }
})

it('should not create a booking if room is already booked', () => {
  try {
    const room = new Room({
      beds: 3,
      level: 1
    })
    room.booked = true

    const booking = new Booking({
      room,
      pets: 2,
      startDate: 1563320420000,
      endDate: 1563579620000
    });
    fail()
  } catch (e) {
    expect(e.message).toEqual('Room is already booked.')
  }
})
