var N_Filter = function (text) {
    if (text) {
        console.log(text);
        var pattern = "\\\\n";
        var target = "\n";
        var reg = getRegExp(pattern, "g");
        return text.replace(reg, target);
    }
}