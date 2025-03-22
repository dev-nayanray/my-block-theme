import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

registerBlockType('my-theme/post-grid', {
  title: 'পোস্ট গ্রিড',
  icon: 'grid-view',
  category: 'theme',
  attributes: {
    postsToShow: { type: 'number', default: 3 },
    columns: { type: 'number', default: 3 }
  },
  edit: ({ attributes, setAttributes }) => {
    const { postsToShow, columns } = attributes;
    const posts = useSelect((select) => (
      select('core').getEntityRecords('postType', 'post', { 
        per_page: postsToShow 
      })
    ));

    return (
      <>
        <InspectorControls>
          <PanelBody title="গ্রিড সেটিংস">
            <RangeControl
              label="পোস্ট সংখ্যা"
              value={postsToShow}
              onChange={(val) => setAttributes({ postsToShow: val })}
              min={1}
              max={6}
            />
            <RangeControl
              label="কলাম সংখ্যা"
              value={columns}
              onChange={(val) => setAttributes({ columns: val })}
              min={1}
              max={4}
            />
          </PanelBody>
        </InspectorControls>

        <div className="post-grid" style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '20px'
        }}>
          {!posts ? (
            <p>লোড হচ্ছে...</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="post-item">
                <h3>{post.title.rendered}</h3>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              </div>
            ))
          )}
        </div>
      </>
    );
  },
  save: () => null // Server-side rendering
});