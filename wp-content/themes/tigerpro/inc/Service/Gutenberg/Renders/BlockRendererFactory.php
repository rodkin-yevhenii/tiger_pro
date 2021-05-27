<?php

namespace Tiger\Service\Gutenberg\Renders;

use Tiger\Service\Gutenberg\Renders\OurWorks;

/**
 * Class BlockRendererFactory
 * @package Catenamedia\CatenaPress\Gutenberg\Service\Block
 */
class BlockRendererFactory
{
    /**
     * Register video iframe render method.
     *
     * @return OurWorks\RenderCallback
     */
    public static function renderOurWorksMarkUp(): OurWorks\RenderCallback
    {
        return new OurWorks\RenderCallback();
    }
}
