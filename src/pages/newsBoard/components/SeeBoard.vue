<template>
  <div class="seeBoard">
    <BoardTab />
    <div class="borardContent">
        <div class="boardLeft">
            <div class="windHeader">
                <div class="windIndicator">
                    <div class="mainWind">市场风向标</div>
                    <div class="windExplain">指标说明</div>
                </div>
                <div class="northSouth">
                    <div class="money active">北向资金</div>
                    <div class="money">南向资金</div>
                </div>
            </div>
            <div class="dialWrapper">
                <div class="bigDial">
                    <img :src="require('../../../assets/img/red' + changeImg + '.png')" width="100%"  alt="" />
                </div>
                <div class="specificValues">

                </div>
                <div class="runWin">跑赢<span>63.5%</span>历史净流入</div>
            </div>
            <div class="foldWrapper">
                <div class="foldShadow"></div>
                <div id="chartLineBox" class="chartLineBox"></div>
            </div>
            <div class="changeDirection">
                <div class="changeHeader">
                    <div class="northChange">北上异动</div>
                    <div class="changeTime">更新：2020-08-09</div>
                </div>
                <div class="tableHeader">
                    <div class="listAboutName">榜单名称</div>
                    <div class="listSerialNumber">序号</div>
                    <div class="listOfName">名称</div>
                    <div class="holdPercentage">北上持股占比</div>
                    <div class="holdNumber">北上持股数量</div>
                    <div class="holdValue">北上持股市值</div>
                    <div class="changeMoneyMonth">
                        <div class="aboutMoneyList">变动金额</div>
                        <div class="aboutDays">
                            <div class="oneDay">1日</div>
                            <div class="threeDay">3日</div>
                            <div class="fiveDay">5日</div>
                            <div class="tenDay">10日</div>
                            <div class="twentyDay">20日</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="boardRight">
            <div class="boardRightHeader">董秘爆料</div>
            <WordCloud />
            <div class="questionWrapper">
                <div class="questionUnit">
                    <div class="unitHead">
                        <p>000231.SZ</p>
                        <span>易事特</span>
                    </div>
                    <div class="ask">
                        <div class="askIcon">
                            <img :src="require('../../../assets/img/askIcon.png')" width="100%" height="100%"  alt="" />
                        </div>
                        <div class="askText">请问贵公司生产的充电桩采用交流电还是直流电</div>
                    </div>
                    <div class="answer">
                        <div class="answerIcon">
                            <img :src="require('../../../assets/img/answerIcon.png')" width="100%" height="100%"  alt="" />
                        </div>
                        <div class="answerText">尊敬的投资者，您好！公司充电设备产品齐全，拥有从480kw功率桩、智能交流充电桩等。谢谢！</div>
                    </div>
                </div>
                <div class="questionUnit">
                    <div class="unitHead">
                        <p>000231.SZ</p>
                        <span>易事特</span>
                    </div>
                    <div class="ask">
                        <div class="askIcon">
                            <img :src="require('../../../assets/img/askIcon.png')" width="100%" height="100%"  alt="" />
                        </div>
                        <div class="askText">请问贵公司生产的充电桩采用交流电还是直流电</div>
                    </div>
                    <div class="answer">
                        <div class="answerIcon">
                            <img :src="require('../../../assets/img/answerIcon.png')" width="100%" height="100%"  alt="" />
                        </div>
                        <div class="answerText">尊敬的投资者，您好！公司充电设备产品齐全，拥有从480kw功率桩、智能交流充电桩等。谢谢！尊敬的投资者，您好！公司充电设备产品齐全，拥有从480kw功率桩、智能交流充电桩等。谢谢！</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import BoardTab from '../../../components/BoardTab'
import WordCloud from '../../../components/WordCloud'
import server from '../../../server'
import { directionAxis } from '../../../utils/aboutTime.ts'
export default {
    name: 'SeeBoard',
    props: {
        msg: String
    },
    components: {
        BoardTab,
        WordCloud
    },
    data() {
        return {
            changeImg: 97,  // 不断改变的图片位置， 默认是上1分钟对应图片的位置
            goImg: 10,       // 下一分钟要去的位置
            nouthdirectionAxis: [], // 北向坐标轴
            southdirectionAxis: [], // 南向坐标轴
        }
    },
    mounted() {
        server.newsBoard.getline().then(res => {
            console.log('这里额res是==', res)
        })
        // 显示第几张图
        // setInterval(() => this.goImg++, 500)
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            if (this.goImg > this.changeImg) {
                this.changeImg++
            }
            if (this.goImg < this.changeImg) {
                this.changeImg--
            }
            if (this.changeImg === this.goImg) {
                clearInterval(this.timer)
            }
        }, 10)

        /////////////////////////////echarts相关////////////////////////
        this.chartLine = echarts.init(document.getElementById('chartLineBox'));
 
        // 指定图表的配置项和数据
        var option = {
            tooltip: { // 鼠标经过某点时的弹窗提示
                trigger: 'axis',
                // formatter: function (params) {
                //     console.log('这里的params是个什么呢', params)
                //     var res = params.name+'<br/>';
                //     var res='<div><p>指标：'+params[0].seriesName +'</p></div>' ;
                //     res+='<p>'+'剂量'+':'+params[1].data+'</p>';
                //     return res;
                // }
            },
            
            // legend: {               //设置区分（哪条线属于什么）
            //     data:['平均成绩','学生成绩']
            // },
            color: ['#8AE09F', '#FA6F53'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
            grid: {
                left: '0',
                top: '10',
                right: '16',
                bottom: '1%',
                containLabel: true
            },
            xAxis: { // 设置x轴
                type: 'category',
                boundaryGap: false, // 坐标轴两边不留白
                data: ['09:00', '11:00', '12:00', '13:00', '14:00', '16:00', '16:10',],
                // name: 'DATE',           // X轴的名字
                nameTextStyle: {        //坐标轴名称的文字样式
                    color: '#FA6F53',
                    fontSize: 16,
                    padding: [0, 0, 0, 0]
                },
                axisLine: {             //坐标轴轴线相关设置。
                    lineStyle: {
                        color: 'blue', // X坐标轴及轴间距点汉字描述的颜色
                    }
                }
            },
            yAxis: {
                // name: 'SALES VOLUME', // 不显示Y轴的名字
                nameTextStyle: {
                    color: '#FA6F53',
                    fontSize: 16,
                    padding: [0, 0, 0, 0]
                },
                axisLine: {
                    lineStyle: {
                        color: '#FA6F53',
                    }
                },
                type: 'value'
            },
            series: [
              {
                name: '平均成绩',
                data:  [220, 232, 201, 234, 290, 230, 220],
                type: 'line',               // 类型为折线图
                lineStyle: {                // 线条样式 => 必须使用normal属性
                    normal: {
                        color: '#8AE09F',
                    }
                },
              },
              {
                name: '学生成绩',
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
                lineStyle: {
                    normal: {
                        color: '#FA6F53',
                    }
                },
              }
          ]
        };
 
        // 使用刚指定的配置项和数据显示图表。
        this.chartLine.setOption(option);
        /////////////////////////////echarts相关////////////////////////
        this.computedTimeAxis();
    },
    methods: {
        computedTimeAxis() {
            // 计算折线图X轴的点位
            this.nouthdirectionAxis = directionAxis(9, 30, '09:30', '15:00')
            this.southdirectionAxis = directionAxis(9, 0, '09:00', '16:10')
        }
    }
}
</script>

