import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette, ToolbarGroup, ToolbarButton } from '@wordpress/components';

registerBlockType('my-theme/button', {
  title: 'বাটন',
  icon: 'button',
  category: 'theme',
  attributes: {
    text: { type: 'string', default: 'ক্লিক করুন' },
    url: { type: 'string', default: '#' },
    bgColor: { type: 'string', default: '#21759b' },
    textColor: { type: 'string', default: '#ffffff' }
  },
  edit: ({ attributes, setAttributes }) => (
    <>
      <InspectorControls>
        <PanelBody title="রঙ সেটিংস">
          <ColorPalette
            colors={[
              { name: 'নীল', color: '#21759b' },
              { name: 'সবুজ', color: '#00d084' }
            ]}
            value={attributes.bgColor}
            onChange={(color) => setAttributes({ bgColor: color })}
          />
          <ColorPalette
            colors={[
              { name: 'সাদা', color: '#ffffff' },
              { name: 'কালো', color: '#000000' }
            ]}
            value={attributes.textColor}
            onChange={(color) => setAttributes({ textColor: color })}
          />
        </PanelBody>
      </InspectorControls>

      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon="admin-links"
            title="লিংক"
            onClick={() => {
              const newUrl = prompt('লিংক ইনপুট করুন:', attributes.url);
              setAttributes({ url: newUrl });
            }}
          />
        </ToolbarGroup>
      </BlockControls>

      <a 
        href={attributes.url} 
        className="custom-button"
        style={{ 
          backgroundColor: attributes.bgColor,
          color: attributes.textColor,
          padding: '10px 20px',
          display: 'inline-block'
        }}
      >
        <RichText
          value={attributes.text}
          onChange={(text) => setAttributes({ text })}
          placeholder="বাটন টেক্সট..."
        />
      </a>
    </>
  ),
  save: ({ attributes }) => (
    <a 
      href={attributes.url} 
      className="custom-button"
      style={{ 
        backgroundColor: attributes.bgColor,
        color: attributes.textColor,
        padding: '10px 20px',
        display: 'inline-block'
      }}
    >
      <RichText.Content value={attributes.text} />
    </a>
  )
});