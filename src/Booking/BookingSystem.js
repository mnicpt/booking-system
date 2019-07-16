import React from 'react';
import ReactDOM from 'react-dom';

export default function BookingSystem () {
    const rooms = {};
    let roomCount = 0;

    const addRoom = (room) => {
        if (!room.level || !room.beds) throw new Error('Parameter must be of type Room.');
        rooms[++roomCount] = room;
    };

    const removeRoom = (roomNumber) => {
        if (!rooms[roomNumber]) throw new Error('This room is not available.');
        delete rooms[roomNumber];
    };

    const getRoom = (roomNumber) => {
        if (!rooms[roomNumber]) throw new Error('This room is not available.');
        return rooms[roomNumber];
    };

    const bookRoom = (roomNumber) => {
        if (!rooms[roomNumber]) throw new Error('This room is not available.');
        rooms[roomNumber].booked = true;
    };

    const releaseRoom = (roomNumber) => {
        if (!rooms[roomNumber]) throw new Error('This room is not available.');
        rooms[roomNumber].booked = false;
    };

    const availableRooms = () => {
        return Object.keys(rooms).filter(roomNumber => getRoom(roomNumber).booked === false);
    };

    const calculateTotalCost = (booking) => {
        if (!booking.room || !booking.nights || !booking.pets) throw new Error('Parameter must be a Booking.');
        return booking.room.cost * booking.nights + (booking.pets > 0 ? 20 : 0);
    };

    return { addRoom, removeRoom, getRoom, bookRoom, releaseRoom, availableRooms, calculateTotalCost };
}