<style scoped>
.seeBoard {
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
}
.borardContent {
    flex: 1;
    -webkit-flex: 1;
    margin-bottom: 0.2rem;
    display: flex;
    display: -webkit-flex;
}
.boardLeft {
    flex: 2.214;
    -webkit-flex: 2.214;
    margin: 0 0.2rem;
    background: #1B1D21;
    overflow-y: auto;
}
.windHeader {
    background-color: #2F333B;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: center;
    height: 3rem;
}
.windIndicator {
    display: flex;
    display: -webkit-flex;
}
.windIndicator .mainWind {
    margin-left: 1.2rem;
    margin-right: 0.5rem;
    font-size: 1.3rem;
    color: #D8DFEB;
}
.windIndicator .windExplain {
    font-size: 1.2rem;
    color: #7F8CA0;
}
.northSouth {
    display: flex;
    display: -webkit-flex;
}
.northSouth .money{
    height: 3rem;
    width: 7rem;
    text-align: center;
    line-height: 3rem;
    font-size: 1.2rem;
    color: #A1B0BF;
    cursor: pointer;
}
.northSouth .active{
    background: #626773;
    color: #D8DFEB;
}
.boardRight {
    flex: 1;
    -webkit-flex: 1;
    background: #1B1D21;
    overflow-y: auto;
}
.dialWrapper {
    position: relative;
}
.dialWrapper .bigDial{
    width: 80.90%;
    margin: 0 auto;
}
.runWin {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 0;
    width: 27.4rem;
    height: 3.8rem;
    line-height: 3.8rem;
    border-radius: 1.9rem;
    background: #2F333B;
    opacity: 0.53;
    text-align: center;
    color: #C5CAD4;
    margin-left: -13.7rem;
    font-size: 2.4rem;
}
.runWin span {
    color: #DA3030;
}
.boardRightHeader {
    padding-left: 1.2rem;
    background: #2F333B;
    font-size: 1.3rem;
    color: #D8DFEB;
    height: 3rem;
    line-height: 3rem;
}
.questionWrapper {
    border-top: 2px solid #2F333B;
    padding: 1rem;
}
.questionUnit {
    margin-bottom: 2rem;
}
.unitHead {
    display: flex;
    display: -webkit-flex;
    font-size: 1.2rem;
    color: #A1B0BF;
    margin-bottom: 1rem;
}
.unitHead p{
    margin-right: 2rem;
}
.ask {
    display: flex;
    display: -webkit-flex;
    margin-bottom: 0.5rem;
}
.askIcon {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.7rem;
}
.askText {
    flex: 1;
    -webkit-flex: 1;
    font-size: 1.4rem;
    color: #D8DFEB;
    line-height: 1.8rem;
}
.answer {
    display: flex;
    display: -webkit-flex;
}
.answerIcon {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.7rem;
}
.answerText {
    flex: 1;
    -webkit-flex: 1;
    font-size: 1.2rem;
    color: #A1B0BF;
    line-height: 1.8rem;
}

.foldWrapper {

}
.foldWrapper .chartLineBox {
    width: 90%;
    margin-left: 5%;
    height: 70rem;
    box-shadow:0 0 15px #f00 inset;
}

.changeDirection .changeHeader{
    height: 3rem;
    overflow: hidden;
    line-height: 3rem;
}
.changeDirection .northChange {
    float: left;
    color: #D8DFEB;
}
.changeDirection .changeTime {
    float: right;
    color: #D8DFEB;
}
.changeDirection .tableHeader {
    overflow: hidden;
}
.changeDirection .listAboutName {
    float: left;
}
.changeDirection .listSerialNumber {
    float: left;
}
.changeDirection .listOfName {
    float: left;
}
.changeDirection .holdPercentage {
    float: left;
}
.changeDirection .holdNumber {
    float: left;
}
.changeDirection .holdValue {
    float: left;
}
.changeDirection .changeMoneyMonth {
    float: left;
}
</style>
