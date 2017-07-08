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
                    introduce:'Node 是一个 Javascript 运行环境(runtime)。'
                },
                {
                    title:'PHP',
                    url:'/awesome-php',
                    img:'https://dn-mhke0kuv.qbox.me/7699e23cbe687eed8c38.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'PHP是目前最流行的服务器端脚本语言。'
                },
                {
                    title:'Python',
                    url:'/awesome-python',
                    git_readme:'https://raw.githubusercontent.com/vinta/awesome-python/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/b51a1dacf9bb7883defe.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Python 是一种面向对象、直译式电脑编程语言，也是一种功能强大的通用型语言。'
                },
                {
                    title:'Java',
                    url:'/awesome-java',
                    git_readme:'https://raw.githubusercontent.com/akullpp/awesome-java/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/f8ee3cd45f949a546263.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Java 是一种可以撰写跨平台应用软件的面向对象的程序设计语言。'
                },
                {
                    title:'Go',
                    url:'/awesome-go',
                    git_readme:'https://raw.githubusercontent.com/avelino/awesome-go/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/1aae38ab22d12b654cfa.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Go语言是谷歌推出的一种全新的编程语言，可以在不损失应用程序性能的情况下降低代码的复杂性。'
                },
                {
                    title:'Ruby',
                    url:'/awesome-ruby',
                    git_readme:'https://raw.githubusercontent.com/markets/awesome-ruby/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/52ffa0829ab10a3651c3.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Ruby，一种为简单快捷面向对象编程而创的脚本语言。'
                },
                {
                    title:'Lua',
                    url:'/awesome-lua',
                    git_readme:'https://raw.githubusercontent.com/LewisJEllis/awesome-lua/master/readme.md',
                    img:'https://dn-mhke0kuv.qbox.me/64c2d72886ee7d6163c6.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Lua 程序设计语言 是一个简洁、轻量、可扩展的脚本语言。'
                },
                {
                    title:'Swift',
                    url:'/awesome-swift',
                    git_readme:'',
                    img:'https://dn-mhke0kuv.qbox.me/eb7ab66be4c2898b5aa9.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Lua 程序设计语言 是一个简洁、轻量、可扩展的脚本语言。'
                },
                {
                    title:'Rust',
                    url:'/awesome-rust',
                    git_readme:'https://raw.githubusercontent.com/rust-unofficial/awesome-rust/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/01787a4f2859cde4db11.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Rust 是一门强调安全、性能和并发性的系统编程语言。'
                },
                {
                    title:'.NET',
                    url:'/awesome-dotnet',
                    git_readme:'https://raw.githubusercontent.com/quozd/awesome-dotnet/master/README.md',
                    img:'https://dn-mhke0kuv.qbox.me/65a22db3b0e04cd29ee5.png?imageView2/2/w/200/h/64/q/85/interlace/1',
                    introduce:'Rust 是一门强调安全、性能和并发性的系统编程语言。'
                },
                {
                    title:'C',
                    url:'/awesome-c',
                    git_readme:'https://raw.githubusercontent.com/aleksandar-todorovic/awesome-c/master/README.md',
                    img:'https://sfault-avatar.b0.upaiyun.com/225/658/2256581988-1040000000089457',
                    introduce:'C语言 是一门通用计算机编程语言，应用广泛。'
                },

            ];
            return data;
        }
    }

    return awesome;
};