//
// Static constants
//

// Physics constants
export const DAMPING    = 0.03;
export const DRAG       = 1 - DAMPING;
export const G          = 9.81;

/**
 * Enum for flag hoisting side.
 *
 * @readonly
 * @enum {string}
 * @typedef {string} Hoisting
 */
export const Hoisting = {
    DEXTER:   'dexter',
    SINISTER: 'sinister'
};

/**
 * Enum for cardinal directions.
 *
 * @readonly
 * @enum {string}
 * @typedef {string} Side
 */
export const Side = {
    TOP:    'top',
    LEFT:   'left',
    BOTTOM: 'bottom',
    RIGHT:  'right'
};

/**
 * Enum for front and back sides.
 *
 * @readonly
 * @enum {string}
 * @typedef {string} Face
 */
export const Face = {
    OBVERSE: 'obverse',
    REVERSE: 'reverse'
};

/**
 * Enum for flagpole types.
 *
 * @readonly
 * @enum {string}
 * @typedef {string} FlagpoleType
 */
export const FlagpoleType = {
    VERTICAL:   'vertical',
    HORIZONTAL: 'horizontal',
    OUTRIGGER:  'outrigger',
    CROSSBAR:   'crossbar',
    GALLERY:    'gallery'
};

/**
 * Enum for vertical flag hanging protocols.
 *
 * @readonly
 * @enum {string}
 * @typedef {string} VerticalHoisting
 */
export const VerticalHoisting = {
    /** Flag orientation does not change. */
    NONE: 'none',
    /** Flag is rotated 90 degrees clockwise. */
    TOP_RIGHT: 'topright',
    /** Flag is rotated 90 degrees clockwise and flipped horizontally. */
    TOP_LEFT: 'topleft'
};
