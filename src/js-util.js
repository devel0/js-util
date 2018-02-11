/**
    * build date (moment) in utc from given local date.
    * use .format() to create string representation YYYY-MM-DDThh:mm:ssZ
    */
function utc_date_from_local(year, month, day) {
    return moment(year + '-' + month + '-' + day, "YYYY-MM-DD").utc();
}
