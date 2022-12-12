var placeholder = "%rep_player_reputation%";
var rep = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, placeholder);

function pixeltext() {
  var text = rep;
  text = text.replaceAll("1", "¹").replaceAll("2", "²").replaceAll("3", "³").replaceAll("4", "⁴").replaceAll("5", "⁵").replaceAll("6", "⁶").replaceAll("7", "⁷").replaceAll("8", "⁸").replaceAll("9", "⁹").replaceAll("0", "⁰");
  return text;
}
pixeltext();