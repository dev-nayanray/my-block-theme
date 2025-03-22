import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

registerBlockType('my-theme/search', {
  title: 'সার্চ',
  icon: 'search',
  category: 'theme',
  attributes: {
    placeholder: { type: 'string', default: 'খুঁজুন...' },
    buttonText: { type: 'string', default: 'খুঁজুন' }
  },
  edit: ({ attributes, setAttributes }) => (
    <>
      <InspectorControls>
        <PanelBody title="সার্চ সেটিংস">
          <TextControl
            label="প্লেসহোল্ডার"
            value={attributes.placeholder}
            onChange={(val) => setAttributes({ placeholder: val })}
          />
          <TextControl
            label="বাটন টেক্সট"
            value={attributes.buttonText}
            onChange={(val) => setAttributes({ buttonText: val })}
          />
        </PanelBody>
      </InspectorControls>

      <div className="custom-search">
        <input
          type="search"
          placeholder={attributes.placeholder}
          className="search-input"
        />
        <button className="search-button">
          {attributes.buttonText}
        </button>
      </div>
    </>
  ),
  save: ({ attributes }) => (
    <div className="custom-search">
      <input
        type="search"
        placeholder={attributes.placeholder}
        className="search-input"
      />
      <button className="search-button">
        {attributes.buttonText}
      </button>
    </div>
  )
});