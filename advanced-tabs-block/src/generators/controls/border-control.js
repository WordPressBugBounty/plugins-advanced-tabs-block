const generateBorderAttributes = ({ controlName }) => {
	return {
		[`${controlName}Style`]: {
			type: 'string',
			default: 'solid',
		},
		[`${controlName}Colors`]: {
			type: 'object',
			default: {
				normal: '',
				hover: '',
			},
		},
		[`${controlName}LinkStatus`]: {
			type: 'boolean',
			default: true,
		},
		[`${controlName}LinkedWidth`]: {
			type: 'number',
		},
		[`${controlName}Widths`]: {
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
		[`${controlName}TabLinkStatus`]: {
			type: 'boolean',
			default: true,
		},
		[`${controlName}TabLinkedWidth`]: {
			type: 'number',
		},
		[`${controlName}TabWidths`]: {
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
		[`${controlName}MobLinkStatus`]: {
			type: 'boolean',
			default: true,
		},
		[`${controlName}MobLinkedWidth`]: {
			type: 'number',
		},
		[`${controlName}MobWidths`]: {
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

		[`${controlName}Unit`]: {
			type: 'string',
			default: 'px',
		},
	};
};

export default generateBorderAttributes;
