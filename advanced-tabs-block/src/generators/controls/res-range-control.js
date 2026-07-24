const generateResRangeAttributes = ({ controlName }) => {
	return {
		[`${controlName}Ranges`]: {
			type: 'object',
			default: {
				desk: {
					type: 'number',
				},
				tab: {
					type: 'number',
				},
				mob: {
					type: 'number',
				},
			},
		},
		[`${controlName}Units`]: {
			type: 'object',
			default: {
				desk: 'px',
				tab: 'px',
				mob: 'px',
			},
		},
	};
};
export default generateResRangeAttributes;
