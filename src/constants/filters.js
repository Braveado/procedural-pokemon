// Pokemon
const pokemonFilter = [ // Exclude pokemons with this keywords.
// Legendary forms above 720 total stats.
'eternamax', 'primal', 'ultra',
// General forms as strong as legendaries.
'mega', 'gmax', 'eternal', 'ash',
// Pokemon form changes
'sunny', 'rainy', 'snowy', 'origin', 'zen', 'pirouette', 'blade', 'crowned', 'gulping', 'gorging', 
'noice', 'hangry', 'minior',
// Pokemons and forms below 360 total stats.
'solo', 'shedinja', 'smeargle', 'ditto', 'delibird', 'luvdisc', 'unown', 'wishiwashi',
// Others.
'totem', 'bond', 'construct', 'phione', 'meltan', 'calyrex',
];
const pokemonAllow = [ // Include pokemons with this keywords even when excluded by filter.
// Calyrex forms
'ice', 'shadow',
// Minior forms
'meteor'
];

// Moves
const moveFilter = [ // Exclude moves with this keywords.
// General max and z moves.
'max', 'physical', 'special',
// Specific z moves.
'catastropika', 'moonsault', 'raid', '000', 'sparksurfer', 'evoboost', 'pancake', 'genesis', 'operetta', 'stormshards',
'forever', 'soulblaze', 'guardian', 'sunraze', 'moonraze', 'burns', 'stealing',
// Unusable in format.
'struggle', 'happy', 'return', 'frustration', 'veevee',
// Doubles
'helping', 'aromatic', 'hands', 'coaching', 'gear', 'magnetic', 'spotlight', 'quash', 'decorate',
// Berries
'natural', 'stuff', 'teatime', 'belch',
// No effect.
'splash', 'celebrate',
// BRANCH LOGIC. All accounted for.
// Combo moves.
//'stockpile', 'swallow', 'spit',     
// Held items.
//'techno', 'judgement',
// Specific pokemons.
//'hyperspace'
// REVERSE BRANCH LOGIC. All accounted for.
// Need lost or consumed held items to work.
//'recycle',  
];
const moveAllow = [ // Include moves with this keywords even when excluded by filter.
'bug', 'grind', 'shift'
];

// Abilities
const abilityFilter = [ // Exclude abilities with this keywords.
// Unusable in format.
'illuminate', 'ball', 'honey', 'run', 
// Berries.
'one', 'unnerve', 'cheek', 'gluttony', 'harvest', 'ripen',
// Doubles.
'plus', 'minus', 'battery', 'healer', 'friend', 'alchemy', 'spot', 'receiver', 'symbiosis', 'telepathy', 'medicine',
// Info.
'anticipation', 'forewarn', 'frisk',
// Filtered pokemon forms specific.
'schooling',          
// BRANCH LOGIC. All accounted for.
// Pokemon forms specific.
//'zen', 'stance', 'shields', 'bond', 'construct', 'face', 'hunger', 'gulp', 'forecast', 
// Move mechanic. 
// 'iron-fist', 'skill-link', 'reckless', 'strong-jaw', 'mega-launcher', 'liquid-voice', 'punk-rock', 'triage',
// 'tough-claws', 'unseen-fist',    
// Move type.
// 'flash-fire', 'overgrow', 'blaze', 'torrent', 'swarm', 'scrappy', 'sand-force', 'gale-wings', 
// 'dark-aura', 'fairy-aura', 'steelworker', 'transistor', 'dragons-maw',
// Move type changes.
// 'normalize', 'refrigerate', 'pixilate', 'galvanize', 'aerilate',
// Specific pokemons.
//'multitype', 'rks', 'rusted',
// Harmful to owner.
//'truant', 'stall', 'klutz', 'slow', 'defeatist',
// REVERSE BRANCH LOGIC. All accounted for.
// Need lost or consumed held items to work.
// 'pickup', 'unburden', 'pickpocket', 'magician',
];  
const abilityAllow = [ // Include abilities with this keywords even when excluded by filter.
//
];

// Items
const itemFilter = [ // Exclude items with this keywords.
// Unusable in format.
'power', 'scarf', 'smoke', 'macho', 'exp', 'soothe', 'coin', 'cleanse', 'egg', 'luck',
'pure', 'ability', 
// Evolution related or filtered pokemon specific.    
'deep', 'scale', 'powder', 'everstone', 'grade', 'punch', 'protector', 'disc', 'magmarizer', 'electirizer', 
'reaper', 'whipped', 'sachet', 'light',  
// Berries
'oran',
// BRANCH LOGIC. All accounted for.
// Pokemon specific.
// 'dew', 'thick', 'stick'
// Move or ability mechanic.
//'heat', 'smooth', 'icy', 'damp', 'sludge', 'clay', 'orb', 
// Harmful to user.
//'full', 'lagging', 'sticky', 'target', 'iron'
];
const itemAllow = [ // Include items with this keywords even when excluded by filter.    
'herb', 'choice', 'bright', 'silver', 'silk', 'clay'
];

export {
    pokemonFilter, pokemonAllow, 
    moveFilter, moveAllow, 
    abilityFilter, abilityAllow,
    itemFilter, itemAllow
}