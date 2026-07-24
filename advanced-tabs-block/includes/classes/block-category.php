<?php 
/**
 * Register Blocks Category
 * @package AdvancedTabBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'ATBS_Blocks_Category' ) ) {

    class ATBS_Blocks_Category {

        /**
         * Constructor 
         * @return void
         */
        public function __construct() {
            if ( version_compare( $GLOBALS['wp_version'], '5.8', '<' ) ) {
                add_filter( 'block_categories', [ $this, 'register_block_category' ], 10, 2 );
            } else {
                add_filter( 'block_categories_all', [ $this, 'register_block_category' ], 10, 2 );
            }
        }

        /**
         * Register Block Category
         * @param array $categories
         * @param object $post
         * @return array
         */
        public function register_block_category( $categories, $post ) {
            return array_merge(
                array(
                    array(
                        'slug'  => 'atbs-block',
                        'title' => __( 'Tabs Blocks', 'advanced-tabs-block' ),
                    ),
                ),
                $categories,
            );
        }

    }

}