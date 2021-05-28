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
                'callback' => [$this, 'contactsCallback']
            ]
        );
    }

    public function contactsCallback(WP_REST_Request $request): array
    {
        $phone = get_field('site_phone', 'option');
        $email = get_field('site_email', 'option');
        $messengers = get_field('messengers', 'option');

        return [
            'phone' => $phone,
            'email' => $email,
            'messengers' => $messengers
        ];
    }

    private function registerHooks(): void
    {
        add_action('rest_api_init', [$this, 'registerRouts']);
    }
}