
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
   var num=[],k=0;
   for(var i=0;i<collection_a.length;i++)
      {
        for(var j=0;j<object_b.value.length;j++)
          {
             if(collection_a[i].key==object_b.value[j])
		{
			num[k++]=object_b.value[j];
		}
          }
      }
  return num;
}

module.exports = collect_same_elements;
