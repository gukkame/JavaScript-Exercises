function get(src, path) {
    path = path.split('.')
    for (let i = 0; i < path.length; i++) {
        src = src[path[i]]
        if (typeof (src) === 'undefined') {
            return src
        }
    }
    return src
}