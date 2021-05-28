<?php

namespace Tiger\Service\RestApi;

use Tiger\Service\RestApi\Routes\Contacts;

/**
 * Class RestApi
 *
 * @author Rodkin Yevhenii <rodkin.yevhenii@gmail.com>
 * @package Tiger\Service\RestApi
 */
class RestApi
{
    /**
     * RestApi constructor.
     */
    public function __construct()
    {
        $this->addRoutes();
    }

    /**
     * Register new routs
     */
    private function addRoutes(): void
    {
        new Contacts();
    }
}
