<?php
/**
 * My Block Theme functions and definitions
 * 
 * @package My_Block_Theme
 */

// Security check to prevent direct access
if ( ! defined( 'ABSPATH' )) {
    exit; // Exit if accessed directly
}

/**
 * Enqueue block editor assets
 */
if ( ! function_exists( 'my_block_theme_editor_assets' ) ) {
    function my_block_theme_editor_assets() {
        // Enqueue the compiled JavaScript
        wp_enqueue_script(
            'my-block-theme-editor-script', // Unique handle
            get_template_directory_uri() . '/build/index.js',
            array( 
                'wp-blocks', 
                'wp-element', 
                'wp-block-editor', // Updated dependency (wp-editor is deprecated)
                'wp-components'
            ),
            filemtime( get_template_directory() . '/build/index.js' ), // Auto versioning
            true // Load in footer
        );

        // Optional: Add translations
        wp_set_script_translations(
            'my-block-theme-editor-script',
            'my-block-theme',
            get_template_directory() . '/languages'
        );
    }
    add_action( 'enqueue_block_editor_assets', 'my_block_theme_editor_assets' );
}

/**
 * Theme setup
 */
if ( ! function_exists( 'my_block_theme_setup' ) ) {
    add_action( 'after_setup_theme', 'my_block_theme_setup' );
    
    function my_block_theme_setup() {
        // Add theme support
        add_theme_support( 'wp-block-styles' );
        add_theme_support( 'align-wide' );
        
        // Register navigation menus
        register_nav_menus(
            array(
                'primary' => esc_html__( 'Primary Menu', 'my-block-theme' ),
                'footer'  => esc_html__( 'Footer Menu', 'my-block-theme' ),
            )
        );
    }
}

/**
 * Enqueue frontend assets
 */
if ( ! function_exists( 'my_block_theme_frontend_assets' ) ) {
    add_action( 'wp_enqueue_scripts', 'my_block_theme_frontend_assets' );
    
    function my_block_theme_frontend_assets() {
        // Main stylesheet
        wp_enqueue_style(
            'my-block-theme-style',
            get_stylesheet_uri(),
            array(),
            filemtime( get_template_directory() . '/style.css' )
        );
    }
}