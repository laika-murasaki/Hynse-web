//PixelText Letter Replacements
//Version 1.0
//By VisherRyz

function pixeltext() {
    var text = args[0].toLowerCase();
    text = text.replaceAll("1", "¹").replaceAll("2", "²").replaceAll("3", "³").replaceAll("4", "⁴").replaceAll("5", "⁵").replaceAll("6", "⁶").replaceAll("7", "⁷").replaceAll("8", "⁸").replaceAll("9", "⁹").replaceAll("0", "⁰");
    return text;
}
pixeltext();