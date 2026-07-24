// add resMode attributes to all blocks
wp.hooks.addFilter('blocks.registerBlockType', 'atbs/attribute/resMode', function (settings, name) {
    if (name.includes('atbs/')) {
        settings.attributes = {
            ...settings.attributes,
            resMode: {
                type: 'string',
                default: 'Desktop'
            }
        };
    }
    return settings;
});
