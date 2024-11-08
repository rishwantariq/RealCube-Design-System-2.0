import React from 'react'
function useDate() {
    var _a = React.useState(new Date()),
        date = _a[0],
        setDate = _a[1]
    return {
        date: date,
        setDate: setDate,
    }
}
export default useDate
