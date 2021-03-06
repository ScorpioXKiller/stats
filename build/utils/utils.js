"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString.split('/').map((item) => {
        return parseInt(item);
    }); // ["28", "10", "2018"]
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0] + 1);
};
exports.dateStringToDate = dateStringToDate;
