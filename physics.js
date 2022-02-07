function getAcceleration(obj) {

    a = obj.f / obj.m

    if (isNaN(a)) {

        a = obj.Δv / obj.Δt

        if (isNaN(a)) {

            a = (obj.d * 2) / (obj.t * obj.t)

            if (isNaN(a)) {

                return "impossible"
            }
            return a
        }
        return a
    }

    return a

}
const obj = {
    d: 10, t: 2, Δv: 100
}
