<?php

namespace Tiger\Admin;

/**
 * Class Menu
 *
 * @author Rodkin Yevhenii <rodkin.yevhenii@gmail.com>
 * @package Tiger\Admin
 */
class Menu
{
    /**
     * Menu constructor.
     */
    public function __construct()
    {
        $this->registerMenuLocations();
        $this->initHooks();
    }

    /**
     * Register theme menu locations.
     */
    private function registerMenuLocations()
    {
        register_nav_menus(
            [
                'primary-menu' => esc_html__('Главное меню', 'tiger'),
                'mobile-menu' => esc_html__('Мобильное меню', 'tiger'),
                'footer-menu' => esc_html__('Меню в подвале', 'tiger'),
            ]
        );
    }

    /**
     * Init menu hooks
     */
    private function initHooks(): void
    {
    }
}
