// TODO: check if those parameters can be set with the server or only during game
// TODO: reformat data
{
   "Physics tuning": {
      "ground_control_speed": {
         "Description": "Max speed the tee can get on ground",
         "DescriptionFR": "",
			"Default": 10,
         "Unit": ""
      },
      "ground_control_accel": {
         "Description": "Acceleration speed on the ground",
         "DescriptionFR": "",
			"Default": 2,
         "Unit": ""
      },
      "ground_friction": {
         "Description": "Friction on the ground",
         "DescriptionFR": "",
			"Default": 0.5,
         "Unit": ""
      },
      "ground_jump_impulse": {
         "Description": "Impulse when jumping on ground",
         "DescriptionFR": "",
			"Default": 13.2,
         "Unit": ""
      },
      "air_jump_impulse": {
         "Description": "Impulse when jumping in air",
         "DescriptionFR": "",
			"Default": 12,
         "Unit": ""
      },
      "air_control_speed": {
         "Description": "Max speed the tee can get in the air",
         "DescriptionFR": "",
			"Default": 5,
         "Unit": ""
      },
      "air_control_accel": {
         "Description": "Acceleration speed in air",
         "DescriptionFR": "",
			"Default": 1.5,
         "Unit": ""
      },
      "air_friction": {
         "Description": "Friction in the air",
         "DescriptionFR": "",
			"Default": 0.95,
         "Unit": ""
      },
      "hook_length": {
         "Description": "Length of the hook",
         "DescriptionFR": "",
			"Default": 380,
         "Unit": "pixels"
      },
      "hook_fire_speed": {
         "Description": "How fast the hook is fired",
         "DescriptionFR": "",
			"Default": 80,
         "Unit": ""
      },
      "hook_drag_accel": {
         "Description": "Acceleration when hook is stuck",
         "DescriptionFR": "",
			"Default": 3,
         "Unit": ""
      },
      "hook_drag_speed": {
         "Description": "Drag speed of the hook",
         "DescriptionFR": "",
			"Default": 15,
         "Unit": ""
      },
      "gravity": {
         "Description": "Gravity of the teeworld",
         "DescriptionFR": "",
			"Default": 0.5,
         "Unit": ""
      },
      "velramp_start": {
         "Description": "Velocity ramp start",
         "DescriptionFR": "",
			"Default": 550,
         "Unit": ""
      },
      "velramp_range": {
         "Description": "Velocity ramp range",
         "DescriptionFR": "",
			"Default": 2000,
         "Unit": ""
      },
      "velramp_curvature": {
         "Description": "Velocity ramp curvature",
         "DescriptionFR": "",
			"Default": 1.4,
         "Unit": ""
      },
      "player_collision": {
         "Description": "Enable player collisions",
         "DescriptionFR": "",
			"Default": 1,
         "Unit": ""
      },
      "player_hooking": {
         "Description": "Enable player vs player hooking",
         "DescriptionFR": "",
			"Default": 1,
         "Unit": ""
      }
   },
   
   "Weapon tuning": {
      "gun_curvature": {
         "Description": "Gun curvature",
         "DescriptionFR": "",
			"Default": 1.25,
         "Unit": ""
      },
      "gun_speed": {
         "Description": "Gun speed",
         "DescriptionFR": "",
			"Default": 2200,
         "Unit": "pixels / sec"
      },
      "gun_lifetime": {
         "Description": "Gun lifetime",
         "DescriptionFR": "",
			"Default": 2,
         "Unit": "sec"
      },
      "shotgun_curvature": {
         "Description": "Shotgun curvature",
         "DescriptionFR": "",
			"Default": 1.25,
         "Unit": ""
      },
      "shotgun_speed": {
         "Description": "Shotgun speed",
         "DescriptionFR": "",
			"Default": 2750,
         "Unit": "pixels / sec"
      },
      "shotgun_speeddiff": {
         "Description": "(UNUSED) Speed difference between shotgun bullets",
         "DescriptionFR": "",
			"Default": 0.8,
         "Unit": ""
      },
      "shotgun_lifetime": {
         "Description": "Shotgun lifetime",
         "DescriptionFR": "",
			"Default": 0.2,
         "Unit": "sec"
      },
      "grenade_curvature": {
         "Description": "Grenade curvature",
         "DescriptionFR": "",
			"Default": 7,
         "Unit": ""
      },
      "grenade_speed": {
         "Description": "Grenade speed",
         "DescriptionFR": "",
			"Default": 1000,
         "Unit": "pixels / sec"
      },
      "grenade_lifetime": {
         "Description": "Grenade lifetime",
         "DescriptionFR": "",
			"Default": 2,
         "Unit": "sec"
      },
      "laser_reach": {
         "Description": "How long the laser can reach",
         "DescriptionFR": "",
			"Default": 800,
         "Unit": "pixels"
      },
      "laser_bounce_delay": {
         "Description": "When bouncing, stop the laser this long",
         "DescriptionFR": "",
			"Default": 150,
         "Unit": "ms"
      },
      "laser_bounce_num": {
         "Description": "How many times the laser can bounce",
         "DescriptionFR": "",
			"Default": 1,
         "Unit": ""
      },
      "laser_bounce_cost": {
         "Description": "Remove this much from reach when laser is bouncing",
         "DescriptionFR": "",
			"Default": 0,
         "Unit": "pixels"
      },
      "laser_damage": {
         "Description": "Laser damage",
         "DescriptionFR": "",
			"Default": 5,
         "Unit": "damage"
      }
   }
}