const generateRangeStyles = ({
	controlName,
	attributes,
	propertyName,
	noUnits = false,
	noProperty = false,
}) => {
	const { [`${controlName}Ranges`]: ranges, [`${controlName}Units`]: units } =
		attributes;

	const { desk, tab, mob } = ranges;

	const selectedUnit = noUnits ? '' : units;

	const deskStyle =
		desk !== undefined && desk !== '' && isNaN(desk) === false
			? `${noProperty ? '' : propertyName + ':'}${desk}${
					selectedUnit.desk
			  };`
			: '';

	const tabStyle =
		tab !== undefined && tab !== '' && isNaN(tab) === false
			? `${noProperty ? '' : propertyName + ':'}${tab}${
					selectedUnit.tab
			  };`
			: '';

	const mobStyle =
		mob !== undefined && mob !== '' && isNaN(mob) === false
			? `${noProperty ? '' : propertyName + ':'}${mob}${
					selectedUnit.mob
			  };`
			: '';

	return {
		deskStyle,
		tabStyle,
		mobStyle,
	};
};

export default generateRangeStyles;
