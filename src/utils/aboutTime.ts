// X轴坐标点
import moment from 'moment'
export var directionAxis = function northDirectionAxis(h:number, m:number, startTime: string, overTime:string) {
    var now = new Date();
    var year = now.getFullYear(); // 年
    var month = now.getMonth() + 1; // 月
    var day = now.getDate(); // 日
    var beginStringTime = year + '-' + month + '-' + day + ' ' + startTime;
    var endStringTime = year + '-' + month + '-' + day + ' ' + overTime;
    var beginTime = moment(beginStringTime).unix();
    var endTime = moment(endStringTime).unix();
    var subTime = (Number(endTime) - Number(beginTime))/60; // 共多少分钟
    var hour = h;
    var minutes = Number(m);

    var timeAxisArr = [];

    for (var i = 0; i < subTime + 1; i++) {
        var hourAxisString = '';
        var minutsAxisString = '';
        var hourminutsAxisString = '';
        
        if (hour < 10) {
            hourAxisString = '0' +  hour;
        }else{
            hourAxisString = '' +  hour;
        }
        if (minutes === 0) {
            minutsAxisString = ':00';
        }else if (minutes > 0 && minutes < 10) {
            minutsAxisString = ':0' + minutes;
        }else{
            minutsAxisString = ':' + minutes;
        }
        minutes++
        if (minutes == 60) {
            minutes = 0;
            hour++
        }
        hourminutsAxisString = hourAxisString + minutsAxisString
        timeAxisArr.push(hourminutsAxisString)
    }
    return timeAxisArr
}