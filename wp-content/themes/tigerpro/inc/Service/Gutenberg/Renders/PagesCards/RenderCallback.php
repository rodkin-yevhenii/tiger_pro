<?php

namespace Tiger\Service\Gutenberg\Renders\PagesCards;

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
        $cards = $attributes['cards'] ?? [];

        if (empty($cards)) {
            return '';
        }

        ob_start(); ?>
        <section class="section section--cards ">
            <div class="section__overlay section__overlay--left"><span></span></div>
            <div class="section__overlay section__overlay--right"><span></span></div>
            <div class="container">
                <div class="section__cards">
                    <div class="grid-container">
                        <?php foreach ($cards as $card) :
                            $id = $card['id'];
                            $description = get_field('short_description', $id);
                            ?>
                            <div class="grid-item-1-of-3">
                                <a
                                    href="<?php echo get_the_permalink($id); ?>"
                                    class="card card--primary card--mobile-wide"
                                >
                                    <div class="card__inner">
                                        <div class="card__bg">
                                            <?php echo get_the_post_thumbnail($id, 'cards'); ?>
                                        </div>
                                        <div class="card__overlay">
                                            <?php if (!empty($description)) : ?>
                                                <div class="card__overlay-inner">
                                                    <ul class="card__list">
                                                        <?php foreach ($description as $item) : ?>
                                                            <li><?php echo $item['text']; ?></li>
                                                        <?php endforeach; ?>
                                                    </ul>
                                                </div>
                                            <?php endif; ?>
                                            <h3 class="card__title card__title--secondary card__title--center">
                                                <?php echo get_the_title($id); ?>
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }
}
