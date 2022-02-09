function sameAmount(str, re, r2) {
    re = (re === '.') ? ('\\' + re) : re;
    var cre = new RegExp(re, 'g');
    let result = ((str || '').match(cre) || []).length;

    r2 = (r2 === '.') ? ('\\' + r2) : r2;
    var cre2 = new RegExp(r2, 'g');
    let result2 = ((str || '').match(cre2) || []).length;

    if (result == null) {
        return false
    }
    if (result2 == null) {
        return false
    }
    if (result == result2) {
        return true
    } else {
        return false
    }
}

// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
//  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

// console.log(sameAmount(data, /h/, /w/))
// console.log(sameAmount(data, /qqqq /, /qqqqqqq/));
// console.log(sameAmount(data, /q /, /qqqqqqq/));
// console.log(sameAmount(data, /fs[^q]/, /q /));
// console.log(sameAmount(data, /^[qs]/, /^[gq]/));
// console.log(sameAmount(data, /j/, /w/));
// console.log(sameAmount(data, /j/, / /));
// console.log(sameAmount(data, /fs./, /jn./));