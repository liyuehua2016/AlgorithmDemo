/**
 * Created by lyh on 10/28/16.
 */

var sortAlgorithm=require('../services/sortAlgorithm');
var utils=require('../services/utils');

module.exports= {

  quick_sort: function(req,res){
    var array_2_sort=req.body["array_to_sort"];
    var array_sorted= sortAlgorithm.QuickSort(array_2_sort);
    var result=utils.verify(array_sorted);
    res.send({retcode:(result?0:-1), result:result, sorted:array_sorted});

  },

  heap_sort:function(req,res){
    var array_2_sort=req.body["array_to_sort"];
    var array_sorted= sortAlgorithm.HeapSort(array_2_sort);
    var result=utils.verify(array_sorted);
    res.send({retcode:(result?0:-1), result:result, sorted:array_sorted});

  },

  test:function (req,res) {
    var param_array=req.body["array_to_sort"];
    var biggerIndex=utils.biggerNumIndex(param_array,0,1);

    var array_sorted=utils.swapInArray(param_array, 2,3);

    var result=utils.verify(array_sorted);

    res.send({retcode:0, biggerIndex:biggerIndex, result:result, sorted:array_sorted});


  }



}


