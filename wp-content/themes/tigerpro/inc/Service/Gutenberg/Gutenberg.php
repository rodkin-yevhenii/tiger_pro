<?php

namespace Tiger\Service\Gutenberg;

/**
 * Class Gutenberg
 *
 * @author Rodkin Yevhenii <rodkin.yevhenii@gmail.com>
 * @package Tiger\Service\Gutenberg
 */
class Gutenberg
{
    /**
     * Gutenberg constructor.
     */
    public function __construct()
    {
        $this->registerHooks();

        add_editor_style('editor-style.css');
    }

    /**
     * Register hooks.
     */
    private function registerHooks(): void
    {
        add_filter('block_categories', [$this, 'registerBlockCategory']);
    }

    /**
     * Register category for custom Gutenberg blocks
     *
     * @param array $categories     Gutenberg blocks categories.
     *
     * @return array
     */
    public function registerBlockCategory($categories): array
    {
        return array_merge(
            $categories,
            [
                [
                    'slug' => 'tiger',
                    'title' => __('Tiger Blocks', 'v-catena-gutenberg'),
                ],
            ]
        );
    }
}
