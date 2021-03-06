/**
 * Created by fuhuixiang on 16-8-22.
 */
import React from 'react';
import {Link, hashHistory} from 'react-router';
import apiUtils from '../utils/api_utils';
import util from '../utils/utils_box';
import DBheader from '../components/header';
import toast from '../components/toast';

export default class MessageSystem extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
    }

    render(){
        return (
            <article className="message-system-view">
                <DBheader title="系统消息" left={'goBack'}/>
                <section className="message-list">
                    <div className="message-header">
                        <div className="message-title">恭喜您!获奖啦!</div>
                        <div className="message-time">14-07-27 13:55</div>
                    </div>
                    <div className="message-body">
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="goods-img"/>
                        <div className="goods-info">
                            <div className="goods-name">您购买的<span className="console-color">"(第2期)2013款 长安奔奔长安奔奔长安奔奔长安奔"</span>已中奖!</div>
                            <div className="goods-code">中奖号码: <span className="main-color">1000021</span></div>
                        </div>
                    </div>
                    <div className="message-footer">查看详情></div>
                </section>
                <section className="message-list">
                    <div className="message-header">
                        <div className="message-title">致歉信</div>
                        <div className="message-time">14-07-27 13:55</div>
                    </div>
                    <div className="message-body message-text">
                        致歉:由于支付宝系统再次抽风,导致部分用户无法支付,我们好开心。。。。
                    </div>
                    <div className="message-footer">查看详情></div>
                </section>
                <section className="message-list">
                    <div className="message-header">
                        <div className="message-title">新增好友</div>
                        <div className="message-time">14-07-27 13:55</div>
                    </div>
                    <div className="message-body">
                        用户<span className="console-color">付会翔</span>已接受邀请成为您的好友。
                    </div>
                    <div className="message-footer">查看详情></div>
                </section>
                <section className="message-list">
                    <div className="message-header">
                        <div className="message-title">幸运豆+2000</div>
                        <div className="message-time">14-07-27 13:55</div>
                    </div>
                    <div className="message-body">
                        好友<span className="console-color">付会翔</span>累计支付达到500元。
                    </div>
                    <div className="message-footer">查看详情></div>
                </section>
                <section className="message-list">
                    <div className="message-header">
                        <div className="message-title">恭喜获得新手红包~</div>
                        <div className="message-time">14-07-27 13:55</div>
                    </div>
                    <div className="message-body red-pack-box">
                        <img src="http://dummyimage.com/200x200/4A7BF7" className="red-pack-img"/>
                        <div className="red-pack-info">
                            <div>恭喜获得新手红包,赶紧去外地红包查看详情吧~</div>
                            <div className="message-footer">查看详情></div>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}
