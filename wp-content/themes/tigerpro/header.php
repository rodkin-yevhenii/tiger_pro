<?php

use Tiger\Admin\MainMenuWalker;
use Tiger\Admin\MobileMenuWalker;
use Tiger\Service\Helpers\Helpers;

$logo  = get_field('site_logo', 'option');
$phone = Helpers::getSitePhoneNumber();
?>
<!DOCTYPE html>
<html lang="<?php echo ICL_LANGUAGE_CODE; ?>">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#F39200">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link
        href="<?php echo SRC_URI . 'favicon.png'; ?>"
        rel="shortcut icon"
        type="image/x-icon"
    >
    <?php wp_head(); ?>
</head>
<body <?php echo is_user_logged_in() && wp_is_mobile() ? 'style="margin-top: 46px;"' :''; ?>>
<div class="root" id="root">
    <header class="header" <?php echo is_user_logged_in() ? 'style="margin-top: 46px;"' :''; ?>>
        <div class="container">
            <div class="header__content">
                <div class="header__logo">
                    <a href="/" class="logo logo--primary">
                        <span class="logo__img">
                            <?php echo wp_get_attachment_image($logo, [50, 50]); ?>
                        </span>
                        <span class="logo__text"><?php _e('Тайгер Про', 'tiger'); ?></span>
                    </a>
                </div>
                <div class="header__nav u-desktop-sm-hidden">
                    <?php wp_nav_menu(
                        [
                            'theme_location'  => 'primary-menu',
                            'container'       => 'nav',
                            'container_class' => 'nav',
                            'echo'            => true,
                            'fallback_cb'     => '__return_empty_string',
                            'items_wrap'      => '<ul>%3$s</ul>',
                            'depth'           => 2,
                            'walker'          => new MainMenuWalker(),
                        ]
                    ); ?>
                </div>
                <?php
                Helpers::theLanguageSwitcher();

                if (!empty($phone)) : ?>
                    <div class="header__links">
                        <a
                            href="tel:<?php echo $phone['cleaned']; ?>"
                            class="link link--secondary link--bold link--icon-on-mobile"
                        >
                            <span class="link__inner">
                                <svg class="icon icon--primary icon--extra-lg">
                                    <use xlink:href="<?php echo SRC_URI; ?>img/icons-sprite.svg#icon-phone-circle"/>
                                </svg>
                                <span><?php echo $phone['formatted']; ?></span>
                            </span>
                        </a>
                    </div>
                <?php endif; ?>
                <div class="header__btn u-desktop-sm-visible">
                    <button class="btn-menu">
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="menu-mobile">
        <div class="menu-mobile__inner">
            <div class="menu-mobile__content">
                <div class="menu-mobile__nav">
                        <?php wp_nav_menu(
                            [
                                'theme_location'  => 'mobile-menu',
                                'container' => 'nav',
                                'container_class' => 'nav',
                                'echo' => true,
                                'fallback_cb' => '__return_empty_string',
                                'items_wrap' => '<ul>%3$s</ul>',
                                'depth' => 1,
                                'walker' => new MobileMenuWalker(),
                            ]
                        ); ?>
                </div>
                <?php Helpers::theLanguageSwitcher('mobile'); ?>
            </div>
        </div>
    </div>
    <main class="main">
