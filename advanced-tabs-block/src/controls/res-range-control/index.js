/**
 * WordPress dependencies
 */
import { RangeControl, Flex, FlexItem } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ResLabelControl from '../res-label-control';
import ResetButton from '../reset-btn';
import UnitsControl from '../units-control';
import { GENERAL_UNITS } from '../../constants';

const ResRangeControl = ({ label, controlName, objAttrs, noUnits, units, min, max, instanceId }) => {
    const { attributes, setAttributes } = objAttrs;
    const { resMode } = attributes;

    const { [`${controlName}Ranges`]: ranges, [`${controlName}Units`]: rangeUnits } = attributes;

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
                                    value={rangeUnits && rangeUnits.desk}
                                    onChange={value =>
                                        setAttributes({
                                            [`${controlName}Units`]: {
                                                ...rangeUnits,
                                                desk: value
                                            }
                                        })
                                    }
                                    units={availableUnits}
                                />
                            )}
                            {resMode === 'Tablet' && (
                                <UnitsControl
                                    value={rangeUnits && rangeUnits.tab}
                                    onChange={value =>
                                        setAttributes({
                                            [`${controlName}Units`]: {
                                                ...rangeUnits,
                                                tab: value
                                            }
                                        })
                                    }
                                    units={availableUnits}
                                />
                            )}
                            {resMode === 'Mobile' && (
                                <UnitsControl
                                    value={rangeUnits && rangeUnits.mob}
                                    onChange={value =>
                                        setAttributes({
                                            [`${controlName}Units`]: {
                                                ...rangeUnits,
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
                    <ResetButton
                        onReset={() => {
                            setAttributes({
                                [`${controlName}Ranges`]: {
                                    ...ranges,
                                    desk: ''
                                }
                            });
                            setAttributes({
                                [`${controlName}Unit`]: 'px'
                            });
                        }}
                        value={ranges && ranges.desk}
                    >
                        <RangeControl
                            value={ranges && ranges.desk}
                            onChange={value =>
                                setAttributes({
                                    [`${controlName}Ranges`]: {
                                        ...ranges,
                                        desk: value
                                    }
                                })
                            }
                            min={min}
                            max={rangeUnits && (rangeUnits.desk === 'vh' || rangeUnits.desk === '%') ? 100 : max}
                        />
                    </ResetButton>
                )}
                {resMode === 'Tablet' && (
                    <ResetButton
                        onReset={() => {
                            setAttributes({
                                [`${controlName}Ranges`]: {
                                    ...ranges,
                                    tab: ''
                                }
                            });
                            setAttributes({
                                [`${controlName}Unit`]: 'px'
                            });
                        }}
                        value={ranges && ranges.tab}
                    >
                        <RangeControl
                            value={ranges && ranges.tab}
                            onChange={value =>
                                setAttributes({
                                    [`${controlName}Ranges`]: {
                                        ...ranges,
                                        tab: value
                                    }
                                })
                            }
                            min={min}
                            max={rangeUnits && (rangeUnits.tab === 'vh' || rangeUnits.tab === '%') ? 100 : max}
                        />
                    </ResetButton>
                )}
                {resMode === 'Mobile' && (
                    <ResetButton
                        onReset={() => {
                            setAttributes({
                                [`${controlName}Ranges`]: {
                                    ...ranges,
                                    mob: ''
                                }
                            });
                            setAttributes({
                                [`${controlName}Unit`]: 'px'
                            });
                        }}
                        value={ranges && ranges.mob}
                    >
                        <RangeControl
                            value={ranges && ranges.mob}
                            onChange={value =>
                                setAttributes({
                                    [`${controlName}Ranges`]: {
                                        ...ranges,
                                        mob: value
                                    }
                                })
                            }
                            min={min}
                            max={rangeUnits && (rangeUnits.mob === 'vh' || rangeUnits.mob === '%') ? 100 : max}
                        />
                    </ResetButton>
                )}
            </div>
        </div>
    );
};

export default withInstanceId(ResRangeControl);
