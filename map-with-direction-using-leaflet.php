<?php

/**
 * Plugin Name:       Map with direction using Leaflet
 * Plugin URI:        https://odes.pk
 * Description:       This plugin automatically posts CE to TREC as well as sends a notification email to admin when student graduates
 * Author: Shabbar Abbas
 * Author URI: shabbarabbasodes@gmail.com
 * Version: 1.0.0
 * Text Domain: 'mwdul'
 * Domain Path: languages
 * License: GPL2 or later.
 */

/**
 * Main Class.
 *
 * @since 1.0.0
 */
final class MAP_WITH_DIRECTION_USING_LEAFLET
{
    /**
     * @var The one true instance
     * @since 1.0.0
     */
    protected static $_instance = null;

    public $version = '1.0.0';
    public $settings;

    /**
     *
     * @since 2.0.0
     */
    public function __construct()
    {
        $this->define_constants();
        $this->includes();
        $this->localisation();
        $this->init();

        do_action('mwdulp_loaded');
    }

    /**
     * Define Constants.
     * @since  1.0.0
     */
    private function define_constants()
    {
        $this->define('MAP_WITH_DIRECTION_USING_LEAFLET_DIR', plugin_dir_path(__FILE__));
        $this->define('MAP_WITH_DIRECTION_USING_LEAFLET_URL', plugin_dir_url(__FILE__));
        $this->define('MAP_WITH_DIRECTION_USING_LEAFLET_BASENAME', plugin_basename(__FILE__));
        $this->define('MAP_WITH_DIRECTION_USING_LEAFLET_VERSION', $this->version);
    }

    /**
     * Define constant if not already set.
     * @since  1.0.0
     */
    private function define($name, $value)
    {
        if (!defined($name)) {
            define($name, $value);
        }
    }

    /**
     * Include required files.
     * @since  1.0.0
     */
    public function includes()
    {
        /**
         * plugin init
         */
        include_once 'includes/class-setup.php';
        include_once 'includes/functions.php';
        include_once 'includes/class-shortcode.php';
    }

    /**
     * Load Localisation files.
     * @since  1.0.0
     */
    public function localisation()
    {
        $locale = apply_filters('plugin_locale', get_locale(), 'mwdulp');

        load_textdomain('mwdulp', WP_LANG_DIR . '/map-with-direction-using-leaflet/map-with-direction-using-leaflet-' . $locale . '.mo');
        load_plugin_textdomain('mwdulp', false, plugin_basename(dirname(__FILE__)) . '/languages');
    }

    public function init()
    {
        $this->settings = new LDGNP_Settings();

        register_activation_hook(__FILE__, [$this, 'activate']);

        add_action('plugins_loaded', [$this, 'upgrade']);
    }

    /**
     * Main Instance.
     */
    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * Throw error on object clone.
     *
     * @return void
     * @since 1.0.0
     * @access protected
     */
    public function __clone()
    {
        _doing_it_wrong(__FUNCTION__, __('Cheatin&#8217; huh?', 'mwdulp'), '1.0.0');
    }

    /**
     * Disable unserializing of the class.
     * @since 1.0.0
     */
    public function __wakeup()
    {
        _doing_it_wrong(__FUNCTION__, __('Cheatin&#8217; huh?', 'mwdulp'), '1.0.0');
    }

    /**
     * responsible to do actions on activation
     */
    public function activate()
    {

    }

    /**
     * responsible to upgrade plugin
     */
    public function upgrade()
    {

    }
}


/**
 * Run the plugin.
 */
function mwdulp()
{
    return MAP_WITH_DIRECTION_USING_LEAFLET::instance();
}

mwdulp();