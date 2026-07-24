/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
const { RawHTML, Fragment, useEffect, useState, useRef } = wp.element;
const { __ } = wp.i18n;
import { times } from 'lodash';
const { useSelect, dispatch } = wp.data;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector.js';
import { softMinifyCssStrings } from '../../helper/softminify';

import * as Generators from '../../generators';
import * as Constants from './constants';

const { generateRangeStyles, generateBorderStyles, generateResBoxStyles, generateTypographyStyles, generateAlignmentStyles } = Generators;
const {
    TITLES_ALIGNMENT,
    TITLES_GAP,
    TITLE_ICON_GAP,
    TC_BORDER,
    TC_BORDER_RADIUS,
    TC_PADDING,
    TC_MARGIN,
    ST_TYPO,
    ST_BORDER,
    ST_BORDER_RADIUS,
    ST_MARGIN,
    ST_PADDING,
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

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        uniqueId,
        blockStyle,
        tabTitles,
        titleColor,
        tabChildCount,
        iconPosition,
        tcBgType,
        tcBgColor,
        tcBgGradient,
        stBgType,
        stBgColor,
        stBgGradient,
        iconColor,
        showSeparator,
        separatorColor,
        cbBgType,
        cbBgColor,
        cbBgGradient,
        atColor,
        atBgType,
        atBgColor,
        atBgGradient,
        atIconColor
    } = attributes;
    const tabWrapRef = useRef(null);
    const [activeTabId, setActiveTabId] = useState(false);
    const activeDefaultTabId = (tabTitles.find(item => item.isDefault) || { id: '1' }).id;
    useEffect(() => {
        if (!uniqueId) {
            setAttributes({
                uniqueId: 'atbs-tabs-' + clientId.slice(0, 8)
            });
        }
        // add default tab
        if (tabTitles.length === 0) {
            setAttributes({
                tabTitles: [
                    {
                        id: '1',
                        title: 'Tab 1',
                        hasMedia: false,
                        isDefault: true,
                        mediaType: 'iconLibrary',
                        icon: '0-circle',
                        customSVG: ''
                    },
                    {
                        id: '2',
                        title: 'Tab 2',
                        hasMedia: false,
                        isDefault: false,
                        mediaType: 'iconLibrary',
                        icon: '0-circle',
                        customSVG: ''
                    },
                    {
                        id: '3',
                        title: 'Tab 3',
                        hasMedia: false,
                        isDefault: false,
                        mediaType: 'iconLibrary',
                        icon: '0-circle',
                        customSVG: ''
                    }
                ]
            });
        }
    }, []);

    const { innerBlocks } = useSelect(select => select('core/block-editor').getBlocksByClientId(clientId)[0]);
    useEffect(() => {
        const { updateBlockAttributes } = dispatch('core/block-editor');
        times(innerBlocks.length, n => {
            updateBlockAttributes(innerBlocks[n].clientId, {
                tabParentId: `${uniqueId}`
            });
        });
    }, [uniqueId, innerBlocks]);

    // Handle Tab Click
    const handleTabClick = id => {
        // setIsClickTab(true);
        const tabsParentEl = (tabWrapRef || { current: false }).current;
        if (!tabsParentEl) return false;
        const allTabChildWraps = tabsParentEl.querySelectorAll(`.single-tab`);
        if (allTabChildWraps.length === 0) return false;
        for (const tabWrapDiv of allTabChildWraps) {
            const tabId = tabWrapDiv.dataset.tabId;
            if (tabId === id) {
                tabWrapDiv.style.display = 'block';
                tabWrapDiv.style.animation = 'fadeIn 0.3s';
            } else {
                tabWrapDiv.style.display = 'none';
            }
        }
        setActiveTabId(`${id}`);
    };

    // Block Props
    const blockProps = useBlockProps({
        className: uniqueId
    });

    /**
     * Styles Generator
     */
    const {
        deskAlign: titleDeskAlign,
        tabAlign: titleTabAlign,
        mobAlign: titleMobAlign
    } = generateAlignmentStyles({
        controlName: TITLES_ALIGNMENT,
        attributes,
        propertyName: 'justify-content'
    });

    // title gap
    const {
        deskStyle: titlesDeskGap,
        tabStyle: titlesTabGap,
        mobStyle: titlesMobGap
    } = generateRangeStyles({
        controlName: TITLES_GAP,
        attributes,
        propertyName: 'gap'
    });

    // title - icon gap
    const {
        deskStyle: titleIconDeskGap,
        tabStyle: titleIconTabGap,
        mobStyle: titleIconMobGap
    } = generateRangeStyles({
        controlName: TITLE_ICON_GAP,
        attributes,
        propertyName: 'gap'
    });

    // titles container
    const {
        boxDeskStyles: tcDeskPadding,
        boxTabStyles: tcTabPadding,
        boxMobStyles: tcMobPadding
    } = generateResBoxStyles({
        controlName: TC_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: tcDeskMargin,
        boxTabStyles: tcTabMargin,
        boxMobStyles: tcMobMargin
    } = generateResBoxStyles({
        controlName: TC_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: tcDeskBorder,
        tabletStyles: tcTabBorder,
        mobileStyles: tcMobBorder
    } = generateBorderStyles({
        controlName: TC_BORDER,
        attributes
    });

    const {
        boxDeskStyles: tcDeskRadius,
        boxTabStyles: tcTabRadius,
        boxMobStyles: tcMobRadius
    } = generateResBoxStyles({
        controlName: TC_BORDER_RADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    // individaul title
    const {
        desktopStyles: stDeskTypo,
        tabletStyles: stTabTypo,
        mobileStyles: stMobTypo
    } = generateTypographyStyles({
        controlName: ST_TYPO,
        attributes
    });

    const {
        boxDeskStyles: stDeskPadding,
        boxTabStyles: stTabPadding,
        boxMobStyles: stMobPadding
    } = generateResBoxStyles({
        controlName: ST_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: stDeskMargin,
        boxTabStyles: stTabMargin,
        boxMobStyles: stMobMargin
    } = generateResBoxStyles({
        controlName: ST_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: stDeskBorder,
        tabletStyles: stTabBorder,
        mobileStyles: stMobBorder
    } = generateBorderStyles({
        controlName: ST_BORDER,
        attributes
    });

    const {
        boxDeskStyles: stDeskRadius,
        boxTabStyles: stTabRadius,
        boxMobStyles: stMobRadius
    } = generateResBoxStyles({
        controlName: ST_BORDER_RADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    // separator
    const {
        deskStyle: titleDeskSeparator,
        tabStyle: titleTabSeparator,
        mobStyle: titleMobSeparator
    } = generateRangeStyles({
        controlName: SEPARATOR_WIDTH,
        attributes,
        noProperty: true
    });

    // icon
    const {
        deskStyle: iconDeskSize,
        tabStyle: iconTabSize,
        mobStyle: iconMobSize
    } = generateRangeStyles({
        controlName: ICON_SIZE,
        attributes,
        propertyName: 'font-size'
    });

    const {
        deskStyle: svgDeskSize,
        tabStyle: svgTabSize,
        mobStyle: svgMobSize
    } = generateRangeStyles({
        controlName: ICON_SIZE,
        attributes,
        propertyName: 'height'
    });

    // Content Body
    const {
        boxDeskStyles: cbDeskPadding,
        boxTabStyles: cbTabPadding,
        boxMobStyles: cbMobPadding
    } = generateResBoxStyles({
        controlName: CB_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: cbDeskMargin,
        boxTabStyles: cbTabMargin,
        boxMobStyles: cbMobMargin
    } = generateResBoxStyles({
        controlName: CB_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: cbDeskBorder,
        tabletStyles: cbTabBorder,
        mobileStyles: cbMobBorder
    } = generateBorderStyles({
        controlName: CB_BORDER,
        attributes
    });

    const {
        boxDeskStyles: cbDeskRadius,
        boxTabStyles: cbTabRadius,
        boxMobStyles: cbMobRadius
    } = generateResBoxStyles({
        controlName: CB_BORDER_RADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    // active tab

    const {
        boxDeskStyles: atDeskPadding,
        boxTabStyles: atTabPadding,
        boxMobStyles: atMobPadding
    } = generateResBoxStyles({
        controlName: AT_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: atDeskMargin,
        boxTabStyles: atTabMargin,
        boxMobStyles: atMobMargin
    } = generateResBoxStyles({
        controlName: AT_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: atDeskBorder,
        tabletStyles: atTabBorder,
        mobileStyles: atMobBorder
    } = generateBorderStyles({
        controlName: AT_BORDER,
        attributes
    });

    const {
        boxDeskStyles: atDeskRadius,
        boxTabStyles: atTabRadius,
        boxMobStyles: atMobRadius
    } = generateResBoxStyles({
        controlName: AT_BORDER_RADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        deskStyle: atIconDeskSize,
        tabStyle: atIconTabSize,
        mobStyle: atIconMobSize
    } = generateRangeStyles({
        controlName: AT_ICON_SIZE,
        attributes,
        propertyName: 'font-size'
    });

    const {
        deskStyle: atSvgDeskSize,
        tabStyle: atSvgTabSize,
        mobStyle: atSvgMobSize
    } = generateRangeStyles({
        controlName: AT_ICON_SIZE,
        attributes,
        propertyName: 'height'
    });

    /**
     * Block Styles
     */
    const deskStyles = `
        ${
            tcDeskPadding || tcDeskMargin || tcDeskBorder || tcDeskRadius || tcBgColor || tcBgGradient
                ? `
            .${uniqueId} .tabs-nav {
                ${tcDeskPadding ? tcDeskPadding : ''}
                ${tcDeskMargin ? tcDeskMargin : ''}
                ${tcDeskBorder ? tcDeskBorder : ''}
                ${tcDeskRadius ? tcDeskRadius : ''}
                ${tcBgType === 'classic' && tcBgColor ? `background-color: ${tcBgColor};` : ''}
                ${tcBgType === 'gradient' && tcBgGradient ? `background-image: ${tcBgGradient};` : ''}
            }
            `
                : ''
        }
        ${
            titleDeskAlign || titlesDeskGap
                ? `.${uniqueId} .tabs-titles {
            ${titleDeskAlign ? titleDeskAlign : ''}
            ${titlesDeskGap ? titlesDeskGap : ''}
        }`
                : ''
        }
        ${
            titleDeskAlign && titleDeskAlign !== 'justify-content:space-between;'
                ? `.${uniqueId} .tabs-titles .tab-title {
            width: auto;
        }`
                : ''
        }
        ${
            stDeskPadding || stDeskMargin || stDeskBorder || stDeskRadius || stBgColor || stBgGradient || titleIconDeskGap
                ? `
            .${uniqueId} .tabs-nav .tab-title {
                ${titleIconDeskGap ? titleIconDeskGap : ''}
                ${stDeskPadding ? stDeskPadding : ''}
                ${stDeskMargin ? stDeskMargin : ''}
                ${stDeskBorder ? stDeskBorder : ''}
                ${stDeskRadius ? stDeskRadius : ''}
                ${stBgType === 'classic' && stBgColor ? `background-color: ${stBgColor};` : ''}
                ${stBgType === 'gradient' && stBgGradient ? `background-image: ${stBgGradient};` : ''}
            } 
            `
                : ''
        }
        ${
            atDeskPadding || atDeskMargin || atDeskBorder || atDeskRadius || atBgColor || atBgGradient || atColor
                ? `
            .${uniqueId} .tabs-nav .tab-title.active {
                ${atColor ? `color: ${atColor};` : ''}
                ${atDeskPadding ? atDeskPadding : ''}
                ${atDeskMargin ? atDeskMargin : ''}
                ${atDeskBorder ? atDeskBorder : ''}
                ${atDeskRadius ? atDeskRadius : ''}
                ${atBgType === 'classic' && atBgColor ? `background-color: ${atBgColor};` : ''}
                ${atBgType === 'gradient' && atBgGradient ? `background-image: ${atBgGradient};` : ''}
            } 
            `
                : ''
        }
        ${
            atColor
                ? `
            .${uniqueId} .tabs-nav .tab-title.active .tab-title-text{
                ${atColor ? `color: ${atColor};` : ''}
            } 
            `
                : ''
        }
        ${
            showSeparator && titleDeskSeparator
                ? `.${uniqueId} .tab-title + .tab-title {
                    ${titleDeskSeparator ? `border-left-width: ${titleDeskSeparator}` : ''}
                    ${separatorColor ? `border-left-color: ${separatorColor};` : ''}
                    border-left-style: solid;
            }`
                : ''
        }
        ${
            stDeskTypo || titleColor
                ? `.${uniqueId} .tabs-nav .tab-title .tab-title-text {
                    ${stDeskTypo ? stDeskTypo : ''}
                    ${titleColor ? `color: ${titleColor};` : ''}
            }`
                : ''
        }
        ${
            iconDeskSize || iconColor
                ? `.${uniqueId} .tabs-nav .tab-title .tab-title-media i {
                    ${iconDeskSize ? iconDeskSize : ''}
                    ${iconColor ? `color: ${iconColor};` : ''}
            }`
                : ''
        }
        ${
            svgDeskSize || iconColor
                ? `.${uniqueId} .tabs-nav .tab-title .tab-title-media svg {
                    ${svgDeskSize ? svgDeskSize : ''}
                    ${iconColor ? `fill: ${iconColor};` : ''}
            }`
                : ''
        }
        ${
            atIconDeskSize || atIconColor
                ? `.${uniqueId} .tabs-nav .tab-title.active .tab-title-media i {
                    ${atIconDeskSize ? atIconDeskSize : ''}
                    ${atIconColor ? `color: ${atIconColor};` : ''}
            }`
                : ''
        }
        ${
            atSvgDeskSize || atIconColor
                ? `.${uniqueId} .tabs-nav .tab-title.active .tab-title-media svg {
                    ${atSvgDeskSize ? atSvgDeskSize : ''}
                    ${atIconColor ? `fill: ${atIconColor};` : ''}
            }`
                : ''
        }
        ${
            cbDeskPadding || cbDeskMargin || cbDeskBorder || cbDeskRadius || cbBgColor || cbBgGradient
                ? `
            .${uniqueId} .tabs-content {
                ${cbDeskPadding ? cbDeskPadding : ''}
                ${cbDeskMargin ? cbDeskMargin : ''}
                ${cbDeskBorder ? cbDeskBorder : ''}
                ${cbDeskRadius ? cbDeskRadius : ''}
                ${cbBgType === 'classic' && cbBgColor ? `background-color: ${cbBgColor};` : ''}
                ${cbBgType === 'gradient' && cbBgGradient ? `background-image: ${cbBgGradient};` : ''}
            } 
            `
                : ''
        }
    `;
    const tabStyles = `
        ${
            titleTabAlign || titlesTabGap
                ? `.${uniqueId} .tabs-titles {
            ${titleTabAlign ? titleTabAlign : ''}
            ${titlesTabGap ? titlesTabGap : ''}
        }`
                : ''
        }
        ${
            titleTabAlign !== 'justify-content:space-between;'
                ? `.${uniqueId} .tabs-titles .tab-title {
            width: auto;
        }`
                : ''
        }
        ${
            tcTabPadding || tcTabMargin || tcTabBorder || tcTabRadius
                ? `
            .${uniqueId} .tabs-nav {
                ${tcTabPadding ? tcTabPadding : ''}
                ${tcTabMargin ? tcTabMargin : ''}
                ${tcTabBorder ? tcTabBorder : ''}
                ${tcTabRadius ? tcTabRadius : ''}
            }
            `
                : ''
        }
        ${
            stTabPadding || stTabMargin || stTabBorder || stTabRadius || titleIconTabGap || stTabTypo
                ? `
            .${uniqueId} .tabs-nav .tab-title {
                ${titleIconTabGap ? titleIconTabGap : ''}
                ${stTabTypo ? stTabTypo : ''}
                ${stTabPadding ? stTabPadding : ''}
                ${stTabMargin ? stTabMargin : ''}
                ${stTabBorder ? stTabBorder : ''}
                ${stTabRadius ? stTabRadius : ''}
            }
            `
                : ''
        }
        ${
            atTabPadding || atTabMargin || atTabBorder || atTabRadius
                ? `
            .${uniqueId} .tabs-nav .tab-title.active {
                ${atTabPadding ? atTabPadding : ''}
                ${atTabMargin ? atTabMargin : ''}
                ${atTabBorder ? atTabBorder : ''}
                ${atTabRadius ? atTabRadius : ''}
            }
            `
                : ''
        }
        ${
            showSeparator && titleTabSeparator
                ? `.${uniqueId} .tab-title + .tab-title {
                    ${titleTabSeparator ? `border-left-width: ${titleTabSeparator}` : ''}
                    ${separatorColor ? `border-left-color: ${separatorColor};` : ''}
                    border-left-style: solid;
            }`
                : ''
        }
        ${
            iconTabSize
                ? `.${uniqueId} .tabs-nav .tab-title .tab-title-media i {
                    ${iconTabSize ? iconTabSize : ''}
            }`
                : ''
        }
        ${
            svgTabSize
                ? `.${uniqueId} .tabs-nav .tab-title .tab-title-media svg {
                    ${svgTabSize ? svgTabSize : ''}
            }`
                : ''
        }
        ${
            atIconTabSize
                ? `.${uniqueId} .tabs-nav .tab-title.active .tab-title-media i {
                    ${atIconTabSize ? atIconTabSize : ''}
            }`
                : ''
        }
        ${
            atSvgTabSize
                ? `.${uniqueId} .tabs-nav .tab-title.active .tab-title-media svg {
                    ${atSvgTabSize ? atSvgTabSize : ''}
            }`
                : ''
        }
        ${
            cbTabPadding || cbTabMargin || cbTabBorder || cbTabRadius
                ? `
            .${uniqueId} .tabs-content {
                ${cbTabPadding ? cbTabPadding : ''}
                ${cbTabMargin ? cbTabMargin : ''}
                ${cbTabBorder ? cbTabBorder : ''}
                ${stTabRadius ? stTabRadius : ''}
            }
            `
                : ''
        }
    `;
    const mobStyles = `
        ${
            titleMobAlign || titlesMobGap
                ? `.${uniqueId} .tabs-titles {
            ${titleMobAlign ? titleMobAlign : ''}
            ${titlesMobGap ? titlesMobGap : ''}
        }`
                : ''
        }
        ${
            titleMobAlign !== 'justify-content:space-between;'
                ? `.${uniqueId} .tabs-titles .tab-title {
            width: auto;
        }`
                : ''
        }
        ${
            tcMobPadding || tcMobMargin || tcMobBorder || tcMobRadius
                ? `
            .${uniqueId} .tabs-nav {
                ${tcMobPadding ? tcMobPadding : ''}
                ${tcMobMargin ? tcMobMargin : ''}
                ${tcMobBorder ? tcMobBorder : ''}
                ${tcMobRadius ? tcMobRadius : ''}
            }
            `
                : ''
        }
        ${
            stMobPadding || stMobMargin || stMobBorder || stMobRadius || titleIconMobGap || stMobTypo
                ? `
            .${uniqueId} .tabs-nav .tab-title {
                ${stMobTypo ? stMobTypo : ''}
                ${titleIconMobGap ? titleIconMobGap : ''}
                ${stMobPadding ? stMobPadding : ''}
                ${stMobMargin ? stMobMargin : ''}
                ${stMobBorder ? stMobBorder : ''}
                ${stMobRadius ? stMobRadius : ''}
            }
            `
                : ''
        }
        ${
            atMobPadding || atMobMargin || atMobBorder || atMobRadius
                ? `
            .${uniqueId} .tabs-nav .tab-title.active {
                ${atMobPadding ? atMobPadding : ''}
                ${atMobMargin ? atMobMargin : ''}
                ${atMobBorder ? atMobBorder : ''}
                ${atMobRadius ? atMobRadius : ''}
            }
            `
                : ''
        }
        ${
            showSeparator && titleMobSeparator
                ? `.${uniqueId} .tab-title + .tab-title {
                    ${titleMobSeparator ? `border-left-width: ${titleMobSeparator}` : ''}
                    ${separatorColor ? `border-left-color: ${separatorColor};` : ''}
                    border-left-style: solid;
            }`
                : ''
        }
        ${
            iconMobSize
                ? `.${uniqueId} .tabs-nav .tab-title .tab-title-media i {
                    ${iconMobSize ? iconMobSize : ''}
            }`
                : ''
        }
        ${
            svgMobSize
                ? `.${uniqueId} .tabs-nav .tab-title .tab-title-media svg {
                    ${svgMobSize ? svgMobSize : ''}
            }`
                : ''
        }
        ${
            atIconMobSize
                ? `.${uniqueId} .tabs-nav .tab-title.active .tab-title-media i {
                    ${atIconMobSize ? atIconMobSize : ''}
            }`
                : ''
        }
        ${
            atSvgMobSize
                ? `.${uniqueId} .tabs-nav .tab-title.active .tab-title-media svg {
                    ${atSvgMobSize ? atSvgMobSize : ''}
            }`
                : ''
        }
        ${
            cbMobPadding || cbMobMargin || cbMobBorder || cbMobRadius
                ? `
            .${uniqueId} .tabs-content {
                ${cbMobPadding ? cbMobPadding : ''}
                ${cbMobMargin ? cbMobMargin : ''}
                ${cbMobBorder ? cbMobBorder : ''}
                ${cbMobRadius ? cbMobRadius : ''}
            }
            `
                : ''
        }
    `;

    /**
     * Block All Styles
     */
    const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

    // Set Block Styles
    useEffect(() => {
        if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
            setAttributes({ blockStyle: blockStyleCss });
        }
    }, [attributes, blockStyleCss]);

    return (
        <Fragment>
            <style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
            <Inspector attributes={attributes} setAttributes={setAttributes} handleTabClick={handleTabClick} clientId={clientId} />
            <div {...blockProps}>
                <div className="tabs-container" ref={tabWrapRef}>
                    <div className="tabs-nav">
                        <ul className="tabs-titles">
                            {tabTitles &&
                                tabTitles.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`tab-title ${iconPosition} ${
                                                (activeTabId || activeDefaultTabId) === item.id ? 'active' : ''
                                            }`}
                                            data-title-tab-id={item.id}
                                            role="button"
                                            onClick={() => {
                                                handleTabClick(item.id);
                                            }}
                                        >
                                            {item.hasMedia && (
                                                <div className="tab-title-media">
                                                    {item.mediaType === 'iconLibrary' ? (
                                                        <i className={`bi bi-${item.icon}`}></i>
                                                    ) : (
                                                        item.customSVG && item.customSVG !== '' && <RawHTML>{item.customSVG}</RawHTML>
                                                    )}
                                                </div>
                                            )}
                                            <RichText
                                                tagName="span"
                                                className="tab-title-text"
                                                value={item.title}
                                                onChange={value => {
                                                    const newTabTitles = [...tabTitles];
                                                    newTabTitles[index].title = value;
                                                    setAttributes({
                                                        tabTitles: newTabTitles
                                                    });
                                                }}
                                                placeholder={__('Tab Title..', 'arkhe-blocks')}
                                            />
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    <div className="tabs-content">
                        <InnerBlocks
                            templateLock="all"
                            template={times(tabChildCount, n => [
                                'atbs/tab',
                                {
                                    tabId: `${n + 1}`,
                                    tabParentId: uniqueId
                                }
                            ])}
                            allowedBlocks={['atbs/tab']}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
