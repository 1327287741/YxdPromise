function YxdPromise(Fun) {
	var _this = this;
	this.status = 'pending';
	YxdPromise.prototype.resolve = function (parm){
		_this.parm = parm
		_this.status = 'resolved';
	}
	YxdPromise.prototype.reject = function (parm){
		_this.parm = parm
		_this.status = 'rejected';
	}
	YxdPromise.prototype.then = function (funres,funrej){
            setTimeout(function(){
				if(this.status == 'resolved')
                 funres(this.parm)
				else if (this.status == 'rejected')
				 funrej(this.parm)
            }.bind(_this),0)
        }
	Fun(this.resolve,this.reject);
}