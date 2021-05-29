<?php

namespace Tiger\Service\Ajax\Callbacks;

/**
 * Class ContactForm
 *
 * @author Rodkin Yevhenii <rodkin.yevhenii@gmail.com>
 * @package Tiger\Service\Ajax\Callbacks
 */
class ContactForm
{
    /**
     * Send email to admin with info about new callback request.
     */
    public static function sendFormAjaxCallback(): void
    {
        if (empty($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'send_callback_request')) {
            wp_send_json(
                [
                    'status' => 403,
                    'message' => __('Доступ запрещён', 'tiger')
                ]
            );
        }

        if (empty($_POST['phone'])) {
            wp_send_json(
                [
                    'status' => 204,
                    'message' => __('Телефон обязателен', 'tiger')
                ]
            );
        }

        $email = get_field('site_email', 'option');
        $message = '<strong>Имя</strong>: ' . ($_POST['name'] ?? '') . '<br />';
        $message .= '<strong>Телефон</strong>: ' . $_POST['phone'];
        $subject = 'Новый запрос обратной связи';
        $siteUrl = str_replace('https://', '', site_url('', 'https'));

        $login = 'info@' . $siteUrl;
        $siteName = get_bloginfo('name');
        $to = $email;

        $headers = [];
        $headers[] = "Date: " . date("D, j M Y G:i:s") . " +0300\r\n";
        $headers[] = "From: =?UTF-8?Q?" . str_replace(
            "+",
            "_",
            str_replace("%", "=", urlencode($siteName))
        ) . "?= <$login>\r\n";
        $headers[] = "X-Mailer: Post script Practice House \r\n";
        $headers[] = "Reply-To: =?UTF-8?Q?" . str_replace(
            "+",
            "_",
            str_replace("%", "=", urlencode($siteName))
        ) . "?= <$login>\r\n";
        $headers[] = "X-Priority: 3 (Normal)\r\n";
        $headers[] = "Message-ID: <12345654321." . date("YmjHis") . "@" . $siteUrl . ">\r\n";
        $headers[] = "To: =?UTF-8?Q?" . str_replace(
            "+",
            "_",
            str_replace("%", "=", urlencode($_POST['name'] ?? 'Пользователю нашего сайта'))
        ) . "?= <$to>\r\n";
        $headers[] = "Subject: =?UTF-8?Q?" . str_replace(
            "+",
            "_",
            str_replace("%", "=", urlencode($subject))
        ) . "?=\r\n";
        $headers[] = "MIME-Version: 1.0\r\n";
        $headers[] = "Content-Type: text/html; charset=UTF-8\r\n";
        $headers[] = "Content-Transfer-Encoding: 8bit\r\n";

        if (wp_mail($email, $subject, $message, $headers)) {
            wp_send_json(
                [
                    'status' => 200,
                    'message' => __('Письмо отправленно', 'tiger')
                ]
            );
        }

        wp_send_json(
            [
                'status' => 500,
                'message' => __(
                    'Возникла ошибка при отправке письма, свяжитесь с нашим менеджером с помощью другого метода',
                    'tiger'
                )
            ]
        );
    }
}
