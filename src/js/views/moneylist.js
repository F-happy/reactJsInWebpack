/**
 * Created by fuhuixiang on 16-8-8.
 */
'use strict';

import React from 'react';
import DBheader from '../components/header';
import API from '../utils/API';

export default class MoneyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            start: 0,
            items: ['夺宝币记录', '返还记录'],
            rechargeList: [],
            restoreList: []
        }
    }

    componentDidMount() {
        document.querySelector('html').style.background = '#eee';
        this.loadRechargeList();
    }

    handleSwitch(index) {
        console.log(index);
        this.setState({active: index});
        if (index == 1) {
            this.loadRestoreList();
        } else {
            this.loadRechargeList();
        }
    }

    loadRestoreList() {
    }

    loadRechargeList() {
        let _start = this.state.start;
        API.get('users/records/list', {start: _start, limit: 10}, (data)=> {
            let reList = this.state.rechargeList;
            data.forEach((v)=> {
                let _status = (v.status == 3) ? 'success' : 'not';
                reList.push(
                    <div className="list" key={v.id}>
                        <div className="list-left-box">
                            <div className="list-title">{v.pay_type_name}<span
                                className={_status}>{(_status == 'success') ? '充值成功' : '未付款'}</span></div>
                            <div className="time">{v.create_time}</div>
                        </div>
                        <div className="list-right-box">¥{v.price}</div>
                    </div>
                );
            });
            if (data.length != 0) {
                _start = data[data.length - 1].id;
            }
            this.setState({rechargeList: reList, start: _start});
        });
    }

    render() {
        let _viewList = [],
            noneView  = <section className="none-box">
                <div className="none-icon">&#xe625;</div>
                <h3 className="none-title">没有记录</h3>
            </section>;
        if (this.state.active == 0) {
            _viewList = (this.state.rechargeList.length > 0) ? this.state.rechargeList : noneView;
        } else {
            _viewList = (this.state.restoreList.length > 0) ? this.state.restoreList : noneView;
        }
        return (
            <article className="money-list-view">
                <DBheader title="我的夺宝币" left={'goBack'}/>
                <section className="list-header">
                    <div className="list-title"><span className="title-num">100</span>夺宝币</div>
                    <div>当前账户余额</div>
                </section>
                <ul className="money-list-controller">
                    {
                        this.state.items.map((v, index)=> {
                            return <li className={`money-list-result${(this.state.active == index) ? ' active' : ''}`}
                                       key={index}
                                       onClick={this.handleSwitch.bind(this, index)}>{v}</li>
                        })
                    }
                </ul>
                <section className="view-lists">
                    {_viewList}
                </section>
            </article>
        )
    }
}
