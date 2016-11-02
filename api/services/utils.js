/**
 * Created by lyh on 11/1/16.
 */

module.exports={

  // verify whether an array is sorted in ASC.
  verify:function(array_sorted){
    var result=true;
    for(var i=1; i<array_sorted.length; i++){
      if(array_sorted[(i-1)]>array_sorted[i]){
        result=false;
        break;
      }
    }

    return result;
  },

  // compare two numbers in Array, return the index of bigger one.
  biggerNumIndex: function(_data, index1, index2){
    var bigger_num_index=-1;
    if(_data && _data.length>0){
      if((index1<_data.length)&& (index2<_data.length)){
        if(_data[index1]>=_data[index2]){
          bigger_num_index=index1;
        }else{
          bigger_num_index=index2;
        }

      }
    }

    return bigger_num_index;
  },

  // exchange two elments in specific array.
  swapInArray:function(_data,index1, index2){
    if(_data && _data.length>0){
      if((index1<_data.length)&& (index2<_data.length)){
        if(_data[index1]!=_data[index2]){
          var swap=_data[index1];
          _data[index1]=_data[index2];
          _data[index2]=swap;
        }
      }
    }

    return _data;

  }

}
