/**
 * WordPress dependencies
 */

import { InspectorControls } from '@wordpress/block-editor';

const HeaderTabs = ({ settingTabContent, designTabContent }) => {
    return (
        <>
            <InspectorControls group="settings">
                <div className="gkits-panel">{settingTabContent}</div>
            </InspectorControls>
            <InspectorControls group="styles">
                <div className="gkits-panel">{designTabContent}</div>
            </InspectorControls>
        </>
    );
};

export default HeaderTabs;
