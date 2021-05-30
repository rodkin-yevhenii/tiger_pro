<?php

get_header(); ?>
    <section class="section section-info">
        <div class="container">
            <div class="section__message">
                <div class="section__message-head">
                    <h1 class="heading heading--lg heading--primary heading--center">
                            <span class="heading__number">
                                <img
                                    src="<?php echo DIST_URI; ?>img/404.svg"
                                    alt="<?php _e('404. Страница не найдена!', 'tiger'); ?>">
                            </span>
                    </h1>
                    <p>
                        <strong><?php _e('Упс! Что-то пошло не так', 'tiger'); ?> ...</strong>
                    </p>
                    <p>
                        <?php _e('Запрашиваемая Вами страница не найдена. <br>
                        Возможно страница была удалена <br> или вы сделали опечатку в наборе адреса страницы', 'tiger'); ?>
                    </p>
                </div>
                <div class="section__message-footer">
                    <p>
                        <strong><?php _e('Но не беспокойтесь!', 'tiger'); ?></strong>
                        <br>
                        <?php _e('У нас есть много других предложений для ва', 'tiger'); ?>с:
                    </p>
                    <ul>
                        <li><?php _e('Прейти на <br> <a href="/">главную страницу</a>', 'tiger'); ?></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
<?php
get_footer();
