// This function will set the "grim.exempt" permission to "false" for the player with the specified name
function setGrimExempt(playerName) {
    // Use the PlaceholderAPI placeholder to execute the command "/lp user <playerName> perm set grim.exempt false"
    var command = '/lp user ' + playerName + ' perm set grim.exempt false';
    console.log('Executing command: ' + command);
    eval(command);
  }
  
  // Get the value of the "rep_player_reputation" placeholder using PlaceholderAPI
  var reputationValue = parseInt(papi.get('rep_player_reputation', 'player'));
  
  // Check if the "rep_player_reputation" value is less than -1
  if (reputationValue < -1) {
    // If the "rep_player_reputation" value is less than -1, set the "grim.exempt" permission to "false" for the player
    setGrimExempt('player');
  }
  