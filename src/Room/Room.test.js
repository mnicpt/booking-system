import Room from './Room';
import { fail } from 'assert';

it('initializes a room', () => {
  const room = new Room({ id: 1, level: 1, beds: 3 });

  expect(room.id).toEqual(1);
  expect(room.level).toEqual(1);
  expect(room.beds).toEqual(3);
  expect(room.accessible).toEqual(true);
  expect(room.petsAllowed).toEqual(true);
  expect(room.cost).toEqual(90);
});

it('throws Error for invalid level', () => {
  try {
    new Room({ id: 1, level: 0, beds: 2 });
    fail();
  } catch (e) {
    expect(e.message).toEqual('Allowed number of levels are 1, or 2.');
  }

  try {
    new Room({ id: 1, level: 4, beds: 1 });
    fail();
  } catch (e) {
    expect(e.message).toEqual('Allowed number of levels are 1, or 2.');
  }
});

it('throws Error for invalid number of beds', () => {
  try {
    new Room({ id: 1, level: 2, beds: 0 });
    fail();
  } catch (e) {
    expect(e.message).toEqual('Allowed number of beds are 1, 2, or 3.');
  }

  try {
    new Room({ id: 1, level: 2, beds: 4 });
    fail();
  } catch (e) {
    expect(e.message).toEqual('Allowed number of beds are 1, 2, or 3.');
  }
});
