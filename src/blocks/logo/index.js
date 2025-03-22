import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, RangeControl } from '@wordpress/components';

registerBlockType('my-theme/logo', {
  title: 'লোগো',
  icon: 'admin-customizer',
  category: 'theme',
  attributes: {
    url: { type: 'string' },
    alt: { type: 'string' },
    width: { type: 'number', default: 150 }
  },
  edit: ({ attributes, setAttributes }) => (
    <>
      <InspectorControls>
        <PanelBody title="লোগো সেটিংস">
          <RangeControl
            label="প্রস্থ (px)"
            value={attributes.width}
            onChange={(width) => setAttributes({ width })}
            min={50}
            max={300}
          />
        </PanelBody>
      </InspectorControls>

      <MediaUploadCheck>
        <MediaUpload
          onSelect={(media) => setAttributes({ url: media.url, alt: media.alt })}
          allowedTypes={['image']}
          render={({ open }) => (
            <Button onClick={open}>
              {attributes.url ? (
                <img 
                  src={attributes.url} 
                  alt={attributes.alt} 
                  style={{ width: attributes.width + 'px' }}
                />
              ) : 'লোগো সিলেক্ট করুন'}
            </Button>
          )}
        />
      </MediaUploadCheck>
    </>
  ),
  save: ({ attributes }) => (
    attributes.url && (
      <img 
        src={attributes.url} 
        alt={attributes.alt} 
        style={{ width: attributes.width + 'px' }} 
        className="site-logo"
      />
    )
  )
});