<?php

$autoloadFile = ABSPATH . "/vendor/autoload.php";

if (file_exists($autoloadFile)) {
    require_once($autoloadFile);
} else {
    die(__("php composer is required", 'hpractice'));
}

/**
 * Define constants.
 */
define('HOME_URL', get_home_url());
define('THEME_DIR', get_stylesheet_directory());
define('THEME_URI', get_stylesheet_directory_uri());
define('DIST_URI', THEME_URI . '/frontend/dist/');
define('DIST_PATH', THEME_DIR . '/frontend/dist/');
define('SRC_URI', THEME_URI . '/frontend/src/');
define('SRC_PATH', THEME_DIR . '/frontend/src/');

/***
 * Init theme functionality
 */
add_action('after_setup_theme', ['Tiger\Admin\ThemeInit', 'getInstance']);
