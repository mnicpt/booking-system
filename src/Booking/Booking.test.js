import React from 'react';
import ReactDOM from 'react-dom';
import Booking from './Booking';
import Room from '../Room'

const system = new Booking();

beforeEach(() => {
    system.addRoom(new Room({ level: 1, beds: 2}));
});

it ('should be able to add a room', () => {
    
    expect(system.availableRooms().length).toEqual(1);
});

it ('should be able to remove a room', () => {
    system.removeRoom(2);
    try {
        system.getRoom(2)
    } catch (e) {
        expect(true);
    }
});

it ('should be able to get a room', () => {
    expect(system.getRoom(1).beds).toEqual(2);
});

it ('should be able to book a room', () => {
    system.bookRoom(1);
    expect(system.getRoom(1).booked).toEqual(true);
});

it ('should be able to release a room', () => {
    system.releaseRoom(1);
    expect(system.getRoom(1).booked).toEqual(false);
});
