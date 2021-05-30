<?php

namespace Tiger\Admin;

use Tiger\Front\Assets;
use Tiger\Front\Front;
use Tiger\Service\Ajax\Ajax;
use Tiger\Service\Gutenberg\Gutenberg;
use Tiger\Service\RestApi\RestApi;

/**
 * Class ThemeInit
 *
 * @author Rodkin Yevhenii <rodkin.yevhenii@gmail.com>
 * @package Tiger\Admin
 */
class ThemeInit
{
    public static $instance;

    /**
     * ThemeInit constructor.
     */
    public function __construct()
    {
        $this->initAcfFields();
        $this->initAssets();
        $this->initMenu();
        $this->initFront();
        $this->initGutenberg();
        $this->initRestApi();
        $this->initAjax();

        $this->registerThemeSettings();
        $this->registerThemeSupport();
        $this->registerImagesSizes();

        // Register mime types.
        add_filter('upload_mimes', [$this, 'registerAdditionalMimeTypes'], 1, 1);

        // Disable auto <br/> for CF7.
        add_filter('wpcf7_autop_or_not', '__return_false');

        flush_rewrite_rules();
    }

    /**
     * Register ACF forms for admin side.
     */
    private function initAcfFields()
    {
        new AcfFieldsInit();
    }

    /**
     * Init styles and scripts enqueuing.
     */
    private function initAssets(): void
    {
        new Assets();
    }

    /**
     * Init theme menus.
     */
    private function initMenu(): void
    {
        new Menu();
    }

    /**
     * Frontend hooks and callbacks.
     */
    private function initFront(): void
    {
        new Front();
    }

    /**
     * Gutenberg blocks.
     */
    private function initGutenberg(): void
    {
        new Gutenberg();
    }

    private function initRestApi(): void
    {
        new RestApi();
    }

    /**
     * Init ajax functionality.
     */
    private function initAjax(): void
    {
        new Ajax();
    }

    /**
     * Register ACF options page
     */
    private function registerThemeSettings()
    {
        acf_add_options_page(
            [
                'page_title' => __('Настройки темы', 'tiger'),
                'menu_title' => __('Настройки темы', 'tiger'),
                'menu_slug'  => 'theme-settings',
                'capability' => 'edit_posts',
                'redirect'   => false,
            ]
        );
    }

    /**
     * Add theme support
     */
    private function registerThemeSupport(): void
    {
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_post_type_support('page', array('excerpt'));
        add_theme_support('editor-styles');
    }

    /**
     * Add new images sizes.
     */
    private function registerImagesSizes(): void
    {
        add_image_size('our-works', 328, 272, true);
        add_image_size('cards', 326, 454, true);
    }

    /**
     * Return ThemeInit Instance.
     *
     * @return ThemeInit
     */
    public static function getInstance(): ThemeInit
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * Add support for extra mime-types.
     *
     * @param array $mimeTypes Registered mime-types.
     *
     * @return array
     */
    public function registerAdditionalMimeTypes(array $mimeTypes): array
    {
        $mimeTypes['webp'] = 'image/webp';     // Adding .webp extension

        return $mimeTypes;
    }
}
