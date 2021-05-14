<?php

use Tiger\Admin\MobileMenuWalker;
use Tiger\Service\Helpers\Helpers;

$logo       = get_field('site_logo', 'option');
$messengers =get_field('messengers', 'option');
$phone      = Helpers::getSitePhoneNumber();
?>
</main>
<footer class="footer">
    <div class="footer__content">
        <div class="container">
            <div class="footer__row">
                <div class="footer__logo">
                    <a href="/" class="logo logo--secondary">
                        <span class="logo__img">
                            <?php echo wp_get_attachment_image($logo, [50, 50]); ?>
                        </span>
                        <span class="logo__text"><?php _e('Тайгер Про', 'tiger'); ?></span>
                    </a>
                </div>
                <div class="footer__nav">
                    <?php wp_nav_menu(
                        [
                            'theme_location'  => 'footer-menu',
                            'container'       => 'nav',
                            'container_class' => 'nav nav--secondary',
                            'echo'            => true,
                            'fallback_cb'     => '__return_empty_string',
                            'items_wrap'      => '<ul>%3$s</ul>',
                            'depth'           => 1,
                            'walker'          => new MobileMenuWalker(),
                        ]
                    ); ?>
                </div>
                <div class="footer__contacts">
                    <?php if (!empty($phone)) : ?>
                        <div class="footer__list">
                            <ul>
                                <li>
                                    <a href="tel:<?php echo $phone['cleaned']; ?>" class="link">
                                        <span class="link__inner">
                                            <svg class="icon">
                                                <use xlink:href="<?php
                                                echo SRC_URI; ?>/img/icons-sprite.svg#icon-phone"/>
                                            </svg>
                                            <span><?php echo $phone['formatted']; ?></span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <?php
                    endif;

                    if (
                        !empty($messengers['viber'])
                        || !empty($messengers['telegram'])
                        || !empty($messengers['whatsapp'])
                    ) :
                        ?>
                        <div class="socials__list">
                            <ul>
                                <?php if (!empty($messengers['viber'])) : ?>
                                    <li>
                                        <a href="viber://chat?number=<?php echo $messengers['viber']; ?>"
                                           class="icon"
                                           target="_blank"
                                        >
                                            <img
                                                src="<?php echo SRC_URI; ?>img/icons/viber.svg"
                                                alt="<?php _e('Мы в вайбере', 'tiger'); ?>"
                                            />
                                        </a>
                                    </li>
                                <?php
                                endif;

                                if (!empty($messengers['telegram'])) :
                                ?>
                                    <li>
                                        <a href="tg://resolve?domain=<?php echo $messengers['telegram']; ?>"
                                           class="icon"
                                           target="_blank"
                                        >
                                            <img
                                                src="<?php echo SRC_URI; ?>img/icons/telegram.svg"
                                                alt="<?php _e('Мы в телеграмм', 'tiger'); ?>"
                                            />
                                        </a>
                                    </li>
                                <?php
                                endif;

                                if (!empty($messengers['whatsapp'])) :
                                ?>
                                    <li>
                                        <a href="https://api.whatsapp.com/send/?phone=<?php
                                        echo $messengers['whatsapp']; ?>"
                                           class="icon"
                                           target="_blank"
                                        >
                                            <img
                                                src="<?php echo SRC_URI; ?>img/icons/whatsapp.svg"
                                                alt="<?php _e('Мы в вотсап', 'tiger'); ?>"
                                            />
                                        </a>
                                    </li>
                                <?php endif; ?>
                            </ul>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__copyright">
        <div class="container">
            <p class="text">
                <?php echo sprintf(
                    __('Copyright © %d Тайгер Про, Все права защищены', 'tiger'),
                    date('Y')
                ); ?>
            </p>
        </div>
    </div>
</footer>
</div>

<div id="popup-success" class="popup popup--sm mfp-with-anim mfp-hide">
    <div class="popup__inner">
        <div class="popup__content ">
            <div class="popup__icon">
                <svg class="icon">
                    <use xlink:href="<?php echo SRC_URI; ?>img/icons-sprite.svg#icon-circle-check"></use>
                </svg>
            </div>
            <h6 class="subheading subheading--center subheading--md popup-title-js">
                <?php _e('Спасибо, что обратились к нам', 'tiger'); ?>
            </h6>
            <p class="text text--center popup-text-js">
                <?php _e('Мы свяжемся с Вами <br> в ближайшее время', 'tiger'); ?>
            </p>
        </div>
        <div class="popup__actions">
            <button class="btn btn--primary" type="button" data-popup-close="popup-error">
                <?php _e('OK', 'tiger'); ?>
            </button>
        </div>
    </div>
</div>
<div id="popup-error" class="popup popup--sm mfp-with-anim mfp-hide">
    <div class="popup__inner">
        <div class="popup__content ">
            <div class="popup__icon">
                <svg class="icon">
                    <use xlink:href="<?php echo SRC_URI; ?>img/icons-sprite.svg#icon-circle-x"></use>
                </svg>
            </div>
            <h6 class="subheading subheading--center subheading--md popup-title-js">
                <?php _e('Возникла ошибка', 'tiger'); ?>!
            </h6>
            <p class="text text--center popup-text-js">
                <?php _e('Пожалуйста, попробуйте снова повторить вашу заявку...', 'tiger'); ?>
            </p>
        </div>
        <div class="popup__actions">
            <button class="btn btn--primary" type="button" data-popup-close="popup-error">
                <?php _e('OK', 'tiger'); ?>
            </button>
        </div>
    </div>
</div>
<?php wp_footer(); ?>
</body>
</html>
