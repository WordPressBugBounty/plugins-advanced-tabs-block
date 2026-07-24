import { __ } from '@wordpress/i18n';

export const fontWeightOptions = [
    { label: __('Default', 'gutsliders'), value: '' },
    { label: __('100', 'gutsliders'), value: '100' },
    { label: __('200', 'gutsliders'), value: '200' },
    { label: __('300', 'gutsliders'), value: '300' },
    { label: __('400', 'gutsliders'), value: '400' },
    { label: __('500', 'gutsliders'), value: '500' },
    { label: __('600', 'gutsliders'), value: '600' },
    { label: __('700', 'gutsliders'), value: '700' },
    { label: __('800', 'gutsliders'), value: '800' },
    { label: __('900', 'gutsliders'), value: '900' }
];

export const textTransformOptions = [
    { label: __('None', 'gutsliders'), value: 'none' },
    { label: __('aa', 'gutsliders'), value: 'lowercase' },
    { label: __('Aa', 'gutsliders'), value: 'capitalize' },
    { label: __('AA', 'gutsliders'), value: 'uppercase' }
];

export const textDecorationOptions = [
    { label: __('Default', 'gutsliders'), value: '' },
    { label: __('None', 'gutsliders'), value: 'none' },
    { label: __('Overline', 'gutsliders'), value: 'overline' },
    { label: __('Line Through', 'gutsliders'), value: 'line-through' },
    { label: __('Underline', 'gutsliders'), value: 'underline' },
    {
        label: __('Underline Oveline', 'gutsliders'),
        value: 'underline overline'
    }
];

export const fontStyleOptions = [
    { label: __('Normal', 'gutsliders'), value: 'normal' },
    { label: __('Italic', 'gutsliders'), value: 'italic' }
];
