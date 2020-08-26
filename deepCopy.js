function deepCopy(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig));
    copyOwnPropertiesFrom(copy, orig);
    return copy;
}


function copyOwnPropertiesFrom(target, source) {
    Object
        .getOwnPropertyNames(source)
        .forEach(function(propKey) {
            var desc = Object.getOwnPropertyDescriptor(source, propKey);
            Object.defineProperty(target, propKey, desc);
        });
    return target;
}

module.exports = deepCopy;