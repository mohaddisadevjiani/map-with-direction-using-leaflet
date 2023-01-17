<?php

if (!function_exists('mwdul_get_template_part')) {
    //Loading a template in a plugin, but allowing theme and child theme to override template
    function mwdul_get_template_part($slug, $name, $args = array(), $path = MAP_WITH_DIRECTION_USING_LEAFLET_DIR . "templates/")
    {
        /*
         * locate_template() returns path to file.
         * if either the child theme or the parent theme have overridden the template.
         */
        $template = locate_template("{$slug}-{$name}.php");

        if (!$template) {
            /*
             * If neither the child nor parent theme have overridden the template,
             * we load the template from the 'templates' sub-directory of the directory this file is in.
             */
            $template = $path . "{$slug}-{$name}.php";
        }

        $template = apply_filters('mwdul_get_template_part', $template, $slug, $name, $args);

        if (!file_exists($template)) {
            /* translators: %s template */
            _doing_it_wrong(__FUNCTION__, sprintf(__('%s does not exist.', 'business-manager'), '<code>' . $template . '</code>'), '1.0.0');
            return;
        }
        load_template($template, false, $args);
    }
}

