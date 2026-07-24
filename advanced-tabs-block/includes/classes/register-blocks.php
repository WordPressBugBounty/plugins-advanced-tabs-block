<?php
/**
 * Register All Blocks 
 * @package AdvancedTabBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'ATBS_Register_Blocks' ) ) {

    class ATBS_Register_Blocks {

        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            add_action( 'init', [ $this, 'register_blocks' ] ); 
        }

        /**
         * Register Blocks
         * @return void
         */
        public function register_blocks() {

            $blocks_folder = ATBS_DIR . '/build/blocks';

            if ( is_dir( $blocks_folder ) ) {

                $contents = scandir( $blocks_folder );

                if ( false === $contents ) {
                    return;
                }

                $blocks = array_filter( $contents, function( $item ) use ( $blocks_folder ) {
                    $item_path = $blocks_folder . DIRECTORY_SEPARATOR . $item;
                    return is_dir( $item_path ) && ! in_array( $item, [ '.', '..' ], true );
                } );

                foreach ( $blocks as $block ) {
                    register_block_type( ATBS_DIR . '/build/blocks/' . $block );
                }
            }
        }

    }

}
