/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { withInstanceId } from '@wordpress/compose';
import { useState } from '@wordpress/element';
import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	TextControl,
	ToggleControl,
	Popover,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import ResLabelControl from '../res-label-control';

const LinkControl = ({ instanceId, label, value, onChange }) => {
	const id = `link-control-${instanceId}`;
	const [linkExtra, setLinkExtra] = useState(false);

	return (
		<div className="gkits-control-container">
			<div className="gkits-mb-8">
				<ResLabelControl
					requiredProps={id}
					label={label}
					noResBtns={true}
				/>
			</div>
			<div className="gkits-linked-control">
				<Flex>
					<FlexBlock>
						<TextControl
							value={value && value.url}
							onChange={(url) => {
								onChange({
									...value,
									url,
								});
							}}
						/>
					</FlexBlock>
					<FlexItem>
						<Button
							icon="admin-generic"
							onClick={() => {
								setLinkExtra(true);
							}}
							className={`gkits-link-extra-btn ${
								linkExtra && 'gkits-le-active'
							}`}
						/>
					</FlexItem>
				</Flex>
			</div>
			{linkExtra && (
				<Popover
					position="bottom left"
					className="gkits-link-extra-popover-container"
					onClose={() => {
						setLinkExtra(false);
					}}
					onFocusOutside={() => setLinkExtra(false)}
					offset={8}
				>
					<div className="gkits-link-extra-popover">
						<ToggleControl
							label={__('Open in new tab', 'affiliates-blocks')}
							checked={value && value.openInNewTab}
							onChange={() => {
								onChange({
									...value,
									openInNewTab: !value.openInNewTab,
								});
							}}
						/>
						<ToggleControl
							label={__('Add nofollow rel', 'affiliates-blocks')}
							checked={value && value.addNoFollow}
							onChange={() => {
								onChange({
									...value,
									addNoFollow: !value.addNoFollow,
								});
							}}
						/>
						<ToggleControl
							label={__('Add sponsored rel', 'affiliates-blocks')}
							checked={value && value.addSponsored}
							onChange={() => {
								onChange({
									...value,
									addSponsored: !value.addSponsored,
								});
							}}
						/>
					</div>
				</Popover>
			)}
		</div>
	);
};
export default withInstanceId(LinkControl);
