import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';
import attributes from './attributes';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import deprecated from './deprecated';

/**
 * Block Registration
 */
registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={112} height={78} viewBox="0 0 112 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={3} y={19} width={106} height={56} fill="white" stroke="#007CBA" strokeWidth={6} />
                <rect x={3} y={3} width={21} height={16} fill="white" stroke="#007CBA" strokeWidth={6} />
                <rect x={53} y={3} width={21} height={16} fill="white" stroke="#007CBA" strokeWidth={6} />
                <rect x={28} y={3} width={21} height={16} fill="white" stroke="#007CBA" strokeWidth={6} />
            </svg>
        )
    },
    attributes,
    edit: Edit,
    save: Save,
    deprecated
});
