"use strict";

module.exports = app => {
    /**
     * Extract Service
     */
    class Extract extends app.Service {
        constructor(ctx) {
            super(ctx);
        }


        //萃取内容

        * extractContent(content, config) {
            if (!config.selector) {
                return "config error";
            }
            let data = {};
            switch (config.selector) {
                case "CSS":
                    let $ = yield cheerio.load(content);
                    config.fields.forEach(function (item, index) {
                        if (item.value) {
                            data[item.name] = item.value;
                        } else {
                            let node = $(item.selector);
                            if (node) {
                                if (config.afterExtractField && typeof config.afterExtractField === "function") {
                                    data[item.name] = config.afterExtractField(item.name, node.text());
                                } else {
                                    data[item.name] = node.text();
                                }
                            } else {
                                Log.info("node not exits")
                            }

                            if (item.default && isNaN(data[item.name])) {
                                data[item.name] = item.default;
                            } else if (item.require && isNaN(data[item.name])) {
                                reject("field: " + item.name + " require");
                            }
                        }
                    });

                    break;
                case "JSON":
                    break;
                case "XPath":
                    break;
                default :
                    let doc = new dom().parseFromString(res.text)
                    config.fields.forEach(function (item, index) {
                        Log.info(item);
                        var node = xpath.select(item.selector, doc);
                        if (config.afterExtractField && typeof config.afterExtractField == "function") {
                            data[item.name] = config.afterExtractField(node.text);
                        } else {
                            data[item.name] = node.text;
                        }
                    });

            }
            let hasProp = false;
            for (let prop in data) {
                hasProp = true;
                break;
            }
            if (hasProp) {
                data["source_name"] = config.site ? config.site : "";
            }
        }

        //萃取内容图片

        * extractImageUrls(content, config){


            let urls = [];
            switch (config.selector){
                case "CSS":
                    let $ = yield cheerio.load(content);
                    if(config.imageUrlSelector){
                        let node = $(imageUrlSelector);
                        if (node) {
                            node.each(function (idx, element) {
                                let $element = $(element);
                                urls.push($element.attr("src"));
                            });
                        } else {
                            Log.info("image not find")
                        }
                    }

                    break;
                case "JSON":
                    break;
                case "XPath":
                    break;
                default :
                    let doc = new dom().parseFromString(res.text)
                    config.fields.forEach(function(item,index){
                        Log.info(item);
                        let node = xpath.select(item.selector, doc);
                        if(config.afterExtractField && typeof config.afterExtractField =="function"){
                            data[item.name] = config.afterExtractField(node.text);
                        }else{
                            data[item.name] = node.text;
                        }
                    });

            }

        }

        * extract(data) {

            Promise.all([extractService.extractContent(job.data.html, job.data.config), extractService.extractImageUrls(job.data.html, job.data.config)])
                .then(function (result) {
                    let extractContentData = result[0];
                    let extractImageUrls = result[1];
                    if (extractContentData) {
                        crawlerModel.saveContent(job.data.url, extractContentData);
                    }
                    if (extractImageUrls) {
                        for (i = 0; i < extractImageUrls.length; i++) {
                            var data = {"url": urls[i], "type": "html"}
                            var job = queue.create("crawl_download", data).save(function (err) {
                                if (!err) {
                                    Log.info("add queue queue success:" + job.id);
                                } else {
                                    Log.error("add job queue err");
                                    Log.error(err);
                                }
                            });
                        }
                    }
                });

        }

        /**
         * get user info
         * @param {Number} id - userId
         * @return {Promise} user info
         */
        * getUser(id) {
            return yield this.request(`user/${id}.json`);
        }
    }

    return Extract;
};
