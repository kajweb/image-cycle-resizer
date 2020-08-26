var images = require("images"),
	path = require("path"),
	fs = require("fs"),
	deepCopy = require("./deepCopy");

class imgResizer{
	// var image;
	// var limit;
	// var step;
	// var quality;

	// 2M = 2 * 1024 * 1024;
    constructor(obj, step=100, limit=2*1024*1024) {
        this.image = images(obj);
        this.obj = obj;
    	// this._image = deepCopy(this.image);
        return this.setStep(step).setLimit(limit);
    }

	setStep( step ) {
		this.step = step;
		return this;
	}

	setLimit( limit ) {
		if( !Number.isFinite(limit) )
			return false;
		this.limit = limit;
		return this;
	}

	setQuality( quality ) {
		if( !Number.isFinite(quality) )
			return false;
		this.quality = quality;
		return this;
	}

	getConfig( quality ){
		return { quality };
	}

	getBuff( tpye, quality=false ){
		let image = this.image;
		let config = this.getConfig( quality||this.quality );
		let buff = image.encode(tpye, config);
		return buff;
	}

	getFileSize( tpye, quality ){
		let buff = this.getBuff( tpye, quality );
		return buff.length;
	}

	reduceWidth( step=false ){
		if( !step )
			step = this.step;
		let imgSize = this.image.size();
		let newWidth = imgSize.width;
		if( Number.isFinite(step) ){
			newWidth -= step;
		} else {
			switch( step.substr(0,1) ){
				case '/':
					newWidth /= parseInt(step.substr(1))
					break;
				default:
					newWidth -= step;
					break;
			}
		}
		// this.image = deepCopy(this._image);
		this.image = images(this.obj);
		this.image.size( newWidth );
		return this;
	}

	save( output, quality=false ){
		let tpye = path.extname(output);
		let buff = this.start( tpye, quality );
		fs.mkdir(path.resolve(output,".."),(e)=>{
			fs.writeFileSync( output, buff );
		});
		return buff.length;
	}

	start( tpye, quality=false ){
		let limit = this.limit;
		let image = this.image;
		let whileOK = false;
		let buff = null;
		while( !whileOK ){
			let imgSize = image.size();
			if( imgSize.width<=0 || imgSize.height<=0 ){
				// console.error("error")
				return false;
			}
			buff = this.getBuff(tpye, quality);
			// console.log( buff.length )
			if( buff.length<=limit){
				whileOK = true;
				continue;
			}
			this.reduceWidth();
		}
		return buff;
	}
}

module.exports = imgResizer;