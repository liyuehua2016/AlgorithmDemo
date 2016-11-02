/**
 * Created by lyh on 10/28/16.
 */

// var Math=require('')
var utils=require('../services/utils');

module.exports = {
  // O(NlogN)
  QuickSort: function (_data) {
    if (_data && _data.length <= 1) {
      return _data;
    }
    if (_data && _data.length == 2) {
      if (_data[0] > _data[1]) {
        var swap = _data[0];
        _data[0] = _data[1];
        _data[1] = swap;
      }
      return _data;
    }
    if (_data && _data.length > 2) {
      var pivot = _data[0];

      var left_index = 1;
      var right_index = _data.length - 1;

      while (left_index <= right_index) {
        //向右移, 直到大于pivot为止。
        while ((_data[left_index] <= pivot) && (left_index < (_data.length - 1))) {
          left_index++;
        }

        //向左移, 直到小于或等于pivot为止。
        while (_data[right_index] > pivot) {
          right_index--;
        }

        if (left_index < right_index) {
          var swap = _data[left_index];
          _data[left_index] = _data[right_index];
          _data[right_index] = swap;
          console.log(left_index + " <==> " + right_index);
          console.log(_data);
          left_index++;
          right_index--;
        } else if (left_index == right_index) {//有3种情况:一种是[3,4,5,6],一种是[3,2,1,0],最后一种是[0,0,0]
          if (_data[right_index] < pivot) {
            console.log("pivot: 0 <==> " + right_index);
            var swap = _data[0];
            _data[0] = _data[right_index];
            _data[right_index] = swap;
          }
          right_index--;
        }
      }

      //以pivot最终位置为分割线, 分为左右两个数组。
      var left_data = _data.slice(0, left_index);
      console.log(left_data);
      var right_data = _data.slice(left_index, _data.length);
      console.log(right_data);

      //分别对左右两边的数组进行快速排序。
      var left_sort = this.QuickSort(left_data);
      var right_sort = this.QuickSort(right_data);

      //排好顺序后合并数组。
      var sorted_data = left_sort.concat(right_sort);
      return sorted_data;
    } else {
      return _data;
    }
  },


  HeapSort: function (_data) {
    //空数组或只有一个元素的数组,直接返回。
    if (_data && _data.length <= 1) {
      return _data;
    }

    //长度为2的数组, 直接比较排序后返回。
    if (_data && _data.length == 2) {
      if (_data[0] > _data[1]) {
        var swap = _data[0];
        _data[0] = _data[1];
        _data[1] = swap;
      }
      return _data;
    }

    // 长度>2的数组, 开始使用堆排序算法。
    if(_data&&_data.length>2){
      var heap_pos=_data.length-1;

      while(heap_pos>0){

        //从后往前处理左右子树节点与父节点的大小关系, 将大数往父节点放。
        var index=heap_pos;

        //单独处理叶子节点为左子树的情况。
        if(index%2==1){
          var parent_index=(index+1)/2-1;  //equals to FLOOR((heap_pos-1)/2).
          if(_data[index]>_data[parent_index]){
            _data=utils.swapInArray(_data, index, parent_index);
          }
          index--;
        }
        
        while(index>0){
          var subtree_biggerIndex=utils.biggerNumIndex(_data,index, index-1);
          var parent_index=index/2-1;

          if(_data[subtree_biggerIndex]>_data[parent_index]){
            _data=utils.swapInArray(_data,subtree_biggerIndex, parent_index);
          }

          index=index-2;
        }

        //将树根节点的大数与heap_pos位置的数交换。
        _data=utils.swapInArray(_data, 0, heap_pos);

        heap_pos=heap_pos-1;
      }

      return _data;

    }else{
      return _data;
    }



  }




}

