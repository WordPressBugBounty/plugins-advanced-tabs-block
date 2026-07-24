/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

/**
 * WordPress dependencies
 *
 */
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { withInstanceId } from '@wordpress/compose';

/*
 * Import Icons
 */
import Icons from '../../helper/icons';

const IconPickerControl = ({ label, value, onChange, instanceId }) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    const id = `icon-control-${instanceId}`;

    return (
        <div className="gkits-control-container icon-picker-control">
            <BaseControl id={id} label={label} />
            <div className="icon-placeplaceholder">
                {value ? (
                    <div className="selected-icon">
                        <i className={`bi bi-${value}`}></i>
                    </div>
                ) : (
                    <Button className="icon-selected" variant="secondary" onClick={() => setOpen(true)}>
                        {__('Select Icon', 'gutsliders')}
                    </Button>
                )}
                {value && (
                    <Button className="replace-btn" onClick={() => setOpen(true)}>
                        {__('Replace', 'gutsliders')}
                    </Button>
                )}
                {value && <Button className="remove-btn" onClick={() => onChange('')} icon="trash" />}
            </div>
            {open && (
                <Modal title={__('Select Icon', 'gutsliders')} onRequestClose={() => setOpen(false)} isFullscreen={true}>
                    <div className="gkits-icons-modal">
                        <div className="icon-search">
                            <input
                                type="text"
                                placeholder={__('Search Icon', 'gutsliders')}
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="icon-list">
                            {search
                                ? // filter icons by search and run map function for Icons Object key
                                  Icons.filter(icon => {
                                      return icon.includes(search);
                                  }).map((icon, index) => {
                                      return (
                                          <Button
                                              key={index}
                                              className={`icon-item ${value === icon ? 'active' : ''}`}
                                              title={icon}
                                              onClick={() => {
                                                  onChange(icon);
                                                  setOpen(false);
                                              }}
                                          >
                                              <i className={`bi bi-${icon}`}></i>
                                          </Button>
                                      );
                                  })
                                : // run map function for Icons Object key
                                  Icons.map((icon, index) => {
                                      return (
                                          <Button
                                              key={index}
                                              className={`icon-item ${value === icon ? 'active' : ''}`}
                                              title={icon}
                                              onClick={() => {
                                                  onChange(icon);
                                                  setOpen(false);
                                              }}
                                          >
                                              <i className={`bi bi-${icon}`}></i>
                                          </Button>
                                      );
                                  })}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};
export default withInstanceId(IconPickerControl);
