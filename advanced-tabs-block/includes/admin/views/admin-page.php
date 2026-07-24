<?php
/**
 * Admin Page Template
 *
 * @package AdvancedTabBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
<div class="atbs__wrap">
    <div class="plugin_max_container">
        <div class="plugin__head_container">
            <div class="plugin_head">
                <h1 class="plugin_title">
                    <?php esc_html_e( 'Advanced Tabs Block', 'advanced-tabs-block' ); ?>
                </h1>
                <p class="plugin_description">
                    <?php esc_html_e( 'Advanced Tabs Block is a Gutenberg block plugin that allows you to showcase your content in tab style in Gutenberg Editor without any coding knowledge', 'advanced-tabs-block' ); ?>
                </p>
            </div>
        </div>
        <div class="plugin__body_container">
            <div class="plugin_body">
                <div class="support__panel">
                    <div class="tab__panel_flex">
                        <div class="tab__panel_left">
                            <h3 class="video__title">
                                <?php esc_html_e( 'Video Tutorial', 'advanced-tabs-block' ); ?>
                            </h3>
                            <p class="video__description">
                                <?php esc_html_e( 'Watch the video tutorial to learn how to use the plugin. It will help you start your own design quickly.', 'advanced-tabs-block' ); ?>
                            </p>
                            <div class="video__container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZqCh5G-FMSU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="tab__panel_right">
                            <div class="single__support_panel">
                                <h3 class="support__title">
                                    <?php esc_html_e( 'Get Support', 'advanced-tabs-block' ); ?>
                                </h3>
                                <p class="support__description">
                                    <?php esc_html_e( 'If you find any issue or have any suggestion, please let me know.', 'advanced-tabs-block' ); ?>
                                </p>
                                <a href="https://wordpress.org/support/plugin/advanced-tabs-block/" class="support__link" target="_blank" rel="noopener noreferrer">
                                    <?php esc_html_e( 'Support', 'advanced-tabs-block' ); ?>
                                </a>
                            </div>
                            <div class="single__support_panel">
                                <h3 class="support__title">
                                    <?php esc_html_e( 'Spread Your Love', 'advanced-tabs-block' ); ?>
                                </h3>
                                <p class="support__description">
                                    <?php esc_html_e( 'If you like this plugin, please share your opinion', 'advanced-tabs-block' ); ?>
                                </p>
                                <a href="https://wordpress.org/support/plugin/advanced-tabs-block/reviews/" class="support__link" target="_blank" rel="noopener noreferrer">
                                    <?php esc_html_e( 'Rate the Plugin', 'advanced-tabs-block' ); ?>
                                </a>
                            </div>
                            <div class="single__support_panel">
                                <h3 class="support__title">
                                    <?php esc_html_e( 'Similar Blocks', 'advanced-tabs-block' ); ?>
                                </h3>
                                <p class="support__description">
                                    <?php esc_html_e( 'Want to get more similar blocks, please visit my website', 'advanced-tabs-block' ); ?>
                                </p>
                                <a href="https://makegutenblock.com" class="support__link" target="_blank" rel="noopener noreferrer">
                                    <?php esc_html_e( 'Visit my Website', 'advanced-tabs-block' ); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="custom__block_request">
                        <h3 class="custom__block_request_title">
                            <?php esc_html_e( 'Need to Hire Me?', 'advanced-tabs-block' ); ?>
                        </h3>
                        <p class="custom__block_request_description">
                            <?php esc_html_e( 'I am available for any freelance projects. Please feel free to share your project detail with me.', 'advanced-tabs-block' ); ?>
                        </p>
                        <div class="available__links">
                            <a href="mailto:zbinsaifullah@gmail.com" class="available__link mail" target="_blank" rel="noopener noreferrer">
                                <?php esc_html_e( 'Send Email', 'advanced-tabs-block' ); ?>
                            </a>
                            <a href="https://makegutenblock.com/contact" class="available__link web" target="_blank" rel="noopener noreferrer">
                                <?php esc_html_e( 'Send Message', 'advanced-tabs-block' ); ?>
                            </a>
                            <a href="https://www.fiverr.com/devs_zak" class="available__link fiverr" target="_blank" rel="noopener noreferrer">
                                <?php esc_html_e( 'Fiverr', 'advanced-tabs-block' ); ?>
                            </a>
                            <a href="https://www.upwork.com/freelancers/~010af183b3205dc627" class="available__link upwork" target="_blank" rel="noopener noreferrer">
                                <?php esc_html_e( 'UpWork', 'advanced-tabs-block' ); ?>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
