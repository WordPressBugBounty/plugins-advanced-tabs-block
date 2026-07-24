import * as Generators from '../../generators';
import * as Constants from './constants';
const {
    generateResBoxControlAttributes,
    generateBorderAttributes,
    generateTypographyAttributes,
    generateResRangeAttributes,
    generateAlignmentAttributes
} = Generators;
const {
    TITLES_ALIGNMENT,
    TITLES_GAP,
    TITLE_ICON_GAP,
    TC_BORDER,
    TC_BORDER_RADIUS,
    TC_PADDING,
    TC_MARGIN,
    ST_TYPO,
    ST_PADDING,
    ST_MARGIN,
    ST_BORDER,
    ST_BORDER_RADIUS,
    ICON_SIZE,
    SEPARATOR_WIDTH,
    CB_PADDING,
    CB_MARGIN,
    CB_BORDER,
    CB_BORDER_RADIUS,
    AT_BORDER,
    AT_BORDER_RADIUS,
    AT_PADDING,
    AT_MARGIN,
    AT_ICON_SIZE
} = Constants;

const attributes = {
    uniqueID: {
        type: 'string'
    },
    blockStyle: {
        type: 'object'
    },
    tabTitles: {
        type: 'array',
        default: []
    },
    tabChildCount: {
        type: 'number',
        default: 3
    },
    iconPosition: {
        type: 'string',
        default: 'icon_left'
    },
    titleColor: {
        type: 'string'
    },
    // titles container
    tcBgType: {
        type: 'string',
        default: 'classic'
    },
    tcBgColor: {
        type: 'string'
    },
    tcBgGradient: {
        type: 'string'
    },
    // single title
    stBgType: {
        type: 'string',
        default: 'classic'
    },
    stBgColor: {
        type: 'string'
    },
    stBgGradient: {
        type: 'string'
    },

    // icon
    iconColor: {
        type: 'string'
    },

    // title separator
    showSeparator: {
        type: 'boolean',
        default: false
    },
    separatorColor: {
        type: 'string'
    },

    // content body
    cbBgType: {
        type: 'string',
        default: 'classic'
    },
    cbBgColor: {
        type: 'string'
    },
    cbBgGradient: {
        type: 'string'
    },

    // active tab
    atColor: {
        type: 'string'
    },
    atBgType: {
        type: 'string',
        default: 'classic'
    },
    atBgColor: {
        type: 'string'
    },
    atBgGradient: {
        type: 'string'
    },
    atIconColor: {
        type: 'string'
    },
    // generator

    // active tab
    ...generateBorderAttributes({
        controlName: AT_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: AT_BORDER_RADIUS
    }),
    ...generateResBoxControlAttributes({
        controlName: AT_PADDING
    }),
    ...generateResBoxControlAttributes({
        controlName: AT_MARGIN
    }),
    ...generateResRangeAttributes({
        controlName: AT_ICON_SIZE
    }),

    // titles
    ...generateAlignmentAttributes({
        controlName: TITLES_ALIGNMENT
    }),
    ...generateResRangeAttributes({
        controlName: TITLE_ICON_GAP
    }),
    // titles container
    ...generateResBoxControlAttributes({
        controlName: TC_PADDING
    }),
    ...generateResBoxControlAttributes({
        controlName: TC_MARGIN
    }),
    ...generateBorderAttributes({
        controlName: TC_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: TC_BORDER_RADIUS
    }),

    // titles gap
    ...generateResRangeAttributes({
        controlName: TITLES_GAP
    }),

    // single title
    ...generateTypographyAttributes({
        controlName: ST_TYPO
    }),
    ...generateResBoxControlAttributes({
        controlName: ST_PADDING
    }),
    ...generateResBoxControlAttributes({
        controlName: ST_MARGIN
    }),
    ...generateBorderAttributes({
        controlName: ST_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: ST_BORDER_RADIUS
    }),

    // ICON SIZE
    ...generateResRangeAttributes({
        controlName: ICON_SIZE
    }),

    // separator
    ...generateResRangeAttributes({
        controlName: SEPARATOR_WIDTH
    }),

    // content body
    ...generateResBoxControlAttributes({
        controlName: CB_PADDING
    }),
    ...generateResBoxControlAttributes({
        controlName: CB_MARGIN
    }),
    ...generateBorderAttributes({
        controlName: CB_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: CB_BORDER_RADIUS
    })
};

export default attributes;
