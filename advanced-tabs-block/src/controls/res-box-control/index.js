/* eslint-disable @wordpress/no-unsafe-wp-apis */
import { Flex, FlexItem, __experimentalNumberControl as NumberControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ResLabelControl from '../res-label-control';
import UnitsControl from '../units-control';
import { GENERAL_UNITS } from '../../constants';

const ResBoxControl = ({ label, controlName, objAttrs, noUnits, units, min, max, instanceId }) => {
    const { attributes, setAttributes } = objAttrs;
    const { resMode } = attributes;

    const {
        [`${controlName}Values`]: deskValues,
        [`${controlName}LinkedStatus`]: deskLinkedStatus,
        [`${controlName}LinkedValue`]: deskLinkedValue,

        [`${controlName}TabValues`]: tabValues,
        [`${controlName}TabLinkedStatus`]: tabLinkedStatus,
        [`${controlName}TabLinkedValue`]: tabLinkedValue,

        [`${controlName}MobValues`]: mobValues,
        [`${controlName}MobLinkedStatus`]: mobLinkedStatus,
        [`${controlName}MobLinkedValue`]: mobLinkedValue,

        [`${controlName}Units`]: boxUnits
    } = attributes;

    const id = `res-controls-${instanceId}`;
    const availableUnits = units || GENERAL_UNITS;

    return (
        <div className="gkits-control-container">
            <Flex align="flex-start">
                <FlexItem>
                    <ResLabelControl
                        label={label}
                        requiredProps={{
                            id,
                            resMode,
                            setAttributes
                        }}
                    />
                </FlexItem>
                <FlexItem>
                    {!noUnits && (
                        <Fragment>
                            {resMode === 'Desktop' && (
                                <UnitsControl
                                    value={boxUnits && boxUnits.desk}
                                    onChange={value =>
                                        setAttributes({
                                            [`${controlName}Units`]: {
                                                ...boxUnits,
                                                desk: value
                                            }
                                        })
                                    }
                                    units={availableUnits}
                                />
                            )}
                            {resMode === 'Tablet' && (
                                <UnitsControl
                                    value={boxUnits && boxUnits.tab}
                                    onChange={value =>
                                        setAttributes({
                                            [`${controlName}Units`]: {
                                                ...boxUnits,
                                                tab: value
                                            }
                                        })
                                    }
                                    units={availableUnits}
                                />
                            )}
                            {resMode === 'Mobile' && (
                                <UnitsControl
                                    value={boxUnits && boxUnits.mob}
                                    onChange={value =>
                                        setAttributes({
                                            [`${controlName}Units`]: {
                                                ...boxUnits,
                                                mob: value
                                            }
                                        })
                                    }
                                    units={availableUnits}
                                />
                            )}
                        </Fragment>
                    )}
                </FlexItem>
            </Flex>
            <div className="gkits-controls-body" id={id}>
                {resMode === 'Desktop' && (
                    <div className="gkits-single-inputs-group">
                        <div className="single-input">
                            <NumberControl
                                label={__('Top', 'gutsliders')}
                                labelPosition="bottom"
                                value={deskLinkedStatus ? deskLinkedValue : deskValues && deskValues.top}
                                onChange={value =>
                                    setAttributes(
                                        deskLinkedStatus
                                            ? {
                                                  [`${controlName}LinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}Values`]: {
                                                      ...deskValues,
                                                      top: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input">
                            <NumberControl
                                label={__('Right', 'gutsliders')}
                                labelPosition="bottom"
                                value={deskLinkedStatus ? deskLinkedValue : deskValues && deskValues.right}
                                onChange={value =>
                                    setAttributes(
                                        deskLinkedStatus
                                            ? {
                                                  [`${controlName}LinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}Values`]: {
                                                      ...deskValues,
                                                      right: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input">
                            <NumberControl
                                label={__('Bottom', 'gutsliders')}
                                labelPosition="bottom"
                                value={deskLinkedStatus ? deskLinkedValue : deskValues && deskValues.bottom}
                                onChange={value =>
                                    setAttributes(
                                        deskLinkedStatus
                                            ? {
                                                  [`${controlName}LinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}Values`]: {
                                                      ...deskValues,
                                                      bottom: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input">
                            <NumberControl
                                label={__('Left', 'gutsliders')}
                                labelPosition="bottom"
                                value={deskLinkedStatus ? deskLinkedValue : deskValues && deskValues.left}
                                onChange={value =>
                                    setAttributes(
                                        deskLinkedStatus
                                            ? {
                                                  [`${controlName}LinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}Values`]: {
                                                      ...deskValues,
                                                      left: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input desk-linked-btn">
                            <Button
                                className={deskLinkedStatus ? 'active' : ''}
                                onClick={() =>
                                    setAttributes({
                                        [`${controlName}LinkedStatus`]: !deskLinkedStatus
                                    })
                                }
                                icon={deskLinkedStatus ? 'admin-links' : 'editor-unlink'}
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
                                value={tabLinkedStatus ? tabLinkedValue : tabValues && tabValues.top}
                                onChange={value =>
                                    setAttributes(
                                        tabLinkedStatus
                                            ? {
                                                  [`${controlName}TabLinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}TabValues`]: {
                                                      ...tabValues,
                                                      top: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input">
                            <NumberControl
                                label={__('Right', 'gutsliders')}
                                labelPosition="bottom"
                                value={tabLinkedStatus ? tabLinkedValue : tabValues && tabValues.right}
                                onChange={value =>
                                    setAttributes(
                                        tabLinkedStatus
                                            ? {
                                                  [`${controlName}TabLinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}TabValues`]: {
                                                      ...tabValues,
                                                      right: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input">
                            <NumberControl
                                label={__('Bottom', 'gutsliders')}
                                labelPosition="bottom"
                                value={tabLinkedStatus ? tabLinkedValue : tabValues && tabValues.bottom}
                                onChange={value =>
                                    setAttributes(
                                        tabLinkedStatus
                                            ? {
                                                  [`${controlName}TabLinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}TabValues`]: {
                                                      ...tabValues,
                                                      bottom: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input">
                            <NumberControl
                                label={__('Left', 'gutsliders')}
                                labelPosition="bottom"
                                value={tabLinkedStatus ? tabLinkedValue : tabValues && tabValues.left}
                                onChange={value =>
                                    setAttributes(
                                        tabLinkedStatus
                                            ? {
                                                  [`${controlName}TabLinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}TabValues`]: {
                                                      ...tabValues,
                                                      left: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input desk-linked-btn">
                            <Button
                                className={tabLinkedStatus ? 'active' : ''}
                                onClick={() =>
                                    setAttributes({
                                        [`${controlName}TabLinkedStatus`]: !tabLinkedStatus
                                    })
                                }
                                icon={tabLinkedStatus ? 'admin-links' : 'editor-unlink'}
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
                                value={mobLinkedStatus ? mobLinkedValue : mobValues && mobValues.top}
                                onChange={value =>
                                    setAttributes(
                                        mobLinkedStatus
                                            ? {
                                                  [`${controlName}MobLinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}MobValues`]: {
                                                      ...mobValues,
                                                      top: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input">
                            <NumberControl
                                label={__('Right', 'gutsliders')}
                                labelPosition="bottom"
                                value={mobLinkedStatus ? mobLinkedValue : mobValues && mobValues.right}
                                onChange={value =>
                                    setAttributes(
                                        mobLinkedStatus
                                            ? {
                                                  [`${controlName}MobLinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}MobValues`]: {
                                                      ...mobValues,
                                                      right: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input">
                            <NumberControl
                                label={__('Bottom', 'gutsliders')}
                                labelPosition="bottom"
                                value={mobLinkedStatus ? mobLinkedValue : mobValues && mobValues.bottom}
                                onChange={value =>
                                    setAttributes(
                                        mobLinkedStatus
                                            ? {
                                                  [`${controlName}MobLinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}MobValues`]: {
                                                      ...mobValues,
                                                      bottom: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input">
                            <NumberControl
                                label={__('Left', 'gutsliders')}
                                labelPosition="bottom"
                                value={mobLinkedStatus ? mobLinkedValue : mobValues && mobValues.left}
                                onChange={value =>
                                    setAttributes(
                                        mobLinkedStatus
                                            ? {
                                                  [`${controlName}MobLinkedValue`]: parseInt(value)
                                              }
                                            : {
                                                  [`${controlName}MobValues`]: {
                                                      ...mobValues,
                                                      left: parseInt(value)
                                                  }
                                              }
                                    )
                                }
                                min={min}
                                max={max}
                            />
                        </div>
                        <div className="single-input desk-linked-btn">
                            <Button
                                className={mobLinkedStatus ? 'active' : ''}
                                onClick={() =>
                                    setAttributes({
                                        [`${controlName}MobLinkedStatus`]: !mobLinkedStatus
                                    })
                                }
                                icon={mobLinkedStatus ? 'admin-links' : 'editor-unlink'}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResBoxControl;
