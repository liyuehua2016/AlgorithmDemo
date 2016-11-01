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
  }

}
