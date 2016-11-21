/**
 * Created by lyh on 11/18/16.
 */

var sortAlgorithm=require('../services/sortAlgorithm');
var searchAlgorithm=require('../services/searchAlgorithm');
var utils=require('../services/utils');

module.exports= {

  bin_search:function(req,res){

    var target=req.body["target"];
    var array_2_sort=req.body["array_to_sort"];
    var array_sorted= sortAlgorithm.QuickSort(array_2_sort);
    var result=utils.verify(array_sorted);
    var position=searchAlgorithm.BinarySearch(array_sorted, 0, array_sorted.length-1, target);

    res.send({retcode:(result?0:-1), result:result, sorted:array_sorted,position:position});

  }

}
