import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette, RangeControl, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  return (
    <>
      <InspectorControls>
        <PanelBody title="বাটন স্টাইল">
          <ColorPalette
            colors={[
              { name: 'নীল', color: '#21759b' },
              { name: 'সবুজ', color: '#00d084' }
            ]}
            value={attributes.bgColor}
            onChange={(bgColor) => setAttributes({ bgColor })}
          />
          <RangeControl
            label="প্যাডিং"
            value={attributes.padding}
            onChange={(padding) => setAttributes({ padding })}
            min={5}
            max={30}
          />
        </PanelBody>
        
        <PanelBody title="লিংক">
          <TextControl
            label="URL"
            value={attributes.url}
            onChange={(url) => setAttributes({ url })}
          />
        </PanelBody>
      </InspectorControls>

      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon="admin-links"
            title="লিংক"
            onClick={() => prompt('লিংক:', attributes.url)}
          />
        </ToolbarGroup>
      </BlockControls>

      {/* বাকি এডিট UI */}
    </>
  );
}