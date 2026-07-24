/* eslint-disable @wordpress/no-unsafe-wp-apis */
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Flex, FlexItem, SelectControl, __experimentalNumberControl as NumberControl, Button } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ResLabelControl from '../res-label-control';
import UnitsControl from '../units-control';
import { BORDER_STYLES, GENERAL_UNITS } from '../../constants';
import SwitcherControl from '../switcher-control';
import ColorControl from '../color-control';

const BorderControl = ({ label, controlName, instanceId, objAttrs, units, noHover = false }) => {
    const id = `border-control-${instanceId}`;

    const { attributes, setAttributes } = objAttrs;
    const { resMode } = attributes;
    const availableUnits = units || GENERAL_UNITS;

    const {
        [`${controlName}Style`]: borderStyle,
        [`${controlName}Colors`]: borderColors,
        [`${controlName}LinkStatus`]: borderLinkedStatus,
        [`${controlName}LinkedWidth`]: borderLinkedWidth,
        [`${controlName}Widths`]: borderWidths,

        [`${controlName}TabLinkStatus`]: borderTabLinkedStatus,
        [`${controlName}TabLinkedWidth`]: borderTabLinkedWidth,
        [`${controlName}TabWidths`]: borderTabWidths,

        [`${controlName}MobLinkStatus`]: borderMobLinkedStatus,
        [`${controlName}MobLinkedWidth`]: borderMobLinkedWidth,
        [`${controlName}MobWidths`]: borderMobWidths,

        [`${controlName}Unit`]: borderUnit
    } = attributes;

    return (
        <div className="gkits-control-container">
            {label && (
                <div className="gkits-mb-8">
                    <ResLabelControl requiredProps={(id, setAttributes)} label={label} noResBtns={true} />
                </div>
            )}
            <div className="gkits-border-style gkits-mb-16">
                <SelectControl
                    label={__('Border Style', 'affiliates-blocks')}
                    value={borderStyle}
                    options={BORDER_STYLES}
                    onChange={style => {
                        setAttributes({
                            [`${controlName}Style`]: style
                        });
                    }}
                />
            </div>
            {borderStyle !== 'none' && (
                <Fragment>
                    <div className="gkits-mb-8">
                        <Flex align="flex-start">
                            <FlexItem>
                                <ResLabelControl
                                    label={__('Border Width', 'affiliates-blocks')}
                                    requiredProps={{
                                        id,
                                        resMode,
                                        setAttributes
                                    }}
                                />
                            </FlexItem>
                            <FlexItem>
                                <UnitsControl
                                    value={borderUnit}
                                    onChange={value =>
                                        setAttributes({
                                            [`${controlName}Unit`]: value
                                        })
                                    }
                                    units={availableUnits}
                                />
                            </FlexItem>
                        </Flex>
                        <div className="gkits-controls-body" id={id}>
                            {resMode === 'Desktop' && (
                                <div className="gkits-single-inputs-group">
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Top', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderLinkedStatus ? borderLinkedWidth : borderWidths && borderWidths.top}
                                            onChange={value =>
                                                setAttributes(
                                                    borderLinkedStatus
                                                        ? {
                                                              [`${controlName}LinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}Widths`]: {
                                                                  ...borderWidths,
                                                                  top: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Right', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderLinkedStatus ? borderLinkedWidth : borderWidths && borderWidths.right}
                                            onChange={value =>
                                                setAttributes(
                                                    borderLinkedStatus
                                                        ? {
                                                              [`${controlName}LinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}Widths`]: {
                                                                  ...borderWidths,
                                                                  right: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Bottom', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderLinkedStatus ? borderLinkedWidth : borderWidths && borderWidths.bottom}
                                            onChange={value =>
                                                setAttributes(
                                                    borderLinkedStatus
                                                        ? {
                                                              [`${controlName}LinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}Widths`]: {
                                                                  ...borderWidths,
                                                                  bottom: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Left', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderLinkedStatus ? borderLinkedWidth : borderWidths && borderWidths.left}
                                            onChange={value =>
                                                setAttributes(
                                                    borderLinkedStatus
                                                        ? {
                                                              [`${controlName}LinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}Widths`]: {
                                                                  ...borderWidths,
                                                                  left: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input desk-linked-btn">
                                        <Button
                                            className={borderLinkedStatus ? 'active' : ''}
                                            onClick={() =>
                                                setAttributes({
                                                    [`${controlName}LinkStatus`]: !borderLinkedStatus
                                                })
                                            }
                                            icon={borderLinkedStatus ? 'admin-links' : 'editor-unlink'}
                                        />
                                    </div>
                                </div>
                            )}
                            {resMode === 'Tablet' && (
                                <div className="gkits-single-inputs-group">
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Top', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderTabLinkedStatus ? borderTabLinkedWidth : borderTabWidths && borderTabWidths.top}
                                            onChange={value =>
                                                setAttributes(
                                                    borderTabLinkedStatus
                                                        ? {
                                                              [`${controlName}TabLinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}TabWidths`]: {
                                                                  ...borderTabWidths,
                                                                  top: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Right', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderTabLinkedStatus ? borderTabLinkedWidth : borderTabWidths && borderTabWidths.right}
                                            onChange={value =>
                                                setAttributes(
                                                    borderTabLinkedStatus
                                                        ? {
                                                              [`${controlName}TabLinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}TabWidths`]: {
                                                                  ...borderTabWidths,
                                                                  right: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Bottom', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderTabLinkedStatus ? borderTabLinkedWidth : borderTabWidths && borderTabWidths.bottom}
                                            onChange={value =>
                                                setAttributes(
                                                    borderTabLinkedStatus
                                                        ? {
                                                              [`${controlName}TabLinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}TabWidths`]: {
                                                                  ...borderTabWidths,
                                                                  bottom: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Left', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderTabLinkedStatus ? borderTabLinkedWidth : borderTabWidths && borderTabWidths.left}
                                            onChange={value =>
                                                setAttributes(
                                                    borderTabLinkedStatus
                                                        ? {
                                                              [`${controlName}TabLinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}TabWidths`]: {
                                                                  ...borderTabWidths,
                                                                  left: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input desk-linked-btn">
                                        <Button
                                            className={borderTabLinkedStatus ? 'active' : ''}
                                            onClick={() =>
                                                setAttributes({
                                                    [`${controlName}TabLinkedStatus`]: !borderTabLinkedStatus
                                                })
                                            }
                                            icon={borderTabLinkedStatus ? 'admin-links' : 'editor-unlink'}
                                        />
                                    </div>
                                </div>
                            )}
                            {resMode === 'Mobile' && (
                                <div className="gkits-single-inputs-group">
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Top', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderMobLinkedStatus ? borderMobLinkedWidth : borderMobWidths && borderMobWidths.top}
                                            onChange={value =>
                                                setAttributes(
                                                    borderMobLinkedStatus
                                                        ? {
                                                              [`${controlName}MobLinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}MobWidths`]: {
                                                                  ...borderMobWidths,
                                                                  top: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Right', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderMobLinkedStatus ? borderMobLinkedWidth : borderMobWidths && borderMobWidths.right}
                                            onChange={value =>
                                                setAttributes(
                                                    borderMobLinkedStatus
                                                        ? {
                                                              [`${controlName}MobLinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}MobWidths`]: {
                                                                  ...borderMobWidths,
                                                                  right: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Bottom', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderMobLinkedStatus ? borderMobLinkedWidth : borderMobWidths && borderMobWidths.bottom}
                                            onChange={value =>
                                                setAttributes(
                                                    borderMobLinkedStatus
                                                        ? {
                                                              [`${controlName}MobLinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}MobWidths`]: {
                                                                  ...borderMobWidths,
                                                                  bottom: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Left', 'gutsliders')}
                                            labelPosition="bottom"
                                            value={borderMobLinkedStatus ? borderMobLinkedWidth : borderMobWidths && borderMobWidths.left}
                                            onChange={value =>
                                                setAttributes(
                                                    borderMobLinkedStatus
                                                        ? {
                                                              [`${controlName}MobLinkedWidth`]: parseInt(value)
                                                          }
                                                        : {
                                                              [`${controlName}MobWidths`]: {
                                                                  ...borderMobWidths,
                                                                  left: parseInt(value)
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                    <div className="single-input desk-linked-btn">
                                        <Button
                                            className={borderMobLinkedStatus ? 'active' : ''}
                                            onClick={() =>
                                                setAttributes({
                                                    [`${controlName}MobLinkedStatus`]: !borderMobLinkedStatus
                                                })
                                            }
                                            icon={borderMobLinkedStatus ? 'admin-links' : 'editor-unlink'}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {noHover && (
                        <ColorControl
                            label={__('Border Color', 'affiliates-blocks')}
                            color={borderColors && borderColors.normal}
                            onChange={color => {
                                setAttributes({
                                    [`${controlName}Colors`]: {
                                        ...borderColors,
                                        normal: color
                                    }
                                });
                            }}
                        />
                    )}
                    {!noHover && (
                        <SwitcherControl
                            normal={
                                <ColorControl
                                    label={__('Border Color', 'affiliates-blocks')}
                                    color={borderColors && borderColors.normal}
                                    onChange={color => {
                                        setAttributes({
                                            [`${controlName}Colors`]: {
                                                ...borderColors,
                                                normal: color
                                            }
                                        });
                                    }}
                                />
                            }
                            hover={
                                <ColorControl
                                    label={__('Hover Color', 'affiliates-blocks')}
                                    color={borderColors && borderColors.hover}
                                    onChange={color => {
                                        setAttributes({
                                            [`${controlName}Colors`]: {
                                                ...borderColors,
                                                hover: color
                                            }
                                        });
                                    }}
                                />
                            }
                        />
                    )}
                </Fragment>
            )}
        </div>
    );
};

export default withInstanceId(BorderControl);
