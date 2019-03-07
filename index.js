var cheerio = require( "cheerio" )

var wrapPageTags = function(page, gitbook){
    var $ = cheerio.load(page.content);

    var pageName = page.path.replace('.md','').replace('/','-');

    if(gitbook.options.pluginsConfig['hxc3-page-class']) {
        var prefixName = gitbook.options.pluginsConfig['hxc3-page-class']['prefixName'] || 'wrap-'
        pageName = gitbook.options.pluginsConfig['hxc3-page-class']['prefixName']+pageName;
    }
    page.content = '<div class="'+pageName+'">'+$.html()+'</div>';

    return page;
}

module.exports = {

    // Map of hooks
    hooks: {
    	'page': function(page){    		
    		return wrapPageTags(page, this);
    	}
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};