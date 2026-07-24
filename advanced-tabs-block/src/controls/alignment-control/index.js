/**
 * WordPress dependencies
 */
import { withInstanceId } from '@wordpress/compose';

// constants
import { TEXT_ALIGNS, FLEX_HORIZONTAL_ALIGNS, FLEX_VERTICAL_ALIGNS } from '../../constants';

// Internal dependencies
import ButtonsGroupControl from '../buttons-group';
import ResLabelControl from '../res-label-control';

const AlignmentControl = ({ instanceId, label, controlName, objAttrs, flexAlign = false, flexVerticle = false, options = [] }) => {
    const { attributes, setAttributes } = objAttrs;
    const { resMode } = attributes;

    const { [`${controlName}Aligns`]: aligns } = attributes;

    const id = `alignment-control-${instanceId}`;

    const flexAlignOptions = flexVerticle ? FLEX_VERTICAL_ALIGNS : FLEX_HORIZONTAL_ALIGNS;

    // alignment options
    const commonAligns = flexAlign ? flexAlignOptions : TEXT_ALIGNS;
    const alignmentOptions = options.length ? options : commonAligns;

    return (
        <div className="gkits-control-container">
            <div className="gkits-mb-8">
                <ResLabelControl
                    id={id}
                    label={label}
                    requiredProps={{
                        id,
                        resMode,
                        setAttributes
                    }}
                />
            </div>
            {resMode === 'Desktop' && (
                <ButtonsGroupControl
                    value={aligns && aligns.desk}
                    onChange={value =>
                        setAttributes({
                            [`${controlName}Aligns`]: {
                                ...aligns,
                                desk: value
                            }
                        })
                    }
                    options={alignmentOptions}
                    hasIcons={true}
                />
            )}
            {resMode === 'Tablet' && (
                <ButtonsGroupControl
                    value={aligns && aligns.tab}
                    onChange={value =>
                        setAttributes({
                            [`${controlName}Aligns`]: {
                                ...aligns,
                                tab: value
                            }
                        })
                    }
                    options={alignmentOptions}
                    hasIcons={true}
                />
            )}
            {resMode === 'Mobile' && (
                <ButtonsGroupControl
                    value={aligns && aligns.mob}
                    onChange={value =>
                        setAttributes({
                            [`${controlName}Aligns`]: {
                                ...aligns,
                                mob: value
                            }
                        })
                    }
                    options={alignmentOptions}
                    hasIcons={true}
                />
            )}
        </div>
    );
};

export default withInstanceId(AlignmentControl);
