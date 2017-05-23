import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./style/index.less";

export default class HeatMap extends Component {
  numberSort(keys){// 排序 比较函数
    return keys.sort( (x, y) => {//比较函数
        if (x < y) return -1;
        else if (x > y) return 1;
        else return 0;
    })
  }
  isExistColor(num){ // 返回不同深浅的颜色
    const { panelColors } = this.props;
    let color = '',keys = [], nums = Object.keys(panelColors);
    // 转换成数字
    for(let a=0;a< nums.length;a++){
      keys.push(parseInt(nums[a]))
    }
    // 排序
    keys = this.numberSort(keys);
    // 判断使用什么颜色
    for(let a =0;a < keys.length;a++){
      if(keys[a]>num) break;
      color = panelColors[keys[a]];
    }
    return color;
  }

  isCurrentData(date){ // 判断传进来的数据，并返回颜色
    const { values, panelColors } = this.props;
    let curdt = {},color = '';
    for (var i = 0; i < values.length; i++) {
      let curdate = new Date(values[i]['date']);
      curdate = `${curdate.getFullYear()}-${curdate.getMonth()+1}-${curdate.getDate()}`;
      if(curdate==date){
        curdt = values[i];
        break;
      }
    }
    if(curdt.count&&curdt.count>0){
      curdt.color = this.isExistColor(curdt.count);
    }else{
      curdt.color = panelColors[0] || '#EBEDF0';
    }
    return curdt
  }
  render() {
    const { prefixCls, days, weekLables, monthLables, endDate, className} = this.props;
    const cls = classNames(prefixCls,{
      [className]: className
    });

    let width=14, height=14, dayDate=[], oneday=86400000;
    let timestamp = endDate.getTime();
    for (var i = 0; i < days; i++) {
      dayDate.push(timestamp - (oneday*i));
    }
    dayDate=this.numberSort(dayDate);
    // 日历
    var rectdays = [], rectweeks=[], rectMonth=[],col=16;
    for (var i = 0; i < days; i++) {
      let xl = parseInt(i/7) * col;
      let yl = 17 + parseInt(i%7) * col;
      let curdate = new Date(dayDate[i]);
      let curdatestr = `${curdate.getFullYear()}-${curdate.getMonth()+1}-${curdate.getDate()}`;
      let curdt = this.isCurrentData(curdatestr);
      // 日方块
      rectdays.push(<rect 
        data-date={curdatestr}
        key={i} fill={curdt.color} 
        x={col + xl} 
        y={yl}
        onClick={()=>{
          console.log(curdatestr,curdt)
        }} 
        width={width} height={height}></rect>);
      // 周标题
      if(Object.keys(weekLables).indexOf(i.toString()) > -1 && i < 7){
        rectweeks.push(<text key={i} x={xl+7} y={yl} width={width+10} height={height}>{weekLables[i]}</text>);
      }
      // 月标题
      if(parseInt(curdate.getDate())==1){
        rectMonth.push(<text key={i} x={xl}> {monthLables[parseInt(curdate.getMonth())]} </text>)
      }
    }

    return (
      <svg className={ cls } width="900px" height="135px">
        <g className={ `${prefixCls}-week` } transform="translate(0, 10)">
          {rectweeks}
        </g>
        {rectdays}
        <g className={ `${prefixCls}-month` } transform={`translate(${col}, 10)`}>
          {rectMonth}
        </g>
      </svg>
    );
  }
}

HeatMap.propTypes = {
  weekLables:PropTypes.object,
  monthLables:PropTypes.array,
  values:PropTypes.array,
  days:PropTypes.number,
  endDate:PropTypes.object,
  panelColors:PropTypes.object,
}

HeatMap.defaultProps = {
  prefixCls: "w-heatmap",
  values:[],
  days:365,
  endDate:new Date(),
  // 默认选填选项  周标签显示
  weekLables: {1:'M', 3:'W', 5:'F'},
  // 默认选填选项  月份标签显示
  monthLables:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  // 颜色标记显示
  panelColors:{
    0:"#EBEDF0",
    4:"#C6E48B",
    8:"#7BC96F",
    12:"#239A3B",
    32:"#196127",
  }
}
