import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const posts = useSelect(/* ... */);

  return (
    <>
      <InspectorControls>
        <PanelBody title="গ্রিড সেটিংস">
          <RangeControl
            label="কলাম সংখ্যা"
            value={attributes.columns}
            onChange={(columns) => setAttributes({ columns })}
            min={1}
            max={4}
          />
          <SelectControl
            label="অর্ডার"
            value={attributes.order}
            options={[
              { label: 'নতুন থেকে পুরাতন', value: 'desc' },
              { label: 'পুরাতন থেকে নতুন', value: 'asc' },
            ]}
            onChange={(order) => setAttributes({ order })}
          />
        </PanelBody>
      </InspectorControls>

      {/* বাকি এডিট UI */}
    </>
  );
}