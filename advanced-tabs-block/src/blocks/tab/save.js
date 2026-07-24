/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Save function
 */

export default function save({ attributes }) {
    const { tabId, tabParentId } = attributes;

    // Block Props
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div className="single-tab" data-tab-id={tabId} data-tab-parent-id={tabParentId}>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
