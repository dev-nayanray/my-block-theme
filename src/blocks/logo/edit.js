import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  return (
    <>
      <InspectorControls>
        <PanelBody title="লোগো সেটিংস">
          <RangeControl
            label="প্রস্থ"
            value={attributes.width}
            onChange={(width) => setAttributes({ width })}
            min={100}
            max={300}
          />
          <TextControl
            label="Alt টেক্সট"
            value={attributes.logoAlt}
            onChange={(logoAlt) => setAttributes({ logoAlt })}
          />
        </PanelBody>
      </InspectorControls>

      {/* বাকি এডিট UI */}
    </>
  );
}