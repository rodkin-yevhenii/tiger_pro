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
        return __('Наши работы', 'tiger');
    }
}
