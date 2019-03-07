var cheerio = require( "cheerio" )

var wrapPageTags = function(page){
    var $ = cheerio.load(page.content);

    var pageName = page.path.replace('.md','').replace('/','-');
    page.content = '<div class="'+pageName+'"">'+$.html()+'</div>';

    return page;
}

module.exports = {

    // Map of hooks
    hooks: {
    	'page': function(page){    		
    		return wrapPageTags(page);
    	}
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};