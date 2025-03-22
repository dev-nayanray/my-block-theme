import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  return (
    <>
      <InspectorControls>
        <PanelBody title="সার্চ সেটিংস">
          <TextControl
            label="প্লেসহোল্ডার"
            value={attributes.placeholder}
            onChange={(placeholder) => setAttributes({ placeholder })}
          />
          <TextControl
            label="বাটন টেক্সট"
            value={attributes.buttonText}
            onChange={(buttonText) => setAttributes({ buttonText })}
          />
        </PanelBody>
      </InspectorControls>

      {/* বাকি এডিট UI */}
    </>
  );
}