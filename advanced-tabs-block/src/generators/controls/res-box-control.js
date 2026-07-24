const generateResBoxControlAttributes = ({ controlName }) => {
	return {
		[`${controlName}LinkedStatus`]: {
			type: 'boolean',
			default: true,
		},
		[`${controlName}LinkedValue`]: {
			type: 'number',
		},
		[`${controlName}Values`]: {
			type: 'object',
			default: {
				top: {
					type: 'number',
				},
				right: {
					type: 'number',
				},
				bottom: {
					type: 'number',
				},
				left: {
					type: 'number',
				},
			},
		},
		[`${controlName}TabLinkedStatus`]: {
			type: 'boolean',
			default: true,
		},
		[`${controlName}TabLinkedValue`]: {
			type: 'number',
		},
		[`${controlName}TabValues`]: {
			type: 'object',
			default: {
				top: {
					type: 'number',
				},
				right: {
					type: 'number',
				},
				bottom: {
					type: 'number',
				},
				left: {
					type: 'number',
				},
			},
		},

		[`${controlName}MobLinkedStatus`]: {
			type: 'boolean',
			default: true,
		},
		[`${controlName}MobLinkedValue`]: {
			type: 'number',
		},
		[`${controlName}MobValues`]: {
			type: 'object',
			default: {
				top: {
					type: 'number',
				},
				right: {
					type: 'number',
				},
				bottom: {
					type: 'number',
				},
				left: {
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
export default generateResBoxControlAttributes;
