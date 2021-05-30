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
                    'heading' => [
                        'type' => 'strings',
                        'default' => __('Наши работы', 'tiger'),
                    ],
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

        $this->registerBlockType(
            'contacts',
            BlockRendererFactory::renderContactsMarkUp(),
            [
                'attributes' => [
                    'isShowBg' => [
                        'type' => 'bool',
                        'default' => true,
                    ],
                    'formHeading' => [
                        'type' => 'string',
                        'default' => __('Закажите бесплатную консультацию, и мы ответим на все Ваши вопросы!', 'tiger'),
                    ],
                    'contactsHeading' => [
                        'type' => 'string',
                        'default' => __('Бесплатная консультация', 'tiger'),
                    ],
                    'btnText' => [
                        'type' => 'string',
                        'default' => __('Получить консультацию', 'tiger'),
                    ],
                    'phone' => [
                        'type' => 'string',
                        'default' => '',
                    ],
                    'email' => [
                        'type' => 'string',
                        'default' => '',
                    ],
                    'telegram' => [
                        'type' => 'string',
                        'default' => '',
                    ],
                    'viber' => [
                        'type' => 'string',
                        'default' => '',
                    ],
                    'whatsapp' => [
                        'type' => 'string',
                        'default' => '',
                    ]
                ],
            ]
        );

        $this->registerBlockType(
            'contact-info',
            BlockRendererFactory::renderContactsInfoMarkUp(),
            [
                'attributes' => [
                    'isShowBg' => [
                        'type' => 'bool',
                        'default' => true,
                    ],
                    'mainHeading' => [
                        'type' => 'string',
                        'default' => __('Контакты', 'tiger'),
                    ],
                    'addressHeading' => [
                        'type' => 'string',
                        'default' => __('Юридический адрес', 'tiger'),
                    ],
                    'phoneHeading' => [
                        'type' => 'string',
                        'default' => __('Tелефон', 'tiger'),
                    ],
                    'emailHeading' => [
                        'type' => 'string',
                        'default' => __('Почта', 'tiger'),
                    ],
                    'scheduleHeading' => [
                        'type' => 'string',
                        'default' => __('Время работы', 'tiger'),
                    ],
                    'phone' => [
                        'type' => 'string',
                        'default' => '',
                    ],
                    'email' => [
                        'type' => 'string',
                        'default' => '',
                    ],
                    'schedule' => [
                        'type' => 'string',
                        'default' => '',
                    ],
                    'address' => [
                        'type' => 'string',
                        'default' => '',
                    ],
                    'telegram' => [
                        'type' => 'string',
                        'default' => '',
                    ],
                    'viber' => [
                        'type' => 'string',
                        'default' => '',
                    ],
                    'whatsapp' => [
                        'type' => 'string',
                        'default' => '',
                    ]
                ],
            ]
        );
    }
}
