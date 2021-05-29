<?php

namespace Tiger\Front;

/**
 * Class Assets
 *
 * @author Rodkin Yevhenii <rodkin.yevhenii@gmail.com>
 * @package Tiger\Admin
 */
class Assets
{
    /**
     * Assets constructor.
     */
    public function __construct()
    {
        $this->registerHooks();
    }

    /**
     * Register hooks for working with styles and scripts.
     */
    public function registerHooks(): void
    {
        add_action('wp_head', [$this, 'enqueueStyles'], 1);
        add_filter('style_loader_tag', [$this, 'wrapStyleTag'], 20, 4);
        add_action('wp_enqueue_scripts', [$this, 'enqueueScripts']);
        add_action('enqueue_block_editor_assets', [$this, 'registerAdminAssets']);
    }

    /**
     * Include styles.
     */
    public function enqueueStyles(): void
    {
        $styles = $this->getStylesArray();

        foreach ($styles as $style) {
            wp_enqueue_style(
                $style['handle'],
                $style['src'],
                [],
                null,
            );
        }
    }

    /**
     * Include scripts.
     */
    public function enqueueScripts(): void
    {
        $scripts = $this->getScriptsArray();

        foreach ($scripts as $script) {
            wp_enqueue_script(
                $script['handle'],
                $script['src'],
                [$script['deps']],
                null,
                true
            );
        }
    }

    /**
     * Add preload attribute for styles.
     *
     * @param string $html     Link markup.
     * @param string $handle   link id.
     * @param string $href     link source.
     * @param string $media    Style devices types
     *
     * @return string
     */
    public function wrapStyleTag($html, $handle, $href, $media): string
    {
        if (is_admin()) {
            return $html;
        }

        ob_start(); ?>
        <link rel='preload' as='style' onload="this.onload=null;this.rel='stylesheet'"
              id='<?php echo $handle ?>' href='<?php echo $href ?>' type='text/css' media='<?php echo $media ?>' />
        <?php return ob_get_clean();
    }

    /**
     * Get styles array.
     *
     * @return array
     */
    private function getStylesArray(): array
    {
        $css[] = [
            'handle' => 'tiger',
            'src' => DIST_URI . 'css/main.css'
        ];

        return $css;
    }

    /**
     * Get scripts array.
     *
     * @return array
     */
    private function getScriptsArray(): array
    {
        $scripts[] = [
            'handle' => 'tiger',
            'src' => DIST_URI . 'js/main.js',
            'deps' => 'jquery'
        ];
        $scripts[] = [
            'handle' => 'gb-scripts',
            'src' => DIST_URI . 'js/blocks.js',
            'deps' => 'jquery'
        ];


        return $scripts;
    }

    /**
     * Register scripts & styles for admin side
     */
    public function registerAdminAssets(): void
    {
        wp_register_script(
            'gb-editor-script',
            DIST_URI . 'js/editor.js',
            [
                'wp-blocks',
                'wp-i18n',
                'wp-element',
                'wp-editor',
                'wp-components',
                'wp-blob',
                'lodash',
                'wp-data',
                'wp-html-entities',
                'wp-compose',
            ]
        );
        wp_enqueue_script('gb-editor-script');
        wp_register_style(
            'gb-editor-style',
            DIST_URI . 'css/editor.css',
            ['wp-edit-blocks']
        );
        wp_enqueue_style('gb-editor-style');
    }
}
