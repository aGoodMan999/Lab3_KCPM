const CheckDateInMonth = (year, month) => {
    const case31 = [1, 3, 5, 7, 8, 10, 12];
    if (case31.includes(month)) {
        return 31;
    } else {
        const case30 = [4, 6, 9, 11];
        if (case30.includes(month)) {
            return 30;
        }
        else if (month === 2) {
            if (year % 400 == 0) {
                return 29;
            }
            if (year % 100 == 0) {
                return 28;
            }
            if (year % 4 == 0) {
                return 29;
            } else {
                return 28;
            }
        } else {
            return 0;
        }

    }
}

module.exports = CheckDateInMonth;