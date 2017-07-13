$(function() {
    function IsPC() {
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        let flag = true;
        for (let i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    let now = 1;
    let changeImg = function(flag) {
        let str = flag == "next" ? '-' : '';
        let className = 'rotate' + str + 'Y' + now;
        $('.container').removeAttr('style').css('animation', className + ' 1s ease-in-out forwards');
        now = (now + 1) > 9 ? 1 : (now + 1);
    }
    let timer = setInterval(function() {
        changeImg('next');
    }, 2000);
    if (IsPC()) { //电脑访问
        $('.prev').click(function() {
            clearInterval(timer);
            changeImg('prev');
        });
        $('.next').click(function() {
            clearInterval(timer);
            changeImg('next');
        });
    } else {
        $('.prev').tap(function() {
            clearInterval(timer);
            changeImg('prev');
        });
        $('.next').tap(function() {
            clearInterval(timer);
            changeImg('next');
        });
    }
})