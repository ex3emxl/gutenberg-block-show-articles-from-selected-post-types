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
        attributes: {
            typeOfPost: {
                type: 'string',
                default: 'post'
            },
            sortOfPost: {
                type: 'string',
                default: 'asc'
            },
            numberOfPost: {
                type: 'number',
                default: 3
            }
        },
        edit:
            withSelect((select, props) => {
            return {
                posts: select('core').getEntityRecords('postType', props.attributes.typeOfPost, {
                    per_page: props.attributes.numberOfPost,
                    order: props.attributes.sortOfPost
                }),
                posttypes: select('core').getPostTypes()
            };
        })(props => {
                const {
                    posts, posttypes, attributes: {
                        typeOfPost, sortOfPost, numberOfPost
                    },
                    className, setAttributes
                } = props;
                const changePostType = posttype => setAttributes({typeOfPost: posttype});
                const changePostSort = postsort => setAttributes({sortOfPost: postsort});
                const changeNumberOfPosts = e => setAttributes({numberOfPost: e.target.value});

                let result;
                if (posttypes) {
                    this.result = posttypes.map(arg => {
                        return {
                            label: arg.name,
                            value: arg.slug
                        }
                    });
                }

                if (!posts) {
                    return (
                        <p className={className}>
                            <Spinner/>
                            {__('Loading Posts', 'gpfwwsafspt')}
                        </p>
                    );
                }
                if (0 === posts.length) {
                    return (
                        <div>
                            <InspectorControls>
                                <PanelBody
                                    title={__('Display Post Settings', 'gpfwwsafspt')}
                                >
                                    <SelectControl
                                        label="Post types"
                                        value={ typeOfPost }
                                        options={ this.result }
                                        onChange={ changePostType }
                                    />
                                    <SelectControl
                                        label="Sort posts"
                                        value={ sortOfPost }
                                        options={ [
                                            {'label': 'ASC', 'value': 'asc'},
                                            {'label': 'DESC', 'value': 'desc'}
                                        ] }
                                        onChange={ changePostSort }
                                    />
                                    <label>{__("Number Of Posts", "gpfwwsafspt")}</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={ numberOfPost }
                                        onChange={ changeNumberOfPosts }
                                    />
                                </PanelBody>
                            </InspectorControls>
                            <ul className={className}>
                                <p>{__('No Posts', 'gpfwwsafspt')}</p>
                            </ul>
                        </div>
                    );
                }
                return (
                    <div>
                        <InspectorControls>
                            <PanelBody
                                title={__('Display Post Settings', 'gpfwwsafspt')}
                            >
                                <SelectControl
                                    label="Post types"
                                    value={ typeOfPost }
                                    options={ this.result }
                                    onChange={ changePostType }
                                />
                                <SelectControl
                                    label="Sort posts"
                                    value={ sortOfPost }
                                    options={ [
                                        {'label': 'ASC', 'value': 'asc'},
                                        {'label': 'DESC', 'value': 'desc'}
                                    ] }
                                    onChange={ changePostSort }
                                />
                                <label>{__("Number Of Posts", "gpfwwsafspt")}</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={ numberOfPost }
                                    onChange={ changeNumberOfPosts }
                                />
                            </PanelBody>
                        </InspectorControls>
                        <ul className={className}>
                            {posts.map(post => {
                                return (
                                    <li>
                                        <a className={className} href={post.link}>
                                            {post.title.rendered}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );

        }) // end withAPIData
        , // end edit
        save(props) {
            // Rendering in PHP
            return null;
        },
    });
