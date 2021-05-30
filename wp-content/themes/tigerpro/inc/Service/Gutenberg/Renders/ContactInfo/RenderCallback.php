<?php

namespace Tiger\Service\Gutenberg\Renders\ContactInfo;

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
        $mainHeading = $attributes['mainHeading'] ?? '';
        $addressHeading = $attributes['addressHeading'] ?? '';
        $phoneHeading = $attributes['phoneHeading'] ?? '';
        $emailHeading = $attributes['emailHeading'] ?? '';
        $scheduleHeading = $attributes['scheduleHeading'] ?? '';
        $phone = $attributes['phone'] ?? '';
        $email = $attributes['email'] ?? '';
        $schedule = $attributes['schedule'] ?? '';
        $address = $attributes['address'] ?? '';
        $telegram = $attributes['telegram'] ?? '';
        $viber = $attributes['viber'] ?? '';
        $whatsapp = $attributes['whatsapp'] ?? '';

        ob_start(); ?>
        <section class="section section-contacts <?php echo $isShowBg ? 'section-contacts__overlay' : ''; ?>">
            <div class="container">
                <div class="contacts">
                    <?php if (!empty($mainHeading)) : ?>
                        <div class="head">
                            <div class="head__content">
                                <div class="container">
                                    <h1 class="heading heading--lg heading--center heading--primary">
                                        <?php echo $mainHeading; ?>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    <?php endif; ?>
                    <div class="contacts__inner">
                        <?php if (!empty($address)) : ?>
                            <div class="contacts__item">
                                <?php if (!empty($addressHeading)) : ?>
                                    <h4 class="subheading subheading--mb-md"><?php echo $addressHeading; ?></h4>
                                <?php endif; ?>
                                <div class="contacts__item-content">
                                    <span class="link link--secondary"><?php echo $address; ?></span>
                                </div>
                            </div>
                        <?php endif;

                        if (!empty($phone)) : ?>
                            <div class="contacts__item">
                                <?php if (!empty($phoneHeading)) : ?>
                                    <h4 class="subheading subheading--mb-md"><?php echo $phoneHeading; ?></h4>
                                <?php endif; ?>
                                <div class="contacts__item-content">
                                    <span class="link link--secondary"><?php echo $phone; ?></span>
                                </div>
                                <?php if (!empty($viber) || !empty($telegram) || !empty($whatsapp)) : ?>
                                    <div class="socials__list">
                                    <ul>
                                        <?php if (!empty($viber)) : ?>
                                            <li>
                                                <a
                                                    href="viber://chat?number=<?php echo $viber; ?>"
                                                    class="icon"
                                                    target="_blank"
                                                >
                                                    <img
                                                        src="<?php echo DIST_URI; ?>img/icons/viber.svg"
                                                        alt="<?php _e('Мы в вайбере', 'tiger'); ?>"
                                                    />
                                                </a>
                                            </li>
                                        <?php endif;

                                        if (!empty($telegram)) : ?>
                                            <li>
                                                <a
                                                    href="tg://resolve?domain=<?php echo $telegram ?>"
                                                    class="icon"
                                                    target="_blank"
                                                >
                                                    <img
                                                        src="<?php echo DIST_URI; ?>img/icons/telegram.svg"
                                                        alt="<?php _e('Мы в телеграмм', 'tiger'); ?>"
                                                    />
                                                </a>
                                            </li>
                                        <?php endif;

                                        if (!empty($telegram)) : ?>
                                            <li>
                                                <a
                                                    href="https://api.whatsapp.com/send/?phone=<?php echo $whatsapp; ?>"
                                                    class="icon"
                                                    target="_blank"
                                                >
                                                    <img
                                                        src="<?php echo DIST_URI; ?>img/icons/whatsapp.svg"
                                                        alt="<?php _e('Мы в вотсап', 'tiger'); ?>"
                                                    />
                                                </a>
                                            </li>
                                        <?php endif; ?>
                                    </ul>
                                </div>
                                <?php endif; ?>
                            </div>
                        <?php endif;

                        if (!empty($email)) : ?>
                            <div class="contacts__item">
                                <?php if (!empty($emailHeading)) : ?>
                                    <h4 class="subheading subheading--mb-md"><?php echo $emailHeading; ?></h4>
                                <?php endif; ?>
                                <div class="contacts__item-content">
                                    <a href="mailto:<?php echo $email; ?>" class="link link--secondary">
                                        <?php echo $email; ?>
                                    </a>
                                </div>
                            </div>
                        <?php endif;

                        if (!empty($schedule)) : ?>
                            <div class="contacts__item">
                                <?php if (!empty($scheduleHeading)) : ?>
                                    <h4 class="subheading subheading--mb-md"><?php echo $scheduleHeading; ?></h4>
                                <?php endif; ?>
                                <div class="contacts__item-content">
                                    <span class="link link--secondary"><?php echo $schedule; ?></span>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }
}
