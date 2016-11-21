/**
 * Created by lyh on 11/3/16.
 */

//var Math=require('');
var utils=require('../services/utils');

module.exports = {

  // O(logN)
  BinarySearch:function(_data, start_index, end_index, target){
    if(_data&&_data.length==0){
      return -1;
    }

    if(_data&&_data.length>0){

      if(start_index>end_index)  {
        return -1;
      }

      var pivot=Math.floor((start_index+end_index)/2);

      if(_data[pivot]==target){
          return pivot;
      }
      if(_data[pivot]>target){
        return this.BinarySearch(_data, start_index, pivot-1, target);
      }else{
        return this.BinarySearch(_data, pivot+1, end_index, target);
      }

    }else{
      return -1;
    }

  }


}
