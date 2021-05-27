<?php

namespace Tiger\Service\Gutenberg;

use Tiger\Service\Gutenberg\Renders\AbstractBlockRenderCallback;
use Tiger\Service\Gutenberg\Renders\BlockRendererFactory;

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
        $this->registerBlocks();

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
                    'title' => __('Tiger Blocks', 'tiger'),
                ],
            ]
        );
    }

    /**
     * Register gutenberg block for BE side.
     *
     * @param string                        $block      Block title.
     * @param AbstractBlockRenderCallback   $callback   Render callback.
     * @param array                         $options    Block attributes.
     */
    private function registerBlockType(string $block, AbstractBlockRenderCallback $callback, array $options = []): void
    {
        register_block_type(
            'tiger-pro/' . $block,
            array_merge(
                [
                    'render_callback' => $callback,
                    'editor_script' => 'gb-editor-script',
                    'editor_style' => 'gb-editor-style',
                    'blocks' => 'gb-script'
                ],
                $options
            )
        );
    }

    /**
     * Registers Gutenberg block
     */
    private function registerBlocks(): void
    {
        $this->registerBlockType(
            'our-works',
            BlockRendererFactory::renderOurWorksMarkUp(),
            [
                'attributes' => [
                    'items' => [
                        'type' => 'array',
                        'default' => [],
                        'items' => [
                            'type' => 'object',
                        ],
                    ]
                ],
            ]
        );
    }
}
