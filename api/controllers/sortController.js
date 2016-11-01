/**
 * Created by lyh on 10/28/16.
 */

var sortAlgorithm=require('../services/sortAlgorithm');

module.exports= {


  quick_sort: function(req,res){
    var array_2_sort=req.body["array_to_sort"];
    var array_sorted= sortAlgorithm.QuickSort(array_2_sort);
    var result=sortAlgorithm.verify(array_sorted);
    res.send({retcode:(result?0:-1), result:result, sorted:array_sorted});

  }

}


