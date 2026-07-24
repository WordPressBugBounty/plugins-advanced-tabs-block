/**
 * External dependencies
 */
import Select from 'react-select';

/**
 * WordPress dependencies
 */
import { withInstanceId } from '@wordpress/compose';
import { BaseControl } from '@wordpress/components';

const SelectControl = ({
	label,
	value,
	options,
	onChange,
	searchable,
	clearable,
	instanceId,
}) => {
	const id = `select-control-${instanceId}`;
	return (
		<BaseControl id={id} label={label}>
			<Select
				id={id}
				classNamePrefix="gkits"
				value={value}
				onChange={(data) => onChange(data)}
				options={options}
				unstyled={true}
				isSearchable={searchable}
				isClearable={clearable}
			/>
		</BaseControl>
	);
};

export default withInstanceId(SelectControl);
