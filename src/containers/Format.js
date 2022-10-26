import React, {useEffect, useState} from 'react';
import * as guide from '../constants/guide';

export default function Format() {
    // Change title.
    useEffect (() => {
        document.title = 'Format - Procedural Pokémon';
    }, []);

    const [showCreate, setShowCreate] = useState(false);
    const [showImport, setShowImport] = useState(false);
    const [showPlay, setShowPlay] = useState(false); 

    return (
        <div className="flex flex-col gap-8 justify-start items-center p-8 w-full">  
            <div id="usage" className="flex flex-col w-full">
                <div className="flex justify-start items-center gap-4 text-center">                    
                    <p className="text-lg">Usage</p>
                    <p className="text-base text-gray-400">How to use the format.</p>
                </div>            
                <div className="flex flex-col justify-start items-start gap-4 p-4 w-full border-2 border-gray-200 rounded-md">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-start items-center gap-4 text-center">                    
                            <p className="text-lg">Basics</p>
                            <p className="text-base text-gray-400">General points about the format.</p>
                        </div>            
                        <div className="flex flex-col justify-start items-start gap-4 p-4 w-full border-t-2 border-gray-200">
                            <p>
                                The format aims to generate random yet balanced pokémon teams (singles) using procedural generation.
                                Randomly generated numbers are used to get pokémon, moves, abilities and items across the first 8 generations of the main Pokémon games.
                                Potential options are then put through filters to prevent unbalanced or unusable ones.
                            </p>                    
                            <p>
                                Once all options have been generated, a complete pokémon team must be built with them to then export it.
                                Teams can be imported to Pokémon Showdown for battles via custom games. 
                            </p>
                        </div>                                                            
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-start items-center gap-4 text-center">                    
                            <p className="text-lg">Guide</p>
                            <p className="text-base text-gray-400">Steps for creating, importing and playing with a team.</p>
                        </div>            
                        <div className="flex flex-col justify-start items-start gap-8 p-4 w-full border-t-2 border-gray-200">  
                            <div className={`pl-4 border-l-2 space-y-4 ${showCreate ? 'border-dashed border-gray-400' : 'border-transparent'}`}>                          
                                <div >
                                    <button type="button" onClick={() => setShowCreate(!showCreate)}
                                        className={`text-center p-2 rounded-md hover:bg-gray-200 border-2 w-96 transition duration-150 ease-in-out border-gray-200
                                        ${showCreate ? 'bg-gray-200' : 'bg-white'}`}>
                                        Create team
                                    </button>
                                </div>
                                {showCreate ?
                                <ul className="space-y-4">                                
                                    <li>
                                        Generate options inside the Team Builder.
                                        <ul className="pl-4">
                                            <li>
                                                <img className="border-2 shadow-md border-gray-200 rounded-md"
                                                    src={guide.createTeam[0]} alt="guide_create_1" 
                                                />
                                            </li>
                                        </ul>
                                    </li>   
                                    <li>
                                        Select all required pokémon.
                                        <ul className="pl-4">
                                            <li>
                                                <img className="border-2 shadow-md border-gray-200 rounded-md" 
                                                    src={guide.createTeam[1]} alt="guide_create_1" 
                                                />
                                            </li>
                                        </ul>                                    
                                    </li>    
                                    <li>
                                        Assign each selected pokémon to a moveset.
                                        <ul className="pl-4">
                                            <li className="text-gray-600 text-sm">
                                                Select all required moves for each moveset.
                                            </li>  
                                            <li>
                                                <img className="border-2 shadow-md border-gray-200 rounded-md"
                                                    src={guide.createTeam[2]} alt="guide_create_1" 
                                                />
                                            </li>
                                        </ul>
                                    </li>   
                                    <li>
                                        Assign each selected pokémon to an ability.
                                        <ul className="pl-4">
                                            <li>
                                                <img className="border-2 shadow-md border-gray-200 rounded-md"
                                                    src={guide.createTeam[3]} alt="guide_create_1" 
                                                />
                                            </li>
                                        </ul>
                                    </li>                
                                    <li>
                                        Assign each selected pokémon to an item.
                                        <ul className="pl-4">
                                            <li>
                                                <img className="border-2 shadow-md border-gray-200 rounded-md"
                                                    src={guide.createTeam[4]} alt="guide_create_1" 
                                                />
                                            </li>
                                        </ul>
                                    </li>  
                                    <li>
                                        Done! Export the team.
                                        <ul className="pl-4">                                        
                                            <li>
                                                <img className="border-2 shadow-md border-gray-200 rounded-md"
                                                    src={guide.createTeam[5]} alt="guide_create_1" 
                                                />
                                            </li>
                                        </ul>
                                    </li>                              
                                </ul> 
                                : null}   
                            </div> 
                            <div className={`pl-4 border-l-2 space-y-4 ${showImport ? 'border-dashed border-gray-400' : 'border-transparent'}`}>                          
                                <div >
                                    <button type="button" onClick={() => setShowImport(!showImport)}
                                        className={`text-center p-2 rounded-md hover:bg-gray-200 border-2 w-96 transition duration-150 ease-in-out border-gray-200
                                        ${showImport ? 'bg-gray-200' : 'bg-white'}`}>
                                        Import team
                                    </button>
                                </div>
                                {showImport ?
                                <ul className="space-y-4">
                                    <li>
                                        Go to Pokémon Showdown.
                                        <ul className="pl-4 text-gray-600 text-sm">
                                            <li><a href="https://play.pokemonshowdown.com/teambuilder" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500">
                                                Team builder
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        Create a new team.
                                        <ul className="pl-4">                                        
                                            <li>
                                                <img className="border-2 shadow-md border-gray-200 rounded-md"
                                                    src={guide.importTeam[0]} alt="guide_create_1" 
                                                />
                                            </li>
                                        </ul>
                                    </li>                          
                                    <li>
                                        Import using text.
                                        <ul className="pl-4">                                        
                                            <li>
                                                <img className="border-2 shadow-md border-gray-200 rounded-md"
                                                    src={guide.importTeam[1]} alt="guide_create_1" 
                                                />
                                            </li>
                                        </ul>
                                    </li> 
                                    <li>
                                        Paste an exported team and save.
                                        <ul className="pl-4">
                                            <li className="text-gray-600 text-sm">
                                                Shortcut: Ctrl + V.
                                            </li>
                                            <li>
                                                <img className="border-2 shadow-md border-gray-200 rounded-md"
                                                    src={guide.importTeam[2]} alt="guide_create_1" 
                                                />
                                            </li>
                                        </ul>
                                    </li>                          
                                    <li>
                                        Done! Go back when ready.
                                        <ul className="pl-4">
                                            <li className="text-gray-600 text-sm">
                                                Tip: Rename the team and/or pokémon.
                                            </li>
                                            <li>
                                                <img className="border-2 shadow-md border-gray-200 rounded-md"
                                                    src={guide.importTeam[3]} alt="guide_create_1" 
                                                />
                                            </li>
                                        </ul>
                                    </li>                          
                                </ul>    
                                : null} 
                            </div>          
                            <div className={`pl-4 border-l-2 space-y-4 ${showPlay ? 'border-dashed border-gray-400' : 'border-transparent'}`}>                               
                                <div >
                                    <button type="button" onClick={() => setShowPlay(!showPlay)}
                                        className={`text-center p-2 rounded-md hover:bg-gray-200 border-2 w-96 transition duration-150 ease-in-out border-gray-200
                                        ${showPlay ? 'bg-gray-200' : 'bg-white'}`}>
                                        Play game
                                    </button>
                                </div>
                                {showPlay ?
                                <ul className="space-y-4">
                                    <li>
                                        Go to Pokémon Showdown.
                                        <ul className="pl-4 text-gray-600 text-sm">
                                            <li><a href="https://play.pokemonshowdown.com/teambuilder" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500">
                                                Team builder
                                            </a></li>
                                        </ul>
                                    </li>                        
                                </ul> 
                                : null} 
                            </div>                  
                        </div>                                                            
                    </div>
                </div>                                                            
            </div>
            <div id="generation" className="flex flex-col w-full">
                <div className="flex justify-start items-center gap-4 text-center">                    
                    <p className="text-lg">Generation</p>
                    <p className="text-base text-gray-400">How options are generated.</p>
                </div>            
                <div className="flex flex-col justify-start items-start gap-4 p-4 w-full border-2 border-gray-200 rounded-md">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-start items-center gap-4 text-center">                    
                            <p className="text-lg">Pokémon Options</p>
                            <p className="text-base text-gray-400">Process for generating pokémon options.</p>
                        </div>            
                        <div className="flex flex-col justify-start items-start gap-4 p-4 w-full border-t-2 border-gray-200">
                            The steps to generate each pokémon option are the following:
                            <ul className="pl-4 space-y-2">
                                <li>
                                    Get a random pokémon.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li><a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500">
                                            Pokédex #001-898.
                                        </a></li>                                                        
                                    </ul>
                                </li>                            
                                <li>
                                    Get a random final evolution from its available ones.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li>Longest branch if applicable on branching evolutions.</li>                                                        
                                    </ul>
                                </li>
                                <li>
                                    Get a random form from its available ones.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li></li>                                                        
                                    </ul>
                                </li>
                                <li>
                                    Check filters and reroll if filtered out.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li>Legendary pokémon forms above 720 total stats.</li>                        
                                        <li>Pokémon forms as strong as legendaries.</li>
                                        <li>Pokémon and pokémon forms below 360 total stats.</li>
                                    </ul>
                                </li>
                                <li>
                                    Check for "top pokémon" balance and reroll if needed.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li>Legendary, mythical and pokémon with at least 600 total stats.</li>
                                        <li>Exactly 1 included in options.</li>
                                    </ul>
                                </li>
                                <li>
                                    Roll for "shiny bonus" chance.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li>Shiny variant and increased level (+10).</li>
                                        <li>Exactly 1 included in options.</li>
                                    </ul>
                                </li>
                                <li>
                                    Roll attributes.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li>Random 252/252/4 spread for EVs.</li>
                                        <li>3 random and 3 maxed IVs.</li>
                                        <li>Random nature.</li>
                                        <li>Random gender from possible ones.</li>
                                    </ul>
                                </li>
                            </ul>                    
                        </div>                                                            
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-start items-center gap-4 text-center">                    
                            <p className="text-lg">Moveset Options</p>
                            <p className="text-base text-gray-400">Process for generating moveset options.</p>
                        </div>            
                        <div className="flex flex-col justify-start items-start gap-4 p-4 w-full border-t-2 border-gray-200">
                            The steps to generate each move option in a moveset are the following:
                            <ul className="pl-4 space-y-2">
                                <li>
                                    Get a random move.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li><a href="https://bulbapedia.bulbagarden.net/wiki/List_of_moves" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500">
                                            Moves #001-826.
                                        </a></li>                                                         
                                    </ul>
                                </li>
                                <li>
                                    Check filters and reroll if filtered out.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li>Special type of moves.</li>                        
                                        <li>Unusable in format.</li>
                                        <li>No effect moves.</li>                                
                                    </ul>
                                </li>
                                <li>
                                    Check for "status limit" and reroll if needed.
                                    <ul className="pl-4 text-gray-600 text-sm">                                
                                        <li>Maximum of 3 status moves included in options.</li>
                                    </ul>
                                </li>
                                <li>
                                    Check for usability and reroll if needed.
                                    <ul className="pl-4 text-gray-600 text-sm">                                
                                        <li>Space for combo moves.</li>
                                        <li>Moves only usable by specific pokémon.</li>
                                        <li>Held item requirements.</li>
                                    </ul>
                                </li>
                            </ul>                  
                        </div>                                                            
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-start items-center gap-4 text-center">                    
                            <p className="text-lg">Ability Options</p>
                            <p className="text-base text-gray-400">Process for generating ability options.</p>
                        </div>            
                        <div className="flex flex-col justify-start items-start gap-4 p-4 w-full border-t-2 border-gray-200">
                            The steps to generate each ability option are the following:
                            <ul className="pl-4 space-y-2">
                                <li>
                                    Get a random ability.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li><a href="https://bulbapedia.bulbagarden.net/wiki/Ability#List_of_Abilities" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500">
                                            Abilities #001-267.
                                        </a></li>                                                         
                                    </ul>
                                </li>
                                <li>
                                    Check filters and reroll if filtered out.
                                    <ul className="pl-4 text-gray-600 text-sm">                      
                                        <li>Unusable in format.</li>                                
                                        <li>Filtered out pokémon specific.</li>                                
                                    </ul>
                                </li>
                                <li>
                                    Check for usability and reroll if needed.
                                    <ul className="pl-4 text-gray-600 text-sm">                                
                                        <li>Pokémon or pokémon form specific.</li>
                                        <li>Move mechanic or type specific.</li>
                                        <li>Held item requirements.</li>
                                    </ul>
                                </li>
                            </ul>                    
                        </div>                                                            
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-start items-center gap-4 text-center">                    
                            <p className="text-lg">Item Options</p>
                            <p className="text-base text-gray-400">Process for generating item options.</p>
                        </div>            
                        <div className="flex flex-col justify-start items-start gap-4 p-4 w-full border-t-2 border-gray-200">
                            The steps to generate each item option are the following:
                            <ul className="pl-4 space-y-2">
                                <li>
                                    Get a random item.
                                    <ul className="pl-4 text-gray-600 text-sm">
                                        <li><a href="https://bulbapedia.bulbagarden.net/wiki/Category:In-battle_effect_items" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500">
                                            In-battle effect items
                                        </a></li>
                                    </ul>
                                </li>
                                <li>
                                    Check filters and reroll if filtered out.
                                    <ul className="pl-4 text-gray-600 text-sm">                      
                                        <li>Unusable in format.</li>                                
                                        <li>Evolution related or filtered out pokémon specific.</li>                                
                                    </ul>
                                </li>
                                <li>
                                    Check for usability and reroll if needed.
                                    <ul className="pl-4 text-gray-600 text-sm">                                
                                        <li>Pokémon or pokémon form specific.</li>
                                        <li>Move mechanic or type specific.</li>
                                        <li>Ability mechanic specific.</li>
                                    </ul>
                                </li>
                            </ul>                    
                        </div>                                                            
                    </div>
                </div>                                                            
            </div>
            
        </div>
    )
}