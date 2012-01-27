steal('jquery/model', function(){

/**
 * @class Seccubus.Models.ConfigItem
 * @parent ConfigItem
 * @inherits jQuery.Model
 * Wraps backend config_item service.  
 * Since the ConfigTest api is read only, there is only one method findAll
 */
$.Model('Seccubus.Models.ConfigItem',
/* @Static */
{
	/**
	 * Finds the status of all configuration items
	 * @return array of ConfigTest hashes ( name, result, message )
	 *
	 * name - String, name of the configuration item
	 *
	 * result - String, result of the test OK/NOK
	 *
	 * message - String, message about the configuraiton item
	 */
	findAll: "json/ConfigTest.pl"
},
/* @Prototype */
{});

})
