const CheckDateInMonth = require("./CheckDateInMonth");

const CheckDate = (date, month, year) => {
    if (month >= 1 && month <= 12) {
        if (date >= 1) {
            if (date <= CheckDateInMonth(year, month)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
module.exports = CheckDate;