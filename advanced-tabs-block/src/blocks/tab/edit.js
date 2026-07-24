/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

// editor style
import './editor.scss';

/**
 * Edit function
 */

export default function Edit({ attributes, clientId }) {
    const { tabId, tabParentId } = attributes;

    return (
        <div {...useBlockProps()}>
            <div
                className="single-tab"
                data-tab-id={tabId}
                data-tab-parent-id={tabParentId}
                style={{
                    display: `${tabId === '1' ? 'block' : 'none'}`
                }}
            >
                <InnerBlocks
                    orientation={'vertical'}
                    templateLock={false}
                    renderAppender={
                        select('core/block-editor').getBlockOrder(clientId).length > 0 ? undefined : InnerBlocks.ButtonBlockAppender
                    }
                />
            </div>
        </div>
    );
}
