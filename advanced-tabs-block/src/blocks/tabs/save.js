/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
const { RawHTML } = wp.element;

/**
 * Save function
 */

export default function save({ attributes }) {
    const { uniqueId, tabTitles, iconPosition } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: uniqueId
    });

    return (
        <div {...blockProps}>
            <div className="tabs-container">
                <div className="tabs-nav">
                    <ul className="tabs-titles">
                        {tabTitles &&
                            tabTitles.map((item, index) => {
                                return (
                                    <li key={index} className={`tab-title ${iconPosition}`} data-title-tab-id={item.id} role="button">
                                        {item.hasMedia && (
                                            <div className="tab-title-media">
                                                {item.mediaType === 'iconLibrary' ? (
                                                    <i className={`bi bi-${item.icon}`}></i>
                                                ) : (
                                                    item.customSVG && item.customSVG !== '' && <RawHTML>{item.customSVG}</RawHTML>
                                                )}
                                            </div>
                                        )}
                                        <RichText.Content tagName="span" className="tab-title-text" value={item.title} />
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <div className="tabs-content">
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
}
