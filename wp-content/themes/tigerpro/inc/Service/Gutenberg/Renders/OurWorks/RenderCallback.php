<?php

namespace Tiger\Service\Gutenberg\Renders\OurWorks;

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
        $heading = $attributes['heading'] ?? __('Наши работы', 'tiger');
        $works = $attributes['items'] ?? false;

        if (!$works) {
            return '';
        }

        ob_start(); ?>
        <section class="section section-projects">
            <div class="container">
                <h2 class="heading heading--md heading--primary heading--mb-lg">
                    <span class="heading__inner"><?php echo $heading; ?></span>
                </h2>
                <div class="section__slider">
                    <div class="section__controls">
                        <div class="section__controls-group">
                                <span class="btn btn--secondary btn--square btn-arrow btn-arrow--left">
                                    <svg class="icon">
                                        <use
                                            xlink:href="<?php echo DIST_URI; ?>img/icons-sprite.svg#icon-arrow-left"
                                        />
                                    </svg>
                                </span>
                            <span class="btn btn--secondary btn--square btn-arrow btn-arrow--right">
                                    <svg class="icon">
                                        <use
                                            xlink:href="<?php echo DIST_URI; ?>img/icons-sprite.svg#icon-arrow-right"
                                        />
                                    </svg>
                                </span>
                        </div>
                    </div>
                    <div class="slider gallery slider-projects">
                        <?php foreach ($works as $work) :
                            if (empty($work['imgId'])) {
                                continue;
                            }

                            $imgId = $work['imgId'];
                            $imgUrl = $work['imgUrl'];
                            $text = $work['text'] ?? '';
                            ?>
                            <div class="slider__item">
                            <a
                                href="<?php echo $imgUrl; ?>"
                                class="card card--primary card--default"
                            >
                                <div class="card__inner">
                                    <div class="card__bg">
                                        <?php echo wp_get_attachment_image($imgId, 'our-works'); ?>
                                    </div>
                                    <div class="card__overlay">
                                        <div class="card__overlay-inner">
                                            <div class="card__icon card__icon--lg">
                                                <svg class="icon">
                                                    <use
                                                        xlink:href="<?php echo DIST_URI; ?>img/icons-sprite.svg#icon-pdf"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__content">
                                    <p class="card__text">
                                        <?php echo $text; ?>
                                    </p>
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
