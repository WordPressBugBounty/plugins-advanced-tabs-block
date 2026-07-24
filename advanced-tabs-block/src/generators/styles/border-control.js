const generateBorderStyles = ({ controlName, attributes }) => {
    const {
        [`${controlName}Style`]: style,
        [`${controlName}Colors`]: colors,

        [`${controlName}LinkStatus`]: linkedStatus,
        [`${controlName}LinkedWidth`]: linkedWidth,
        [`${controlName}Widths`]: widths,

        [`${controlName}TabLinkStatus`]: tabLinkedStatus,
        [`${controlName}TabLinkedWidth`]: tabLinkedWidth,
        [`${controlName}TabWidths`]: tabWidths,

        [`${controlName}MobLinkStatus`]: mobLinkedStatus,
        [`${controlName}MobLinkedWidth`]: mobLinkedWidth,
        [`${controlName}MobWidths`]: mobWidths,

        [`${controlName}Unit`]: unit
    } = attributes;

    let borderDeskStyles = '';
    let borderTabStyles = '';
    let borderMobStyles = '';

    if (linkedStatus) {
        borderDeskStyles =
            linkedWidth !== undefined && linkedWidth !== '' && isNaN(linkedWidth) === false
                ? `
            border-width: ${linkedWidth}${unit};
            border-style: ${style};

        `
                : '';
    } else {
        borderDeskStyles = `
            ${
                widths && widths.top !== undefined && widths.top !== '' && isNaN(widths.top) === false
                    ? `border-top-width: ${widths.top}${unit};border-top-style: ${style};`
                    : ''
            }
            ${
                widths && widths.right !== undefined && widths.right !== '' && isNaN(widths.right) === false
                    ? `border-right-width: ${widths.right}${unit}; border-right-style: ${style};`
                    : ''
            }
            ${
                widths && widths.bottom !== undefined && widths.bottom !== '' && isNaN(widths.bottom) === false
                    ? `border-bottom-width: ${widths.bottom}${unit}; border-bottom-style: ${style};`
                    : ''
            }
            ${
                widths && widths.left !== undefined && widths.left !== '' && isNaN(widths.left) === false
                    ? `border-left-width: ${widths.left}${unit}; border-left-style: ${style};`
                    : ''
            }
        `;
    }

    if (tabLinkedStatus) {
        borderTabStyles =
            tabLinkedWidth !== undefined && tabLinkedWidth !== '' && isNaN(tabLinkedWidth) === false
                ? `
            border-width: ${tabLinkedWidth}${unit};
            border-style: ${style};
        `
                : '';
    } else {
        borderTabStyles = `
            ${
                tabWidths && tabWidths.top !== undefined && tabWidths.top !== '' && isNaN(tabWidths.top) === false
                    ? `border-top-width: ${tabWidths.top}${unit}; border-top-style: ${style};`
                    : ''
            }
            ${
                tabWidths && tabWidths.right !== undefined && tabWidths.right !== '' && isNaN(tabWidths.right) === false
                    ? `border-right-width: ${tabWidths.right}${unit}; border-right-style: ${style};`
                    : ''
            }
            ${
                tabWidths && tabWidths.bottom !== undefined && tabWidths.bottom !== '' && isNaN(tabWidths.bottom) === false
                    ? `border-bottom-width: ${tabWidths.bottom}${unit}; border-bottom-style: ${style};`
                    : ''
            }
            ${
                tabWidths && tabWidths.left !== undefined && tabWidths.left !== '' && isNaN(tabWidths.left) === false
                    ? `border-left-width: ${tabWidths.left}${unit}; border-left-style: ${style};`
                    : ''
            }
        `;
    }

    if (mobLinkedStatus) {
        borderMobStyles =
            mobLinkedWidth !== undefined && mobLinkedWidth !== '' && isNaN(mobLinkedWidth) === false
                ? `
            border-width: ${mobLinkedWidth}${unit};
            border-style: ${style};
        `
                : '';
    } else {
        borderMobStyles = `
            ${
                mobWidths && mobWidths.top !== undefined && mobWidths.top !== '' && isNaN(mobWidths.top) === false
                    ? `border-top-width: ${mobWidths.top}${unit}; border-top-style: ${style};`
                    : ''
            }
            ${
                mobWidths && mobWidths.right !== undefined && mobWidths.right !== '' && isNaN(mobWidths.right) === false
                    ? `border-right-width: ${mobWidths.right}${unit}; border-right-style: ${style};`
                    : ''
            }
            ${
                mobWidths && mobWidths.bottom !== undefined && mobWidths.bottom !== '' && isNaN(mobWidths.bottom) === false
                    ? `border-bottom-width: ${mobWidths.bottom}${unit}; border-bottom-style: ${style};`
                    : ''
            }
            ${
                mobWidths && mobWidths.left !== undefined && mobWidths.left !== '' && isNaN(mobWidths.left) === false
                    ? `border-left-width: ${mobWidths.left}${unit}; border-left-style: ${style};`
                    : ''
            }
        `;
    }

    // Border Color
    const borderColor = colors ? `border-color: ${colors.normal};` : '';
    const borderColorHover = colors ? `border-color: ${colors.hover};` : '';

    let desktopStyles = '';
    let tabletStyles = '';
    let mobileStyles = '';
    let hoverColor = '';

    desktopStyles = borderDeskStyles && borderDeskStyles !== '' ? `${borderColor}${borderDeskStyles}` : '';
    tabletStyles = borderTabStyles && borderTabStyles !== '' ? `${borderColor}${borderTabStyles}` : '';
    mobileStyles = borderMobStyles && borderMobStyles !== '' ? `${borderColor}${borderMobStyles}` : '';
    hoverColor = borderColorHover;

    return {
        desktopStyles,
        tabletStyles,
        mobileStyles,
        hoverColor
    };
};

export default generateBorderStyles;
