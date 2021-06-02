<?php

namespace Tiger\Service\RestApi\Routes;

use WP_REST_Request;

/**
 * Class Contacts
 *
 * @author Rodkin Yevhenii <rodkin.yevhenii@gmail.com>
 * @package Tiger\Service\RestApi\Routes
 */
class Contacts
{
    public function __construct()
    {
        $this->registerHooks();
    }

    public function registerRouts(): void
    {
        register_rest_route(
            'tiger/v1',
            '/contacts',
            [
                'methods'  => 'GET',
                'callback' => [$this, 'contactsCallback'],
                'permission_callback' => '__return_true'
            ]
        );
    }

    public function contactsCallback(WP_REST_Request $request): array
    {
        return [
            'phone' => get_field('site_phone', 'option'),
            'email' => get_field('site_email', 'option'),
            'schedule' => get_field('site_schedule', 'option'),
            'address' => get_field('site_address', 'option'),
            'messengers' => get_field('messengers', 'option')
        ];
    }

    private function registerHooks(): void
    {
        add_action('rest_api_init', [$this, 'registerRouts']);
    }
}
