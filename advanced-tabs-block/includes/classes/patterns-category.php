<?php
/**
 * Register Patterns Category
 * 
 * @package AdvancedTabBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'ATBS_Patterns_Category' ) ) {

    class ATBS_Patterns_Category {

        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            add_action( 'init', [ $this, 'register_patterns_category' ] );
        }

        /**
         * Register Patterns Category
         * @return void
         */
         public function register_patterns_category() {
            register_block_pattern_category(
                'atbs-patterns',
                [
                    'label' => __( 'Tab Blocks', 'advanced-tabs-block' ),
                ]
            );
         }

    }

 }

