app.filter("priceFilter", function () {
    return function (source) {
        var lastChar = source.slice(-1);
        var firstChar = source.slice(0, 1);
        var anotherContent;

        if (firstChar === "р") {
            anotherContent = source.slice(1, source.length);
            return anotherContent + "р";
        } else if (lastChar === "р") {
            return source;
        } else {
            return source + "р";
        }
    }
});