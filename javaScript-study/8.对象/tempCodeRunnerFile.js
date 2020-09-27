Date(d){
    if(!(d instanceof Date)){
        console.error('不是日期格式');
        return ;
    }

    var year = d.getFullYear(),
        month = d.getMonth() + 1,
        date = d.getDate(),
        hour = d.getHours(),
        minute = d.getMinutes(),
        second = d.getSeconds();

        month = month < 10 ? '0' + month : month;
        date = date < 10 ? '0' + date : date ;
        hour = hour < 10 ? '0' + hour :hour ;
        minute = minute < 10 ? '0' + minute :minute;
        second = second < 10 ? '0' + second : second;

        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second         
        
}