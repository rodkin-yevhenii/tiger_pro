<?php

namespace Tiger\Service\Helpers;

/**
 * Class Helpers
 *
 * @author Rodkin Yevhenii <rodkin.yevhenii@gmail.com>
 * @package Tiger\Service\Helpers
 */
class Helpers
{
    /**
     * Get array with formatted and cleaned site phone number.
     *
     * @param string $number    Phone number.
     *
     * @return array
     */
    public static function getSitePhoneNumber(string $number = ''): array
    {
        if (empty($number)) {
            $number = get_field('site_phone', 'option');
        }

        if (empty($number)) {
            return [];
        }

        return [
            'formatted' => $number,
            'cleaned' => str_replace([' ', '(', ')', '-'], '', $number)
        ];
    }

    /**
     * Display menu switcher.
     */
    public static function theLanguageSwitcher(string $device = 'desktop'): void
    {
        ob_start();
        ?>
        [wpml_language_switcher]
        <?php if ('desktop' === $device) : ?>
            <div class="{{ css_classes }} header__languages languages u-desktop-sm-hidden">
        <?php else: ?>
            <div class="{{ css_classes }} menu-mobile__languages languages">
        <?php endif; ?>
            <ul>
                {% for code, language in languages %}

                <li class="{{ language.css_classes }}">
                    {% if language.is_current %}
                        <a href="{{ language.url }}" class="link link--secondary active">
                    {% else %}
                        <a href="{{ language.url }}" class="link link--secondary">
                    {% endif %}
                        {{ language.display_name }}
                    </a>
                </li>

                {% endfor %}
            </ul>
        </div>
        [/wpml_language_switcher]
        <?php
        echo do_shortcode(ob_get_clean());
    }
}
