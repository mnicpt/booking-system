import React from 'react';
import ReactDOM from 'react-dom';
import Room from './Room';

it ('initializes a room', () => {
    const room = new Room({ level: 1, beds: 3 });

    expect(room.level).toEqual(1);
    expect(room.beds).toEqual(3);
    expect(room.accessible).toEqual(true);
    expect(room.petsAllowed).toEqual(true);
    expect(room.cost).toEqual(90);
});

it ('should be able set booked status on the room', () => {
    const room = new Room({ level: 1, beds: 3 });

    room.booked = true;
    expect(room.booked).toEqual(true);

    room.booked = false;
    expect(room.booked).toEqual(false);
});

it ('throws Error for invalid level', () => {
    try {
        new Room({ level: 4, numBeds: 0 });
    } catch (e) {
        expect(true);
    }

    try {
        new Room({ level: 4, numBeds: 4 });
    } catch (e) {
        expect(true);
    }
});

it ('throws Error for invalid number of beds', () => {
    try {
        new Room({ level: 0, numBeds: 3 });
    } catch (e) {
        expect(true);
    }

    try {
        new Room({ level: 3, numBeds: 3 });
    } catch (e) {
        expect(true);
    }
});
