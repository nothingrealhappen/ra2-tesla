import type { Sound } from '~/types/sound';

const R2_BASE_URL = 'https://pub-fcee4408db324fbf8b62b0e61eb85856.r2.dev/22412-red-alert-2-soundboard';

// Helper to convert filename to display name
const toDisplayName = (filename: string): string => {
  return filename
    .replace('.mp3', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const sounds: Sound[] = [
  {
    id: 1,
    filename: "2000-volts-coming-up.mp3",
    displayName: "2000 Volts Coming UP",
    categories: [
      "tesla"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/2000-volts-coming-up.mp3`
  },
  {
    id: 2,
    filename: "a-little-c-4-knocking-at-your-door.mp3",
    displayName: "A Little C 4 Knocking AT Your Door",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/a-little-c-4-knocking-at-your-door.mp3`
  },
  {
    id: 3,
    filename: "a-little-flak.mp3",
    displayName: "A Little Flak",
    categories: [
      "soviet"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/a-little-flak.mp3`
  },
  {
    id: 4,
    filename: "a-new-comrade-joins-us.mp3",
    displayName: "A New Comrade Joins US",
    categories: [
      "soviet"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/a-new-comrade-joins-us.mp3`
  },
  {
    id: 5,
    filename: "acknowledged.mp3",
    displayName: "Acknowledged",
    categories: [
      "acknowledgment",
      "multiplayer"
    ],
    r2Url: `${R2_BASE_URL}/acknowledged.mp3`
  },
  {
    id: 6,
    filename: "adios-amigos.mp3",
    displayName: "Adios Amigos",
    categories: [
      "humor"
    ],
    r2Url: `${R2_BASE_URL}/adios-amigos.mp3`
  },
  {
    id: 7,
    filename: "agent-in-the-field.mp3",
    displayName: "Agent IN The Field",
    categories: [
      "infantry"
    ],
    r2Url: `${R2_BASE_URL}/agent-in-the-field.mp3`
  },
  {
    id: 8,
    filename: "agent-ready.mp3",
    displayName: "Agent Ready",
    categories: [
      "infantry",
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/agent-ready.mp3`
  },
  {
    id: 9,
    filename: "ahkakaka.mp3",
    displayName: "Ahkakaka",
    categories: [
      "meme-worthy",
      "humor",
      "quirky"
    ],
    r2Url: `${R2_BASE_URL}/ahkakaka.mp3`
  },
  {
    id: 10,
    filename: "air-transport-ready.mp3",
    displayName: "Air Transport Ready",
    categories: [
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/air-transport-ready.mp3`
  },
  {
    id: 11,
    filename: "aircraft-reporting.mp3",
    displayName: "Aircraft Reporting",
    categories: [
      "aircraft",
      "readiness",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/aircraft-reporting.mp3`
  },
  {
    id: 12,
    filename: "airship-ready.mp3",
    displayName: "Airship Ready",
    categories: [
      "aircraft",
      "naval",
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/airship-ready.mp3`
  },
  {
    id: 13,
    filename: "all-fired-up.mp3",
    displayName: "All Fired UP",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/all-fired-up.mp3`
  },
  {
    id: 14,
    filename: "all-right.mp3",
    displayName: "All Right",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/all-right.mp3`
  },
  {
    id: 15,
    filename: "allied-ship-reporting.mp3",
    displayName: "Allied Ship Reporting",
    categories: [
      "allied",
      "naval",
      "readiness",
      "professional"
    ],
    faction: "allied",
    r2Url: `${R2_BASE_URL}/allied-ship-reporting.mp3`
  },
  {
    id: 16,
    filename: "already-there.mp3",
    displayName: "Already There",
    categories: [
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/already-there.mp3`
  },
  {
    id: 17,
    filename: "analyzing-schematics.mp3",
    displayName: "Analyzing Schematics",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/analyzing-schematics.mp3`
  },
  {
    id: 18,
    filename: "anytime-boss.mp3",
    displayName: "Anytime Boss",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/anytime-boss.mp3`
  },
  {
    id: 19,
    filename: "are-you-kgb.mp3",
    displayName: "Are You Kgb",
    categories: [
      "meme-worthy",
      "humor",
      "quirky"
    ],
    r2Url: `${R2_BASE_URL}/are-you-kgb.mp3`
  },
  {
    id: 20,
    filename: "as-you-wish.mp3",
    displayName: "AS You Wish",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/as-you-wish.mp3`
  },
  {
    id: 21,
    filename: "assignment-received.mp3",
    displayName: "Assignment Received",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/assignment-received.mp3`
  },
  {
    id: 22,
    filename: "assignment-sir.mp3",
    displayName: "Assignment Sir",
    categories: [
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/assignment-sir.mp3`
  },
  {
    id: 23,
    filename: "at-least-i-have-job.mp3",
    displayName: "AT Least I Have Job",
    categories: [
      "iconic",
      "meme-worthy"
    ],
    r2Url: `${R2_BASE_URL}/at-least-i-have-job.mp3`
  },
  {
    id: 24,
    filename: "at-your-service.mp3",
    displayName: "AT Your Service",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/at-your-service.mp3`
  },
  {
    id: 25,
    filename: "attacking.mp3",
    displayName: "Attacking",
    categories: [
      "combat",
      "multiplayer"
    ],
    r2Url: `${R2_BASE_URL}/attacking.mp3`
  },
  {
    id: 26,
    filename: "audio.mp3",
    displayName: "Audio",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/audio.mp3`
  },
  {
    id: 27,
    filename: "aye-commander.mp3",
    displayName: "Aye Commander",
    categories: [
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/aye-commander.mp3`
  },
  {
    id: 28,
    filename: "ayy.mp3",
    displayName: "Ayy",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/ayy.mp3`
  },
  {
    id: 29,
    filename: "bail-out.mp3",
    displayName: "Bail Out",
    categories: [
      "aircraft",
      "alert",
      "panicked"
    ],
    r2Url: `${R2_BASE_URL}/bail-out.mp3`
  },
  {
    id: 30,
    filename: "battle-stations.mp3",
    displayName: "Battle Stations",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/battle-stations.mp3`
  },
  {
    id: 31,
    filename: "bearing-set.mp3",
    displayName: "Bearing Set",
    categories: [
      "naval"
    ],
    r2Url: `${R2_BASE_URL}/bearing-set.mp3`
  },
  {
    id: 32,
    filename: "being-alone.mp3",
    displayName: "Being Alone",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/being-alone.mp3`
  },
  {
    id: 33,
    filename: "better-be-going.mp3",
    displayName: "Better BE Going",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/better-be-going.mp3`
  },
  {
    id: 34,
    filename: "black-eagle-reporting.mp3",
    displayName: "Black Eagle Reporting",
    categories: [
      "allied",
      "aircraft",
      "readiness",
      "professional"
    ],
    faction: "allied",
    r2Url: `${R2_BASE_URL}/black-eagle-reporting.mp3`
  },
  {
    id: 35,
    filename: "bombardiers-to-your-stations.mp3",
    displayName: "Bombardiers TO Your Stations",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/bombardiers-to-your-stations.mp3`
  },
  {
    id: 36,
    filename: "bombing-bays-ready.mp3",
    displayName: "Bombing Bays Ready",
    categories: [
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/bombing-bays-ready.mp3`
  },
  {
    id: 37,
    filename: "bound-forward.mp3",
    displayName: "Bound Forward",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/bound-forward.mp3`
  },
  {
    id: 38,
    filename: "but-i-was-working.mp3",
    displayName: "But I Was Working",
    categories: [
      "meme-worthy"
    ],
    r2Url: `${R2_BASE_URL}/but-i-was-working.mp3`
  },
  {
    id: 39,
    filename: "calibrating-airspeed.mp3",
    displayName: "Calibrating Airspeed",
    categories: [
      "aircraft"
    ],
    r2Url: `${R2_BASE_URL}/calibrating-airspeed.mp3`
  },
  {
    id: 40,
    filename: "can-do.mp3",
    displayName: "Can DO",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/can-do.mp3`
  },
  {
    id: 41,
    filename: "can-i-bring-my-friends.mp3",
    displayName: "Can I Bring MY Friends",
    categories: [
      "humor"
    ],
    r2Url: `${R2_BASE_URL}/can-i-bring-my-friends.mp3`
  },
  {
    id: 42,
    filename: "captain-confirming.mp3",
    displayName: "Captain Confirming",
    categories: [
      "naval",
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/captain-confirming.mp3`
  },
  {
    id: 43,
    filename: "captain-on-the-bridge.mp3",
    displayName: "Captain ON The Bridge",
    categories: [
      "naval",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/captain-on-the-bridge.mp3`
  },
  {
    id: 44,
    filename: "cha-ching.mp3",
    displayName: "Cha Ching",
    categories: [
      "iconic",
      "multiplayer"
    ],
    r2Url: `${R2_BASE_URL}/cha-ching.mp3`
  },
  {
    id: 45,
    filename: "changing-position.mp3",
    displayName: "Changing Position",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/changing-position.mp3`
  },
  {
    id: 46,
    filename: "changing-vector.mp3",
    displayName: "Changing Vector",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/changing-vector.mp3`
  },
  {
    id: 47,
    filename: "channel-clear.mp3",
    displayName: "Channel Clear",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/channel-clear.mp3`
  },
  {
    id: 48,
    filename: "charging-up.mp3",
    displayName: "Charging UP",
    categories: [
      "tesla"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/charging-up.mp3`
  },
  {
    id: 49,
    filename: "check-out-the-view.mp3",
    displayName: "Check Out The View",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/check-out-the-view.mp3`
  },
  {
    id: 50,
    filename: "checking-connection.mp3",
    displayName: "Checking Connection",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/checking-connection.mp3`
  },
  {
    id: 51,
    filename: "checking-designs.mp3",
    displayName: "Checking Designs",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/checking-designs.mp3`
  },
  {
    id: 52,
    filename: "clear-out-the-place.mp3",
    displayName: "Clear Out The Place",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/clear-out-the-place.mp3`
  },
  {
    id: 53,
    filename: "clearing-a-path.mp3",
    displayName: "Clearing A Path",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/clearing-a-path.mp3`
  },
  {
    id: 54,
    filename: "close-and-fire.mp3",
    displayName: "Close And Fire",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/close-and-fire.mp3`
  },
  {
    id: 55,
    filename: "closing-in.mp3",
    displayName: "Closing IN",
    categories: [
      "alert",
      "panicked"
    ],
    r2Url: `${R2_BASE_URL}/closing-in.mp3`
  },
  {
    id: 56,
    filename: "closing-on-target.mp3",
    displayName: "Closing ON Target",
    categories: [
      "combat",
      "alert",
      "panicked"
    ],
    r2Url: `${R2_BASE_URL}/closing-on-target.mp3`
  },
  {
    id: 57,
    filename: "clouds-of-death.mp3",
    displayName: "Clouds OF Death",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/clouds-of-death.mp3`
  },
  {
    id: 58,
    filename: "command-received.mp3",
    displayName: "Command Received",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/command-received.mp3`
  },
  {
    id: 59,
    filename: "commander.mp3",
    displayName: "Commander",
    categories: [
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/commander.mp3`
  },
  {
    id: 60,
    filename: "commencing-assault.mp3",
    displayName: "Commencing Assault",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/commencing-assault.mp3`
  },
  {
    id: 61,
    filename: "commencing-shock-therapy.mp3",
    displayName: "Commencing Shock Therapy",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/commencing-shock-therapy.mp3`
  },
  {
    id: 62,
    filename: "completing-circuit.mp3",
    displayName: "Completing Circuit",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/completing-circuit.mp3`
  },
  {
    id: 63,
    filename: "comrade.mp3",
    displayName: "Comrade",
    categories: [
      "soviet"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/comrade.mp3`
  },
  {
    id: 64,
    filename: "conscript-reporting.mp3",
    displayName: "Conscript Reporting",
    categories: [
      "soviet",
      "infantry",
      "readiness",
      "professional"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/conscript-reporting.mp3`
  },
  {
    id: 65,
    filename: "course-set.mp3",
    displayName: "Course Set",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/course-set.mp3`
  },
  {
    id: 66,
    filename: "cover-me.mp3",
    displayName: "Cover ME",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/cover-me.mp3`
  },
  {
    id: 67,
    filename: "cutting-him-down.mp3",
    displayName: "Cutting Him Down",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/cutting-him-down.mp3`
  },
  {
    id: 68,
    filename: "da-russian-yes.mp3",
    displayName: "DA Russian Yes",
    categories: [
      "soviet",
      "acknowledgment"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/da-russian-yes.mp3`
  },
  {
    id: 69,
    filename: "da.mp3",
    displayName: "DA",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/da.mp3`
  },
  {
    id: 70,
    filename: "deconstructing.mp3",
    displayName: "Deconstructing",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/deconstructing.mp3`
  },
  {
    id: 71,
    filename: "desolator-breathing.mp3",
    displayName: "Desolator Breathing",
    categories: [
      "infantry"
    ],
    r2Url: `${R2_BASE_URL}/desolator-breathing.mp3`
  },
  {
    id: 72,
    filename: "desolator-ready.mp3",
    displayName: "Desolator Ready",
    categories: [
      "infantry",
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/desolator-ready.mp3`
  },
  {
    id: 73,
    filename: "destination-commander.mp3",
    displayName: "Destination Commander",
    categories: [
      "movement",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/destination-commander.mp3`
  },
  {
    id: 74,
    filename: "destination.mp3",
    displayName: "Destination",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/destination.mp3`
  },
  {
    id: 75,
    filename: "diggin-in.mp3",
    displayName: "Diggin IN",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/diggin-in.mp3`
  },
  {
    id: 76,
    filename: "disguise-ready.mp3",
    displayName: "Disguise Ready",
    categories: [
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/disguise-ready.mp3`
  },
  {
    id: 77,
    filename: "do-i-have-to.mp3",
    displayName: "DO I Have TO",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/do-i-have-to.mp3`
  },
  {
    id: 78,
    filename: "don-t-play-with-matches.mp3",
    displayName: "Don T Play With Matches",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/don-t-play-with-matches.mp3`
  },
  {
    id: 79,
    filename: "don-t-wait-up-for-me.mp3",
    displayName: "Don T Wait UP For ME",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/don-t-wait-up-for-me.mp3`
  },
  {
    id: 80,
    filename: "double-time.mp3",
    displayName: "Double Time",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/double-time.mp3`
  },
  {
    id: 81,
    filename: "driver-up.mp3",
    displayName: "Driver UP",
    categories: [
      "vehicle"
    ],
    r2Url: `${R2_BASE_URL}/driver-up.mp3`
  },
  {
    id: 82,
    filename: "eagle-squadron.mp3",
    displayName: "Eagle Squadron",
    categories: [
      "aircraft",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/eagle-squadron.mp3`
  },
  {
    id: 83,
    filename: "easy-target.mp3",
    displayName: "Easy Target",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/easy-target.mp3`
  },
  {
    id: 84,
    filename: "ehahahahahahah.mp3",
    displayName: "Ehahahahahahah",
    categories: [
      "meme-worthy"
    ],
    r2Url: `${R2_BASE_URL}/ehahahahahahah.mp3`
  },
  {
    id: 85,
    filename: "eject-eject.mp3",
    displayName: "Eject Eject",
    categories: [
      "aircraft",
      "alert",
      "panicked"
    ],
    r2Url: `${R2_BASE_URL}/eject-eject.mp3`
  },
  {
    id: 86,
    filename: "electrician-in-the-field.mp3",
    displayName: "Electrician IN The Field",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/electrician-in-the-field.mp3`
  },
  {
    id: 87,
    filename: "electrodes-ready.mp3",
    displayName: "Electrodes Ready",
    categories: [
      "tesla",
      "readiness"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/electrodes-ready.mp3`
  },
  {
    id: 88,
    filename: "eliminate-them.mp3",
    displayName: "Eliminate Them",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/eliminate-them.mp3`
  },
  {
    id: 89,
    filename: "ememy-in-my-sights.mp3",
    displayName: "Ememy IN MY Sights",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/ememy-in-my-sights.mp3`
  },
  {
    id: 90,
    filename: "encountering-enemy.mp3",
    displayName: "Encountering Enemy",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/encountering-enemy.mp3`
  },
  {
    id: 91,
    filename: "enemy-sighted.mp3",
    displayName: "Enemy Sighted",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/enemy-sighted.mp3`
  },
  {
    id: 92,
    filename: "enemy-spotted.mp3",
    displayName: "Enemy Spotted",
    categories: [
      "combat",
      "alert"
    ],
    r2Url: `${R2_BASE_URL}/enemy-spotted.mp3`
  },
  {
    id: 93,
    filename: "engineering.mp3",
    displayName: "Engineering",
    categories: [
      "infantry"
    ],
    r2Url: `${R2_BASE_URL}/engineering.mp3`
  },
  {
    id: 94,
    filename: "engines-engaged.mp3",
    displayName: "Engines Engaged",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/engines-engaged.mp3`
  },
  {
    id: 95,
    filename: "examining-diagrams.mp3",
    displayName: "Examining Diagrams",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/examining-diagrams.mp3`
  },
  {
    id: 96,
    filename: "executing-assignment.mp3",
    displayName: "Executing Assignment",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/executing-assignment.mp3`
  },
  {
    id: 97,
    filename: "fastest-gun-in-the-west.mp3",
    displayName: "Fastest Gun IN The West",
    categories: [
      "humor"
    ],
    r2Url: `${R2_BASE_URL}/fastest-gun-in-the-west.mp3`
  },
  {
    id: 98,
    filename: "find-a-hot-spot.mp3",
    displayName: "Find A Hot Spot",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/find-a-hot-spot.mp3`
  },
  {
    id: 99,
    filename: "fire-at-will.mp3",
    displayName: "Fire AT Will",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/fire-at-will.mp3`
  },
  {
    id: 100,
    filename: "fire-on-site.mp3",
    displayName: "Fire ON Site",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/fire-on-site.mp3`
  },
  {
    id: 101,
    filename: "fire-zone-confirmed.mp3",
    displayName: "Fire Zone Confirmed",
    categories: [
      "acknowledgment",
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/fire-zone-confirmed.mp3`
  },
  {
    id: 102,
    filename: "firing.mp3",
    displayName: "Firing",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/firing.mp3`
  },
  {
    id: 103,
    filename: "flak-attack.mp3",
    displayName: "Flak Attack",
    categories: [
      "soviet",
      "combat"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/flak-attack.mp3`
  },
  {
    id: 104,
    filename: "flak-trooper-reporting.mp3",
    displayName: "Flak Trooper Reporting",
    categories: [
      "soviet",
      "infantry",
      "readiness",
      "professional"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/flak-trooper-reporting.mp3`
  },
  {
    id: 105,
    filename: "for-home-country.mp3",
    displayName: "For Home Country",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/for-home-country.mp3`
  },
  {
    id: 106,
    filename: "for-mother-russia.mp3",
    displayName: "For Mother Russia",
    categories: [
      "soviet"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/for-mother-russia.mp3`
  },
  {
    id: 107,
    filename: "for-my-people.mp3",
    displayName: "For MY People",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/for-my-people.mp3`
  },
  {
    id: 108,
    filename: "for-romanov.mp3",
    displayName: "For Romanov",
    categories: [
      "soviet"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/for-romanov.mp3`
  },
  {
    id: 109,
    filename: "for-the-common-good.mp3",
    displayName: "For The Common Good",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/for-the-common-good.mp3`
  },
  {
    id: 110,
    filename: "for-the-republic.mp3",
    displayName: "For The Republic",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/for-the-republic.mp3`
  },
  {
    id: 111,
    filename: "for-the-union.mp3",
    displayName: "For The Union",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/for-the-union.mp3`
  },
  {
    id: 112,
    filename: "fuel-tanks-are-filled.mp3",
    displayName: "Fuel Tanks Are Filled",
    categories: [
      "vehicle"
    ],
    r2Url: `${R2_BASE_URL}/fuel-tanks-are-filled.mp3`
  },
  {
    id: 113,
    filename: "get-me-outta-here.mp3",
    displayName: "Get ME Outta Here",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/get-me-outta-here.mp3`
  },
  {
    id: 114,
    filename: "gi-cry.mp3",
    displayName: "GI Cry",
    categories: [
      "allied",
      "infantry"
    ],
    faction: "allied",
    r2Url: `${R2_BASE_URL}/gi-cry.mp3`
  },
  {
    id: 115,
    filename: "give-me-a-job.mp3",
    displayName: "Give ME A Job",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/give-me-a-job.mp3`
  },
  {
    id: 116,
    filename: "give-me-a-plan.mp3",
    displayName: "Give ME A Plan",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/give-me-a-plan.mp3`
  },
  {
    id: 117,
    filename: "give-me-a-target.mp3",
    displayName: "Give ME A Target",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/give-me-a-target.mp3`
  },
  {
    id: 118,
    filename: "going-down.mp3",
    displayName: "Going Down",
    categories: [
      "movement",
      "alert"
    ],
    r2Url: `${R2_BASE_URL}/going-down.mp3`
  },
  {
    id: 119,
    filename: "going-to-source.mp3",
    displayName: "Going TO Source",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/going-to-source.mp3`
  },
  {
    id: 120,
    filename: "gonna-die-in-ma-boots.mp3",
    displayName: "Gonna Die IN MA Boots",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/gonna-die-in-ma-boots.mp3`
  },
  {
    id: 121,
    filename: "good-to-go.mp3",
    displayName: "Good TO GO",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/good-to-go.mp3`
  },
  {
    id: 122,
    filename: "got-a-clear-view-sir.mp3",
    displayName: "Got A Clear View Sir",
    categories: [
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/got-a-clear-view-sir.mp3`
  },
  {
    id: 123,
    filename: "got-a-steady-flow.mp3",
    displayName: "Got A Steady Flow",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/got-a-steady-flow.mp3`
  },
  {
    id: 124,
    filename: "got-it.mp3",
    displayName: "Got IT",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/got-it.mp3`
  },
  {
    id: 125,
    filename: "got-the-plans-right-here.mp3",
    displayName: "Got The Plans Right Here",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/got-the-plans-right-here.mp3`
  },
  {
    id: 126,
    filename: "gotcha.mp3",
    displayName: "Gotcha",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/gotcha.mp3`
  },
  {
    id: 127,
    filename: "ground-yourselves.mp3",
    displayName: "Ground Yourselves",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/ground-yourselves.mp3`
  },
  {
    id: 128,
    filename: "gunner-in-position.mp3",
    displayName: "Gunner IN Position",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/gunner-in-position.mp3`
  },
  {
    id: 129,
    filename: "happy-birthday.mp3",
    displayName: "Happy Birthday",
    categories: [
      "meme-worthy",
      "humor",
      "multiplayer"
    ],
    r2Url: `${R2_BASE_URL}/happy-birthday.mp3`
  },
  {
    id: 130,
    filename: "he-belongs-to-us.mp3",
    displayName: "HE Belongs TO US",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/he-belongs-to-us.mp3`
  },
  {
    id: 131,
    filename: "he-s-a-dead-man.mp3",
    displayName: "HE S A Dead Man",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/he-s-a-dead-man.mp3`
  },
  {
    id: 132,
    filename: "he-s-a-threat.mp3",
    displayName: "HE S A Threat",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/he-s-a-threat.mp3`
  },
  {
    id: 133,
    filename: "he-s-fried.mp3",
    displayName: "HE S Fried",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/he-s-fried.mp3`
  },
  {
    id: 134,
    filename: "he-s-got-no-place-to-hide.mp3",
    displayName: "HE S Got NO Place TO Hide",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/he-s-got-no-place-to-hide.mp3`
  },
  {
    id: 135,
    filename: "he-s-in-my-scope.mp3",
    displayName: "HE S IN MY Scope",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/he-s-in-my-scope.mp3`
  },
  {
    id: 136,
    filename: "helium-mix-optimal.mp3",
    displayName: "Helium Mix Optimal",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/helium-mix-optimal.mp3`
  },
  {
    id: 137,
    filename: "help-me-romanov.mp3",
    displayName: "Help ME Romanov",
    categories: [
      "soviet",
      "panicked"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/help-me-romanov.mp3`
  },
  {
    id: 138,
    filename: "here-comes-the-sun.mp3",
    displayName: "Here Comes The Sun",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/here-comes-the-sun.mp3`
  },
  {
    id: 139,
    filename: "here-hold-this.mp3",
    displayName: "Here Hold This",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/here-hold-this.mp3`
  },
  {
    id: 140,
    filename: "here-s-a-hot-papaya.mp3",
    displayName: "Here S A Hot Papaya",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/here-s-a-hot-papaya.mp3`
  },
  {
    id: 141,
    filename: "here-s-some-fancy-shootin.mp3",
    displayName: "Here S Some Fancy Shootin",
    categories: [
      "combat",
      "humor"
    ],
    r2Url: `${R2_BASE_URL}/here-s-some-fancy-shootin.mp3`
  },
  {
    id: 142,
    filename: "hey-cut-it-out.mp3",
    displayName: "Hey Cut IT Out",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/hey-cut-it-out.mp3`
  },
  {
    id: 143,
    filename: "hey-partner.mp3",
    displayName: "Hey Partner",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/hey-partner.mp3`
  },
  {
    id: 144,
    filename: "high-speed-low-drag.mp3",
    displayName: "High Speed Low Drag",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/high-speed-low-drag.mp3`
  },
  {
    id: 145,
    filename: "his-mind-is-weak.mp3",
    displayName: "His Mind IS Weak",
    categories: [
      "yuri"
    ],
    faction: "yuri",
    r2Url: `${R2_BASE_URL}/his-mind-is-weak.mp3`
  },
  {
    id: 146,
    filename: "hittin-the-trail.mp3",
    displayName: "Hittin The Trail",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/hittin-the-trail.mp3`
  },
  {
    id: 147,
    filename: "hoo-rah.mp3",
    displayName: "Hoo Rah",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/hoo-rah.mp3`
  },
  {
    id: 148,
    filename: "how-about-a-swim.mp3",
    displayName: "How About A Swim",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/how-about-a-swim.mp3`
  },
  {
    id: 149,
    filename: "how-about-a-target.mp3",
    displayName: "How About A Target",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/how-about-a-target.mp3`
  },
  {
    id: 150,
    filename: "how-about-some-action.mp3",
    displayName: "How About Some Action",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/how-about-some-action.mp3`
  },
  {
    id: 151,
    filename: "huh.mp3",
    displayName: "Huh",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/huh.mp3`
  },
  {
    id: 152,
    filename: "i-aint-yeller.mp3",
    displayName: "I Aint Yeller",
    categories: [
      "humor",
      "quirky"
    ],
    r2Url: `${R2_BASE_URL}/i-aint-yeller.mp3`
  },
  {
    id: 153,
    filename: "i-am-going.mp3",
    displayName: "I AM Going",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/i-am-going.mp3`
  },
  {
    id: 154,
    filename: "i-am-prepared-to-die.mp3",
    displayName: "I AM Prepared TO Die",
    categories: [
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/i-am-prepared-to-die.mp3`
  },
  {
    id: 155,
    filename: "i-am-unarmed.mp3",
    displayName: "I AM Unarmed",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-am-unarmed.mp3`
  },
  {
    id: 156,
    filename: "i-can-go-anywhere.mp3",
    displayName: "I Can GO Anywhere",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-can-go-anywhere.mp3`
  },
  {
    id: 157,
    filename: "i-can-see-him.mp3",
    displayName: "I Can See Him",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-can-see-him.mp3`
  },
  {
    id: 158,
    filename: "i-can-t-see-through-flak.mp3",
    displayName: "I Can T See Through Flak",
    categories: [
      "soviet"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/i-can-t-see-through-flak.mp3`
  },
  {
    id: 159,
    filename: "i-cannot-kiss-on-them.mp3",
    displayName: "I Cannot Kiss ON Them",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-cannot-kiss-on-them.mp3`
  },
  {
    id: 160,
    filename: "i-don-t-have-time-for-this.mp3",
    displayName: "I Don T Have Time For This",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-don-t-have-time-for-this.mp3`
  },
  {
    id: 161,
    filename: "i-go-freely.mp3",
    displayName: "I GO Freely",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-go-freely.mp3`
  },
  {
    id: 162,
    filename: "i-got-him.mp3",
    displayName: "I Got Him",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-got-him.mp3`
  },
  {
    id: 163,
    filename: "i-have-the-information.mp3",
    displayName: "I Have The Information",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-have-the-information.mp3`
  },
  {
    id: 164,
    filename: "i-have-the-tools.mp3",
    displayName: "I Have The Tools",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-have-the-tools.mp3`
  },
  {
    id: 165,
    filename: "i-hear-and-obey.mp3",
    displayName: "I Hear And Obey",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-hear-and-obey.mp3`
  },
  {
    id: 166,
    filename: "i-just-bought-this-outfit.mp3",
    displayName: "I Just Bought This Outfit",
    categories: [
      "quirky"
    ],
    r2Url: `${R2_BASE_URL}/i-just-bought-this-outfit.mp3`
  },
  {
    id: 167,
    filename: "i-knew-this-would-happen.mp3",
    displayName: "I Knew This Would Happen",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-knew-this-would-happen.mp3`
  },
  {
    id: 168,
    filename: "i-know-your-thoughts.mp3",
    displayName: "I Know Your Thoughts",
    categories: [
      "yuri"
    ],
    faction: "yuri",
    r2Url: `${R2_BASE_URL}/i-know-your-thoughts.mp3`
  },
  {
    id: 169,
    filename: "i-like-a-man-in-uniform.mp3",
    displayName: "I Like A Man IN Uniform",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-like-a-man-in-uniform.mp3`
  },
  {
    id: 170,
    filename: "i-ll-be-late-for-bread-line.mp3",
    displayName: "I LL BE Late For Bread Line",
    categories: [
      "quirky"
    ],
    r2Url: `${R2_BASE_URL}/i-ll-be-late-for-bread-line.mp3`
  },
  {
    id: 171,
    filename: "i-ll-do-it.mp3",
    displayName: "I LL DO IT",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-ll-do-it.mp3`
  },
  {
    id: 172,
    filename: "i-ll-take-the-bullet.mp3",
    displayName: "I LL Take The Bullet",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-ll-take-the-bullet.mp3`
  },
  {
    id: 173,
    filename: "i-ll-take-the-high-road.mp3",
    displayName: "I LL Take The High Road",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-ll-take-the-high-road.mp3`
  },
  {
    id: 174,
    filename: "i-lost-a-bomb-do-you-have-it.mp3",
    displayName: "I Lost A Bomb DO You Have IT",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-lost-a-bomb-do-you-have-it.mp3`
  },
  {
    id: 175,
    filename: "i-love-to-camp.mp3",
    displayName: "I Love TO Camp",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-love-to-camp.mp3`
  },
  {
    id: 176,
    filename: "i-m-being-bushwacked.mp3",
    displayName: "I M Being Bushwacked",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-m-being-bushwacked.mp3`
  },
  {
    id: 177,
    filename: "i-m-cold.mp3",
    displayName: "I M Cold",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-m-cold.mp3`
  },
  {
    id: 178,
    filename: "i-m-going.mp3",
    displayName: "I M Going",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/i-m-going.mp3`
  },
  {
    id: 179,
    filename: "i-m-gone.mp3",
    displayName: "I M Gone",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-m-gone.mp3`
  },
  {
    id: 180,
    filename: "i-m-hit.mp3",
    displayName: "I M Hit",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-m-hit.mp3`
  },
  {
    id: 181,
    filename: "i-m-into-close.mp3",
    displayName: "I M Into Close",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-m-into-close.mp3`
  },
  {
    id: 182,
    filename: "i-m-just-a-woman.mp3",
    displayName: "I M Just A Woman",
    categories: [
      "quirky"
    ],
    r2Url: `${R2_BASE_URL}/i-m-just-a-woman.mp3`
  },
  {
    id: 183,
    filename: "i-m-just-one-man.mp3",
    displayName: "I M Just One Man",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-m-just-one-man.mp3`
  },
  {
    id: 184,
    filename: "i-m-losing-compression.mp3",
    displayName: "I M Losing Compression",
    categories: [
      "alert",
      "panicked"
    ],
    r2Url: `${R2_BASE_URL}/i-m-losing-compression.mp3`
  },
  {
    id: 185,
    filename: "i-m-on-it.mp3",
    displayName: "I M ON IT",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-m-on-it.mp3`
  },
  {
    id: 186,
    filename: "i-m-there.mp3",
    displayName: "I M There",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-m-there.mp3`
  },
  {
    id: 187,
    filename: "i-m-unarmed.mp3",
    displayName: "I M Unarmed",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-m-unarmed.mp3`
  },
  {
    id: 188,
    filename: "i-m-your-man.mp3",
    displayName: "I M Your Man",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-m-your-man.mp3`
  },
  {
    id: 189,
    filename: "i-need-support.mp3",
    displayName: "I Need Support",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-need-support.mp3`
  },
  {
    id: 190,
    filename: "i-see-him.mp3",
    displayName: "I See Him",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-see-him.mp3`
  },
  {
    id: 191,
    filename: "i-shall-avenge-us.mp3",
    displayName: "I Shall Avenge US",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-shall-avenge-us.mp3`
  },
  {
    id: 192,
    filename: "i-ve-been-discovered.mp3",
    displayName: "I VE Been Discovered",
    categories: [
      "alert"
    ],
    r2Url: `${R2_BASE_URL}/i-ve-been-discovered.mp3`
  },
  {
    id: 193,
    filename: "i-ve-been-spotted.mp3",
    displayName: "I VE Been Spotted",
    categories: [
      "alert"
    ],
    r2Url: `${R2_BASE_URL}/i-ve-been-spotted.mp3`
  },
  {
    id: 194,
    filename: "i-ve-got-the-knowledge.mp3",
    displayName: "I VE Got The Knowledge",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-ve-got-the-knowledge.mp3`
  },
  {
    id: 195,
    filename: "i-was-only-kidding.mp3",
    displayName: "I Was Only Kidding",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-was-only-kidding.mp3`
  },
  {
    id: 196,
    filename: "i-will-do-as-you-say.mp3",
    displayName: "I Will DO AS You Say",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-will-do-as-you-say.mp3`
  },
  {
    id: 197,
    filename: "i-will-go.mp3",
    displayName: "I Will GO",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-will-go.mp3`
  },
  {
    id: 198,
    filename: "i-won-t-be-late.mp3",
    displayName: "I Won T BE Late",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/i-won-t-be-late.mp3`
  },
  {
    id: 199,
    filename: "if-i-must.mp3",
    displayName: "IF I Must",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/if-i-must.mp3`
  },
  {
    id: 200,
    filename: "if-you-say-so.mp3",
    displayName: "IF You Say SO",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/if-you-say-so.mp3`
  },
  {
    id: 201,
    filename: "igniting-boosters.mp3",
    displayName: "Igniting Boosters",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/igniting-boosters.mp3`
  },
  {
    id: 202,
    filename: "in-transit.mp3",
    displayName: "IN Transit",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/in-transit.mp3`
  },
  {
    id: 203,
    filename: "indeed.mp3",
    displayName: "Indeed",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/indeed.mp3`
  },
  {
    id: 204,
    filename: "instruments-locked-on.mp3",
    displayName: "Instruments Locked ON",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/instruments-locked-on.mp3`
  },
  {
    id: 205,
    filename: "is-this-a-real-gun.mp3",
    displayName: "IS This A Real Gun",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/is-this-a-real-gun.mp3`
  },
  {
    id: 206,
    filename: "it-is-my-duty.mp3",
    displayName: "IT IS MY Duty",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/it-is-my-duty.mp3`
  },
  {
    id: 207,
    filename: "it-is-safe.mp3",
    displayName: "IT IS Safe",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/it-is-safe.mp3`
  },
  {
    id: 208,
    filename: "it-s-too-quiet-here.mp3",
    displayName: "IT S Too Quiet Here",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/it-s-too-quiet-here.mp3`
  },
  {
    id: 209,
    filename: "it-will-be-a-silent-spring.mp3",
    displayName: "IT Will BE A Silent Spring",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/it-will-be-a-silent-spring.mp3`
  },
  {
    id: 210,
    filename: "it-will-be-a-smoking-crater.mp3",
    displayName: "IT Will BE A Smoking Crater",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/it-will-be-a-smoking-crater.mp3`
  },
  {
    id: 211,
    filename: "ivan-s-not-home.mp3",
    displayName: "Ivan S Not Home",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/ivan-s-not-home.mp3`
  },
  {
    id: 212,
    filename: "just-get-me-close-enough.mp3",
    displayName: "Just Get ME Close Enough",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/just-get-me-close-enough.mp3`
  },
  {
    id: 213,
    filename: "just-give-me-a-clear-view.mp3",
    displayName: "Just Give ME A Clear View",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/just-give-me-a-clear-view.mp3`
  },
  {
    id: 214,
    filename: "kaboom.mp3",
    displayName: "Kaboom",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/kaboom.mp3`
  },
  {
    id: 215,
    filename: "kirov-reporting.mp3",
    displayName: "Kirov Reporting",
    categories: [
      "iconic",
      "soviet",
      "aircraft",
      "readiness",
      "professional"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/kirov-reporting.mp3`
  },
  {
    id: 216,
    filename: "korea-s-finest.mp3",
    displayName: "Korea S Finest",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/korea-s-finest.mp3`
  },
  {
    id: 217,
    filename: "let-s-do-it.mp3",
    displayName: "Let S DO IT",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/let-s-do-it.mp3`
  },
  {
    id: 218,
    filename: "let-s-get-it-on.mp3",
    displayName: "Let S Get IT ON",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/let-s-get-it-on.mp3`
  },
  {
    id: 219,
    filename: "let-s-get-outta-here.mp3",
    displayName: "Let S Get Outta Here",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/let-s-get-outta-here.mp3`
  },
  {
    id: 220,
    filename: "let-s-go.mp3",
    displayName: "Let S GO",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/let-s-go.mp3`
  },
  {
    id: 221,
    filename: "let-s-heat-them-up.mp3",
    displayName: "Let S Heat Them UP",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/let-s-heat-them-up.mp3`
  },
  {
    id: 222,
    filename: "let-s-make-a-delivery.mp3",
    displayName: "Let S Make A Delivery",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/let-s-make-a-delivery.mp3`
  },
  {
    id: 223,
    filename: "let-s-make-an-oasis-of-death.mp3",
    displayName: "Let S Make AN Oasis OF Death",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/let-s-make-an-oasis-of-death.mp3`
  },
  {
    id: 224,
    filename: "let-s-mosey.mp3",
    displayName: "Let S Mosey",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/let-s-mosey.mp3`
  },
  {
    id: 225,
    filename: "let-s-take-him-out.mp3",
    displayName: "Let S Take Him Out",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/let-s-take-him-out.mp3`
  },
  {
    id: 226,
    filename: "let-the-juice-flow.mp3",
    displayName: "Let The Juice Flow",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/let-the-juice-flow.mp3`
  },
  {
    id: 227,
    filename: "like-my-belt-buckle.mp3",
    displayName: "Like MY Belt Buckle",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/like-my-belt-buckle.mp3`
  },
  {
    id: 228,
    filename: "like-my-new-haircut.mp3",
    displayName: "Like MY New Haircut",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/like-my-new-haircut.mp3`
  },
  {
    id: 229,
    filename: "like-the-wind.mp3",
    displayName: "Like The Wind",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/like-the-wind.mp3`
  },
  {
    id: 230,
    filename: "location-confirmed.mp3",
    displayName: "Location Confirmed",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/location-confirmed.mp3`
  },
  {
    id: 231,
    filename: "locked-and-loaded.mp3",
    displayName: "Locked And Loaded",
    categories: [
      "combat",
      "confident"
    ],
    r2Url: `${R2_BASE_URL}/locked-and-loaded.mp3`
  },
  {
    id: 232,
    filename: "look-deeply-into-my-eyes.mp3",
    displayName: "Look Deeply Into MY Eyes",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/look-deeply-into-my-eyes.mp3`
  },
  {
    id: 233,
    filename: "lz-is-hot.mp3",
    displayName: "LZ IS Hot",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/lz-is-hot.mp3`
  },
  {
    id: 234,
    filename: "main-engines-engaged.mp3",
    displayName: "Main Engines Engaged",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/main-engines-engaged.mp3`
  },
  {
    id: 235,
    filename: "make-it-glow.mp3",
    displayName: "Make IT Glow",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/make-it-glow.mp3`
  },
  {
    id: 236,
    filename: "maneuver-props-engaged.mp3",
    displayName: "Maneuver Props Engaged",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/maneuver-props-engaged.mp3`
  },
  {
    id: 237,
    filename: "maneuvers-in-progress.mp3",
    displayName: "Maneuvers IN Progress",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/maneuvers-in-progress.mp3`
  },
  {
    id: 238,
    filename: "mayday-mayday.mp3",
    displayName: "Mayday Mayday",
    categories: [
      "aircraft",
      "alert",
      "panicked"
    ],
    r2Url: `${R2_BASE_URL}/mayday-mayday.mp3`
  },
  {
    id: 239,
    filename: "mercury-rising.mp3",
    displayName: "Mercury Rising",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/mercury-rising.mp3`
  },
  {
    id: 240,
    filename: "mission-sir.mp3",
    displayName: "Mission Sir",
    categories: [
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/mission-sir.mp3`
  },
  {
    id: 241,
    filename: "mommy.mp3",
    displayName: "Mommy",
    categories: [
      "iconic",
      "meme-worthy",
      "humor",
      "panicked",
      "multiplayer"
    ],
    r2Url: `${R2_BASE_URL}/mommy.mp3`
  },
  {
    id: 242,
    filename: "movin-out.mp3",
    displayName: "Movin Out",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/movin-out.mp3`
  },
  {
    id: 243,
    filename: "moving.mp3",
    displayName: "Moving",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/moving.mp3`
  },
  {
    id: 244,
    filename: "moving-out.mp3",
    displayName: "Moving Out",
    categories: [
      "movement",
      "multiplayer"
    ],
    r2Url: `${R2_BASE_URL}/moving-out.mp3`
  },
  {
    id: 245,
    filename: "moving-out-boss.mp3",
    displayName: "Moving Out Boss",
    categories: [
      "movement",
      "multiplayer"
    ],
    r2Url: `${R2_BASE_URL}/moving-out-boss.mp3`
  },
  {
    id: 246,
    filename: "my-command-is-your-wish.mp3",
    displayName: "MY Command IS Your Wish",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/my-command-is-your-wish.mp3`
  },
  {
    id: 247,
    filename: "my-feet-hurt.mp3",
    displayName: "MY Feet Hurt",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/my-feet-hurt.mp3`
  },
  {
    id: 248,
    filename: "my-rocket-s-hit.mp3",
    displayName: "MY Rocket S Hit",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/my-rocket-s-hit.mp3`
  },
  {
    id: 249,
    filename: "my-truck-is-loaded.mp3",
    displayName: "MY Truck IS Loaded",
    categories: [
      "vehicle"
    ],
    r2Url: `${R2_BASE_URL}/my-truck-is-loaded.mp3`
  },
  {
    id: 250,
    filename: "navigating.mp3",
    displayName: "Navigating",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/navigating.mp3`
  },
  {
    id: 251,
    filename: "navigation-systems-ready.mp3",
    displayName: "Navigation Systems Ready",
    categories: [
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/navigation-systems-ready.mp3`
  },
  {
    id: 252,
    filename: "need-a-lift.mp3",
    displayName: "Need A Lift",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/need-a-lift.mp3`
  },
  {
    id: 253,
    filename: "need-a-repair.mp3",
    displayName: "Need A Repair",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/need-a-repair.mp3`
  },
  {
    id: 254,
    filename: "need-a-smuggler.mp3",
    displayName: "Need A Smuggler",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/need-a-smuggler.mp3`
  },
  {
    id: 255,
    filename: "need-an-escort.mp3",
    displayName: "Need AN Escort",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/need-an-escort.mp3`
  },
  {
    id: 256,
    filename: "never-existed.mp3",
    displayName: "Never Existed",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/never-existed.mp3`
  },
  {
    id: 257,
    filename: "no-rest-for-soviet-woman.mp3",
    displayName: "NO Rest For Soviet Woman",
    categories: [
      "soviet"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/no-rest-for-soviet-woman.mp3`
  },
  {
    id: 258,
    filename: "no-witnesses.mp3",
    displayName: "NO Witnesses",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/no-witnesses.mp3`
  },
  {
    id: 259,
    filename: "obtaining-intelligence.mp3",
    displayName: "Obtaining Intelligence",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/obtaining-intelligence.mp3`
  },
  {
    id: 260,
    filename: "ok.mp3",
    displayName: "OK",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/ok.mp3`
  },
  {
    id: 261,
    filename: "on-my-way.mp3",
    displayName: "ON MY Way",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/on-my-way.mp3`
  },
  {
    id: 262,
    filename: "on-our-way-sir.mp3",
    displayName: "ON Our Way Sir",
    categories: [
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/on-our-way-sir.mp3`
  },
  {
    id: 263,
    filename: "on-the-move.mp3",
    displayName: "ON The Move",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/on-the-move.mp3`
  },
  {
    id: 264,
    filename: "one-way-trip.mp3",
    displayName: "One Way Trip",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/one-way-trip.mp3`
  },
  {
    id: 265,
    filename: "operation-underway.mp3",
    displayName: "Operation Underway",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/operation-underway.mp3`
  },
  {
    id: 266,
    filename: "order-received.mp3",
    displayName: "Order Received",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/order-received.mp3`
  },
  {
    id: 267,
    filename: "orders-comrade.mp3",
    displayName: "Orders Comrade",
    categories: [
      "soviet",
      "acknowledgment"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/orders-comrade.mp3`
  },
  {
    id: 268,
    filename: "orders.mp3",
    displayName: "Orders",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/orders.mp3`
  },
  {
    id: 269,
    filename: "outstanding.mp3",
    displayName: "Outstanding",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/outstanding.mp3`
  },
  {
    id: 270,
    filename: "pick-a-spot.mp3",
    displayName: "Pick A Spot",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/pick-a-spot.mp3`
  },
  {
    id: 271,
    filename: "pick-em-up-set-em-down.mp3",
    displayName: "Pick EM UP Set EM Down",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/pick-em-up-set-em-down.mp3`
  },
  {
    id: 272,
    filename: "pilot-reporting.mp3",
    displayName: "Pilot Reporting",
    categories: [
      "aircraft",
      "readiness",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/pilot-reporting.mp3`
  },
  {
    id: 273,
    filename: "predictable.mp3",
    displayName: "Predictable",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/predictable.mp3`
  },
  {
    id: 274,
    filename: "proceeding-to-vantage-point.mp3",
    displayName: "Proceeding TO Vantage Point",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/proceeding-to-vantage-point.mp3`
  },
  {
    id: 275,
    filename: "psychic-ready.mp3",
    displayName: "Psychic Ready",
    categories: [
      "yuri",
      "readiness"
    ],
    faction: "yuri",
    r2Url: `${R2_BASE_URL}/psychic-ready.mp3`
  },
  {
    id: 276,
    filename: "pushing-away.mp3",
    displayName: "Pushing Away",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/pushing-away.mp3`
  },
  {
    id: 277,
    filename: "reactor-ready.mp3",
    displayName: "Reactor Ready",
    categories: [
      "structure",
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/reactor-ready.mp3`
  },
  {
    id: 278,
    filename: "ready.mp3",
    displayName: "Ready",
    categories: [
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/ready.mp3`
  },
  {
    id: 279,
    filename: "ready-comrade.mp3",
    displayName: "Ready Comrade",
    categories: [
      "soviet",
      "readiness"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/ready-comrade.mp3`
  },
  {
    id: 280,
    filename: "ready-for-meltdown.mp3",
    displayName: "Ready For Meltdown",
    categories: [
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/ready-for-meltdown.mp3`
  },
  {
    id: 281,
    filename: "ready-to-draw.mp3",
    displayName: "Ready TO Draw",
    categories: [
      "readiness",
      "confident"
    ],
    r2Url: `${R2_BASE_URL}/ready-to-draw.mp3`
  },
  {
    id: 282,
    filename: "ready-to-infiltrate.mp3",
    displayName: "Ready TO Infiltrate",
    categories: [
      "readiness",
      "confident"
    ],
    r2Url: `${R2_BASE_URL}/ready-to-infiltrate.mp3`
  },
  {
    id: 283,
    filename: "ready-to-roll.mp3",
    displayName: "Ready TO Roll",
    categories: [
      "readiness",
      "confident"
    ],
    r2Url: `${R2_BASE_URL}/ready-to-roll.mp3`
  },
  {
    id: 284,
    filename: "ready-to-soar.mp3",
    displayName: "Ready TO Soar",
    categories: [
      "readiness",
      "confident"
    ],
    r2Url: `${R2_BASE_URL}/ready-to-soar.mp3`
  },
  {
    id: 285,
    filename: "ready-to-strike.mp3",
    displayName: "Ready TO Strike",
    categories: [
      "readiness",
      "confident"
    ],
    r2Url: `${R2_BASE_URL}/ready-to-strike.mp3`
  },
  {
    id: 286,
    filename: "red-alert-2-sounds-sound.mp3",
    displayName: "Red Alert 2 Sounds Sound",
    categories: [
      "iconic",
      "alert"
    ],
    r2Url: `${R2_BASE_URL}/red-alert-2-sounds-sound.mp3`
  },
  {
    id: 287,
    filename: "reinforcements.mp3",
    displayName: "Reinforcements",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/reinforcements.mp3`
  },
  {
    id: 288,
    filename: "removing.mp3",
    displayName: "Removing",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/removing.mp3`
  },
  {
    id: 289,
    filename: "ridin-high.mp3",
    displayName: "Ridin High",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/ridin-high.mp3`
  },
  {
    id: 290,
    filename: "right-away-sir.mp3",
    displayName: "Right Away Sir",
    categories: [
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/right-away-sir.mp3`
  },
  {
    id: 291,
    filename: "rockets-in-the-sky.mp3",
    displayName: "Rockets IN The Sky",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/rockets-in-the-sky.mp3`
  },
  {
    id: 292,
    filename: "rubber-shoes-in-motion.mp3",
    displayName: "Rubber Shoes IN Motion",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/rubber-shoes-in-motion.mp3`
  },
  {
    id: 293,
    filename: "rudder-set-for-new-heading.mp3",
    displayName: "Rudder Set For New Heading",
    categories: [
      "naval",
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/rudder-set-for-new-heading.mp3`
  },
  {
    id: 294,
    filename: "run-for-cover.mp3",
    displayName: "Run For Cover",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/run-for-cover.mp3`
  },
  {
    id: 295,
    filename: "safety-first-sir.mp3",
    displayName: "Safety First Sir",
    categories: [
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/safety-first-sir.mp3`
  },
  {
    id: 296,
    filename: "scanning-perimeter.mp3",
    displayName: "Scanning Perimeter",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/scanning-perimeter.mp3`
  },
  {
    id: 297,
    filename: "scorched-earth.mp3",
    displayName: "Scorched Earth",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/scorched-earth.mp3`
  },
  {
    id: 298,
    filename: "seal-ready.mp3",
    displayName: "Seal Ready",
    categories: [
      "allied",
      "infantry",
      "naval",
      "readiness"
    ],
    faction: "allied",
    r2Url: `${R2_BASE_URL}/seal-ready.mp3`
  },
  {
    id: 299,
    filename: "secret-service-here.mp3",
    displayName: "Secret Service Here",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/secret-service-here.mp3`
  },
  {
    id: 300,
    filename: "securing-position.mp3",
    displayName: "Securing Position",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/securing-position.mp3`
  },
  {
    id: 301,
    filename: "securing-the-area.mp3",
    displayName: "Securing The Area",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/securing-the-area.mp3`
  },
  {
    id: 302,
    filename: "select-menu-ra2.mp3",
    displayName: "Select Menu Ra2",
    categories: [
      "iconic"
    ],
    r2Url: `${R2_BASE_URL}/select-menu-ra2.mp3`
  },
  {
    id: 303,
    filename: "setting-new-course.mp3",
    displayName: "Setting New Course",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/setting-new-course.mp3`
  },
  {
    id: 304,
    filename: "settling-in.mp3",
    displayName: "Settling IN",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/settling-in.mp3`
  },
  {
    id: 305,
    filename: "shake-it-baby.mp3",
    displayName: "Shake IT Baby",
    categories: [
      "humor"
    ],
    r2Url: `${R2_BASE_URL}/shake-it-baby.mp3`
  },
  {
    id: 306,
    filename: "she-doesn-t-belong-here.mp3",
    displayName: "She Doesn T Belong Here",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/she-doesn-t-belong-here.mp3`
  },
  {
    id: 307,
    filename: "she-s-going-to-blow.mp3",
    displayName: "She S Going TO Blow",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/she-s-going-to-blow.mp3`
  },
  {
    id: 308,
    filename: "ship-reporting.mp3",
    displayName: "Ship Reporting",
    categories: [
      "naval",
      "readiness",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/ship-reporting.mp3`
  },
  {
    id: 309,
    filename: "shoot-to-kill.mp3",
    displayName: "Shoot TO Kill",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/shoot-to-kill.mp3`
  },
  {
    id: 310,
    filename: "show-me-the-way.mp3",
    displayName: "Show ME The Way",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/show-me-the-way.mp3`
  },
  {
    id: 311,
    filename: "sir-yes-sir.mp3",
    displayName: "Sir Yes Sir",
    categories: [
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/sir-yes-sir.mp3`
  },
  {
    id: 312,
    filename: "sniper-ready.mp3",
    displayName: "Sniper Ready",
    categories: [
      "infantry",
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/sniper-ready.mp3`
  },
  {
    id: 313,
    filename: "special-delivery.mp3",
    displayName: "Special Delivery",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/special-delivery.mp3`
  },
  {
    id: 314,
    filename: "speed-to-full.mp3",
    displayName: "Speed TO Full",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/speed-to-full.mp3`
  },
  {
    id: 315,
    filename: "spread-the-doom.mp3",
    displayName: "Spread The Doom",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/spread-the-doom.mp3`
  },
  {
    id: 316,
    filename: "squared-away-sir.mp3",
    displayName: "Squared Away Sir",
    categories: [
      "acknowledgment",
      "confident",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/squared-away-sir.mp3`
  },
  {
    id: 317,
    filename: "standing-by.mp3",
    displayName: "Standing BY",
    categories: [
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/standing-by.mp3`
  },
  {
    id: 318,
    filename: "steady-as-she-goes.mp3",
    displayName: "Steady AS She Goes",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/steady-as-she-goes.mp3`
  },
  {
    id: 319,
    filename: "studying-blueprints.mp3",
    displayName: "Studying Blueprints",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/studying-blueprints.mp3`
  },
  {
    id: 320,
    filename: "surging-forward.mp3",
    displayName: "Surging Forward",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/surging-forward.mp3`
  },
  {
    id: 321,
    filename: "tagged-for-extinction.mp3",
    displayName: "Tagged For Extinction",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/tagged-for-extinction.mp3`
  },
  {
    id: 322,
    filename: "take-me-back-to-havana.mp3",
    displayName: "Take ME Back TO Havana",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/take-me-back-to-havana.mp3`
  },
  {
    id: 323,
    filename: "taking-him-out.mp3",
    displayName: "Taking Him Out",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/taking-him-out.mp3`
  },
  {
    id: 324,
    filename: "tanya-laugh.mp3",
    displayName: "Tanya Laugh",
    categories: [
      "allied",
      "infantry",
      "hero"
    ],
    faction: "allied",
    r2Url: `${R2_BASE_URL}/tanya-laugh.mp3`
  },
  {
    id: 325,
    filename: "target-acquired.mp3",
    displayName: "Target Acquired",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/target-acquired.mp3`
  },
  {
    id: 326,
    filename: "target-sighted.mp3",
    displayName: "Target Sighted",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/target-sighted.mp3`
  },
  {
    id: 327,
    filename: "tell-me-your-wish.mp3",
    displayName: "Tell ME Your Wish",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/tell-me-your-wish.mp3`
  },
  {
    id: 328,
    filename: "tesla-suit-ready.mp3",
    displayName: "Tesla Suit Ready",
    categories: [
      "tesla",
      "readiness",
      "multiplayer"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/tesla-suit-ready.mp3`
  },
  {
    id: 329,
    filename: "the-end-is-near.mp3",
    displayName: "The End IS Near",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/the-end-is-near.mp3`
  },
  {
    id: 330,
    filename: "the-mind-is-quicker-than-the-eye.mp3",
    displayName: "The Mind IS Quicker Than The Eye",
    categories: [
      "yuri"
    ],
    faction: "yuri",
    r2Url: `${R2_BASE_URL}/the-mind-is-quicker-than-the-eye.mp3`
  },
  {
    id: 331,
    filename: "there-goes-the-neighborhood.mp3",
    displayName: "There Goes The Neighborhood",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/there-goes-the-neighborhood.mp3`
  },
  {
    id: 332,
    filename: "there-s-no-resistance.mp3",
    displayName: "There S NO Resistance",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/there-s-no-resistance.mp3`
  },
  {
    id: 333,
    filename: "there-s-too-much-flak.mp3",
    displayName: "There S Too Much Flak",
    categories: [
      "soviet"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/there-s-too-much-flak.mp3`
  },
  {
    id: 334,
    filename: "they-found-me-out.mp3",
    displayName: "They Found ME Out",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/they-found-me-out.mp3`
  },
  {
    id: 335,
    filename: "they-re-history.mp3",
    displayName: "They RE History",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/they-re-history.mp3`
  },
  {
    id: 336,
    filename: "they-re-shooting-me.mp3",
    displayName: "They RE Shooting ME",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/they-re-shooting-me.mp3`
  },
  {
    id: 337,
    filename: "they-won-t-see-us-coming.mp3",
    displayName: "They Won T See US Coming",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/they-won-t-see-us-coming.mp3`
  },
  {
    id: 338,
    filename: "this-gun-is-heavy.mp3",
    displayName: "This Gun IS Heavy",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/this-gun-is-heavy.mp3`
  },
  {
    id: 339,
    filename: "this-is-scary.mp3",
    displayName: "This IS Scary",
    categories: [
      "meme-worthy"
    ],
    r2Url: `${R2_BASE_URL}/this-is-scary.mp3`
  },
  {
    id: 340,
    filename: "this-is-too-easy.mp3",
    displayName: "This IS Too Easy",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/this-is-too-easy.mp3`
  },
  {
    id: 341,
    filename: "this-will-be-messy.mp3",
    displayName: "This Will BE Messy",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/this-will-be-messy.mp3`
  },
  {
    id: 342,
    filename: "thoughts-received.mp3",
    displayName: "Thoughts Received",
    categories: [
      "yuri"
    ],
    faction: "yuri",
    r2Url: `${R2_BASE_URL}/thoughts-received.mp3`
  },
  {
    id: 343,
    filename: "thrusters-engaged.mp3",
    displayName: "Thrusters Engaged",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/thrusters-engaged.mp3`
  },
  {
    id: 344,
    filename: "time-for-a-showdown.mp3",
    displayName: "Time For A Showdown",
    categories: [
      "humor"
    ],
    r2Url: `${R2_BASE_URL}/time-for-a-showdown.mp3`
  },
  {
    id: 345,
    filename: "tools-ready.mp3",
    displayName: "Tools Ready",
    categories: [
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/tools-ready.mp3`
  },
  {
    id: 346,
    filename: "tour-underway.mp3",
    displayName: "Tour Underway",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/tour-underway.mp3`
  },
  {
    id: 347,
    filename: "traitors-must-be-eliminated.mp3",
    displayName: "Traitors Must BE Eliminated",
    categories: [
      "combat"
    ],
    r2Url: `${R2_BASE_URL}/traitors-must-be-eliminated.mp3`
  },
  {
    id: 348,
    filename: "undercover.mp3",
    displayName: "Undercover",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/undercover.mp3`
  },
  {
    id: 349,
    filename: "unit-reporting.mp3",
    displayName: "Unit Reporting",
    categories: [
      "readiness",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/unit-reporting.mp3`
  },
  {
    id: 350,
    filename: "up-and-over.mp3",
    displayName: "UP And Over",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/up-and-over.mp3`
  },
  {
    id: 351,
    filename: "vamos-muchachos.mp3",
    displayName: "Vamos Muchachos",
    categories: [
      "humor"
    ],
    r2Url: `${R2_BASE_URL}/vamos-muchachos.mp3`
  },
  {
    id: 352,
    filename: "varmit-shot-me.mp3",
    displayName: "Varmit Shot ME",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/varmit-shot-me.mp3`
  },
  {
    id: 353,
    filename: "vehicle-ready.mp3",
    displayName: "Vehicle Ready",
    categories: [
      "vehicle",
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/vehicle-ready.mp3`
  },
  {
    id: 354,
    filename: "vehicle-reporting.mp3",
    displayName: "Vehicle Reporting",
    categories: [
      "vehicle",
      "readiness",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/vehicle-reporting.mp3`
  },
  {
    id: 355,
    filename: "vessel-ready.mp3",
    displayName: "Vessel Ready",
    categories: [
      "naval",
      "readiness"
    ],
    r2Url: `${R2_BASE_URL}/vessel-ready.mp3`
  },
  {
    id: 356,
    filename: "visibility-clear.mp3",
    displayName: "Visibility Clear",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/visibility-clear.mp3`
  },
  {
    id: 357,
    filename: "waiting-orders.mp3",
    displayName: "Waiting Orders",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/waiting-orders.mp3`
  },
  {
    id: 358,
    filename: "watch-my-6.mp3",
    displayName: "Watch MY 6",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/watch-my-6.mp3`
  },
  {
    id: 359,
    filename: "watch-out-for-the-bumps.mp3",
    displayName: "Watch Out For The Bumps",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/watch-out-for-the-bumps.mp3`
  },
  {
    id: 360,
    filename: "we-are-being-attacked.mp3",
    displayName: "WE Are Being Attacked",
    categories: [
      "combat",
      "alert"
    ],
    r2Url: `${R2_BASE_URL}/we-are-being-attacked.mp3`
  },
  {
    id: 361,
    filename: "we-have-em-on-radar.mp3",
    displayName: "WE Have EM ON Radar",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/we-have-em-on-radar.mp3`
  },
  {
    id: 362,
    filename: "we-must-revolt.mp3",
    displayName: "WE Must Revolt",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/we-must-revolt.mp3`
  },
  {
    id: 363,
    filename: "we-re-being-attacked.mp3",
    displayName: "WE RE Being Attacked",
    categories: [
      "combat",
      "alert"
    ],
    r2Url: `${R2_BASE_URL}/we-re-being-attacked.mp3`
  },
  {
    id: 364,
    filename: "we-re-going-down.mp3",
    displayName: "WE RE Going Down",
    categories: [
      "movement",
      "alert"
    ],
    r2Url: `${R2_BASE_URL}/we-re-going-down.mp3`
  },
  {
    id: 365,
    filename: "we-re-going-in.mp3",
    displayName: "WE RE Going IN",
    categories: [
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/we-re-going-in.mp3`
  },
  {
    id: 366,
    filename: "we-re-losing-altitude.mp3",
    displayName: "WE RE Losing Altitude",
    categories: [
      "aircraft",
      "alert",
      "panicked"
    ],
    r2Url: `${R2_BASE_URL}/we-re-losing-altitude.mp3`
  },
  {
    id: 367,
    filename: "we-re-pinned-down.mp3",
    displayName: "WE RE Pinned Down",
    categories: [
      "panicked"
    ],
    r2Url: `${R2_BASE_URL}/we-re-pinned-down.mp3`
  },
  {
    id: 368,
    filename: "we-will-bury-them.mp3",
    displayName: "WE Will Bury Them",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/we-will-bury-them.mp3`
  },
  {
    id: 369,
    filename: "we-will-have-the-power-up-in-30-seconds-sir.mp3",
    displayName: "WE Will Have The Power UP IN 30 Seconds Sir",
    categories: [
      "iconic",
      "structure",
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/we-will-have-the-power-up-in-30-seconds-sir.mp3`
  },
  {
    id: 370,
    filename: "weapon-ready.mp3",
    displayName: "Weapon Ready",
    categories: [
      "readiness",
      "multiplayer"
    ],
    r2Url: `${R2_BASE_URL}/weapon-ready.mp3`
  },
  {
    id: 371,
    filename: "westwood-proudly-presents-command-and-conquer.wav",
    displayName: "Westwood Proudly Presents Command And Conquer",
    categories: [
      "iconic"
    ],
    r2Url: `${R2_BASE_URL}/westwood-proudly-presents-command-and-conquer.wav`
  },
  {
    id: 372,
    filename: "what-a-society.mp3",
    displayName: "What A Society",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/what-a-society.mp3`
  },
  {
    id: 373,
    filename: "what-are-your-conditions.mp3",
    displayName: "What Are Your Conditions",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/what-are-your-conditions.mp3`
  },
  {
    id: 374,
    filename: "what-do-you-want.mp3",
    displayName: "What DO You Want",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/what-do-you-want.mp3`
  },
  {
    id: 375,
    filename: "what-is-it.mp3",
    displayName: "What IS IT",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/what-is-it.mp3`
  },
  {
    id: 376,
    filename: "what-s-over-here.mp3",
    displayName: "What S Over Here",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/what-s-over-here.mp3`
  },
  {
    id: 377,
    filename: "what-s-your-clearance-level.mp3",
    displayName: "What S Your Clearance Level",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/what-s-your-clearance-level.mp3`
  },
  {
    id: 378,
    filename: "what-s-your-request.mp3",
    displayName: "What S Your Request",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/what-s-your-request.mp3`
  },
  {
    id: 379,
    filename: "what-should-i-do.mp3",
    displayName: "What Should I DO",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/what-should-i-do.mp3`
  },
  {
    id: 380,
    filename: "where-s-my-horse.mp3",
    displayName: "Where S MY Horse",
    categories: [
      "humor",
      "quirky"
    ],
    r2Url: `${R2_BASE_URL}/where-s-my-horse.mp3`
  },
  {
    id: 381,
    filename: "where-s-the-party.mp3",
    displayName: "Where S The Party",
    categories: [
      "humor"
    ],
    r2Url: `${R2_BASE_URL}/where-s-the-party.mp3`
  },
  {
    id: 382,
    filename: "where-should-i-go.mp3",
    displayName: "Where Should I GO",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/where-should-i-go.mp3`
  },
  {
    id: 383,
    filename: "who-s-your-daddy.mp3",
    displayName: "Who S Your Daddy",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/who-s-your-daddy.mp3`
  },
  {
    id: 384,
    filename: "why-don-t-you-drive.mp3",
    displayName: "Why Don T You Drive",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/why-don-t-you-drive.mp3`
  },
  {
    id: 385,
    filename: "wilco.mp3",
    displayName: "Wilco",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/wilco.mp3`
  },
  {
    id: 386,
    filename: "will-have-the-power-up-in-30-seconds-sir.mp3",
    displayName: "Will Have The Power UP IN 30 Seconds Sir",
    categories: [
      "iconic",
      "structure",
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/will-have-the-power-up-in-30-seconds-sir.mp3`
  },
  {
    id: 387,
    filename: "will-i-get-hurt.mp3",
    displayName: "Will I Get Hurt",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/will-i-get-hurt.mp3`
  },
  {
    id: 388,
    filename: "will-you-watch-my-children.mp3",
    displayName: "Will You Watch MY Children",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/will-you-watch-my-children.mp3`
  },
  {
    id: 389,
    filename: "without-a-trace.mp3",
    displayName: "Without A Trace",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/without-a-trace.mp3`
  },
  {
    id: 390,
    filename: "yeah.mp3",
    displayName: "Yeah",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/yeah.mp3`
  },
  {
    id: 391,
    filename: "yeah-baby.mp3",
    displayName: "Yeah Baby",
    categories: [
      "iconic",
      "confident",
      "multiplayer"
    ],
    r2Url: `${R2_BASE_URL}/yeah-baby.mp3`
  },
  {
    id: 392,
    filename: "yeah-ha.mp3",
    displayName: "Yeah HA",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/yeah-ha.mp3`
  },
  {
    id: 393,
    filename: "yeah-what-s-that.mp3",
    displayName: "Yeah What S That",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/yeah-what-s-that.mp3`
  },
  {
    id: 394,
    filename: "yes.mp3",
    displayName: "Yes",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/yes.mp3`
  },
  {
    id: 395,
    filename: "yes-commander.mp3",
    displayName: "Yes Commander",
    categories: [
      "acknowledgment",
      "professional",
      "multiplayer"
    ],
    r2Url: `${R2_BASE_URL}/yes-commander.mp3`
  },
  {
    id: 396,
    filename: "yes-comrade.mp3",
    displayName: "Yes Comrade",
    categories: [
      "soviet",
      "acknowledgment"
    ],
    faction: "soviet",
    r2Url: `${R2_BASE_URL}/yes-comrade.mp3`
  },
  {
    id: 397,
    filename: "yes-of-course.mp3",
    displayName: "Yes OF Course",
    categories: [
      "acknowledgment",
      "movement"
    ],
    r2Url: `${R2_BASE_URL}/yes-of-course.mp3`
  },
  {
    id: 398,
    filename: "yes-sir.mp3",
    displayName: "Yes Sir",
    categories: [
      "acknowledgment",
      "professional"
    ],
    r2Url: `${R2_BASE_URL}/yes-sir.mp3`
  },
  {
    id: 399,
    filename: "you-are-sure.mp3",
    displayName: "You Are Sure",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/you-are-sure.mp3`
  },
  {
    id: 400,
    filename: "you-bet.mp3",
    displayName: "You Bet",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/you-bet.mp3`
  },
  {
    id: 401,
    filename: "you-got-an-order.mp3",
    displayName: "You Got AN Order",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/you-got-an-order.mp3`
  },
  {
    id: 402,
    filename: "you-got-it.mp3",
    displayName: "You Got IT",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/you-got-it.mp3`
  },
  {
    id: 403,
    filename: "your-mind-is-clear.mp3",
    displayName: "Your Mind IS Clear",
    categories: [
      "yuri"
    ],
    faction: "yuri",
    r2Url: `${R2_BASE_URL}/your-mind-is-clear.mp3`
  },
  {
    id: 404,
    filename: "your-wish.mp3",
    displayName: "Your Wish",
    categories: [
      "acknowledgment"
    ],
    r2Url: `${R2_BASE_URL}/your-wish.mp3`
  }
];
