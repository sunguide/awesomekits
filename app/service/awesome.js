/**
 * Created by Administrator on 2017/7/3.
 */

module.exports = app => {
    /**
     * fetch local readme files
     */
    class awesome extends app.Service {
        constructor(ctx) {
            super(ctx);
            this.ctx = ctx;
        }
        /**
         * get getCategories
         * @return {Promise} category list
         */
        getCategories() {
            let data = [
                {
                    title:'NodeJS',
                    url:'/awesome-nodejs',
                    img:'https://dn-mhke0kuv.qbox.me/f16f548d25028a1fdd80.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Node 是一个 Javascript 运行环境(runtime)。',
                    introduce_en:'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. ',
                },
                {
                    title:'PHP',
                    url:'/awesome-php',
                    img:'https://dn-mhke0kuv.qbox.me/7699e23cbe687eed8c38.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'PHP是目前最流行的服务器端脚本语言。',
                    introduce_en:'PHP is a popular general-purpose scripting language that is especially suited to web development.'
                },
                {
                    title:'Python',
                    url:'/awesome-python',
                    git_readme:'https://raw.githubusercontent.com/vinta/awesome-python/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/b51a1dacf9bb7883defe.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Python 是一种面向对象、直译式电脑编程语言，也是一种功能强大的通用型语言。',
                    introduce_en:'Python is powerful and fast ; runs everywhere; is friendly & easy to learn;is Open. '
                },
                {
                    title:'Java',
                    url:'/awesome-java',
                    git_readme:'https://raw.githubusercontent.com/akullpp/awesome-java/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/f8ee3cd45f949a546263.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Java 是一种可以撰写跨平台应用软件的面向对象的程序设计语言。',
                    introduce_en:'Java can be run on a wide variety of computers because it does not execute instructions on a computer directly. '
                },
                {
                    title:'Go',
                    url:'/awesome-go',
                    git_readme:'https://raw.githubusercontent.com/avelino/awesome-go/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/1aae38ab22d12b654cfa.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Go语言是谷歌推出的一种全新的编程语言，可以在不损失应用程序性能的情况下降低代码的复杂性。',
                    introduce_en:'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.'
                },
                {
                    title:'Ruby',
                    url:'/awesome-ruby',
                    git_readme:'https://raw.githubusercontent.com/markets/awesome-ruby/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/52ffa0829ab10a3651c3.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Ruby，一种为简单快捷面向对象编程而创的脚本语言。',
                    introduce_en:'A dynamic, open source programming language with a focus on simplicity and productivity. '
                },
                {
                    title:'Lua',
                    url:'/awesome-lua',
                    git_readme:'https://raw.githubusercontent.com/LewisJEllis/awesome-lua/master/readme.md',
                    img:'https://dn-mhke0kuv.qbox.me/64c2d72886ee7d6163c6.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Lua 程序设计语言 是一个简洁、轻量、可扩展的脚本语言。',
                    introduce_en:'Lua is a powerful, efficient, lightweight, embeddable scripting language.'
                },
                {
                    title:'Swift',
                    url:'/awesome-swift',
                    git_readme:'',
                    img:'https://dn-mhke0kuv.qbox.me/eb7ab66be4c2898b5aa9.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Swift，苹果于2014年发布的新开发语言，可与Objective-C*共同运行于Mac OS和iOS平台，用于搭建基于苹果平台的应用程序。',
                    introduce_en:'Swift is a powerful and intuitive programming language for iOS, macOS, tvOS, and watchOS. '
                },
                {
                    title:'Rust',
                    url:'/awesome-rust',
                    git_readme:'https://raw.githubusercontent.com/rust-unofficial/awesome-rust/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/01787a4f2859cde4db11.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Rust 是一门强调安全、性能和并发性的系统编程语言。',
                    introduce_en:'Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.'
                },
                {
                    title:'.NET',
                    url:'/awesome-dotnet',
                    git_readme:'https://raw.githubusercontent.com/quozd/awesome-dotnet/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/65a22db3b0e04cd29ee5.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'.NET是一个微软开发的编程环境，里面可以使用C#,VB等多种编程语言。',
                    introduce_en:'Open source cross platform development for web, mobile, gaming, IoT, desktop, cloud and microservices. '
                },
                {
                    title:'C',
                    url:'/awesome-c',
                    git_readme:'https://raw.githubusercontent.com/aleksandar-todorovic/awesome-c/master/README.md',
                    img:'https://sfault-avatar.b0.upaiyun.com/225/658/2256581988-1040000000089457',
                    introduce:'C语言 是一门通用计算机编程语言，应用广泛。',
                    introduce_en:'C language is high-level procedural computer programming language with many low-level features,including the ability to handle memory addresses and Bits.'
                },

            ];
            let locale = this.ctx.locale;
            if(locale && locale.indexOf('en') > -1){
                for(let i in data){
                    data[i]['introduce'] = data[i]['introduce_en'];
                }
            }
            return data;
        }
    }

    return awesome;
};