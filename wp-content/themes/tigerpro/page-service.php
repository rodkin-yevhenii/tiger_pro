<?php

/*
Template Name: Услуги.
Template Post Type: page
*/

get_header(); ?>
    <div class="head">
        <div class="head__content">
            <div class="container">
                <h1 class="heading heading--lg heading--center heading--primary">
                    <?php echo the_title(); ?>
                </h1>
            </div>
        </div>
    </div>
<?php
the_content();
get_footer();
