/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { PanelBody, TextControl, Button, ToggleControl, TextareaControl } = wp.components;
const { Fragment } = wp.element;
const { createBlock } = wp.blocks;
const { select, dispatch } = wp.data;

/**
 * Internal dependencies
 */
import * as Controls from '../../controls';
import * as GlobalConstants from '../../constants';

const { ICON_TYPES } = GlobalConstants;

const { SortableItem, SortableControl, ButtonsGroupControl, IconPickerControl } = Controls;

const Sortable = ({ tabTitles, setAttributes, clientId, uniqueId, tabChildCount, handleTabClick }) => {
    const addNewTab = () => {
        // const thisBlock = getBlock(clientId);
        const innerBlocks = [...select('core/block-editor').getBlocks(clientId)];
        const maxId = tabTitles.reduce((acc, curr) => Math.max(parseInt(acc), parseInt(curr.id)), 0);
        const tabId = `${maxId + 1}`;

        const newBlock = createBlock('atbs/tab', {
            tabId,
            tabParentId: `${uniqueId}`
        });

        innerBlocks.splice(innerBlocks.length, 0, newBlock);
        dispatch('core/block-editor')
            .replaceInnerBlocks(clientId, innerBlocks)
            .then(() => {
                setAttributes({
                    tabTitles: [
                        ...tabTitles,
                        {
                            title: `Tab Title ${parseInt(innerBlocks.length)}`,
                            id: tabId,
                            hasMedia: true,
                            isDefault: false,
                            mediaType: 'iconLibrary',
                            icon: '0-circle',
                            customSVG: ''
                        }
                    ],
                    tabChildCount: tabChildCount + 1
                });
                handleTabClick(tabId);
            });

        //
    };

    // Remove Tab Item
    const removeTabItem = index => {
        const innerBlocks = select('core/block-editor').getBlocks(clientId);
        if (innerBlocks.length > 1) {
            innerBlocks.splice(index, 1);
            const newTabTitles = [...tabTitles];
            newTabTitles.splice(index, 1);

            dispatch('core/block-editor')
                .replaceInnerBlocks(clientId, innerBlocks)
                .then(() => {
                    // resetTabsOrder({ clientId, setAttributes, tabTitles: newTabTitles });
                    setAttributes({
                        tabTitles: newTabTitles,
                        tabChildCount: tabChildCount - 1
                    });
                });
        }
    };

    return (
        <div className="atbs-sortable">
            <SortableControl defaultItems={tabTitles} attributeName="tabTitles" setAttributes={setAttributes}>
                {tabTitles &&
                    tabTitles.map((item, index) => {
                        return (
                            <div className="dnd-container" key={index}>
                                <Button className="dnd-trash" icon="trash" onClick={() => removeTabItem(index)} />
                                <SortableItem key={item.id} id={item.id}>
                                    <PanelBody title={item.title ? item.title : __('Tab Title', 'advanced-tabs-block')} initialOpen={false}>
                                        <TextControl
                                            label={__('Tab Title', 'advanced-tabs-block')}
                                            value={item.title}
                                            onChange={value => {
                                                const newTabTitles = [...tabTitles];
                                                newTabTitles[index].title = value;
                                                setAttributes({
                                                    tabTitles: newTabTitles
                                                });
                                            }}
                                        />
                                        <ToggleControl
                                            label={__('Show Icon', 'advanced-tabs-block')}
                                            checked={item.hasMedia}
                                            onChange={() => {
                                                const newTabTitles = [...tabTitles];
                                                newTabTitles[index].hasMedia = !item.hasMedia;
                                                setAttributes({
                                                    tabTitles: newTabTitles
                                                });
                                            }}
                                        />
                                        {item.hasMedia && (
                                            <Fragment>
                                                <ButtonsGroupControl
                                                    label={__('Icon Type', 'advanced-tabs-block')}
                                                    value={item.mediaType && item.mediaType}
                                                    options={ICON_TYPES}
                                                    onChange={value => {
                                                        const newTabTitles = [...tabTitles];
                                                        newTabTitles[index].mediaType = value;
                                                        setAttributes({
                                                            tabTitles: newTabTitles
                                                        });
                                                    }}
                                                />
                                                {item.mediaType === 'iconLibrary' && (
                                                    <IconPickerControl
                                                        label={__('Pick an Icon', 'advanced-tabs-block')}
                                                        value={item.icon && item.icon}
                                                        onChange={value => {
                                                            const newTabTitles = [...tabTitles];
                                                            newTabTitles[index].icon = value;
                                                            setAttributes({
                                                                tabTitles: newTabTitles
                                                            });
                                                        }}
                                                    />
                                                )}
                                                {item.mediaType === 'uploadSVG' && (
                                                    <TextareaControl
                                                        label={__('Paste SVG Code', 'advanced-tabs-block')}
                                                        help={__('Paste your custom SVG codes here', 'advanced-tabs-block')}
                                                        value={item.customSVG && item.customSVG}
                                                        onChange={code => {
                                                            const newTabTitles = [...tabTitles];
                                                            newTabTitles[index].customSVG = code;
                                                            setAttributes({
                                                                tabTitles: newTabTitles
                                                            });
                                                        }}
                                                    />
                                                )}
                                            </Fragment>
                                        )}
                                    </PanelBody>
                                </SortableItem>
                            </div>
                        );
                    })}
            </SortableControl>
            <Button className="add-tab-btn" onClick={() => addNewTab()} variant="primary">
                {__('Add New Tab', 'advanced-tabs-block')}
            </Button>
        </div>
    );
};

export default Sortable;
