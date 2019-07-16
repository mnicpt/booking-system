import React from 'react';

/**
 * Motel Room
 * 
 * Sample Room:
 * {
 *  numBeds: 2,
 *  level: 1
 *  accessible: true,
 *  petsAllowed: true,
 *  cost, 50
 * }
 * 
 * @param  {...any} args
 */
export default function Room (...args) {
    const { beds, level } = args[0];
    const roomCosts = {
        1: 50,
        2: 75,
        3: 90
    };

    if (level < 1 || level > 2) throw new Error('Allowed number of levels are 1, or 2.');
    if (beds < 1 || beds > 3) throw new Error('Allowed number of beds are 1, 2, or 3.');

    const accessible = level === 1 ? true : false;
    const petsAllowed = level === 1 ? true : false;
    const cost = roomCosts[beds];

    this.booked = false;

    return { beds, level, accessible, petsAllowed, cost, booked: this.booked };
}