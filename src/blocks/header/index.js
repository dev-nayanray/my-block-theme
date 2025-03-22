import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

registerBlockType('my-theme/header', {
  title: 'হেডার',
  icon: 'header',
  category: 'theme',
  attributes: {
    stickyHeader: { type: 'boolean', default: false },
    transparentHeader: { type: 'boolean', default: false }
  },
  edit: ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <>
        <InspectorControls>
          <PanelBody title="হেডার সেটিংস">
            <ToggleControl
              label="স্টিকি হেডার"
              checked={attributes.stickyHeader}
              onChange={(val) => setAttributes({ stickyHeader: val })}
            />
            <ToggleControl
              label="ট্রান্সপারেন্ট হেডার"
              checked={attributes.transparentHeader}
              onChange={(val) => setAttributes({ transparentHeader: val })}
            />
          </PanelBody>
        </InspectorControls>

        <header 
          {...blockProps} 
          className={`site-header ${attributes.stickyHeader ? 'sticky' : ''} ${attributes.transparentHeader ? 'transparent' : ''}`}
        >
          <div className="header-container">
            <div className="header-left">
              <button 
                className="menu-toggle" 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="মেনু টগল করুন"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </button>
              <div className="site-logo">
                <InnerBlocks
                  allowedBlocks={['my-theme/logo']}
                  template={[['my-theme/logo']]}
                  templateLock="insert"
                />
              </div>
            </div>

            <div className="header-right">
              <div className="ajax-search">
                <InnerBlocks
                  allowedBlocks={['my-theme/search']}
                  template={[['my-theme/search']]}
                  templateLock="insert"
                />
              </div>
              <div className="header-buttons">
                <InnerBlocks
                  allowedBlocks={['core/button']}
                  template={[
                    ['core/button', { 
                      className: 'help-button',
                      text: 'সাহায্য',
                      style: { color: { text: '#ffffff' }, border: { radius: '25px' } }
                    }],
                    ['core/button', {
                      className: 'login-button',
                      text: 'লগ ইন',
                      style: { color: { text: '#ffffff' }, border: { radius: '25px' } }
                    }],
                    ['core/button', {
                      className: 'signup-button',
                      text: 'নিবন্ধন',
                      style: { color: { text: '#ffffff' }, border: { radius: '25px' } }
                    }]
                  ]}
                  templateLock="all"
                  orientation="horizontal"
                />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  },
  save: ({ attributes }) => {
    const blockProps = useBlockProps.save();
    return (
      <header 
        {...blockProps} 
        className={`site-header ${attributes.stickyHeader ? 'sticky' : ''} ${attributes.transparentHeader ? 'transparent' : ''}`}
      >
        <div className="header-container">
          <div className="header-left">
            <button className="menu-toggle" aria-label="মেনু টগল করুন">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
            <div className="site-logo">
              <InnerBlocks.Content />
            </div>
          </div>
          <div className="header-right">
            <div className="ajax-search">
              <InnerBlocks.Content />
            </div>
            <div className="header-buttons">
              <InnerBlocks.Content />
            </div>
          </div>
        </div>
      </header>
    );
  }
});