/*jshint esversion: 6 */
const
availableLanguage = [
	{"short": "en", "full": "english" },
	{"short": "fr",	"full": "français" }],
labels = {
	"head": {
		"metaDescription": {
			"en": "Server setting file generator for Teeworlds",
			"fr": "Générateur de fichier de configuration serveur pour Teeworlds"
		}
	},
	"navbar": {
		"title": {
			"en": "Official online server documentation",
			"fr": "Documentation officielle du serveur (en ligne) :"
		}
	},
	"bodyTitles": {
		"serverSetting": {
			"en": "Server Setting",
			"fr": "Configuration du serveur"
		},
		"engineSettings": {
			"en": "Engine settings",
			"fr": "Paramètres du moteur"
		},
		"gameSettings": {
			"en": "Game settings",
			"fr": "Paramètres du jeu"
		},
		"generateSettingFile": {
			"en": "Generate server setting file",
			"fr": "Générer le fichier de configuration du serveur"	
		},
		"about": {
			"en": "About",
			"fr": "A propos"
		}
	},
	"bodyContent": {
		"about": {
			"en": "",
			"fr": "Pour lancer un serveur custom, il faut créer un fichier de configuration serverconfig.cfg et le placer dans le répertoire de stockage du jeu, par défaut : %APPDATA%\Teeworlds (ce répertoire est différent de celui d'installation du jeu !). Ensuite dans une console et il faut utiliser la ligne de commande (depuis le répertoire du jeu) : teeworlds_srv.exe -f serverconfig.cfg. Il est possible de créer un raccourci sur le bureau de teeworlds_srv.exe directement avec les paramètres requis : en éditant les propriétés du raccourci et en rajoutant à la fin de la cible -f serverconfig.cfg"
		}
	},
	"settingsDescription": {
		"sv_name": {
			"en": "Name of the server",
			"fr": "Nom du serveur"
		},
		"bindaddr": {
			"en": "Address to bind *",
			"fr": "Adresse à lier"
		},
		"sv_port": {
			"en": "Port the server will listen on *",
			"fr": "Port du serveur"
		},
		"sv_external_port": {
			"en": "Port to report to the master servers (e.g. in case of a firewall rename) *",
			"fr": "Port à signaler aux serveur Teeworlds (par exemple si un firewall redirige les ports)"
		},
		"sv_max_clients": {
			"en": "Number of clients that can be connected to the server at the same time *",
			"fr": "Nombre de clients (joueurs) max connectés au serveur en simultané"
		},
		"sv_max_clients_per_ip": {
			"en": "Number of clients with the same ip that can be connected to the server at the same time",
			"fr": "Nombre de clients  max avec la même IP connectés au serveur en simultané"
		},
		"sv_high_bandwidth": {
			"en": "Use high bandwidth mode, for LAN servers only *",
			"fr": "Utiliser le mode Haute Bande Passante (pour serveur LAN uniquement)"
		},
		"sv_register": {
			"en": "Register on the master servers",
			"fr": "Référencement sur les serveurs Teeworlds (0 pour serveur LAN)"
		},
		"sv_map": {
			"en": "Map to use",
			"fr": "Carte à utiliser (au lancement)"
		},
		"sv_rcon_password": {
			"en": "Password to access the remote console (if not set, rcon is disabled)",
			"fr": "Mot de passe de la console distante (désactivée si non défini)"
		},
		"password": {
			"en": "Password to connect to the server",
			"fr": "Mot de passe de connexion au serveur"
		},
		"logfile": {
			"en": "Path to a logfile",
			"fr": "Chemin du fichier de log"
		},
		"console_output_level": {
			"en": "Adjust the amount of messages in the console",
			"fr": "Quantité de messages dans la console"
		},
		"sv_rcon_max_tries": {
			"en": "Maximum number of tries for remote console authetication",
			"fr": "Nombre de tentatives d'authentification max à la console distante"
		},
		"sv_rcon_bantime": {
			"en": "Time (in minutes) a client gets banned if remote console authentication fails (0 makes it just use kick)",
			"fr": "Durée qu'un client est banni si l'authentification à la console distante échoue (0 pour simplement éjecter)"
		},
		"sv_auto_demo_record": {
			"en": "Automatically record demos",
			"fr": "Enregistrement automatique de demos"
		},
		"sv_auto_demo_max": {
			"en": "Maximum number of automatically recorded demos (0 = no limit)",
			"fr": "Quantité max de demos automatiquement enregistrées (0 = sans limite)"
		},
		"ec_bindaddr": {
			"en": "Address to bind the external console to. Anything but 'localhost' is dangerous\"",
			"fr": "Adresse à laquelle relier la console externe. Une autre valeur que 'localhost' est risqué"
		},
		"ec_port": {
			"en": "Port to use for the external console",
			"fr": "Port à utiliser pour la console externe"
		},
		"ec_password": {
			"en": "External console password\"",
			"fr": "Mot de passe de la console externe"
		},
		"ec_bantime": {
			"en": "The time a client gets banned if econ authentication fails. 0 just closes the connection",
			"fr": "Durée qu'un client est banni si l'authentification à la console externe échoue (0 pour fermer la connexion)"
		},
		"ec_auth_timeout": {
			"en": "Time in seconds before the the econ authentication times out",
			"fr": "Durée en secondes avant expiration de l'authentification à la console externe"
		},
		"ec_output_level": {
			"en": "Adjusts the amount of information in the external console",
			"fr": "Durée en secondes avant expiration de l'authentification à la console externe"
		},
		"sv_warmup": {
			"en": "Warmup time between rounds",
			"fr": "Durée en secondes d'échauffement entre les rounds"
		},
		"sv_scorelimit": {
			"en": "Score limit of the game (0 disables it)",
			"fr": "Score limite de la partie (0 pour le désactiver)"
		},
		"sv_timelimit": {
			"en": "Time limit of the game (in case of equal points there will be sudden death)",
			"fr": "Durée de la partie (mort subite en cas d'ex aequo)"
		},
		"sv_gametype": {
			"en": "Gametype (dm/ctf/tdm) (This setting needs the map to be reloaded in order to take effect)",
			"fr": "Type de jeu (dm/ctf/tdm) (ce régalge nécessite de recharge la carte pour prendre effet)"
		},
		"sv_maprotation": {
			"en": "The maps to be rotated",
			"fr": "Rotation des cartes"
		},
		"sv_rounds_per_map": {
			"en": "Number of rounds before changing to next map in rotation",
			"fr": "Nombre de rounds avant de passer à la carte suivante"
		},
		"sv_motd": {
			"en": "Message of the day, shown in server info and when joining a server",
			"fr": "Message du jour, visible dans les infos du serveur et à la connexion au serveur"
		},
		"sv_spectator_slots": {
			"en": "Number of clients that can only be spectators",
			"fr": "Nombre de spectateurs max"
		},
		"sv_teambalance_time": {
			"en": "Time in minutes after the teams are uneven, to auto balance",
			"fr": "Temps en minute à attendre avant de ré-équilibrer le nombre de joueur dans les equipes"
		},
		"sv_spamprotection": {
			"en": "Enable spam filter",
			"fr": "Filtre anti spam"
		},
		"sv_tournament_mode": {
			"en": "Players will automatically join as spectator",
			"fr": "Les nouveaux joueurs arrivent en tant que spectateur"
		},
		"sv_respawn_delay_tdm": {
			"en": "Time in seconds needed to respawn in the tdm gametype",
			"fr": "Durée en secondes avant de revivre dans le type de jeu tdm"
		},
		"sv_teamdamage": {
			"en": "Enable friendly fire",
			"fr": "Autoriser le tir allié"
		},
		"sv_powerups": {
			"en": "Enable powerups (katana)",
			"fr": "Autoriser les super-pouvoirs (katana) "
		},
		"sv_vote_kick": {
			"en": "Enable kick voting",
			"fr": "Autoriser le vote pour éjecter"
		},
		"sv_vote_kick_bantime": {
			"en": "Time in minutes to ban a player if kicked by voting (0 equals only kick)",
			"fr": "Durée en minutes qu'un joueur est banni s'il a été éjecté par vote (0 pour seulement éjecter)"
		},
		"sv_vote_kick_min": {
			"en": "Minimum number of players required to start a kick vote",
			"fr": "Nombre minimum de joueurs requis pour démarrer un vote d'éjection"
		},
		"sv_inactivekick_time": {
			"en": "Time in minutes after an inactive player will be taken care of",
			"fr": "Durée en minutes avant le traitement d'un joueur inactif"
		},
		"sv_inactivekick": {
			"en": "How to deal with inactive players (0 = move to spectator, 1 = move to free spectator slot/kick, 2 = kick)",
			"fr": "Traitement réservé aux joueurs inactifs (0 = devient spectateur, 1 = prend une place libre de spectateur/éjecter, 2 = éjecter)"
		}
	}
};