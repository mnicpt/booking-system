import BookingSystem from './BookingSystem';
import Room from '../Room';
import Booking from './Booking';
import { fail } from 'assert';

const system = new BookingSystem();

beforeEach(() => {
  system.addRoom(new Room({ level: 1, beds: 2 }));
});

it('should be able to add a room', () => {
  expect(system.getRoom(1).id).toEqual(1);
  expect(system.getRoom(1).level).toEqual(1);
  expect(system.getRoom(1).beds).toEqual(2);
});

it('should not allow invalid parameter when adding a room', () => {
  try {
    system.addRoom({});
  } catch (e) {
    expect(e.message).toEqual('Parameter must be of type Room.');
  }
});

it('should be able to remove a room', () => {
  system.removeRoom(2);
  try {
    system.getRoom(2);
  } catch (e) {
    expect(e.message).toEqual('This room does not exist.');
  }
});

it('should be able to get a room', () => {
  expect(system.getRoom(1).beds).toEqual(2);
});

it('should be able to book a room', () => {
  const booking = system.bookRoom(new Booking({
    room: system.getRoom(1),
    startDate: 1563320420000,
    endDate: 1563579620000,
    pets: 2,
    accessible: false,
  }));

  const room = booking.room;

  expect(room.id).toEqual(1);
  expect(room.level).toEqual(1);
  expect(room.beds).toEqual(2);
});

it('should be able to release a room', () => {
  const room = system.bookRoom(new Booking({
    room: system.getRoom(1),
    startDate: 1563320420000,
    endDate: 1563579620000,
    pets: 2,
    accessible: false,
  }));

  const releasedRoom = system.releaseRoom(1);
  expect(releasedRoom.id).toEqual(1);
});

it('should be able to calculate total cost', () => {
  const total = system.calculateTotalCost(new Booking({
    room: system.getRoom(1),
    startDate: 1563320420000,
    endDate: 1563579620000,
    pets: 2,
    accessible: false,
  }));
  expect(total).toEqual(245);
});

it('should throw error for invalid night booking', () => {
  try {
    system.calculateTotalCost(new Booking({
      room: system.getRoom(1),
      startDate: 1563320420000,
      endDate: 1563320420000,
      pets: 2,
      accessible: false,
    }));
    fail();
  } catch (e) {
    expect(e.message).toEqual('Invalid number of nights.');
  }
});

it('should throw error for invalid pet booking', () => {
  try {
    system.calculateTotalCost(new Booking({
      room: system.getRoom(1),
      startDate: 1563320420000,
      endDate: 1563579620000,
      pets: 3,
    }));
    fail();
  } catch (e) {
    expect(e.message).toEqual('Cannot have more than 2 pets in a room.');
  }
});
