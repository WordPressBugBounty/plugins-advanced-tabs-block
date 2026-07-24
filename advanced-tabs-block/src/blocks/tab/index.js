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
            <svg width={112} height={62} viewBox="0 0 112 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={3} y={3} width={106} height={56} fill="white" stroke="#007CBA" strokeWidth={6} />
            </svg>
        )
    },
    attributes,
    edit: Edit,
    save: Save,
    deprecated
});
