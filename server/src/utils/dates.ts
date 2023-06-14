

export default function isTwoPeriodsOfTimeTheSame(existingOrderDates, unitDesiredDates) {
    if (unitDesiredDates[0] <= existingOrderDates[1] && unitDesiredDates[0] >= unitDesiredDates[0]) {
        throw new Error()
    } else if (unitDesiredDates[1] <= existingOrderDates[1] && unitDesiredDates[1] >= unitDesiredDates[0]) {
        throw new Error()
    }
}