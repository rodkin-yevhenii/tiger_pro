<?php

namespace Tiger\Service\Gutenberg\Renders;

use Tiger\Service\Gutenberg\Renders\OurWorks;
use Tiger\Service\Gutenberg\Renders\Contacts;

/**
 * Class BlockRendererFactory
 * @package Catenamedia\CatenaPress\Gutenberg\Service\Block
 */
class BlockRendererFactory
{
    /**
     * Register our works slider callback.
     *
     * @return OurWorks\RenderCallback
     */
    public static function renderOurWorksMarkUp(): OurWorks\RenderCallback
    {
        return new OurWorks\RenderCallback();
    }

    /**
     * Register contact form callback.
     *
     * @return Contacts\RenderCallback
     */
    public static function renderContactsMarkUp(): Contacts\RenderCallback
    {
        return new Contacts\RenderCallback();
    }
}
