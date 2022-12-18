var placeholder = "%voicechat_prefix_uses_voicechat%";
var voice = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, placeholder);

var checkVoice = function (voice) {
  return voice === "§a" ? "voiceuse" : "voicenotuse";
};

checkVoice(voice);