function displayLikes(likees) {
    switch (true) {
        case likees.length == 0:
            return "no one likes this"
            break;
        case likees.length == 1:
            return `${likees[0]} likes this`
        case likees.length == 2:
            return `${likees[0]} and ${likees[1]} like this`
        case likees.length == 3:
            return `${likees[0]}, ${likees[1]} and ${likees[2]} like this`
        case likees.length > 3:
            return `${likees[0]}, ${likees[1]} and ${likees.length - 2} others like this`
        default:
            break;
    }

}

module.exports = displayLikes;
