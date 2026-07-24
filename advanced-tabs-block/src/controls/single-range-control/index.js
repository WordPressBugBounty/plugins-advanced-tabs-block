/**
 * WordPress dependencies
 */
import { RangeControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import ResLabelControl from '../res-label-control';
import ResetButton from '../reset-btn';
const SingleRangeControl = ({ label, value, onChange, onClickReset, min, max }) => {
    return (
        <div className="gkits-control-container">
            <ResLabelControl label={label} noResBtns={true} />
            <div className="gkits-controls-body">
                <ResetButton onReset={onClickReset} value={value}>
                    <RangeControl value={value} onChange={v => onChange(v)} min={min} max={max} />
                </ResetButton>
            </div>
        </div>
    );
};

export default SingleRangeControl;
