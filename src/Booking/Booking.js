import React from 'react';
import ReactDOM from 'react-dom';

export default function Booking (...args) {
    const rooms = {};
    let roomCount = 0;

    const addRoom = (room) => {
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

    return { addRoom, removeRoom, getRoom, bookRoom, releaseRoom, availableRooms };
}
