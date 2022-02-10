const firstDayWeek = (week, year) => {
    let d = new Date(year + '-01-01')
    if (week != 1)
        d.setDate((week - 1) * 7 - d.getDate() + 2)
    return d.toISOString().slice(0, 10).split('-').reverse().join('-')
}