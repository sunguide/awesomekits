'use strict';

module.exports = app => {
    class ApiController extends app.Controller {
        index() {
            // this.ctx.body = "fuck ";
            const data = {name: 'egg'};
            this.ctx.body = data;
        }

        * idCard() {
            const ctx = this.ctx;
            const address = yield ctx.service.idCard.getFull(ctx.query.idCard);
            ctx.body = {address: address};
        }
        ip(){
            let libqqwry = require('lib-qqwry');
            let qqwry = libqqwry.init('../../../data/ip/qqwry.dat');

            let ip = this.ctx.query.ip;
            //qqwry.speed(); //启用急速模式 比不开启效率率快非常多 但多占10M左右内存;
            let ipInfo = qqwry.searchIP(ip); //查询IP信息
            let ips = qqwry.searchIPScope('0.0.0.0','1.0.0.0');  //查询IP段信息
            this.ctx.body = {
                ipinfo:ipInfo,
                ips:ips
            };
            //异步查询IP段信息
            //qqwry.searchIPScope("0.0.0.0","1.0.0.0",function(err,iparr){
            //    console.log(iparr);
            //});
        }
        * tinyURL(){
            const ctx = this.ctx;
            const domain = this.ctx.query.domain;
            const url = this.ctx.query.url;
            const alias = this.ctx.query.alias;
            const tinyURL = yield ctx.service.tinyURL.create(url, domain ,alias);
            ctx.body = {
                url: url,
                tinyurl:tinyURL
            };
        }


    }
    return ApiController;
};
