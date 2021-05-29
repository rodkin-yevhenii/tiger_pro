<?php

namespace Tiger\Service\Ajax;

use Tiger\Service\Ajax\Callbacks\ContactForm;

/**
 * Class Ajax
 *
 * @author Rodkin Yevhenii <rodkin.yevhenii@gmail.com>
 * @package Tiger\Service\Ajax
 */
class Ajax
{
    /**
     * Ajax constructor.
     */
    public function __construct()
    {
        $this->registerHooks();
    }

    /**
     * Register Ajax hooks.
     */
    private function registerHooks(): void
    {
        add_action('wp_ajax_send_callback_request', [ContactForm::class, 'sendFormAjaxCallback']);
        add_action('wp_ajax_nopriv_send_callback_request', [ContactForm::class, 'sendFormAjaxCallback']);
    }
}
