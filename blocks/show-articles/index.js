import classnames from 'classnames';
import icon from './icon';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { Spinner, PanelBody, SelectControl } = wp.components;
const { withSelect } = wp.data;

registerBlockType(
    'gpfwwsafspt/show-articles',
    {
        title: __('Articles Block', 'gpfwwsafspt'),
        description: __('Articles from Selected Post Type', 'gpfwwsafspt'),
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },
        category: 'widgets',
        edit:
            withSelect((select, props) => {
            return {};
        })(props => {
                return (
                    <div>
                    </div>
                );

        }) // end withAPIData
        , // end edit
        save(props) {
            // Rendering in PHP
            return null;
        },
    });
