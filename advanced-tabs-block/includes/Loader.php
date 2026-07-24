<?php
/**
 * Loader Class 
 * @package AdvancedTabBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'ATBS_Loader' ) ) {

    class ATBS_Loader {

        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            $this->includes();
            $this->init_classes();
        }

        /**
         * Include the plugin files
         * @return void
         */
        private function includes() {
            require_once ATBS_DIR . '/includes/admin/admin.php';
            require_once ATBS_DIR . '/includes/classes/block-category.php';
            require_once ATBS_DIR . '/includes/classes/register-blocks.php';
            require_once ATBS_DIR . '/includes/classes/enqueue-assets.php';
            require_once ATBS_DIR . '/includes/classes/fonts-loader.php';
            require_once ATBS_DIR . '/includes/classes/patterns-category.php';
            require_once ATBS_DIR . '/includes/classes/block-patterns.php';
        }

        /**
         * Instantiate the plugin classes
         * @return void
         */
        private function init_classes() {
            new ATBS_Admin();
            new ATBS_Blocks_Category();
            new ATBS_Register_Blocks();
            new ATBS_Enqueue_Assets();
            new ATBS_Fonts_Loader();
            new ATBS_Patterns_Category();
            new ATBS_Register_Patterns();
        }

    }

}
new ATBS_Loader(); // initialize the class
