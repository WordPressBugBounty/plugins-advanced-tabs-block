/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, GradientPicker, CardDivider, ToggleControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';
import * as GlobalConstants from '../../constants';

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

const { FLEX_ALL, POSITIONS, BACKGROUND_TYPES, GRADIENT_PALETTES } = GlobalConstants;

import Sortable from './sortable';
import objAttributes from './attributes';

const {
    HeaderTabs,
    ResRangeControl,
    ResBoxControl,
    ColorControl,
    AlignmentControl,
    TypographyControl,
    BorderControl,
    ButtonsGroupControl
} = Controls;

const Inspector = ({ attributes, setAttributes, handleTabClick, clientId }) => {
    const {
        uniqueId,
        tabTitles,
        tabChildCount,
        titleColor,
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
        iconPosition,
        atColor,
        atBgType,
        atBgColor,
        atBgGradient,
        atIconColor
    } = attributes;

    const objAttrs = {
        attributes,
        setAttributes,
        objAttributes
    };

    return (
        <HeaderTabs
            settingTabContent={
                <Fragment>
                    <PanelBody title={__('Tab Items', 'advanced-tabs-block')} initialOpen={false}>
                        <Sortable
                            tabTitles={tabTitles}
                            setAttributes={setAttributes}
                            clientId={clientId}
                            uniqueId={uniqueId}
                            tabChildCount={tabChildCount}
                            handleTabClick={handleTabClick}
                        />
                    </PanelBody>
                    <PanelBody title={__('Tab Tiltes', 'advanced-tabs-block')} initialOpen={false}>
                        <AlignmentControl
                            label={__('Alignment', 'advanced-tabs-block')}
                            controlName={TITLES_ALIGNMENT}
                            objAttrs={objAttrs}
                            flexAlign={true}
                            options={FLEX_ALL}
                        />
                        <ButtonsGroupControl
                            label={__('Icon Position', 'advanced-tabs-block')}
                            value={iconPosition}
                            onChange={value => setAttributes({ iconPosition: value })}
                            options={POSITIONS}
                            hasIcons={true}
                        />
                        <ResRangeControl
                            label={__('Titles Gap', 'advanced-tabs-block')}
                            controlName={TITLES_GAP}
                            objAttrs={objAttrs}
                            min={0}
                            max={100}
                            units={['px', 'em']}
                        />
                        <ResRangeControl
                            label={__('Icon Gap', 'advanced-tabs-block')}
                            controlName={TITLE_ICON_GAP}
                            objAttrs={objAttrs}
                            min={0}
                            max={100}
                            units={['px', 'em']}
                        />
                    </PanelBody>
                    <PanelBody title={__('Title Separator', 'advanced-tabs-block')} initialOpen={false}>
                        <ToggleControl
                            label={__('Show Separator', 'advanced-tabs-block')}
                            checked={showSeparator}
                            onChange={() => setAttributes({ showSeparator: !showSeparator })}
                        />
                    </PanelBody>
                </Fragment>
            }
            designTabContent={
                <Fragment>
                    <PanelBody title={__('Titles Container', 'advanced-tabs-block')} initialOpen={false}>
                        <BorderControl controlName={TC_BORDER} objAttrs={objAttrs} noHover={true} />
                        <ResBoxControl
                            label={__('Border Radius', 'advanced-tabs-block')}
                            controlName={TC_BORDER_RADIUS}
                            objAttrs={objAttrs}
                            min={0}
                            max={100}
                        />
                        <ResBoxControl
                            label={__('Padding', 'advanced-tabs-block')}
                            controlName={TC_PADDING}
                            objAttrs={objAttrs}
                            min={0}
                            max={200}
                        />
                        <ResBoxControl
                            label={__('Margin', 'advanced-tabs-block')}
                            controlName={TC_MARGIN}
                            objAttrs={objAttrs}
                            min={-200}
                            max={200}
                        />
                        <ButtonsGroupControl
                            label={__('Background Type', 'gutsliders')}
                            value={tcBgType}
                            options={BACKGROUND_TYPES}
                            onChange={value => {
                                setAttributes({ tcBgType: value });
                            }}
                        />
                        {tcBgType === 'classic' && (
                            <ColorControl
                                label={__('Background Color', 'gutsliders')}
                                color={tcBgColor}
                                onChange={value => {
                                    setAttributes({ tcBgColor: value });
                                }}
                            />
                        )}
                        {tcBgType === 'gradient' && (
                            <GradientPicker
                                __nextHasNoMargin={true}
                                value={tcBgGradient}
                                onChange={currentGradient => {
                                    setAttributes({ tcBgGradient: currentGradient });
                                }}
                                gradients={GRADIENT_PALETTES}
                            />
                        )}
                    </PanelBody>
                    <PanelBody title={__('Individual Title', 'advanced-tabs-block')} initialOpen={false}>
                        <TypographyControl label={__('Typography', 'advanced-tabs-block')} controlName={ST_TYPO} objAttrs={objAttrs} />
                        <ColorControl
                            label={__('Color', 'gutsliders')}
                            color={titleColor}
                            onChange={value => {
                                setAttributes({ titleColor: value });
                            }}
                        />
                        <BorderControl controlName={ST_BORDER} objAttrs={objAttrs} noHover={true} />
                        <ResBoxControl
                            label={__('Border Radius', 'advanced-tabs-block')}
                            controlName={ST_BORDER_RADIUS}
                            objAttrs={objAttrs}
                            min={0}
                            max={100}
                        />
                        <ResBoxControl
                            label={__('Padding', 'advanced-tabs-block')}
                            controlName={ST_PADDING}
                            objAttrs={objAttrs}
                            min={0}
                            max={200}
                        />
                        <ResBoxControl
                            label={__('Margin', 'advanced-tabs-block')}
                            controlName={ST_MARGIN}
                            objAttrs={objAttrs}
                            min={-200}
                            max={200}
                        />
                        <ButtonsGroupControl
                            label={__('Background Type', 'gutsliders')}
                            value={stBgType}
                            options={BACKGROUND_TYPES}
                            onChange={value => {
                                setAttributes({ stBgType: value });
                            }}
                        />
                        {stBgType === 'classic' && (
                            <ColorControl
                                label={__('Background Color', 'gutsliders')}
                                color={stBgColor}
                                onChange={value => {
                                    setAttributes({ stBgColor: value });
                                }}
                            />
                        )}
                        {stBgType === 'gradient' && (
                            <GradientPicker
                                __nextHasNoMargin={true}
                                value={stBgGradient}
                                onChange={currentGradient => {
                                    setAttributes({ stBgGradient: currentGradient });
                                }}
                                gradients={GRADIENT_PALETTES}
                            />
                        )}
                    </PanelBody>
                    {showSeparator && (
                        <PanelBody title={__('Title Separator', 'advanced-tabs-block')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Separator Width', 'advanced-tabs-block')}
                                controlName={SEPARATOR_WIDTH}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                                units={['px', 'em']}
                            />
                            <ColorControl
                                label={__('Separator Color', 'gutsliders')}
                                color={separatorColor}
                                onChange={value => {
                                    setAttributes({ separatorColor: value });
                                }}
                            />
                        </PanelBody>
                    )}
                    <PanelBody title={__('Icon', 'advanced-tabs-block')} initialOpen={false}>
                        <ResRangeControl
                            label={__('Size', 'advanced-tabs-block')}
                            controlName={ICON_SIZE}
                            objAttrs={objAttrs}
                            min={0}
                            max={100}
                            units={['px', 'em']}
                        />
                        <ColorControl
                            label={__('Color', 'gutsliders')}
                            color={iconColor}
                            onChange={value => {
                                setAttributes({ iconColor: value });
                            }}
                        />
                    </PanelBody>
                    <PanelBody title={__('Tab Content', 'advanced-tabs-block')} initialOpen={false}>
                        <BorderControl controlName={CB_BORDER} objAttrs={objAttrs} noHover={true} />
                        <ResBoxControl
                            label={__('Border Radius', 'advanced-tabs-block')}
                            controlName={CB_BORDER_RADIUS}
                            objAttrs={objAttrs}
                            min={0}
                            max={100}
                        />
                        <ResBoxControl
                            label={__('Padding', 'advanced-tabs-block')}
                            controlName={CB_PADDING}
                            objAttrs={objAttrs}
                            min={0}
                            max={200}
                        />
                        <ResBoxControl
                            label={__('Margin', 'advanced-tabs-block')}
                            controlName={CB_MARGIN}
                            objAttrs={objAttrs}
                            min={-200}
                            max={200}
                        />
                        <ButtonsGroupControl
                            label={__('Background Type', 'gutsliders')}
                            value={cbBgType}
                            options={BACKGROUND_TYPES}
                            onChange={value => {
                                setAttributes({ cbBgType: value });
                            }}
                        />
                        {cbBgType === 'classic' && (
                            <ColorControl
                                label={__('Background Color', 'gutsliders')}
                                color={cbBgColor}
                                onChange={value => {
                                    setAttributes({ cbBgColor: value });
                                }}
                            />
                        )}
                        {cbBgType === 'gradient' && (
                            <GradientPicker
                                __nextHasNoMargin={true}
                                value={cbBgGradient}
                                onChange={currentGradient => {
                                    setAttributes({ cbBgGradient: currentGradient });
                                }}
                                gradients={GRADIENT_PALETTES}
                            />
                        )}
                    </PanelBody>
                    <PanelBody title={__('Active Tab', 'advanced-tabs-block')} initialOpen={false}>
                        <ColorControl
                            label={__('Color', 'gutsliders')}
                            color={atColor}
                            onChange={value => {
                                setAttributes({ atColor: value });
                            }}
                        />
                        <BorderControl controlName={AT_BORDER} objAttrs={objAttrs} noHover={true} />
                        <ResBoxControl
                            label={__('Border Radius', 'advanced-tabs-block')}
                            controlName={AT_BORDER_RADIUS}
                            objAttrs={objAttrs}
                            min={0}
                            max={100}
                        />
                        <ResBoxControl
                            label={__('Padding', 'advanced-tabs-block')}
                            controlName={AT_PADDING}
                            objAttrs={objAttrs}
                            min={0}
                            max={200}
                        />
                        <ResBoxControl
                            label={__('Margin', 'advanced-tabs-block')}
                            controlName={AT_MARGIN}
                            objAttrs={objAttrs}
                            min={-200}
                            max={200}
                        />
                        <ButtonsGroupControl
                            label={__('Background Type', 'gutsliders')}
                            value={atBgType}
                            options={BACKGROUND_TYPES}
                            onChange={value => {
                                setAttributes({ atBgType: value });
                            }}
                        />
                        {atBgType === 'classic' && (
                            <ColorControl
                                label={__('Background Color', 'gutsliders')}
                                color={atBgColor}
                                onChange={value => {
                                    setAttributes({ atBgColor: value });
                                }}
                            />
                        )}
                        {atBgType === 'gradient' && (
                            <GradientPicker
                                __nextHasNoMargin={true}
                                value={atBgGradient}
                                onChange={currentGradient => {
                                    setAttributes({ atBgGradient: currentGradient });
                                }}
                                gradients={GRADIENT_PALETTES}
                            />
                        )}
                        <CardDivider />
                        <ResRangeControl
                            label={__('Icon Size', 'advanced-tabs-block')}
                            controlName={AT_ICON_SIZE}
                            objAttrs={objAttrs}
                            min={0}
                            max={100}
                            units={['px', 'em']}
                        />
                        <ColorControl
                            label={__('Icon Color', 'gutsliders')}
                            color={atIconColor}
                            onChange={value => {
                                setAttributes({ atIconColor: value });
                            }}
                        />
                    </PanelBody>
                </Fragment>
            }
        />
    );
};

export default Inspector;
