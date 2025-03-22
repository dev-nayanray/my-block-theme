import { registerBlockType } from '@wordpress/blocks';
import { 
  InnerBlocks, 
  InspectorControls, 
  useBlockProps 
} from '@wordpress/block-editor';
import { 
  PanelBody, 
  ToggleControl, 
  Button 
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { menu, search } from '@wordpress/icons';

registerBlockType('my-theme/header', {
  title: 'হেডার',
  icon: 'header',
  category: 'theme',
  attributes: {
    stickyHeader: { 
      type: 'boolean', 
      default: false 
    },
    transparentHeader: { 
      type: 'boolean', 
      default: false 
    },
    showSearch: { 
      type: 'boolean', 
      default: true 
    }
  },
  edit: ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <>
        <InspectorControls>
          <PanelBody title="হেডার সেটিংস" initialOpen={true}>
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
            <ToggleControl
              label="সার্চ দেখান"
              checked={attributes.showSearch}
              onChange={(val) => setAttributes({ showSearch: val })}
            />
          </PanelBody>
        </InspectorControls>

        <header 
          {...blockProps} 
          className={`site-header 
            ${attributes.stickyHeader ? 'sticky' : ''} 
            ${attributes.transparentHeader ? 'transparent' : ''}
          `}
        >
          <div className="header-container">
            {/* Left Section */}
            <div className="header-left">
              <Button
                className="menu-toggle"
                icon={menu}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                label="মেনু টগল করুন"
                showTooltip={true}
              />
              
              <div className="site-branding">
                <InnerBlocks
                  allowedBlocks={['my-theme/logo']}
                  template={[['my-theme/logo']]}
                  templateLock="insert"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="header-right">
              {attributes.showSearch && (
                <div className="header-search">
                  <InnerBlocks
                    allowedBlocks={['my-theme/search']}
                    template={[['my-theme/search']]}
                    templateLock="insert"
                  />
                </div>
              )}

              <div className="header-actions">
                <InnerBlocks
                  allowedBlocks={['core/button']}
                  template={[
                    ['core/button', {
                      className: 'help-btn',
                      text: 'সাহায্য',
                      style: {
                        color: { text: '#ffffff' },
                        border: { radius: '4px' },
                        spacing: { padding: { top: '12px', bottom: '12px' } }
                      }
                    }],
                    ['core/button', {
                      className: 'login-btn',
                      text: 'লগ ইন',
                      style: {
                        color: { text: '#ffffff' },
                        border: { radius: '4px' },
                        spacing: { padding: { top: '12px', bottom: '12px' } }
                      }
                    }],
                    ['core/button', {
                      className: 'signup-btn',
                      text: 'নিবন্ধন',
                      style: {
                        color: { text: '#ffffff' },
                        border: { radius: '4px' },
                        spacing: { padding: { top: '12px', bottom: '12px' } }
                      }
                    }]
                  ]}
                  templateLock="all"
                  orientation="horizontal"
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu Popup */}
          {isMenuOpen && (
            <div className="mobile-menu-popup">
              <div className="popup-header">
                <Button
                  className="close-menu"
                  icon="no-alt"
                  onClick={() => setIsMenuOpen(false)}
                  label="মেনু বন্ধ করুন"
                />
              </div>
              <div className="popup-content">
                <InnerBlocks
                  allowedBlocks={['core/navigation']}
                  template={[['core/navigation']]}
                />
              </div>
            </div>
          )}
        </header>
      </>
    );
  },
  save: ({ attributes }) => {
    const blockProps = useBlockProps.save();
    return (
      <header 
        {...blockProps} 
        className={`site-header 
          ${attributes.stickyHeader ? 'sticky' : ''} 
          ${attributes.transparentHeader ? 'transparent' : ''}
        `}
      >
        <div className="header-container">
          <div className="header-left">
            <button className="menu-toggle" aria-label="মেনু টগল করুন">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
            <div className="site-branding">
              <InnerBlocks.Content />
            </div>
          </div>
          <div className="header-right">
            {attributes.showSearch && (
              <div className="header-search">
                <InnerBlocks.Content />
              </div>
            )}
            <div className="header-actions">
              <InnerBlocks.Content />
            </div>
          </div>
        </div>
      </header>
    );
  }
});