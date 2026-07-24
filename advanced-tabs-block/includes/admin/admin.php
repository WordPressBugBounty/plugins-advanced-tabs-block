<?php
/**
 * Admin Page Class
 * @package AdvancedTabBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'ATBS_Admin' ) ) {

    class ATBS_Admin {
        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            add_action( 'admin_menu', [ $this, 'atbs_admin_menu' ] );
            add_action( 'admin_enqueue_scripts', [ $this, 'atbs_admin_assets' ] );
        }

        /**
         * Enqueue admin scripts
         * @param string $screen
         * @return void
         * @access public
         */
        public function atbs_admin_assets( $screen ) {
            if ( 'settings_page_atbs-block' === $screen ) {
                wp_enqueue_style( 'atbs-admin-style', ATBS_URL . 'assets/css/admin.css', [], ATBS_VERSION, 'all' );
            }
        }

        /**
         * Add admin menu
         * @return void
         */
        public function atbs_admin_menu() {
            add_submenu_page(
                'options-general.php',
                __( 'Tabs Block', 'advanced-tabs-block' ),
                __( 'Tabs Block', 'advanced-tabs-block' ),
                'manage_options',
                'atbs-block',
                [ $this, 'atbs_admin_page' ]
            );
        }

        /**
         * Admin page
         * @return void
         */
        public function atbs_admin_page() {
            require ATBS_DIR . '/includes/admin/views/admin-page.php';
        }
    }

}
