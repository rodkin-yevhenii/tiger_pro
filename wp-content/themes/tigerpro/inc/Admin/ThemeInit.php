<?php

namespace Tiger\Admin;

use Tiger\Front\Assets;
use Tiger\Front\Front;
use Tiger\Service\Gutenberg\Gutenberg;

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
     * Init styles and scripts enqueuing.
     */
    private function initAssets(): void
    {
        new Assets();
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

    /**
     * Init theme menus.
     */
    private function initMenu(): void
    {
        new Menu();
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
                'menu_slug' => 'theme-settings',
                'capability' => 'edit_posts',
                'redirect' => false,
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
        //add_image_size('carousel-item', 328, 358, true);
    }

    /**
     * Register ACF forms for admin side.
     */
    private function initAcfFields()
    {
        new AcfFieldsInit();
    }

    /**
     * Add support for extra mime-types.
     *
     * @param array $mimeTypes      Registered mime-types.
     *
     * @return array
     */
    public function registerAdditionalMimeTypes(array $mimeTypes): array
    {
        $mimeTypes['webp'] = 'image/webp';     // Adding .webp extension

        return $mimeTypes;
    }
}
