/**
 * Created by lyh on 10/28/16.
 */


module.exports={
  // O(NlogN)
  QuickSort: function (_data){
    if(_data&&_data.length<=1){
      return _data;
    }
    if(_data&&_data.length==2){
      if(_data[0]>_data[1]){
        var swap=_data[0];
        _data[0]=_data[1];
        _data[1]=swap;
      }
      return _data;
    }
    if (_data && _data.length > 2) {
      var pivot = _data[0];

      var left_index = 1;
      var right_index = _data.length - 1;

      while (left_index <= right_index) {
        //向右移, 直到大于pivot为止。
        while ((_data[left_index] <= pivot)&& (left_index< (_data.length-1))) {
          left_index++;
        }

        //向左移, 直到小于或等于pivot为止。
        while(_data[right_index] > pivot) {
          right_index--;
        }

      if(left_index<right_index){
        var swap = _data[left_index];
        _data[left_index] = _data[right_index];
        _data[right_index] = swap;
        console.log(left_index + " <==> " +right_index);
        console.log(_data);
        left_index++;
        right_index--;
      }else if(left_index==right_index){//有3种情况:一种是[3,4,5,6],一种是[3,2,1,0],最后一种是[0,0,0]
        if(_data[right_index]<pivot){
          console.log("pivot: 0 <==> "+right_index);
          var swap=_data[0];
          _data[0]=_data[right_index];
          _data[right_index]=swap;
      }
        right_index--;
      }
    }
      var left_data =_data.slice(0, left_index);
      console.log(left_data);
      var right_data = _data.slice(left_index, _data.length);
      console.log(right_data);
      var left_sort = this.QuickSort(left_data);
      var right_sort = this.QuickSort(right_data);

      var sorted_data=left_sort.concat(right_sort);
      return sorted_data;
    } else {
      return _data;
    }
  },

  HeapSort: function(_data){
    
  }

}

