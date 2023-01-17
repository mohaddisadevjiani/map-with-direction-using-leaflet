<?php
if (!class_exists('MAP_WITH_DIRECTION_USING_LEAFLET_SHORTCODE')) :
    class MAP_WITH_DIRECTION_USING_LEAFLET_SHORTCODE
    {
        /**
         * Init shortcodes.
         * @see wheels()
         */
        public static function init() {
            $shortcodes = array(
                'leaflet-direction-map' => __CLASS__ . '::get_content',
            );
            foreach ( $shortcodes as $shortcode => $function ) {
                add_shortcode( apply_filters( "{$shortcode}_shortcode_tag", $shortcode ), $function );
            }
        }

        public static function get_content()
        {
            ob_start();
            mwdul_get_template_part('content', 'map');
            return ob_get_clean();
        }
    }
endif;