<?php

namespace Tiger\Service\Gutenberg\Renders\Contacts;

use Tiger\Service\Gutenberg\Renders\AbstractBlockRenderCallback;

class RenderCallback extends AbstractBlockRenderCallback
{
    /**
     * Render gutenberg block markup.
     *
     * @param array $attributes Array of gutenberg block attributes.
     *
     * @return string
     */
    protected function render(array $attributes): string
    {
        $isShowBg = $attributes['isShowBg'] ?? true;
        $formHeading = $attributes['formHeading'] ?? '';
        $contactsHeading = $attributes['contactsHeading'] ?? '';
        $btnText = $attributes['btnText'] ?? '';
        $phone = $attributes['phone'] ?? '';
        $email = $attributes['email'] ?? '';
        $telegram = $attributes['telegram'] ?? '';
        $viber = $attributes['viber'] ?? '';
        $whatsapp = $attributes['whatsapp'] ?? '';

        ob_start(); ?>
        <section class="section <?php echo $isShowBg ? 'section-callback' : '';?>" id="section-callback">
            <div class="container">
                <div class="section__callback callback">
                    <div class="callback__item">
                        <p class="subheading subheading--sm"><?php echo $formHeading; ?></p>
                        <div id="contacts-form" class="form" >
                            <div class="form">
                                <form method="post">
                                    <div class="form__field">
                                        <input
                                            type="text"
                                            name="name"
                                            id="contacts-name"
                                            required
                                        />
                                        <label class="form__field-label" for="contacts-name">
                                            <?php _e('Имя', 'tiger'); ?>
                                        </label>
                                    </div>
                                    <div class="form__field">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="contacts-phone"
                                            required
                                        />
                                        <label class="form__field-label" for="contacts-phone">
                                            <?php _e('Телефон', 'tiger'); ?>
                                        </label>
                                    </div>
                                    <input type="hidden" name="action" value="send_callback_request">
                                    <?php wp_nonce_field('send_callback_request', 'nonce') ?>
                                    <div class="form__actions form__actions--left">
                                        <button class="btn btn--primary" type="submit">
                                            <?php echo $btnText; ?>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="callback__item">
                        <p class="subheading subheading--sm"><?php echo $contactsHeading; ?></p>
                        <ul class="callback__info">
                            <li>
                                <a href="tel:<?php echo $phone; ?>" class="link">
                                    <span class="link__inner">
                                        <svg class="icon">
                                            <use xlink:href="<?php echo DIST_URI; ?>img/icons-sprite.svg#icon-phone" />
                                        </svg>
                                        <span><?php echo $phone; ?></span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <div class="socials__list">
                                    <ul>
                                        <li>
                                            <a
                                                href="viber://chat?number=<?php echo $viber; ?>"
                                                class="icon"
                                                target="_blank"
                                            >
                                                <img
                                                    src="<?php echo DIST_URI; ?>img/icons/viber.svg"
                                                    alt="Мы в вайбере"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="tg://resolve?domain=<?php echo $telegram ?>"
                                                class="icon"
                                                target="_blank"
                                            >
                                                <img
                                                    src="<?php echo DIST_URI; ?>img/icons/telegram.svg"
                                                    alt="Мы в телеграмм"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://api.whatsapp.com/send/?phone=<?php echo $whatsapp; ?>"
                                                class="icon"
                                                target="_blank"
                                            >
                                                <img
                                                    src="<?php echo DIST_URI; ?>img/icons/whatsapp.svg"
                                                    alt="Мы в вотсап"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="mailto:<?php echo $email; ?>" class="link">
                                    <span class="link__inner">
                                        <svg class="icon">
                                            <use xlink:href="<?php echo DIST_URI; ?>img/icons-sprite.svg#icon-mail" />
                                        </svg>
                                        <span><?php echo $email; ?></span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }
}
