<?php
if (!defined('ABSPATH')) {
    exit;
}
if (!class_exists('MAP_WITH_DIRECTION_USING_LEAFLET_SETUP')):
    class MAP_WITH_DIRECTION_USING_LEAFLET_SETUP
    {
        public function __construct()
        {
            $this->hooks();
        }

        /**
         * Hook in to actions & filters
         *
         * @since 1.0.0
         */
        public function hooks()
        {
            /**
             * @see styles
             */
            add_action('wp_enqueue_scripts', array($this, 'public_styles'));
            /**
             * @see scripts
             */
            add_action('init', array($this, 'public_scripts'), 10);

            add_action('init', ['MAP_WITH_DIRECTION_USING_LEAFLET_SHORTCODE', 'init']);

        }

        public function public_scripts()
        {
            $v = MAP_WITH_DIRECTION_USING_LEAFLET_VERSION;
            $url = MAP_WITH_DIRECTION_USING_LEAFLET_URL;
            $scripts = [
                'mwdul-leaflet' => [
                    'src' => 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/leaflet.js',
                    'deps' => ['jquery'],
                    'version' => $v,
                ],
                'mwdul-leaflet-routing-machine' => [
                    'src' => 'https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js',
                    'deps' => ['jquery', 'mwdul-leaflet'],
                    'version' => $v,
                ],
                'mwdul-public' => [
                    'src' => $url . 'assets/js/public.js',
                    'deps' => ['jquery', 'mwdul-leaflet', 'mwdul-leaflet-routing-machine'],
                    'version' => $v,
                ],
            ];
            foreach ($scripts as $name => $props) {
                wp_register_script($name, $props['src'], $props['deps'], $props['version']);
            }
            if(is_user_logged_in() ) {
                $search_criteria['field_filters'][] = array('key' => 'created_by', 'value' => get_current_user_id());

                $entries = GFAPI::get_entries(22, $search_criteria);
                $waypoints = [];
                foreach ($entries as $entry) {
                    $email = rgar($entry, '5');
                    if ($email) {
                        $user = get_user_by('email', $email);
                        if ($user) {
                            $lat = get_field('latitude', 'user_' . $user->ID);
                            $long = get_field('longitude', 'user_' . $user->ID);
                            if ($lat && $long) {
                                $waypoints[] = ['lat' => $lat, 'long' => $long];
                            }
                        }
                    }
                }

                wp_localize_script('mwdul-public', 'mwdul_script', array(
                    'icon' => MAP_WITH_DIRECTION_USING_LEAFLET_URL . '/assets/js/redpin.png',
                    'waypoints' => $waypoints,
                ));
            }
        }

        public function public_styles()
        {
            $v = MAP_WITH_DIRECTION_USING_LEAFLET_VERSION;
            $url = MAP_WITH_DIRECTION_USING_LEAFLET_URL;
            wp_enqueue_style('mwdul-public', $url . 'assets/css/public.css', $v);
            wp_enqueue_style('mwdul-leaflet', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/leaflet.css', $v);
            wp_enqueue_style('mwdul-leaflet-routing-machine', 'https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css', $v);
        }
    }

    return new MAP_WITH_DIRECTION_USING_LEAFLET_SETUP();
endif;









