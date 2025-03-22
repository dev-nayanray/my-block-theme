import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps, 
  InspectorControls,
  RichText,
  AlignmentToolbar,
  BlockControls
} from '@wordpress/block-editor';
import { 
  PanelBody, 
  TextControl, 
  ColorPalette 
} from '@wordpress/components';

registerBlockType('my-block-theme/custom-heading', {
  title: 'কাস্টম হেডিং',
  icon: 'heading',
  category: 'design',
  attributes: {
    content: {
      type: 'string',
      default: 'আমার কাস্টম টাইটেল'
    },
    alignment: {
      type: 'string',
      default: 'left'
    },
    textColor: {
      type: 'string',
      default: '#000000'
    }
  },
  edit: ({ attributes, setAttributes }) => {
    const { content, alignment, textColor } = attributes;

    const blockProps = useBlockProps({
      style: { 
        textAlign: alignment,
        color: textColor
      }
    });

    return (
      <>
        <BlockControls>
          <AlignmentToolbar
            value={alignment}
            onChange={(newAlignment) => 
              setAttributes({ alignment: newAlignment })
            }
          />
        </BlockControls>

        <InspectorControls>
          <PanelBody title="হেডিং সেটিংস">
            <TextControl
              label="শিরোনাম"
              value={content}
              onChange={(newContent) => 
                setAttributes({ content: newContent })
              }
            />
            
            <PanelBody title="রঙ সেটিংস">
              <ColorPalette
                colors={[
                  { name: 'কালো', color: '#000000' },
                  { name: 'নীল', color: '#21759b' },
                  { name: 'লাল', color: '#cc0000' }
                ]}
                value={textColor}
                onChange={(newColor) => 
                  setAttributes({ textColor: newColor })
                }
              />
            </PanelBody>
          </PanelBody>
        </InspectorControls>

        <RichText
          {...blockProps}
          tagName="h2"
          value={content}
          allowedFormats={[]}
          onChange={(newContent) => 
            setAttributes({ content: newContent })
          }
          placeholder="শিরোনাম লিখুন..."
        />
      </>
    );
  },
  save: ({ attributes }) => {
    const { content, alignment, textColor } = attributes;
    
    const blockProps = useBlockProps.save({
      style: { 
        textAlign: alignment,
        color: textColor
      }
    });

    return (
      <RichText.Content
        {...blockProps}
        tagName="h2"
        value={content}
      />
    );
  }
});