<?php

namespace Tiger\Service\Gutenberg\Renders;

/**
 * Class AbstractBlockRenderCallback
 * @package Catenamedia\CatenaPress\Gutenberg\Service\Block
 */
abstract class AbstractBlockRenderCallback
{

    /**
     * @param array $attributes
     *
     * @return string
     */
    public function __invoke(array $attributes): string
    {
        return $this->render($attributes);
    }

    /**
     * @param array $attributes
     *
     * @return string
     */
    abstract protected function render(array $attributes): string;
}
