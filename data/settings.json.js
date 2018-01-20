/*jshint esversion: 6 */
const
defaultParam = {
	"language": "en",
	"configFileName": "serverconfig.cfg",
	"settingsType": "fast"},
settingsType = [
	{"id": "fast", "name": "option1", "text": "Rapide (LAN)"},
	{"id": "simplified", "name": "option2", "text": "Simplifié"},
	{"id": "full", "name": "option3", "text": "Complet"}],
data = {
	"engineSettings": [
		{	"name": "sv_name",
			"settingsType": 1,
			"type": "text",
			"default": "unnamed server",
			"fastValue": "server_LAN_2017"
		},
		{	"name": "bindaddr",
			"settingsType": 3,
			"type": "ip",
			"default": ""
		},
		{	"name": "sv_port",
			"settingsType": 2,
			"type": "port",
			"default": "8303"
		},
		{	"name": "sv_external_port",
			"settingsType": 3,
			"type": "port",
			"default": "0"
		},
		{	"name": "sv_max_clients",
			"settingsType": 1,
			"type": "number",
			"default": "12",
			"fastValue": "30"
		},
		{	"name": "sv_max_clients_per_ip",
			"settingsType": 1,
			"type": "number",
			"default": "12",
			"fastValue": "30"
		},
		{	"name": "sv_high_bandwidth",
			"settingsType": 1,
			"type": "checkbox",
			"default": "0",
			"fastValue": "1"
		},
		{	"name": "sv_register",
			"settingsType": 1,
			"type": "checkbox",
			"default": "1",
			"fastValue": "0"
		},
		{	"name": "sv_map",
			"settingsType": 1,
			"type": "file",
			"default": "dm1",
			"fastValue": "dm6"
		},
		{	"name": "sv_rcon_password",
			"settingsType": 1,
			"type": "text",
			"default": "",
			"fastValue": "lan2017"
		},
		{	"name": "password",
			"settingsType": 2,
			"type": "text",
			"default": ""
		},
		{	"name": "logfile",
			"settingsType": 3,
			"type": "text",
			"default": ""
		},
		{	"name": "console_output_level",
			"settingsType": 3,
			"type": "number",
			"default": "0"
		},
		{	"name": "sv_rcon_max_tries",
			"settingsType": 3,
			"type": "number",
			"default": "3"
		},
		{	"name": "sv_rcon_bantime",
			"settingsType": 3,
			"type": "number",
			"default": "5"
		},
		{	"name": "sv_auto_demo_record",
			"settingsType": 3,
			"type": "checkbox",
			"default": "0"
		},
		{	"name": "sv_auto_demo_max",
			"settingsType": 3,
			"type": "number",
			"default": "10"
		},
		{	"name": "ec_bindaddr",
			"settingsType": 3,
			"type": "ip",
			"default": "localhost"
		},
		{	"name": "ec_port",
			"settingsType": 3,
			"type": "port",
			"default": ""
		},
		{	"name": "ec_password",
			"settingsType": 3,
			"type": "text",
			"default": ""
		},
		{	"name": "ec_bantime",
			"settingsType": 3,
			"type": "number",
			"default": "0"
		},
		{	"name": "ec_auth_timeout",
			"settingsType": 3,
			"type": "number",
			"default": "30"
		},
		{	"name": "ec_output_level",
			"settingsType": 3,
			"type": "number",
			"default": "1"
		}],
	"gameSettings": [
		{	"name": "sv_warmup",
			"settingsType": 2,
			"type": "number",
			"default": "0"
		},
		{	"name": "sv_scorelimit",
			"settingsType": 2,
			"type": "number",
			"default": "20"
		},
		{	"name": "sv_timelimit",
			"settingsType": 2,
			"type": "number",
			"default": "0"
		},
		{	"name": "sv_gametype",
			"settingsType": 2,
			"type": "text",
			"default": "dm"
		},
		{	"name": "sv_maprotation",
			"settingsType": 1,
			"type": "file multiple",
			"default": "",
			"fastValue": "dm1 dm2 dm6 dm7 dm8 dm9"
		},
		{	"name": "sv_rounds_per_map",
			"settingsType": 2,
			"type": "number",
			"default": "1"
		},
		{	"name": "sv_motd",
			"settingsType": 2,
			"type": "text",
			"default": ""
		},
		{	"name": "sv_spectator_slots",
			"settingsType": 2,
			"type": "number",
			"default": "0"
		},
		{	"name": "sv_teambalance_time",
			"settingsType": 2,
			"type": "number",
			"default": "1"
		},
		{	"name": "sv_spamprotection",
			"settingsType": 2,
			"type": "checkbox",
			"default": "1"
		},
		{	"name": "sv_tournament_mode",
			"settingsType": 2,
			"type": "checkbox",
			"default": "0"
		},
		{	"name": "sv_respawn_delay_tdm",
			"settingsType": 2,
			"type": "number",
			"default": "3"
		},
		{	"name": "sv_teamdamage",
			"settingsType": 2,
			"type": "checkbox",
			"default": "0"
		},
		{	"name": "sv_powerups",
			"settingsType": 2,
			"type": "checkbox",
			"default": "1"
		},
		{	"name": "sv_vote_kick",
			"settingsType": 2,
			"type": "checkbox",
			"default": "1"
		},
		{	"name": "sv_vote_kick_bantime",
			"settingsType": 2,
			"type": "number",
			"default": "5"
		},
		{	"name": "sv_vote_kick_min",
			"settingsType": 2,
			"type": "number",
			"default": "0"
		},
		{	"name": "sv_inactivekick_time",
			"settingsType": 2,
			"type": "number",
			"default": "3"
		},
		{	"name": "sv_inactivekick",
			"settingsType": 2,
			"type": "number",
			"default": "1"
		}]
};