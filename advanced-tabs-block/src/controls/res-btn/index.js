/**
 * WordPress dependencies
 */
import { ButtonGroup, Button } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

// Internal dependencies
import { RES_DEVICES } from '../../constants';

const ResBtn = ({ resMode, setAttributes }) => {
	const previewMode = resMode;

	useEffect(() => {
		setAttributes({ resMode: 'Desktop' });
	}, []);

	return (
		<div className="gkits-res-btn">
			<ButtonGroup>
				{RES_DEVICES &&
					RES_DEVICES.map((device, index) => {
						return (
							<Button
								key={index}
								className={`gkits-device-btn ${
									previewMode === device.label
										? 'gkits-active'
										: ''
								}`}
								onClick={() => {
									setAttributes({ resMode: device.label });
								}}
								title={device.label}
							>
								{device.icon}
							</Button>
						);
					})}
			</ButtonGroup>
		</div>
	);
};

export default ResBtn;
