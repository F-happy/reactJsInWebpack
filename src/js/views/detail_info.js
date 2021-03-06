/**
 * Created by fuhuixiang on 16-6-6.
 */
'use strict';
import React from 'react';
import apiUtils from '../utils/api_utils';
import DBheader from '../components/header';

export default class DetailInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgArray: []
        };
    }

    componentDidMount() {
        let gid = this.props.params.id;
        if (!!gid) {
            apiUtils.get('goods/detail', {gid: gid}, (data)=> {
                if (data.c == 0) {
                    let detail = data.d.detail.split(',');
                    let imgArray = [];
                    detail.forEach((v)=> {
                        imgArray.push(v);
                    });
                    this.setState({
                        imgArray: imgArray
                    });
                }
            });
        }
    }

    handleReload() {
        window.location.reload();
    }

    render() {
        let images = [];
        let errorPage = <div className="error">
            <h1>网络不给力</h1>
            <p>点击刷新或进行网络设置</p>
            <button onClick={this.handleReload.bind(this)}>刷新</button>
        </div>;
        this.state.imgArray.forEach((v, index)=> {
            images.push(<img src={v} key={index}/>);
        });
        let imagePage = images.length > 0 ? images : errorPage;
        return (
            <div className="detail-view">
                <DBheader title="图文详情" left={'goBack'}/>
                {imagePage}
            </div>
        );
    }
}
