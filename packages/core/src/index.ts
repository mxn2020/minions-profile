/**
 * Minions Profile SDK
 *
 * Your source of truth — verified bio claims, portfolio items, and rate cards
 *
 * @module @minions-profile/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Profile.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
